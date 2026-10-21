import test from 'node:test';
import assert from 'node:assert/strict';
import {buildDecision, DECISION_THRESHOLDS} from '../web/decision-core.js';

const base = {
  depth_cm: 4,
  rain_now_mm_h: 1,
  rain_next_3h_mm: 4,
  rain_peak_3h_mm_h: 2,
  antecedent_24h_mm: 8,
  soil_moisture: null,
  land_class: 50,
  road_km: 0.05,
  building_count: 6,
  wind_gust_ms: 6,
  temperature_c: 24,
  data_mode: 'historical',
  model_coverage: 'in_grid'
};

test('publishes the exercise thresholds used by every rule', () => {
  assert.deepEqual(DECISION_THRESHOLDS.depth_cm, [5, 10, 20]);
  assert.deepEqual(DECISION_THRESHOLDS.wind_gust_ms, [10.8, 17.2, 24.5]);
});

test('returns factor levels without a synthetic total score', () => {
  const result = buildDecision(base);

  assert.equal('score' in result, false);
  assert.deepEqual(result.factors.map(item => item.id), [
    'hazard',
    'sensitivity',
    'exposure',
    'operations'
  ]);
  assert.equal(result.threshold_kind, '演练阈值');
});

test('water depth controls hazard while gust controls operations', () => {
  const result = buildDecision({...base, depth_cm: 13, wind_gust_ms: 19});

  assert.equal(result.factors[0].level, 2);
  assert.equal(result.factors[3].level, 2);
  assert.equal(result.level, 2);
  assert.match(result.reasons.join(' '), /积水/);
  assert.match(result.reasons.join(' '), /阵风/);
});

test('temperature never changes modeled water depth or base hazard', () => {
  const cold = buildDecision({...base, temperature_c: 4});
  const warm = buildDecision({...base, temperature_c: 36});

  assert.equal(cold.factors[0].level, warm.factors[0].level);
  assert.deepEqual(cold.model_inputs, warm.model_inputs);
  assert.deepEqual(cold.model_inputs, {depth_cm: 4});
});

test('historical rain uses retrospective wording instead of a live forecast claim', () => {
  const result = buildDecision({
    ...base,
    rain_now_mm_h: 12,
    rain_next_3h_mm: 48,
    rain_peak_3h_mm_h: 22
  });

  assert.equal(result.trend, '时段内增强');
  assert.ok(result.reasons.some(reason => reason.includes('随后 3 小时')));
  assert.ok(result.factors[0].evidence.some(reason => reason.includes('时段峰值')));
  assert.doesNotMatch([...result.reasons, ...result.factors[0].evidence].join(' '), /未来/);
});

test('live rain keeps forecast wording and a forward-looking trend', () => {
  const result = buildDecision({
    ...base,
    data_mode: 'current',
    rain_now_mm_h: 12,
    rain_next_3h_mm: 48,
    rain_peak_3h_mm_h: 22
  });

  assert.equal(result.trend, '仍可能加剧');
  assert.ok(result.reasons.some(reason => reason.includes('未来 3 小时')));
});

test('exposed buildings raise checking priority only when hazard exists', () => {
  const dry = buildDecision({...base, building_count: 80});
  const wet = buildDecision({...base, depth_cm: 12, building_count: 80});

  assert.equal(dry.level, 0);
  assert.equal(wet.level, 3);
  assert.ok(wet.actions.some(action => action.includes('建筑')));
});

test('missing factors stay unavailable instead of becoming zero', () => {
  const result = buildDecision({
    ...base,
    depth_cm: null,
    rain_now_mm_h: null,
    rain_next_3h_mm: null,
    rain_peak_3h_mm_h: null,
    antecedent_24h_mm: null,
    road_km: null,
    building_count: null,
    wind_gust_ms: null,
    temperature_c: null
  });

  assert.equal(result.factors[0].available, false);
  assert.equal(result.factors[2].available, false);
  assert.equal(result.level, 0);
  assert.match(result.boundary, /资料不足/);
});

test('outside-model places do not claim a modeled water depth', () => {
  const result = buildDecision({
    ...base,
    depth_cm: 18,
    model_coverage: 'outside',
    rain_peak_3h_mm_h: 8
  });

  assert.equal(result.model_inputs.depth_cm, null);
  assert.doesNotMatch(result.reasons.join(' '), /18/);
  assert.match(result.boundary, /模型范围外/);
});

test('cache mode remains explicit in the decision boundary', () => {
  const result = buildDecision({...base, data_mode: 'cache'});
  assert.match(result.boundary, /缓存/);
});
