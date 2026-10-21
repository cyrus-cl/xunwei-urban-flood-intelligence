const finite = Number.isFinite;

export function inspectionRadius(viewportWidth) {
  return finite(viewportWidth) && viewportWidth <= 760 ? 3 : 8;
}

export function inspectionTerrain(viewportWidth) {
  return !(finite(viewportWidth) && viewportWidth <= 760);
}

function gridSpacing(grid) {
  const size = Math.max(1, Math.trunc(grid?.size || 1));
  const lon = grid?.longitude || [];
  const lat = grid?.latitude || [];
  const dx = size > 1 ? Math.abs(lon[1] - lon[0]) : 0.001;
  const dy = lat.length > size ? Math.abs(lat[size] - lat[0]) : dx;
  return {
    dx: finite(dx) && dx > 0 ? dx : 0.001,
    dy: finite(dy) && dy > 0 ? dy : 0.001
  };
}

function cellPolygon(lon, lat, dx, dy) {
  const x = dx / 2;
  const y = dy / 2;
  return [[
    [lon - x, lat - y],
    [lon + x, lat - y],
    [lon + x, lat + y],
    [lon - x, lat + y],
    [lon - x, lat - y]
  ]];
}

export function floodCellsGeoJSON(grid, depths, {
  minDepthM = 0.05,
  limit = 900,
  centerIndex = null,
  radiusCells = Infinity
} = {}) {
  const size = Math.max(1, Math.trunc(grid?.size || 1));
  const centerRow = Number.isInteger(centerIndex) ? Math.floor(centerIndex / size) : null;
  const centerColumn = Number.isInteger(centerIndex) ? centerIndex % size : null;
  const boundedRadius = finite(radiusCells) ? Math.max(0, radiusCells) : Infinity;
  const candidates = [];

  for (let index = 0; index < (depths?.length || 0); index += 1) {
    const depth = depths[index];
    if (!finite(depth) || depth < minDepthM || !finite(grid?.longitude?.[index]) || !finite(grid?.latitude?.[index])) continue;
    if (centerRow !== null) {
      const row = Math.floor(index / size);
      const column = index % size;
      if (Math.max(Math.abs(row - centerRow), Math.abs(column - centerColumn)) > boundedRadius) continue;
    }
    candidates.push({index, depth});
  }
  candidates.sort((a, b) => b.depth - a.depth || a.index - b.index);
  const {dx, dy} = gridSpacing(grid);
  const features = candidates.slice(0, Math.max(0, Math.trunc(limit))).map(({index, depth}) => ({
    type: 'Feature',
    properties: {
      grid_index: index,
      depth_m: depth
    },
    geometry: {
      type: 'Polygon',
      coordinates: cellPolygon(grid.longitude[index], grid.latitude[index], dx, dy)
    }
  }));
  return {type: 'FeatureCollection', features};
}

export function countBuildingsByGrid(centers = []) {
  const counts = {};
  for (const center of centers) {
    const index = center?.[2];
    if (!Number.isInteger(index) || index < 0) continue;
    counts[index] = (counts[index] || 0) + 1;
  }
  return counts;
}

export function impactedBuildingsGeoJSON(buildings, centers, activeCells) {
  const features = [];
  const source = buildings?.features || [];
  const active = activeCells instanceof Set ? activeCells : new Set(activeCells || []);
  for (let index = 0; index < source.length; index += 1) {
    const gridIndex = centers?.[index]?.[2] ?? source[index]?.properties?.grid_index;
    if (!active.has(gridIndex)) continue;
    const feature = source[index];
    features.push({
      ...feature,
      properties: {...feature.properties, grid_index: gridIndex}
    });
  }
  return {type: 'FeatureCollection', features};
}
