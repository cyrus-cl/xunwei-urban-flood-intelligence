export function chooseWeatherQuality({width, dpr, reduced}) {
  if (reduced) {
    return {
      name: 'reduced', pixelRatio: 1, drops: 0,
      reflection: 0, post: false, animate: false
    };
  }
  if (width < 760) {
    return {
      name: 'low', pixelRatio: Math.min(dpr, 1.25), drops: 800,
      reflection: 0, post: false, animate: true
    };
  }
  if (width < 1280) {
    return {
      name: 'medium', pixelRatio: Math.min(dpr, 1.35), drops: 1400,
      reflection: 256, post: false, animate: true
    };
  }
  return {
    name: 'high', pixelRatio: Math.min(dpr, 1.5), drops: 2200,
    reflection: 512, post: true, animate: true
  };
}
