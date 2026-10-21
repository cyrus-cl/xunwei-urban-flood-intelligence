import test from 'node:test';
import assert from 'node:assert/strict';
import {
  antecedentRain,
  forecastWindow,
  dataStateLabel,
  createWeatherClient
} from '../web/live-weather.js';

test('computes antecedent rainfall only from available hours', () => {
  const rows = [
    {time: '2026-10-16T07:00', precipitation_mm: 2},
    {time: '2026-10-16T08:00', precipitation_mm: null},
    {time: '2026-10-16T09:00', precipitation_mm: 5}
  ];

  assert.deepEqual(antecedentRain(rows, 2), {
    total_mm: 7,
    available: 2,
    expected: 3
  });
});

test('limits antecedent rainfall to the requested window', () => {
  const rows = Array.from({length: 30}, (_, index) => ({
    time: String(index),
    precipitation_mm: 1
  }));

  assert.deepEqual(antecedentRain(rows, 29, 24), {
    total_mm: 24,
    available: 24,
    expected: 24
  });
});

test('forecast window exposes peak total and trend', () => {
  const rows = [1, 3, 7, 5].map((value, index) => ({
    time: String(index),
    precipitation_mm: value
  }));

  assert.deepEqual(forecastWindow(rows, 0, 4), {
    total_mm: 16,
    peak_mm_h: 7,
    trend: '增强',
    available: 4
  });
});

test('forecast window preserves a data gap', () => {
  const rows = [
    {time: '0', precipitation_mm: null},
    {time: '1', precipitation_mm: null}
  ];

  assert.deepEqual(forecastWindow(rows, 0, 2), {
    total_mm: null,
    peak_mm_h: null,
    trend: '资料不足',
    available: 0
  });
});

test('data-state labels never call cached or historical data live', () => {
  assert.equal(dataStateLabel('current'), '当前气象');
  assert.equal(dataStateLabel('forecast'), '逐小时预报');
  assert.equal(dataStateLabel('cache'), '缓存数据');
  assert.equal(dataStateLabel('historical'), '历史再分析');
  assert.equal(dataStateLabel('scenario'), '积水情景');
  assert.equal(dataStateLabel('manual'), '人工核查');
});

test('client encodes coordinates and validates JSON', async () => {
  let url = '';
  const client = createWeatherClient(async value => {
    url = value;
    return {
      ok: true,
      json: async () => ({mode: 'current', current: {}, hourly: []})
    };
  });

  const result = await client.load({lat: 29.87, lon: 121.54});

  assert.match(url, /lat=29.87/);
  assert.match(url, /lon=121.54/);
  assert.equal(result.mode, 'current');
});

test('client exposes a user-safe error for malformed responses', async () => {
  const client = createWeatherClient(async () => ({
    ok: true,
    json: async () => ({mode: 'current'})
  }));

  await assert.rejects(
    () => client.load({lat: 29.87, lon: 121.54}),
    /当前气象资料格式不完整/
  );
});
