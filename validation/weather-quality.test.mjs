import test from 'node:test';
import assert from 'node:assert/strict';
import {chooseWeatherQuality} from '../web/weather-quality.js';

test('reduced motion disables moving rain and reflections', () => {
  assert.deepEqual(chooseWeatherQuality({width: 1600, dpr: 1, reduced: true}), {
    name: 'reduced', pixelRatio: 1, drops: 0, reflection: 0, post: false, animate: false
  });
});

test('mobile uses a bounded rendering budget', () => {
  const quality = chooseWeatherQuality({width: 390, dpr: 3, reduced: false});
  assert.equal(quality.name, 'low');
  assert.ok(quality.pixelRatio <= 1.25);
  assert.equal(quality.drops, 800);
});

test('high-density desktop enables the refined wet street profile', () => {
  const quality = chooseWeatherQuality({width: 1672, dpr: 2, reduced: false});
  assert.deepEqual(quality, {
    name: 'high', pixelRatio: 1.5, drops: 2200, reflection: 512, post: true, animate: true
  });
});
