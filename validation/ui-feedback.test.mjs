import test from 'node:test';
import assert from 'node:assert/strict';
import {buttonPhase, interpolateNumber} from '../web/ui-feedback.js';

test('save button exposes idle busy success and error copy', () => {
  assert.equal(buttonPhase('save', 'idle').label, '保存情景');
  assert.equal(buttonPhase('save', 'busy').label, '正在整理');
  assert.equal(buttonPhase('save', 'success').label, '已保存');
  assert.equal(buttonPhase('save', 'error').disabled, false);
});

test('number interpolation is bounded', () => {
  assert.equal(interpolateNumber(10, 20, -1), 10);
  assert.equal(interpolateNumber(10, 20, 0.5), 15);
  assert.equal(interpolateNumber(10, 20, 2), 20);
});
