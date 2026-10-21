import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createDecisionBriefClient,
  decisionBriefInput,
  decisionInput,
  liveWeatherIndex,
  toDecisionView
} from '../web/decision-view.js';
import {buildDecision} from '../web/decision-core.js';

const exposure = {
  worldcover_class_at_grid_center: [50],
  road_km_per_grid: [0.22]
};

test('historical mode combines rain, model depth and urban exposure', () => {
  const rows = Array.from({length: 30}, (_, index) => ({
    time: `2022-09-14T${String(index % 24).padStart(2, '0')}:00+08:00`,
    precipitation: index >= 24 ? 12 : 2,
    wind_gusts_10m: index === 25 ? 18 : 5
  }));
  const input = decisionInput({
    mode: 'historical',
    rows,
    index: 25,
    depthCm: 13.4,
    cell: {index: 0},
    exposure,
    buildingCounts: [37]
  });

  assert.equal(input.depth_cm, 13.4);
  assert.equal(input.rain_now_mm_h, 12);
  assert.equal(input.antecedent_24h_mm, 68);
  assert.equal(input.wind_gust_ms, 18);
  assert.equal(input.land_class, 50);
  assert.equal(input.road_km, 0.22);
  assert.equal(input.building_count, 37);
  assert.equal(input.data_mode, 'historical');
});

test('live mode aligns the current hour and keeps forecast soil and temperature', () => {
  const hourly = [
    {time: '2026-10-16T08:00', precipitation_mm: 1, wind_gust_ms: 5, temperature_c: 25, soil_moisture: 0.3},
    {time: '2026-10-16T09:00', precipitation_mm: 4, wind_gust_ms: 13, temperature_c: 24, soil_moisture: 0.34},
    {time: '2026-10-16T10:00', precipitation_mm: 11, wind_gust_ms: 16, temperature_c: 23, soil_moisture: 0.37}
  ];
  const weather = {
    mode: 'current',
    current: {
      time: '2026-10-16T09:00',
      precipitation_mm: 4.2,
      wind_gust_ms: 13.2,
      temperature_c: 24.1
    },
    hourly
  };

  assert.equal(liveWeatherIndex(weather), 1);
  const input = decisionInput({
    mode: 'current',
    weather,
    depthCm: 8,
    cell: {index: 0},
    exposure,
    buildingCounts: [8]
  });

  assert.equal(input.rain_now_mm_h, 4.2);
  assert.equal(input.rain_peak_3h_mm_h, 11);
  assert.equal(input.rain_next_3h_mm, 15);
  assert.equal(input.soil_moisture, 0.34);
  assert.equal(input.temperature_c, 24.1);
  assert.equal(input.data_mode, 'current');
});

test('outside-model locations leave depth and urban grid factors unavailable', () => {
  const input = decisionInput({
    mode: 'current',
    weather: {mode: 'cache', current: {time: null}, hourly: []},
    depthCm: 30,
    cell: null,
    exposure,
    buildingCounts: [40]
  });

  assert.equal(input.depth_cm, null);
  assert.equal(input.model_coverage, 'outside');
  assert.equal(input.road_km, null);
  assert.equal(input.building_count, null);
  assert.equal(input.data_mode, 'cache');
});

test('presentation exposes four visual rings without inventing a score', () => {
  const decision = buildDecision({
    depth_cm: 14,
    rain_now_mm_h: 6,
    rain_next_3h_mm: 42,
    rain_peak_3h_mm_h: 20,
    antecedent_24h_mm: 55,
    soil_moisture: 0.38,
    land_class: 50,
    road_km: 0.22,
    building_count: 37,
    wind_gust_ms: 18,
    temperature_c: 24,
    data_mode: 'current',
    model_coverage: 'in_grid'
  });
  const view = toDecisionView(decision);

  assert.equal('score' in view, false);
  assert.equal(view.factors.length, 4);
  assert.ok(view.factors.every(factor => factor.arc > 0 && factor.arc <= factor.circumference));
  assert.match(view.summary, /核查|准备/);
  assert.equal(view.affected, '37 栋建筑');
});

test('brief input is restricted to the deterministic decision and known place', () => {
  const decision = buildDecision({
    depth_cm: 14,
    rain_next_3h_mm: 42,
    rain_peak_3h_mm_h: 20,
    antecedent_24h_mm: 55,
    building_count: 37,
    wind_gust_ms: 18,
    data_mode: 'current',
    model_coverage: 'in_grid'
  });
  const payload = decisionBriefInput({
    place: '长春路附近',
    decision,
    input: {building_count: 37}
  });

  assert.deepEqual(Object.keys(payload), [
    'place', 'level', 'trend', 'reasons', 'affected', 'actions', 'boundary'
  ]);
  assert.deepEqual(payload.affected, {
    roads: ['长春路'],
    buildings: [],
    building_count: 37
  });
  assert.equal('score' in payload, false);
});

test('brief client accepts only a compact validated server response', async () => {
  let request;
  const client = createDecisionBriefClient(async (url, options) => {
    request = {url, options};
    return {
      ok: true,
      async json() {
        return {
          ok: true,
          mode: 'deepseek',
          summary: '长春路附近：行动，优先核查受影响道路。',
          actions: ['优先核查受影响道路'],
          caveat: '积水为模型情景，非现场观测'
        };
      }
    };
  });
  const result = await client.load({place: '长春路附近'}, {signal: {aborted: false}});

  assert.equal(request.url, '/api/decision-brief');
  assert.equal(request.options.method, 'POST');
  assert.equal(request.options.headers['Content-Type'], 'application/json');
  assert.equal(result.mode, 'deepseek');
  assert.match(result.summary, /长春路/);
});

test('brief client rejects malformed or expansive output', async () => {
  const client = createDecisionBriefClient(async () => ({
    ok: true,
    json: async () => ({ok: true, mode: 'deepseek', summary: '摘要', actions: '不是数组', caveat: '边界'})
  }));
  await assert.rejects(() => client.load({place: '地图选点'}), /处置摘要响应无效/);
});
