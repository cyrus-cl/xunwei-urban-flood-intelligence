import test from 'node:test';
import assert from 'node:assert/strict';
import {
  gridRainField,
  interpolateField,
  pointRainField,
  weatherParticleBudget,
  rainParticleAlpha,
  pointWindField,
  weatherQualityProfile,
  rainParticleStyle,
  windParticleStyle
} from '../web/map-weather-layer.js';

test('interpolates adjacent hourly rain without replacing the field', () => {
  assert.deepEqual(
    interpolateField([0, 10], [10, 30], 0.25),
    [2.5, 15]
  );
});

test('keeps a data gap missing through interpolation', () => {
  const result = interpolateField([null, 10], [20, Number.NaN], 0.5);
  assert.equal(Number.isNaN(result[0]), true);
  assert.equal(Number.isNaN(result[1]), true);
});

test('particle budget is bounded for narrow and reduced-motion screens', () => {
  assert.equal(weatherParticleBudget({width: 390, reduced: false}), 420);
  assert.equal(weatherParticleBudget({width: 900, reduced: false}), 680);
  assert.equal(weatherParticleBudget({width: 1600, reduced: false}), 960);
  assert.equal(weatherParticleBudget({width: 1600, reduced: true}), 0);
});

test('zero rain is visually absent and heavy rain remains bounded', () => {
  assert.equal(rainParticleAlpha(0), 0);
  assert.ok(rainParticleAlpha(20) > rainParticleAlpha(5));
  assert.ok(rainParticleAlpha(200) <= 0.82);
});

test('current point wind stays local and preserves meteorological direction', () => {
  const field = pointWindField({lon: 121.53, lat: 29.87, speed: 8, direction: 90, radiusKm: 8});
  const near = field(121.54, 29.87);

  assert.ok(Math.abs(near.u + 8) < 1e-6);
  assert.ok(Math.abs(near.v) < 1e-6);
  assert.equal(field(122, 30), null);
});

test('rain is interpolated continuously between sparse source grid points', () => {
  const field = gridRainField([
    {lon: 121.5, lat: 29.75, value: 0},
    {lon: 121.75, lat: 29.75, value: 10},
    {lon: 121.5, lat: 30, value: 20},
    {lon: 121.75, lat: 30, value: 30}
  ]);

  assert.equal(field(121.625, 29.875), 15);
  assert.equal(field(121.4, 29.875), null);
});

test('current point rain remains local instead of claiming a regional field', () => {
  const field = pointRainField({lon: 121.53, lat: 29.87, value: 8, radiusKm: 9});
  assert.ok(field(121.54, 29.87) > 7);
  assert.equal(field(122, 30), null);
});

test('desktop quality preserves data while bounding motion', () => {
  assert.equal(weatherQualityProfile({width: 1440, frameGap: 16}).name, 'high');
  assert.equal(weatherQualityProfile({width: 1440, frameGap: 48}).name, 'medium');
});

test('rain and wind use distinct semantic styles', () => {
  assert.match(rainParticleStyle(20).stroke, /104, 199, 237/);
  assert.match(windParticleStyle(15).stroke, /123, 202, 169/);
});
