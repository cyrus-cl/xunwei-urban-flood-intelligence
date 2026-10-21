import test from 'node:test';
import assert from 'node:assert/strict';
import {Readable} from 'node:stream';
import {routeApi} from '../services/api-router.mjs';

function responseProbe() {
  return {
    status: null,
    headers: null,
    body: '',
    writeHead(status, headers) {
      this.status = status;
      this.headers = headers;
    },
    end(body = '') {
      this.body = String(body);
    }
  };
}

test('weather route returns normalized service data', async () => {
  const response = responseProbe();
  let input;
  const handled = await routeApi(
    {method: 'GET', url: '/api/weather?lat=29.87&lon=121.54'},
    response,
    {
      weather: {
        async get(value) {
          input = value;
          return {mode: 'current', source: {name: 'Open-Meteo'}};
        }
      }
    }
  );

  assert.equal(handled, true);
  assert.deepEqual(input, {lat: '29.87', lon: '121.54'});
  assert.equal(response.status, 200);
  assert.equal(response.headers['Cache-Control'], 'no-store');
  assert.equal(JSON.parse(response.body).source.name, 'Open-Meteo');
});

test('weather route hides upstream errors behind a user-safe response', async () => {
  const response = responseProbe();
  await routeApi(
    {method: 'GET', url: '/api/weather?lat=29.87&lon=121.54'},
    response,
    {weather: {get: async () => { throw new Error('socket secret'); }}}
  );

  assert.equal(response.status, 503);
  assert.deepEqual(JSON.parse(response.body), {
    ok: false,
    error: '当前气象暂不可用'
  });
  assert.doesNotMatch(response.body, /socket secret/);
});

test('building route returns a local footprint window without exposing service details', async () => {
  const response = responseProbe();
  let input;
  const handled = await routeApi(
    {method: 'GET', url: '/api/buildings?grid=400&radius=8'},
    response,
    {buildings: {get: async value => {
      input = value;
      return {type: 'FeatureCollection', features: [], meta: {returned: 0}};
    }}}
  );

  assert.equal(handled, true);
  assert.deepEqual(input, {gridIndex: '400', radiusCells: '8'});
  assert.equal(response.status, 200);
  assert.equal(JSON.parse(response.body).type, 'FeatureCollection');

  const failed = responseProbe();
  await routeApi(
    {method: 'GET', url: '/api/buildings?grid=nope'},
    failed,
    {buildings: {get: async () => { const error = new Error('private path'); error.status = 400; throw error; }}}
  );
  assert.equal(failed.status, 400);
  assert.doesNotMatch(failed.body, /private path/);
});

test('returns false for static paths', async () => {
  const response = responseProbe();
  assert.equal(
    await routeApi({method: 'GET', url: '/index.html'}, response, {}),
    false
  );
  assert.equal(response.status, null);
});

function jsonRequest(value, headers = {'content-type': 'application/json'}) {
  const request = Readable.from([JSON.stringify(value)]);
  request.method = 'POST';
  request.url = '/api/decision-brief';
  request.headers = headers;
  return request;
}

test('decision route validates JSON and returns a grounded brief', async () => {
  const response = responseProbe();
  const input = {place: '长春路附近'};
  let received;
  const handled = await routeApi(jsonRequest(input), response, {
    decisionBrief: {
      async create(value) {
        received = value;
        return {mode: 'local', summary: '摘要', actions: ['核查'], caveat: '模型情景'};
      }
    }
  });

  assert.equal(handled, true);
  assert.deepEqual(received, input);
  assert.equal(response.status, 200);
  assert.deepEqual(JSON.parse(response.body), {
    ok: true,
    mode: 'local',
    summary: '摘要',
    actions: ['核查'],
    caveat: '模型情景'
  });
});

test('decision route rejects non-JSON and oversized bodies', async () => {
  const wrongType = responseProbe();
  await routeApi(jsonRequest({}, {'content-type': 'text/plain'}), wrongType, {});
  assert.equal(wrongType.status, 415);

  const oversized = responseProbe();
  const request = jsonRequest({place: 'x'.repeat(17000)});
  await routeApi(request, oversized, {decisionBrief: {create: async () => ({})}});
  assert.equal(oversized.status, 413);
});

test('decision route never leaks validation details', async () => {
  const response = responseProbe();
  await routeApi(jsonRequest({bad: true}), response, {
    decisionBrief: {create: async () => { throw new Error('internal key details'); }}
  });

  assert.equal(response.status, 400);
  assert.doesNotMatch(response.body, /internal key details/);
});
