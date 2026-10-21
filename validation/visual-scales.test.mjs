import test from 'node:test';
import assert from 'node:assert/strict';
import {colour} from '../web/visual-scales.js';

test('rain and water use separate semantic ramps', () => {
  assert.notDeepEqual(colour(30, 'rain'), colour(30, 'depth'));
  assert.deepEqual(colour(100, 'depth'), [228, 95, 99]);
  assert.deepEqual(colour(30, 'rain'), [217, 154, 88]);
});

test('visual scales clamp invalid and extreme values', () => {
  assert.deepEqual(colour(-1, 'depth'), [25, 45, 77]);
  assert.deepEqual(colour(999, 'depth'), [228, 95, 99]);
  assert.deepEqual(colour(Number.NaN, 'rain'), [23, 52, 64]);
});
