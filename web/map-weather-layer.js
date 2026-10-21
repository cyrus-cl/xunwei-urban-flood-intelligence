const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function interpolateField(from, to, progress) {
  const amount = clamp(Number(progress) || 0, 0, 1);
  const length = Math.max(from?.length || 0, to?.length || 0);
  return Array.from({length}, (_, index) => {
    const start = from?.[index];
    const end = to?.[index];
    return Number.isFinite(start) && Number.isFinite(end)
      ? start + (end - start) * amount
      : Number.NaN;
  });
}

export function weatherParticleBudget({width, reduced}) {
  if (reduced) return 0;
  if (width < 600) return 420;
  if (width < 1280) return 680;
  return 960;
}

export function rainParticleAlpha(mmPerHour) {
  if (!Number.isFinite(mmPerHour) || mmPerHour <= 0) return 0;
  return Math.min(0.82, 0.12 + Math.sqrt(mmPerHour / 30) * 0.5);
}

export function weatherQualityProfile({width, frameGap = 16, reduced = false}) {
  if (reduced) return {name: 'reduced', particles: 0, trail: 1};
  if (frameGap > 36 || width < 1280) {
    return {name: 'medium', particles: width < 600 ? 420 : width < 1280 ? 680 : 720, trail: 0.28};
  }
  return {name: 'high', particles: 1180, trail: 0.18};
}

export function rainParticleStyle(mmPerHour) {
  return {stroke: `rgba(104, 199, 237, ${rainParticleAlpha(mmPerHour).toFixed(3)})`};
}

export function windParticleStyle(speed) {
  const alpha = Math.min(0.72, 0.28 + Math.max(0, Number(speed) || 0) / 55);
  return {stroke: `rgba(123, 202, 169, ${alpha.toFixed(3)})`};
}

function interval(values, value) {
  if (values.length < 2 || value < values[0] || value > values.at(-1)) return null;
  if (value === values.at(-1)) return [values.length - 2, values.length - 1, 1];
  let upper = 1;
  while (upper < values.length && values[upper] < value) upper += 1;
  const lower = upper - 1;
  return [lower, upper, (value - values[lower]) / (values[upper] - values[lower])];
}

export function gridRainField(sites = []) {
  const lons = [...new Set(sites.map(site => site.lon).filter(Number.isFinite))].sort((a, b) => a - b);
  const lats = [...new Set(sites.map(site => site.lat).filter(Number.isFinite))].sort((a, b) => a - b);
  const values = new Map(sites.map(site => [site.lon + '|' + site.lat, site.value]));
  return (lon, lat) => {
    const x = interval(lons, lon);
    const y = interval(lats, lat);
    if (!x || !y) return null;
    const [x0, x1, fx] = x;
    const [y0, y1, fy] = y;
    const corners = [
      [lons[x0], lats[y0], (1 - fx) * (1 - fy)],
      [lons[x1], lats[y0], fx * (1 - fy)],
      [lons[x0], lats[y1], (1 - fx) * fy],
      [lons[x1], lats[y1], fx * fy]
    ];
    let total = 0;
    let weight = 0;
    for (const [sourceLon, sourceLat, amount] of corners) {
      const sample = values.get(sourceLon + '|' + sourceLat);
      if (!Number.isFinite(sample) || amount <= 0) continue;
      total += sample * amount;
      weight += amount;
    }
    return weight ? total / weight : null;
  };
}

export function pointRainField({lon, lat, value, radiusKm = 9} = {}) {
  if (![lon, lat, value, radiusKm].every(Number.isFinite) || radiusKm <= 0) return () => null;
  return (sampleLon, sampleLat) => {
    const dx = (sampleLon - lon) * Math.cos(lat * Math.PI / 180) * 111.32;
    const dy = (sampleLat - lat) * 111.32;
    return Math.hypot(dx, dy) <= radiusKm ? value : null;
  };
}

export function pointWindField({lon, lat, speed, direction, radiusKm = 8} = {}) {
  if (![lon, lat, speed, direction].every(Number.isFinite)) return () => null;
  const angle = direction * Math.PI / 180;
  const vector = {u: -speed * Math.sin(angle), v: -speed * Math.cos(angle)};
  return (sampleLon, sampleLat) => {
    const dx = (sampleLon - lon) * Math.cos(lat * Math.PI / 180) * 111.32;
    const dy = (sampleLat - lat) * 111.32;
    return Math.hypot(dx, dy) <= radiusKm ? vector : null;
  };
}

function newParticle(index) {
  return {
    x: Math.random(),
    y: Math.random(),
    life: 1 + Math.random() * 4,
    speed: 0.7 + Math.random() * 0.8,
    site: index,
    phase: Math.random() * Math.PI * 2
  };
}

export class WeatherFieldLayer {
  constructor(canvas, map, {reduced = false} = {}) {
    this.canvas = canvas;
    this.map = map;
    this.context = canvas.getContext('2d');
    this.reduced = reduced;
    this.visible = true;
    this.mode = 'both';
    this.windField = null;
    this.rainField = null;
    this.rainSites = [];
    this.particles = [];
    this.frame = 0;
    this.last = 0;
    this.frameGap = 16;
    this.quality = weatherQualityProfile({width: innerWidth, frameGap: 16, reduced});
    this.destroyed = false;
    this.tick = this.tick.bind(this);
    this.resize = this.resize.bind(this);
    this.visibility = () => {
      if (!document.hidden) this.last = performance.now();
    };
    this.resizeObserver = new ResizeObserver(this.resize);
    this.resizeObserver.observe(canvas.parentElement);
    document.addEventListener('visibilitychange', this.visibility);
    this.resize();
    this.frame = requestAnimationFrame(this.tick);
  }

  resize() {
    const bounds = this.canvas.parentElement.getBoundingClientRect();
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    this.width = Math.max(1, bounds.width);
    this.height = Math.max(1, bounds.height);
    this.ratio = ratio;
    this.canvas.width = Math.round(this.width * ratio);
    this.canvas.height = Math.round(this.height * ratio);
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.particles = [];
  }

  setMode(mode) {
    this.mode = ['rain', 'wind', 'both', 'none'].includes(mode) ? mode : 'both';
    if (this.mode === 'none') this.clear();
  }

  setRain({sites = [], fromIndex = 0, toIndex = fromIndex, progress = 1} = {}) {
    const from = sites.map(site => site.rain?.[fromIndex]);
    const to = sites.map(site => site.rain?.[toIndex]);
    const values = interpolateField(from, to, progress);
    this.rainSites = sites.map((site, index) => ({
      lon: site.lon,
      lat: site.lat,
      value: values[index]
    }));
    this.rainField = gridRainField(this.rainSites);
  }

  setPointRain({lon, lat, value} = {}) {
    this.rainSites = [lon, lat, value].every(Number.isFinite)
      ? [{lon, lat, value}]
      : [];
    this.rainField = pointRainField({lon, lat, value});
  }

  setWind(field) {
    this.windField = typeof field === 'function' ? field : null;
  }

  setVisible(value) {
    this.visible = Boolean(value);
    this.canvas.classList.toggle('hidden', !this.visible);
    if (!this.visible) this.clear();
  }

  setReduced(value) {
    this.reduced = Boolean(value);
    if (this.reduced) this.clear();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  ensureParticles() {
    this.quality = weatherQualityProfile({width: this.width, frameGap: this.frameGap, reduced: this.reduced});
    const budget = this.quality.particles;
    while (this.particles.length < budget) {
      this.particles.push(newParticle(this.particles.length));
    }
    if (this.particles.length > budget) this.particles.length = budget;
  }

  visibleRainSites() {
    return this.rainSites
      .filter(site => Number.isFinite(site.value) && site.value > 0.05)
      .map(site => ({...site, point: this.map.project([site.lon, site.lat])}))
      .filter(site =>
        site.point.x > -120 && site.point.x < this.width + 120 &&
        site.point.y > -120 && site.point.y < this.height + 120
      );
  }

  drawRain(context, particles, dt, now) {
    if (!this.rainField) return;
    context.lineWidth = 0.8;
    context.lineCap = 'round';
    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index];
      const x = particle.x * this.width + Math.sin(now * 0.001 + particle.phase) * 4;
      const y = particle.y * this.height;
      const location = this.map.unproject([x, y]);
      const rain = this.rainField(location.lng, location.lat);
      const alpha = rainParticleAlpha(rain);
      particle.y = (particle.y + dt * particle.speed * (0.22 + (rain || 0) / 45)) % 1;
      if (!alpha) continue;
      const wind = this.windField?.(location.lng, location.lat);
      const slant = wind ? clamp(wind.u * 0.42, -8, 8) : -1.8;
      const length = 4 + Math.min(15, rain * 0.55);
      context.strokeStyle = rainParticleStyle(rain).stroke;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + slant, y + length);
      context.stroke();
    }
  }

  drawWind(context, particles, dt) {
    if (!this.windField) return;
    const angle = this.map.getBearing() * Math.PI / 180;
    context.strokeStyle = windParticleStyle(12).stroke;
    context.lineWidth = 0.8;
    context.beginPath();
    for (const particle of particles) {
      particle.life -= dt;
      if (particle.life <= 0 ||
          particle.x < 0 || particle.x > 1 ||
          particle.y < 0 || particle.y > 1) {
        Object.assign(particle, newParticle(particle.site));
      }
      const x = particle.x * this.width;
      const y = particle.y * this.height;
      const location = this.map.unproject([x, y]);
      const field = this.windField(location.lng, location.lat);
      if (!field) continue;
      const u = field.u * Math.cos(angle) + field.v * Math.sin(angle);
      const v = field.u * Math.sin(angle) - field.v * Math.cos(angle);
      const magnitude = Math.hypot(u, v) || 1;
      const length = clamp(magnitude * 0.75, 3, 18);
      particle.x += u * dt * 0.0025;
      particle.y += v * dt * 0.0025;
      context.moveTo(x, y);
      context.lineTo(x - u / magnitude * length, y - v / magnitude * length);
    }
    context.stroke();
  }

  tick(now) {
    if (this.destroyed) return;
    this.frame = requestAnimationFrame(this.tick);
    if (!this.visible || this.reduced || document.hidden || this.mode === 'none') return;
    const rawGap = this.last ? now - this.last : 33;
    if (rawGap < 32) return;
    this.frameGap = this.frameGap * 0.86 + rawGap * 0.14;
    const dt = Math.min(rawGap / 1000, 0.08);
    this.last = now;
    this.ensureParticles();
    const context = this.context;
    if (this.mode === 'rain') context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    else {
      context.save();
      context.globalCompositeOperation = 'destination-out';
      context.fillStyle = `rgba(0, 0, 0, ${this.quality.trail})`;
      context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      context.restore();
    }
    context.save();
    context.scale(this.ratio, this.ratio);
    const split = Math.floor(this.particles.length * 0.58);
    if (this.mode === 'rain' || this.mode === 'both') {
      this.drawRain(context, this.particles.slice(0, split), dt, now);
    }
    if (this.mode === 'wind' || this.mode === 'both') {
      this.drawWind(context, this.particles.slice(split), dt);
    }
    context.restore();
  }

  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    document.removeEventListener('visibilitychange', this.visibility);
    this.clear();
  }
}
