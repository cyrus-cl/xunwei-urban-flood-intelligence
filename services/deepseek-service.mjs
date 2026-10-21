const ENDPOINT = 'https://api.deepseek.com/chat/completions';
const INPUT_FIELDS = new Set(['place', 'level', 'trend', 'reasons', 'affected', 'actions', 'boundary']);
const AFFECTED_FIELDS = new Set(['roads', 'buildings', 'building_count']);
const OUTPUT_FIELDS = new Set(['summary', 'actions', 'caveat']);
const LEVELS = new Set(['观察', '准备', '行动', '紧急核查']);
const TRENDS = new Set(['仍可能加剧', '趋缓', '相对稳定', '时段内增强', '时段内趋缓', '时段内稳定', '资料不足']);
let requestQueue = Promise.resolve();

function exactFields(value, allowed, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new TypeError(label + '格式无效');
  const unexpected = Object.keys(value).filter(key => !allowed.has(key));
  if (unexpected.length) throw new TypeError(label + '包含不允许的字段：' + unexpected.join(','));
}

function text(value, label, max = 240) {
  if (typeof value !== 'string' || !value.trim() || value.length > max) throw new TypeError(label + '格式无效');
  return value.trim();
}

function textList(value, label, maxItems = 6, maxLength = 160) {
  if (!Array.isArray(value) || value.length > maxItems) throw new TypeError(label + '格式无效');
  return value.map((item, index) => text(item, `${label}[${index}]`, maxLength));
}

export function validateBriefInput(input) {
  exactFields(input, INPUT_FIELDS, '输入');
  const affected = input.affected ?? {};
  exactFields(affected, AFFECTED_FIELDS, '影响对象');
  const buildingCount = affected.building_count;
  if (buildingCount !== null && buildingCount !== undefined &&
      (!Number.isInteger(buildingCount) || buildingCount < 0 || buildingCount > 100000)) {
    throw new TypeError('建筑数量格式无效');
  }
  const safe = {
    place: text(input.place, '地点', 80),
    level: text(input.level, '行动等级', 16),
    trend: text(input.trend, '趋势', 20),
    reasons: textList(input.reasons, '依据', 6),
    affected: {
      roads: textList(affected.roads || [], '道路', 8, 80),
      buildings: textList(affected.buildings || [], '建筑', 8, 80),
      building_count: buildingCount ?? null
    },
    actions: textList(input.actions, '行动', 6),
    boundary: input.boundary ? text(input.boundary, '边界', 240) : '积水为模型情景，非现场观测'
  };
  if (!LEVELS.has(safe.level)) throw new TypeError('行动等级格式无效');
  if (!TRENDS.has(safe.trend)) throw new TypeError('趋势格式无效');
  if (!safe.actions.length) throw new TypeError('行动格式无效');
  return safe;
}

function numbers(value) {
  return [...JSON.stringify(value).matchAll(/-?\d+(?:\.\d+)?/g)].map(match => Number(match[0]));
}

function includesNumber(allowed, candidate) {
  return allowed.some(value => Math.abs(value - candidate) < 1e-9);
}

function assertKnownPlaces(outputText, input) {
  const allowedRoads = input.affected.roads;
  const allowedBuildings = input.affected.buildings;
  const roadTokens = outputText.match(/[\u4e00-\u9fffA-Za-z0-9·]{2,24}(?:大道|路|街|巷|弄)/g) || [];
  for (const token of roadTokens) {
    if (token.includes('道路') || token.includes('路段')) continue;
    if (!allowedRoads.some(name => token.includes(name))) throw new TypeError('输出包含无依据地点');
  }
  const buildingTokens = outputText.match(/[\u4e00-\u9fffA-Za-z0-9·]{2,24}(?:小区|大厦|学校|医院|商场|地铁站|车库)/g) || [];
  for (const token of buildingTokens) {
    if (token.includes('地下车库') || token.includes('建筑')) continue;
    if (!allowedBuildings.some(name => token.includes(name))) throw new TypeError('输出包含无依据建筑');
  }
}

export function validateBriefOutput(output, rawInput) {
  const input = validateBriefInput(rawInput);
  exactFields(output, OUTPUT_FIELDS, '输出');
  const safe = {
    summary: text(output.summary, '摘要', 220),
    actions: textList(output.actions, '输出行动', 4, 100),
    caveat: text(output.caveat, '适用边界', 180)
  };
  if (!safe.actions.length) throw new TypeError('输出行动格式无效');
  const outputText = [safe.summary, ...safe.actions, safe.caveat].join('；');
  const allowedNumbers = numbers(input);
  const invented = numbers(safe).filter(value => !includesNumber(allowedNumbers, value));
  if (invented.length) throw new TypeError('输出包含无依据数字');
  assertKnownPlaces(outputText, input);
  if (/(必然|一定会|保证|准确预测|已经确认|确定发生|绝对安全)/.test(outputText)) {
    throw new TypeError('输出包含无依据确定性');
  }
  return safe;
}

function localBrief(input) {
  const reason = input.reasons.slice(0, 2).join('；');
  return {
    mode: 'local',
    summary: `${input.place}：${input.level}，${reason || input.trend}。`,
    actions: input.actions.slice(0, 3),
    caveat: input.boundary
  };
}

export async function configuredApiKey() {
  return String(process.env.DEEPSEEK_API_KEY || '').trim();
}

async function requestBrief(input, {apiKey, fetchImpl, timeoutMs}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(ENDPOINT, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        temperature: 0.1,
        max_tokens: 360,
        response_format: {type: 'json_object'},
        messages: [
          {
            role: 'system',
            content: '你是城市内涝值守摘要员。只依据用户提供的 JSON 改写简短处置摘要。不得新增数字、地点、建筑、灾情或确定性判断。必须返回 JSON 对象，且只能包含 summary、actions、caveat。'
          },
          {
            role: 'user',
            content: '依据以下 JSON 生成处置摘要，并且只返回 JSON：' + JSON.stringify(input)
          }
        ]
      })
    });
    if (!response?.ok) throw new Error('upstream-unavailable');
    const payload = await response.json();
    const content = payload?.choices?.[0]?.message?.content;
    if (typeof content !== 'string') throw new Error('invalid-response');
    return validateBriefOutput(JSON.parse(content), input);
  } finally {
    clearTimeout(timer);
  }
}

export async function createDecisionBrief(rawInput, {
  apiKey,
  fetchImpl = fetch,
  timeoutMs = 8000
} = {}) {
  const input = validateBriefInput(rawInput);
  const key = apiKey === undefined ? await configuredApiKey() : apiKey;
  if (!key) return localBrief(input);
  const work = async () => {
    try {
      const result = await requestBrief(input, {apiKey: key, fetchImpl, timeoutMs});
      return {mode: 'deepseek', ...result};
    } catch {
      return localBrief(input);
    }
  };
  const queued = requestQueue.then(work, work);
  requestQueue = queued.then(() => undefined, () => undefined);
  return queued;
}

export const decisionBriefService = Object.freeze({
  create: input => createDecisionBrief(input)
});
