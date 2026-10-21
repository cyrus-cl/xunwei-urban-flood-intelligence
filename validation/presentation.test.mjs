import test from 'node:test';
import assert from 'node:assert/strict';
import {scenarioStatus, mapBasis, provenanceRows} from '../web/presentation.js';

test('surrogate result is labelled as a model scenario rather than live AI', () => {
  assert.equal(scenarioStatus({kind: 'surrogate'}), '四小时积水情景 · 模型估算');
  assert.doesNotMatch(scenarioStatus({kind: 'surrogate'}), /AI|实时|预警/);
});

test('maximum water depth does not pretend to move with the weather hour', () => {
  assert.equal(mapBasis('flood'), '情景最大积水 · 180 m 模型格点 · 非现场测量');
});

test('selected-place evidence contains only traceable provenance', () => {
  assert.deepEqual(provenanceRows(), [
    '附近 ERA5 格点 · 0.25°',
    '模型格点 · 180 m',
    '现场状态 · 待核对'
  ]);
});
