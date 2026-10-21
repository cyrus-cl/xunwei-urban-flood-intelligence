import test from 'node:test';
import assert from 'node:assert/strict';
import {
  WeatherService,
  WeatherUnavailableError,
  normalizeForecast
} from '../services/weather-service.mjs';

const fixture = {
  latitude: 29.87,
  longitude: 121.54,
  timezone: 'Asia/Shanghai',
  current: {
    time: '2026-10-16T09:00',
    temperature_2m: 24.6,
    relative_humidity_2m: 86,
    precipitation: 3.4,
    wind_speed_10m: 7.2,
    wind_direction_10m: 118,
    wind_gusts_10m: 13.1,
    surface_pressure: 1004.2
  },
  hourly: {
    time: ['2026-10-16T09:00', '2026-10-16T10:00'],
    precipitation: [3.4, 7.8],
    precipitation_probability: [78, 88],
    temperature_2m: [24.6, 24.1],
    relative_humidity_2m: [86, 89],
    wind_speed_10m: [7.2, 8.1],
    wind_direction_10m: [118, 123],
    wind_gusts_10m: [13.1, 15.4],
    surface_pressure: [1004.2, 1003.7],
    soil_moisture_0_to_1cm: [0.31, 0.33]
  }
};

test('normalizes Open-Meteo without inventing fields', () => {
  const result = normalizeForecast(fixture, {now: '2026-10-16T09:02:00.000Z'});

  assert.equal(result.mode, 'current');
  assert.equal(result.current.precipitation_mm, 3.4);
  assert.equal(result.hourly[1].wind_gust_ms, 15.4);
  assert.equal(result.hourly[1].soil_moisture, 0.33);
  assert.equal(result.source.name, 'Open-Meteo');
  assert.equal(result.fetched_at, '2026-10-16T09:02:00.000Z');
});

test('keeps missing upstream numbers null', () => {
  const payload = structuredClone(fixture);
  delete payload.current.temperature_2m;
  payload.hourly.precipitation[1] = null;

  const result = normalizeForecast(payload);

  assert.equal(result.current.temperature_c, null);
  assert.equal(result.hourly[1].precipitation_mm, null);
});

test('returns a timestamped cache when an upstream refresh fails', async () => {
  let calls = 0;
  const service = new WeatherService({
    fetchImpl: async () => {
      calls += 1;
      if (calls === 1) return {ok: true, json: async () => fixture};
      throw new Error('offline');
    },
    now: () => new Date('2026-10-16T09:02:00.000Z')
  });

  await service.get({lat: 29.87, lon: 121.54, force: true});
  const cached = await service.get({lat: 29.87, lon: 121.54, force: true});

  assert.equal(cached.mode, 'cache');
  assert.match(cached.status, /缓存/);
  assert.equal(cached.cache_reason, 'offline');
});

test('rejects invalid coordinates before calling the network', async () => {
  let calls = 0;
  const service = new WeatherService({
    fetchImpl: async () => {
      calls += 1;
      return {ok: true, json: async () => fixture};
    }
  });

  await assert.rejects(() => service.get({lat: 120, lon: 121}), /纬度/);
  assert.equal(calls, 0);
});

test('throws a user-safe typed error when no cache exists', async () => {
  const service = new WeatherService({
    fetchImpl: async () => {
      throw new Error('socket details must not leak');
    }
  });

  await assert.rejects(
    () => service.get({lat: 29.87, lon: 121.54, force: true}),
    error => error instanceof WeatherUnavailableError &&
      error.message === '当前气象暂不可用'
  );
});
