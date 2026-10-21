export const ONLINE_STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';
export const ONLINE_ATTRIBUTION = 'OpenFreeMap © OpenMapTiles · Data from OpenStreetMap';

export function requestedMapProvider(search = '') {
  const value = new URLSearchParams(search).get('basemap');
  return value === 'online' || value === 'local' ? value : 'auto';
}

export async function resolveMapProvider({
  requested = 'auto',
  fetchImpl = fetch,
  timeoutMs = 6000,
  retryDelayMs = 250
} = {}) {
  if (requested === 'local') return {mode: 'local', reason: 'forced'};

  const attempts = requested === 'online' ? 2 : 1;
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(ONLINE_STYLE_URL, {
        signal: controller.signal,
        cache: 'no-store'
      });
      if (!response?.ok) throw new Error('style unavailable');
      const style = await response.json();
      if (style?.version !== 8) throw new Error('invalid MapLibre style');
      return {
        mode: 'online',
        reason: requested === 'online' ? 'forced' : 'available',
        styleUrl: ONLINE_STYLE_URL
      };
    } catch (error) {
      lastError = error;
      if (attempt + 1 < attempts && retryDelayMs > 0) {
        await new Promise(resolve => setTimeout(resolve, retryDelayMs));
      }
    } finally {
      clearTimeout(timer);
    }
  }
  if (requested === 'online') {
    throw new Error('在线底图暂时不可用，正在改用本地资料快照', {cause: lastError});
  }
  return {mode: 'local', reason: 'unavailable'};
}
