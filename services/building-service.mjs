import fs from 'node:fs/promises';

function queryError() {
  const error = new Error('invalid-building-window');
  error.status = 400;
  return error;
}

export function createBuildingService({
  buildingsPath,
  centersPath,
  gridSize = 129,
  maxRadiusCells = 16,
  maxFeatures = 16000,
  readFile = fs.readFile
} = {}) {
  let sourcePromise;

  function load() {
    if (!sourcePromise) {
      sourcePromise = Promise.all([
        readFile(buildingsPath, 'utf8'),
        readFile(centersPath, 'utf8')
      ]).then(([buildings, centers]) => [JSON.parse(buildings), JSON.parse(centers)]);
      sourcePromise.catch(() => { sourcePromise = null; });
    }
    return sourcePromise;
  }

  async function get({gridIndex, radiusCells = 8} = {}) {
    const index = Number(gridIndex);
    const radius = Number(radiusCells);
    if (!Number.isInteger(index) || index < 0 || index >= gridSize * gridSize) throw queryError();
    if (!Number.isInteger(radius) || radius < 1 || radius > maxRadiusCells) throw queryError();

    const [buildings, centers] = await load();
    const source = Array.isArray(buildings?.features) ? buildings.features : [];
    if (!Array.isArray(centers) || centers.length !== source.length) throw new Error('building-source-mismatch');
    const row = Math.floor(index / gridSize);
    const column = index % gridSize;
    const features = [];
    let matched = 0;

    for (let featureIndex = 0; featureIndex < source.length; featureIndex += 1) {
      const grid = centers[featureIndex]?.[2];
      if (!Number.isInteger(grid) || grid < 0) continue;
      const gridRow = Math.floor(grid / gridSize);
      const gridColumn = grid % gridSize;
      if (Math.max(Math.abs(gridRow - row), Math.abs(gridColumn - column)) > radius) continue;
      matched += 1;
      if (features.length >= maxFeatures) continue;
      const feature = source[featureIndex];
      features.push({...feature, properties: {...feature.properties, grid_index: grid}});
    }

    return {
      type: 'FeatureCollection',
      features,
      meta: {
        gridIndex: index,
        radiusCells: radius,
        total: source.length,
        matched,
        returned: features.length,
        truncated: matched > features.length
      }
    };
  }

  return {get};
}
