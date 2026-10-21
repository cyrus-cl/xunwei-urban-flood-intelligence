const EVENT_FILES = Object.freeze({
  muifa: 'data/regional_muifa.json',
  infa: 'data/regional_infa.json'
});

export function createDataLoader(fetchImpl = fetch) {
  const cache = new Map();
  const buildingWindows = [];

  function json(path) {
    if (cache.has(path)) return cache.get(path);
    const pending = (async () => {
      const response = await fetchImpl(path, {
        headers: {'Accept': 'application/json'}
      });
      if (!response?.ok) throw new Error('资料加载中断：' + path);
      return response.json();
    })();
    cache.set(path, pending);
    pending.catch(() => cache.delete(path));
    return pending;
  }

  function event(key) {
    const path = EVENT_FILES[key];
    if (!path) return Promise.reject(new Error('未知历史事件：' + key));
    return json(path);
  }

  function buildings(gridIndex, radiusCells = 8) {
    const path = `api/buildings?grid=${encodeURIComponent(gridIndex)}&radius=${encodeURIComponent(radiusCells)}`;
    if (!cache.has(path)) {
      buildingWindows.push(path);
      while (buildingWindows.length > 3) cache.delete(buildingWindows.shift());
    }
    return json(path);
  }

  async function core(eventKey = 'muifa') {
    const [eventData, grid, terrain, exposure] = await Promise.all([
      event(eventKey),
      json('data/physical_grid.json'),
      json('data/terrain.json'),
      json('data/exposure.json')
    ]);
    return {event: eventData, grid, terrain, exposure};
  }

  return {
    json,
    event,
    core,
    tracks: () => json('data/tracks.geojson'),
    roadSearch: () => json('data/road_search.json'),
    buildingCounts: () => json('data/building_counts.json'),
    buildingCenters: () => json('data/building_centers.json'),
    buildings,
    clear(path) {
      if (path) cache.delete(path);
      else cache.clear();
    }
  };
}
