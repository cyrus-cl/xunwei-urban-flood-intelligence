const DATA_STATE_LABELS = Object.freeze({
  current: '当前气象',
  forecast: '逐小时预报',
  cache: '缓存数据',
  historical: '历史再分析',
  scenario: '积水情景',
  manual: '人工核查'
});

const rainValue = row => {
  const value = row?.precipitation_mm ?? row?.precipitation;
  return Number.isFinite(value) ? value : null;
};

const rounded = value => Number.isFinite(value)
  ? Number(value.toFixed(1))
  : null;

export function antecedentRain(rows, index, hours = 24) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return {total_mm: null, available: 0, expected: 0};
  }
  const end = Math.max(0, Math.min(rows.length - 1, Math.trunc(index)));
  const size = Math.max(1, Math.trunc(hours));
  const start = Math.max(0, end - size + 1);
  const window = rows.slice(start, end + 1);
  const values = window.map(rainValue).filter(Number.isFinite);
  return {
    total_mm: values.length ? rounded(values.reduce((sum, value) => sum + value, 0)) : null,
    available: values.length,
    expected: window.length
  };
}

function rainTrend(values) {
  if (!values.length) return '资料不足';
  if (values.length === 1) return '平稳';
  const first = values[0];
  const futurePeak = Math.max(...values.slice(1));
  const last = values.at(-1);
  if (futurePeak > first + Math.max(1, first * 0.25)) return '增强';
  if (last < first - Math.max(1, first * 0.25)) return '减弱';
  return '平稳';
}

export function forecastWindow(rows, startIndex, hours = 3) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return {total_mm: null, peak_mm_h: null, trend: '资料不足', available: 0};
  }
  const start = Math.max(0, Math.min(rows.length - 1, Math.trunc(startIndex)));
  const size = Math.max(1, Math.trunc(hours));
  const values = rows.slice(start, start + size)
    .map(rainValue)
    .filter(Number.isFinite);
  return {
    total_mm: values.length ? rounded(values.reduce((sum, value) => sum + value, 0)) : null,
    peak_mm_h: values.length ? rounded(Math.max(...values)) : null,
    trend: rainTrend(values),
    available: values.length
  };
}

export function dataStateLabel(mode) {
  return DATA_STATE_LABELS[mode] || '资料状态未知';
}

function validatePoint({lat, lon}) {
  const latitude = Number(lat);
  const longitude = Number(lon);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    throw new Error('地点坐标无效');
  }
  return {lat: latitude, lon: longitude};
}

function validateWeather(value) {
  if (!value || !['current', 'cache'].includes(value.mode) ||
      !value.current || typeof value.current !== 'object' ||
      !Array.isArray(value.hourly)) {
    throw new Error('当前气象资料格式不完整');
  }
  return value;
}

export function createWeatherClient(fetchImpl = fetch) {
  return {
    async load(point, {signal} = {}) {
      const {lat, lon} = validatePoint(point);
      const query = new URLSearchParams({
        lat: String(lat),
        lon: String(lon)
      });
      let response;
      try {
        response = await fetchImpl('/api/weather?' + query, {
          signal,
          headers: {'Accept': 'application/json'}
        });
      } catch (error) {
        if (error?.name === 'AbortError') throw error;
        throw new Error('当前气象暂不可用', {cause: error});
      }
      if (!response?.ok) {
        throw new Error('当前气象暂不可用');
      }
      return validateWeather(await response.json());
    }
  };
}
