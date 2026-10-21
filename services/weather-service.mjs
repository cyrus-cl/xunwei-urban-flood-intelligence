const FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
const CURRENT_FIELDS = [
  'temperature_2m',
  'relative_humidity_2m',
  'precipitation',
  'wind_speed_10m',
  'wind_direction_10m',
  'wind_gusts_10m',
  'surface_pressure'
];
const HOURLY_FIELDS = [
  'temperature_2m',
  'relative_humidity_2m',
  'precipitation',
  'precipitation_probability',
  'wind_speed_10m',
  'wind_direction_10m',
  'wind_gusts_10m',
  'surface_pressure',
  'soil_moisture_0_to_1cm'
];

const numberOrNull = value => Number.isFinite(value) ? value : null;
const at = (values, index) => Array.isArray(values) ? numberOrNull(values[index]) : null;
const clone = value => structuredClone(value);

export class WeatherUnavailableError extends Error {
  constructor(message = '当前气象暂不可用', options) {
    super(message, options);
    this.name = 'WeatherUnavailableError';
  }
}

function iso(value) {
  if (typeof value === 'string') return value;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function assertPayload(payload) {
  if (!payload || typeof payload !== 'object' ||
      !payload.current || typeof payload.current !== 'object' ||
      !payload.hourly || !Array.isArray(payload.hourly.time)) {
    throw new WeatherUnavailableError();
  }
}

export function normalizeForecast(payload, {now = new Date().toISOString()} = {}) {
  assertPayload(payload);
  const current = payload.current;
  const hourly = payload.hourly.time.map((time, index) => ({
    time,
    precipitation_mm: at(payload.hourly.precipitation, index),
    precipitation_probability: at(payload.hourly.precipitation_probability, index),
    temperature_c: at(payload.hourly.temperature_2m, index),
    relative_humidity_percent: at(payload.hourly.relative_humidity_2m, index),
    wind_speed_ms: at(payload.hourly.wind_speed_10m, index),
    wind_direction_deg: at(payload.hourly.wind_direction_10m, index),
    wind_gust_ms: at(payload.hourly.wind_gusts_10m, index),
    surface_pressure_hpa: at(payload.hourly.surface_pressure, index),
    soil_moisture: at(payload.hourly.soil_moisture_0_to_1cm, index)
  }));

  return {
    mode: 'current',
    status: '当前气象',
    fetched_at: iso(now),
    coordinates: {
      latitude: numberOrNull(payload.latitude),
      longitude: numberOrNull(payload.longitude)
    },
    timezone: payload.timezone || 'Asia/Shanghai',
    current: {
      time: current.time || null,
      precipitation_mm: numberOrNull(current.precipitation),
      temperature_c: numberOrNull(current.temperature_2m),
      relative_humidity_percent: numberOrNull(current.relative_humidity_2m),
      wind_speed_ms: numberOrNull(current.wind_speed_10m),
      wind_direction_deg: numberOrNull(current.wind_direction_10m),
      wind_gust_ms: numberOrNull(current.wind_gusts_10m),
      surface_pressure_hpa: numberOrNull(current.surface_pressure)
    },
    hourly,
    units: {
      precipitation: 'mm',
      temperature: '°C',
      wind: 'm/s',
      pressure: 'hPa',
      soil_moisture: 'm³/m³'
    },
    source: {
      name: 'Open-Meteo',
      product: 'Forecast API',
      url: 'https://open-meteo.com/en/docs'
    }
  };
}

function coordinates({lat, lon}) {
  const latitude = Number(lat);
  const longitude = Number(lon);
  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90) {
    throw new RangeError('纬度必须在 -90 到 90 之间');
  }
  if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
    throw new RangeError('经度必须在 -180 到 180 之间');
  }
  return {
    lat: Number(latitude.toFixed(2)),
    lon: Number(longitude.toFixed(2))
  };
}

function requestUrl({lat, lon}) {
  const url = new URL(FORECAST_ENDPOINT);
  url.searchParams.set('latitude', String(lat));
  url.searchParams.set('longitude', String(lon));
  url.searchParams.set('current', CURRENT_FIELDS.join(','));
  url.searchParams.set('hourly', HOURLY_FIELDS.join(','));
  url.searchParams.set('past_days', '3');
  url.searchParams.set('forecast_days', '3');
  url.searchParams.set('timezone', 'Asia/Shanghai');
  url.searchParams.set('wind_speed_unit', 'ms');
  url.searchParams.set('precipitation_unit', 'mm');
  return url;
}

function cacheReason(error) {
  if (error?.name === 'AbortError') return 'timeout';
  if (error?.message === 'offline') return 'offline';
  return 'upstream-unavailable';
}

export class WeatherService {
  constructor({
    fetchImpl = fetch,
    now = () => new Date(),
    ttlMs = 10 * 60 * 1000,
    timeoutMs = 7000
  } = {}) {
    this.fetchImpl = fetchImpl;
    this.now = now;
    this.ttlMs = ttlMs;
    this.timeoutMs = timeoutMs;
    this.cache = new Map();
  }

  async get(input) {
    const point = coordinates(input);
    const key = point.lat + ',' + point.lon;
    const now = this.now();
    const nowMs = now instanceof Date ? now.getTime() : new Date(now).getTime();
    const cached = this.cache.get(key);
    if (!input.force && cached && nowMs - cached.storedAt < this.ttlMs) {
      return clone(cached.value);
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const response = await this.fetchImpl(requestUrl(point), {
        signal: controller.signal,
        headers: {'Accept': 'application/json'}
      });
      if (!response?.ok) throw new Error('upstream-unavailable');
      const value = normalizeForecast(await response.json(), {now: iso(now)});
      this.cache.set(key, {storedAt: nowMs, value});
      return clone(value);
    } catch (error) {
      if (cached) {
        return {
          ...clone(cached.value),
          mode: 'cache',
          status: '缓存数据',
          cache_reason: cacheReason(error)
        };
      }
      throw new WeatherUnavailableError('当前气象暂不可用', {cause: error});
    } finally {
      clearTimeout(timer);
    }
  }
}

export const weatherService = new WeatherService();
