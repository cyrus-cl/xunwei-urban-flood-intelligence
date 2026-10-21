import {buildDecision} from './decision-core.js';
import {antecedentRain, forecastWindow} from './live-weather.js';

const finite = Number.isFinite;
const value = (row, ...keys) => {
  for (const key of keys) {
    if (finite(row?.[key])) return row[key];
  }
  return null;
};

function comparableTime(time) {
  if (!time) return '';
  return String(time).replace(/(?:Z|[+-]\d\d:\d\d)$/, '').slice(0, 16);
}

export function liveWeatherIndex(weather) {
  const rows = weather?.hourly;
  if (!Array.isArray(rows) || !rows.length) return 0;
  const target = comparableTime(weather?.current?.time);
  const exact = rows.findIndex(row => comparableTime(row.time) === target);
  if (exact >= 0) return exact;
  const targetMs = new Date(weather?.current?.time).getTime();
  if (!finite(targetMs)) return 0;
  return rows.reduce((best, row, index) => {
    const distance = Math.abs(new Date(row.time).getTime() - targetMs);
    return distance < best.distance ? {index, distance} : best;
  }, {index: 0, distance: Infinity}).index;
}

function normalizeRainRows(rows) {
  return (rows || []).map(row => ({
    ...row,
    precipitation_mm: value(row, 'precipitation_mm', 'precipitation')
  }));
}

export function decisionInput({
  mode = 'historical',
  rows = [],
  index = 0,
  weather = null,
  depthCm = null,
  cell = null,
  exposure = null,
  buildingCounts = null
} = {}) {
  const live = mode !== 'historical';
  const weatherRows = normalizeRainRows(live ? weather?.hourly : rows);
  const weatherIndex = live ? liveWeatherIndex(weather) : Math.max(0, Math.trunc(index));
  const current = live ? weather?.current : weatherRows[weatherIndex];
  const antecedent = antecedentRain(weatherRows, weatherIndex, 24);
  const forecast = forecastWindow(weatherRows, weatherIndex, 3);
  const gridIndex = Number.isInteger(cell?.index) ? cell.index : null;
  const inModel = gridIndex !== null;
  const hourlyRow = weatherRows[weatherIndex];

  return {
    depth_cm: inModel && finite(depthCm) ? depthCm : null,
    rain_now_mm_h: value(current, 'precipitation_mm', 'precipitation'),
    rain_next_3h_mm: forecast.total_mm,
    rain_peak_3h_mm_h: forecast.peak_mm_h,
    antecedent_24h_mm: antecedent.total_mm,
    soil_moisture: value(hourlyRow, 'soil_moisture'),
    land_class: inModel ? value({value: exposure?.worldcover_class_at_grid_center?.[gridIndex]}, 'value') : null,
    road_km: inModel ? value({value: exposure?.road_km_per_grid?.[gridIndex]}, 'value') : null,
    building_count: inModel ? value({value: buildingCounts?.[gridIndex]}, 'value') : null,
    wind_gust_ms: value(current, 'wind_gust_ms', 'wind_gusts_10m'),
    temperature_c: value(current, 'temperature_c'),
    data_mode: live ? (weather?.mode || mode) : 'historical',
    model_coverage: inModel ? 'in_grid' : 'outside'
  };
}

const RADII = Object.freeze({hazard: 43, sensitivity: 36, exposure: 29, operations: 22});

function knownRoad(place) {
  const match = String(place || '').trim().match(/^(.{1,72}(?:大道|路|街|巷|弄))附近$/);
  return match ? [match[1]] : [];
}

export function decisionBriefInput({place, decision, input} = {}) {
  const name = String(place || '地图选点').trim().slice(0, 80) || '地图选点';
  const buildingCount = Number.isInteger(input?.building_count) && input.building_count >= 0
    ? input.building_count
    : null;
  return {
    place: name,
    level: decision.label,
    trend: decision.trend,
    reasons: [...decision.reasons],
    affected: {
      roads: knownRoad(name),
      buildings: [],
      building_count: buildingCount
    },
    actions: [...decision.actions],
    boundary: decision.boundary
  };
}

function briefResponse(payload) {
  const validText = (value, max) => typeof value === 'string' && value.trim() && value.length <= max;
  if (!payload?.ok || !['local', 'deepseek'].includes(payload.mode) ||
      !validText(payload.summary, 220) || !validText(payload.caveat, 180) ||
      !Array.isArray(payload.actions) || !payload.actions.length || payload.actions.length > 4 ||
      payload.actions.some(action => !validText(action, 100))) {
    throw new TypeError('处置摘要响应无效');
  }
  return {
    mode: payload.mode,
    summary: payload.summary.trim(),
    actions: payload.actions.map(action => action.trim()),
    caveat: payload.caveat.trim()
  };
}

export function createDecisionBriefClient(fetchImpl = globalThis.fetch) {
  return {
    async load(input, {signal} = {}) {
      const response = await fetchImpl('/api/decision-brief', {
        method: 'POST',
        signal,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(input)
      });
      if (!response?.ok) throw new Error('处置摘要暂不可用');
      return briefResponse(await response.json());
    }
  };
}

export function toDecisionView(decision) {
  const factors = decision.factors.map(factor => {
    const radius = RADII[factor.id];
    const circumference = Number((2 * Math.PI * radius).toFixed(1));
    const fraction = factor.available ? 0.18 + factor.level * 0.245 : 0;
    return {
      ...factor,
      radius,
      circumference,
      arc: Number((circumference * Math.min(.915, fraction)).toFixed(1))
    };
  });
  const action = decision.actions[0] || '保持资料更新';
  const reason = decision.reasons[0];
  return {
    label: decision.label,
    level: decision.level,
    trend: decision.trend,
    factors,
    affected: factors.find(factor => factor.id === 'exposure')?.value || '资料未载入',
    summary: reason ? `${action}：${reason}` : action,
    boundary: decision.boundary
  };
}

export function createDecisionView(input) {
  return toDecisionView(buildDecision(input));
}

export function renderDecisionView(root, decision) {
  const view = toDecisionView(decision);
  const byId = id => root.getElementById(id);
  const card = byId('actionCard');
  card.dataset.level = String(view.level);
  byId('actionLevel').textContent = view.label;
  byId('actionTrend').textContent = view.trend;
  byId('affectedObjects').querySelector('strong').textContent = view.affected;
  byId('decisionSummary').textContent = view.summary;
  byId('decisionSummary').title = view.boundary;

  for (const factor of view.factors) {
    const button = byId('factorList').querySelector(`[data-factor="${factor.id}"]`);
    button.dataset.level = String(factor.level);
    button.dataset.available = String(factor.available);
    button.querySelector('b').textContent = factor.available ? factor.value : '待载入';
    button.title = factor.evidence.join('；') || '暂无可用资料';
    const arc = byId('factorRing').querySelector(`[data-factor-arc="${factor.id}"]`);
    arc.style.strokeDasharray = `${factor.arc} ${factor.circumference}`;
    arc.setAttribute('aria-label', `${factor.label}：${factor.available ? factor.value : '待载入'}`);
  }
  return view;
}
