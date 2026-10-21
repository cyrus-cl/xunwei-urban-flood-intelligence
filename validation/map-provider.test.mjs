import test from 'node:test';
import assert from 'node:assert/strict';
import {requestedMapProvider, resolveMapProvider} from '../web/map-provider.js';

test('forced local mode never touches the public network', async () => {
  let calls = 0;
  const result = await resolveMapProvider({
    requested: 'local',
    fetchImpl: async () => { calls++; }
  });
  assert.equal(result.mode, 'local');
  assert.equal(result.reason, 'forced');
  assert.equal(calls, 0);
});

test('auto mode accepts a valid MapLibre v8 style', async () => {
  const fetchImpl = async () => ({ok: true, json: async () => ({version: 8})});
  const result = await resolveMapProvider({requested: 'auto', fetchImpl, timeoutMs: 50});
  assert.equal(result.mode, 'online');
  assert.match(result.styleUrl, /^https:\/\/tiles\.openfreemap\.org\/styles\/positron$/);
});

test('auto mode falls back after a failed preflight', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls += 1; throw new Error('offline'); };
  const result = await resolveMapProvider({requested: 'auto', fetchImpl, timeoutMs: 50});
  assert.deepEqual(
    {mode: result.mode, reason: result.reason},
    {mode: 'local', reason: 'unavailable'}
  );
  assert.equal(calls, 1);
});

test('forced online mode retries one transient preflight failure', async () => {
  let calls = 0;
  const fetchImpl = async () => {
    calls += 1;
    if (calls === 1) throw new Error('transient');
    return {ok: true, json: async () => ({version: 8})};
  };
  const result = await resolveMapProvider({requested: 'online', fetchImpl, timeoutMs: 50, retryDelayMs: 0});
  assert.equal(result.mode, 'online');
  assert.equal(result.reason, 'forced');
  assert.equal(calls, 2);
});

test('query parameter only allows auto online or local', () => {
  assert.equal(requestedMapProvider('?basemap=online'), 'online');
  assert.equal(requestedMapProvider('?basemap=local'), 'local');
  assert.equal(requestedMapProvider('?basemap=unknown'), 'auto');
});
