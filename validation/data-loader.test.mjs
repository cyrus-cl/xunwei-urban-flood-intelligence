import test from 'node:test';
import assert from 'node:assert/strict';
import {createDataLoader} from '../web/data-loader.js';

test('loads only the selected event before another event is requested', async () => {
  const calls = [];
  const loader = createDataLoader(async path => {
    calls.push(path);
    return {ok: true, json: async () => ({path})};
  });

  await loader.event('muifa');
  assert.deepEqual(calls, ['data/regional_muifa.json']);

  await loader.event('infa');
  assert.deepEqual(calls, [
    'data/regional_muifa.json',
    'data/regional_infa.json'
  ]);
});

test('deduplicates concurrent requests for the same resource', async () => {
  let calls = 0;
  const loader = createDataLoader(async () => {
    calls += 1;
    return {ok: true, json: async () => ({ok: true})};
  });

  const [first, second] = await Promise.all([
    loader.json('data/x.json'),
    loader.json('data/x.json')
  ]);

  assert.equal(calls, 1);
  assert.strictEqual(first, second);
});

test('a failed request can be retried instead of poisoning the cache', async () => {
  let calls = 0;
  const loader = createDataLoader(async () => {
    calls += 1;
    if (calls === 1) return {ok: false, status: 503};
    return {ok: true, json: async () => ({ok: true})};
  });

  await assert.rejects(() => loader.json('data/x.json'), /资料加载中断/);
  assert.deepEqual(await loader.json('data/x.json'), {ok: true});
  assert.equal(calls, 2);
});

test('rejects unknown event keys without a network request', async () => {
  let calls = 0;
  const loader = createDataLoader(async () => {
    calls += 1;
  });

  await assert.rejects(() => loader.event('unknown'), /未知历史事件/);
  assert.equal(calls, 0);
});

test('loads compact building exposure separately from heavy geometry', async () => {
  const calls = [];
  const loader = createDataLoader(async path => {
    calls.push(path);
    return {ok: true, json: async () => [0, 4, 9]};
  });

  assert.deepEqual(await loader.buildingCounts(), [0, 4, 9]);
  assert.deepEqual(calls, ['data/building_counts.json']);
});

test('requests bounded building windows and evicts old geometry responses', async () => {
  const calls = [];
  const loader = createDataLoader(async path => {
    calls.push(path);
    return {ok: true, json: async () => ({type: 'FeatureCollection', features: []})};
  });

  await loader.buildings(400, 8);
  await loader.buildings(401, 8);
  await loader.buildings(402, 8);
  await loader.buildings(403, 8);
  await loader.buildings(400, 8);

  assert.equal(calls[0], 'api/buildings?grid=400&radius=8');
  assert.equal(calls.length, 5);
});
