const COORDINATES = /^\s*(-?\d+(?:\.\d+)?)\s*[,，\s]\s*(-?\d+(?:\.\d+)?)\s*$/;

export function searchPlaces({query, places = [], roads = [], limit = 7}) {
  const text = String(query ?? '').trim();
  if (!text) return {status: 'idle', results: []};
  const match = text.match(COORDINATES);
  if (match) {
    const lon = Number(match[1]);
    const lat = Number(match[2]);
    if (Math.abs(lon) <= 180 && Math.abs(lat) <= 90) {
      return {status: 'ready', results: [{name: '坐标选点', lon, lat}]};
    }
  }
  const key = text.toLocaleLowerCase('zh-CN');
  const results = [...places, ...roads]
    .filter(place => String(place.name).toLocaleLowerCase('zh-CN').includes(key))
    .slice(0, limit);
  return {status: results.length ? 'ready' : 'empty', results};
}
