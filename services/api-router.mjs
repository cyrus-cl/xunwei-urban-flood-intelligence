const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff'
};

function send(response, status, value, head = false) {
  response.writeHead(status, JSON_HEADERS);
  response.end(head ? undefined : JSON.stringify(value));
}

async function readJsonBody(request, limit = 16 * 1024) {
  const declared = Number(request.headers?.['content-length']);
  if (Number.isFinite(declared) && declared > limit) {
    const error = new Error('too-large');
    error.status = 413;
    throw error;
  }
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > limit) {
      const error = new Error('too-large');
      error.status = 413;
      throw error;
    }
    chunks.push(buffer);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    const error = new Error('invalid-json');
    error.status = 400;
    throw error;
  }
}

export async function routeApi(request, response, {weather, decisionBrief, buildings} = {}) {
  const url = new URL(request.url, 'http://127.0.0.1');
  if (!['/api/weather', '/api/decision-brief', '/api/buildings'].includes(url.pathname)) return false;

  if (url.pathname === '/api/decision-brief') {
    if (request.method !== 'POST') {
      send(response, 405, {ok: false, error: '请求方式不受支持'});
      return true;
    }
    const contentType = request.headers?.['content-type'] || '';
    if (!/^application\/json(?:\s*;|$)/i.test(contentType)) {
      send(response, 415, {ok: false, error: '请求格式不受支持'});
      return true;
    }
    try {
      const input = await readJsonBody(request);
      const result = await decisionBrief.create(input);
      send(response, 200, {ok: true, ...result});
    } catch (error) {
      const status = error?.status === 413 ? 413 : 400;
      send(response, status, {
        ok: false,
        error: status === 413 ? '请求内容过大' : '处置摘要输入无效'
      });
    }
    return true;
  }

  if (url.pathname === '/api/buildings') {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      send(response, 405, {ok: false, error: '请求方式不受支持'});
      return true;
    }
    try {
      const result = await buildings.get({
        gridIndex: url.searchParams.get('grid'),
        radiusCells: url.searchParams.get('radius') || 8
      });
      send(response, 200, result, request.method === 'HEAD');
    } catch (error) {
      const status = error?.status === 400 ? 400 : 503;
      send(response, status, {
        ok: false,
        error: status === 400 ? '建筑资料请求无效' : '建筑资料暂不可用'
      }, request.method === 'HEAD');
    }
    return true;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    send(response, 405, {ok: false, error: '请求方式不受支持'});
    return true;
  }

  try {
    const result = await weather.get({
      lat: url.searchParams.get('lat'),
      lon: url.searchParams.get('lon')
    });
    send(response, 200, result, request.method === 'HEAD');
  } catch {
    send(response, 503, {ok: false, error: '当前气象暂不可用'}, request.method === 'HEAD');
  }
  return true;
}
