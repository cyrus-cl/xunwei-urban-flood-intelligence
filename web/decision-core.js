export const DECISION_THRESHOLDS = Object.freeze({
  depth_cm: Object.freeze([5, 10, 20]),
  antecedent_24h_mm: Object.freeze([25, 50, 100]),
  rain_peak_3h_mm_h: Object.freeze([5, 15, 30]),
  soil_moisture: Object.freeze([0.25, 0.35, 0.45]),
  wind_gust_ms: Object.freeze([10.8, 17.2, 24.5])
});

const LEVEL_LABELS = Object.freeze(['观察', '准备', '行动', '紧急核查']);
const finite = Number.isFinite;
const one = value => finite(value) ? value.toFixed(1) : '—';

function tier(value, thresholds) {
  if (!finite(value)) return null;
  return thresholds.reduce((level, threshold) => level + Number(value >= threshold), 0);
}

function maxAvailable(values) {
  const available = values.filter(finite);
  return available.length ? Math.max(...available) : 0;
}

function factor(id, label, level, value, available, evidence) {
  return {
    id,
    label,
    level: Math.max(0, Math.min(3, level || 0)),
    value,
    available,
    evidence
  };
}

function sensitivityLevel(input) {
  let level = 0;
  if (input.land_class === 50) level = 1;
  if (finite(input.road_km) && input.road_km >= 0.08) level = Math.max(level, 2);
  if (finite(input.road_km) && input.road_km >= 0.18) level = 3;
  return level;
}

function exposureLevel(buildingCount) {
  if (!finite(buildingCount)) return 0;
  if (buildingCount >= 50) return 3;
  if (buildingCount >= 15) return 2;
  if (buildingCount > 0) return 1;
  return 0;
}

function rainIsRising(input) {
  const peak = input.rain_peak_3h_mm_h;
  const now = input.rain_now_mm_h;
  return (finite(input.rain_next_3h_mm) && input.rain_next_3h_mm >= 30) ||
    (finite(peak) && finite(now) && peak >= Math.max(5, now * 1.35));
}

function trend(input) {
  if (!finite(input.rain_next_3h_mm) && !finite(input.rain_peak_3h_mm_h)) {
    return '资料不足';
  }
  const peak = input.rain_peak_3h_mm_h;
  const now = input.rain_now_mm_h;
  const historical = input.data_mode === 'historical';
  if (rainIsRising(input)) return historical ? '时段内增强' : '仍可能加剧';
  if (finite(peak) && finite(now) && peak <= now * 0.7) return historical ? '时段内趋缓' : '趋缓';
  return historical ? '时段内稳定' : '相对稳定';
}

function hazardEvidence(input, depth) {
  const rows = [];
  if (finite(depth)) rows.push('模型积水 ' + one(depth) + ' cm');
  if (finite(input.rain_peak_3h_mm_h)) {
    rows.push((input.data_mode === 'historical' ? '时段峰值 ' : '未来峰值 ') + one(input.rain_peak_3h_mm_h) + ' mm/h');
  }
  if (finite(input.antecedent_24h_mm)) {
    rows.push('前期 24 小时 ' + one(input.antecedent_24h_mm) + ' mm');
  }
  if (finite(input.soil_moisture)) {
    rows.push('表层土壤湿度 ' + input.soil_moisture.toFixed(2) + ' m³/m³');
  }
  return rows;
}

function factorValue(parts) {
  return parts.filter(Boolean).join(' · ') || '资料未载入';
}

function unique(values) {
  return [...new Set(values)];
}

export function buildDecision(input = {}) {
  const inModel = input.model_coverage !== 'outside';
  const depth = inModel && finite(input.depth_cm) ? input.depth_cm : null;
  const depthLevel = tier(depth, DECISION_THRESHOLDS.depth_cm);
  const rainLevel = tier(input.rain_peak_3h_mm_h, DECISION_THRESHOLDS.rain_peak_3h_mm_h);
  const wetLevel = tier(input.antecedent_24h_mm, DECISION_THRESHOLDS.antecedent_24h_mm);
  const soilLevel = tier(input.soil_moisture, DECISION_THRESHOLDS.soil_moisture);
  const hazardAvailable = [depth, input.rain_peak_3h_mm_h, input.antecedent_24h_mm, input.soil_moisture]
    .some(finite);
  const hazardLevel = maxAvailable([depthLevel, rainLevel, wetLevel, soilLevel]);

  const sensitivityAvailable = finite(input.road_km) || finite(input.land_class);
  const sensitivity = sensitivityLevel(input);
  const exposureAvailable = finite(input.building_count);
  const exposure = exposureLevel(input.building_count);
  const operationsAvailable = finite(input.wind_gust_ms) || finite(input.temperature_c);
  const operations = tier(input.wind_gust_ms, DECISION_THRESHOLDS.wind_gust_ms) || 0;

  const factors = [
    factor(
      'hazard',
      '积水危险',
      hazardLevel,
      factorValue([
        finite(depth) ? one(depth) + ' cm' : null,
        finite(input.rain_peak_3h_mm_h) ? '雨峰 ' + one(input.rain_peak_3h_mm_h) : null
      ]),
      hazardAvailable,
      hazardEvidence(input, depth)
    ),
    factor(
      'sensitivity',
      '城市敏感性',
      sensitivity,
      factorValue([
        input.land_class === 50 ? '建设用地' : finite(input.land_class) ? '地表分类 ' + input.land_class : null,
        finite(input.road_km) ? '道路 ' + input.road_km.toFixed(3) + ' km' : null
      ]),
      sensitivityAvailable,
      [
        input.land_class === 50 ? '建设用地格点' : null,
        finite(input.road_km) ? '格点道路采样 ' + input.road_km.toFixed(3) + ' km' : null
      ].filter(Boolean)
    ),
    factor(
      'exposure',
      '暴露对象',
      exposure,
      finite(input.building_count) ? input.building_count + ' 栋建筑' : '资料未载入',
      exposureAvailable,
      finite(input.building_count)
        ? ['模型网格相交建筑 ' + input.building_count + ' 栋']
        : []
    ),
    factor(
      'operations',
      '处置条件',
      operations,
      factorValue([
        finite(input.wind_gust_ms) ? '阵风 ' + one(input.wind_gust_ms) + ' m/s' : null,
        finite(input.temperature_c) ? one(input.temperature_c) + '°C' : null
      ]),
      operationsAvailable,
      [
        finite(input.wind_gust_ms) ? '阵风 ' + one(input.wind_gust_ms) + ' m/s' : null,
        finite(input.temperature_c) ? '环境温度 ' + one(input.temperature_c) + '°C' : null
      ].filter(Boolean)
    )
  ];

  let level = Math.max(hazardLevel, operations);
  if (hazardLevel > 0 && exposure >= 2) {
    level = Math.max(level, Math.min(3, hazardLevel + 1));
  }

  const reasons = [];
  if (finite(depth) && depthLevel > 0) {
    reasons.push('模型积水 ' + one(depth) + ' cm');
  }
  if (finite(input.rain_next_3h_mm) && rainIsRising(input)) {
    reasons.push(
      (input.data_mode === 'historical' ? '随后 3 小时累计 ' : '未来 3 小时降雨 ') + one(input.rain_next_3h_mm) +
      ' mm，峰值 ' + one(input.rain_peak_3h_mm_h) + ' mm/h'
    );
  }
  if (finite(input.antecedent_24h_mm) && wetLevel > 0) {
    reasons.push('前期 24 小时累计 ' + one(input.antecedent_24h_mm) + ' mm');
  }
  if (finite(input.building_count) && input.building_count > 0 && hazardLevel > 0) {
    reasons.push('模型网格相交建筑 ' + input.building_count + ' 栋');
  }
  if (finite(input.wind_gust_ms) && operations > 0) {
    reasons.push('阵风 ' + one(input.wind_gust_ms) + ' m/s 影响户外处置');
  }

  const actionsByLevel = [
    '保持图层更新，关注雨势变化',
    '核查道路低点与排水口',
    '优先核查受影响道路并准备临时警示',
    '立即核查重点路段与地下空间入口'
  ];
  const actions = [actionsByLevel[level]];
  if (hazardLevel > 0 && finite(input.building_count) && input.building_count > 0) {
    actions.push('核查模型相交建筑及入口');
  }
  if (operations >= 2) {
    actions.push('调整户外巡查安排，避开强阵风时段');
  }

  const boundaries = ['积水为模型情景，非现场观测'];
  if (!inModel) boundaries.unshift('地点位于积水模型范围外');
  if (input.data_mode === 'cache') boundaries.unshift('气象采用最近缓存');
  if (!hazardAvailable || !exposureAvailable || !operationsAvailable) {
    boundaries.unshift('部分资料不足');
  }

  return {
    level,
    label: LEVEL_LABELS[level],
    trend: trend(input),
    factors,
    reasons: unique(reasons),
    actions: unique(actions),
    boundary: boundaries.join('；'),
    threshold_kind: '演练阈值',
    model_inputs: {depth_cm: depth},
    context: {
      temperature_c: finite(input.temperature_c) ? input.temperature_c : null,
      data_mode: input.data_mode || 'unknown'
    }
  };
}
