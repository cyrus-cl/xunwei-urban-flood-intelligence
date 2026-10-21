import test from 'node:test';
import assert from 'node:assert/strict';
import {createBuildingService} from '../services/building-service.mjs';

const buildings = {
  type: 'FeatureCollection',
  features: Array.from({length: 5}, (_, index) => ({
    type: 'Feature',
    properties: {id: index},
    geometry: {type: 'Point', coordinates: [index, index]}
  }))
};
const centers = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 0, 4],
  [0, 0, 8],
  [0, 0, -1]
];

function fixtureReader() {
  let reads = 0;
  return {
    get reads() { return reads; },
    async readFile(path) {
      reads += 1;
      return JSON.stringify(path.includes('centers') ? centers : buildings);
    }
  };
}

test('building service returns only real footprints near the requested grid cell', async () => {
  const reader = fixtureReader();
  const service = createBuildingService({
    buildingsPath: 'buildings.json',
    centersPath: 'centers.json',
    gridSize: 3,
    readFile: reader.readFile
  });

  const result = await service.get({gridIndex: 4, radiusCells: 1});

  assert.deepEqual(result.features.map(feature => feature.properties.id), [0, 1, 2, 3]);
  assert.deepEqual(result.features.map(feature => feature.properties.grid_index), [0, 1, 4, 8]);
  assert.equal(result.meta.total, 5);
  assert.equal(result.meta.returned, 4);
  assert.equal(reader.reads, 2);
});

test('building service parses the source once and validates the query', async () => {
  const reader = fixtureReader();
  const service = createBuildingService({
    buildingsPath: 'buildings.json',
    centersPath: 'centers.json',
    gridSize: 3,
    readFile: reader.readFile
  });

  await service.get({gridIndex: 0, radiusCells: 1});
  await service.get({gridIndex: 8, radiusCells: 1});
  assert.equal(reader.reads, 2);

  await assert.rejects(() => service.get({gridIndex: -1}), error => error.status === 400);
  await assert.rejects(() => service.get({gridIndex: 0, radiusCells: 99}), error => error.status === 400);
});
