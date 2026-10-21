export const scenarioStatus = result => result?.kind === 'surrogate'
  ? '四小时积水情景 · 模型估算'
  : result?.kind === 'physical_reference'
    ? '已保存物理参考 · 情景核对'
    : '已保存水动力演算 · 全天情景';

export const mapBasis = theme => ({
  rain: 'ERA5 小时降雨 · 历史再分析 · 0.25°',
  wind: 'ERA5 小时风场 · 历史再分析 · 流线示意',
  flood: '情景最大积水 · 180 m 模型格点 · 非现场测量'
})[theme];

export const provenanceRows = () => [
  '附近 ERA5 格点 · 0.25°',
  '模型格点 · 180 m',
  '现场状态 · 待核对'
];
