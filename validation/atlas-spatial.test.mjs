import test from 'node:test';
import assert from 'node:assert/strict';
import {
  floodCellsGeoJSON,
  impactedBuildingsGeoJSON,
  countBuildingsByGrid,
  inspectionRadius,
  inspectionTerrain
} from '../web/atlas-spatial.js';

const grid = {
  size: 2,
  longitude: [121.0, 121.1, 121.0, 121.1],
  latitude: [30.0, 30.0, 29.9, 29.9]
};

test('creates bounded water cells with exact depth properties', () => {
  const result = floodCellsGeoJSON(grid, [0, 0.12, 0.03, 0.4], {minDepthM: 0.05, limit: 1});
  assert.equal(result.features.length, 1);
  assert.equal(result.features[0].properties.depth_m, 0.4);
  assert.equal(result.features[0].properties.grid_index, 3);
  assert.equal(result.features[0].geometry.type, 'Polygon');
});

test('counts building centers by their prepared grid index', () => {
  assert.deepEqual(countBuildingsByGrid([[1, 1, 3], [2, 2, 3], [3, 3, 7]]), {3: 2, 7: 1});
});

test('returns only buildings intersecting active model cells', () => {
  const buildings = {type: 'FeatureCollection', features: [
    {type: 'Feature', properties: {}, geometry: {type: 'Point', coordinates: [1, 1]}},
    {type: 'Feature', properties: {}, geometry: {type: 'Point', coordinates: [2, 2]}}
  ]};
  const result = impactedBuildingsGeoJSON(buildings, [[1, 1, 3], [2, 2, 7]], new Set([7]));
  assert.equal(result.features.length, 1);
  assert.equal(result.features[0].properties.grid_index, 7);
});

test('uses server-windowed grid metadata when center rows are omitted', () => {
  const buildings = {type: 'FeatureCollection', features: [
    {type: 'Feature', properties: {name: 'A', grid_index: 9}, geometry: {type: 'Point', coordinates: [0, 0]}},
    {type: 'Feature', properties: {name: 'B', grid_index: 10}, geometry: {type: 'Point', coordinates: [1, 1]}}
  ]};
  const result = impactedBuildingsGeoJSON(buildings, null, new Set([10]));
  assert.equal(result.features.length, 1);
  assert.equal(result.features[0].properties.name, 'B');
  assert.equal(result.features[0].properties.grid_index, 10);
});

test('selected-area filtering keeps cells around the chosen grid index', () => {
  const result = floodCellsGeoJSON(grid, [0.2, 0.3, 0.4, 0.5], {
    centerIndex: 0,
    radiusCells: 0,
    minDepthM: 0.05,
    limit: 10
  });
  assert.deepEqual(result.features.map(feature => feature.properties.grid_index), [0]);
});

test('mobile inspection uses a viewport-sized building window', () => {
  assert.equal(inspectionRadius(390), 3);
  assert.equal(inspectionRadius(760), 3);
  assert.equal(inspectionRadius(761), 8);
  assert.equal(inspectionRadius(1440), 8);
  assert.equal(inspectionTerrain(390), false);
  assert.equal(inspectionTerrain(760), false);
  assert.equal(inspectionTerrain(761), true);
  assert.equal(inspectionTerrain(1440), true);
});
