import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {chooseWeatherQuality} from './weather-quality.js';
import {buildStreetScene, createRainSystem, createRippleSystem} from './weather-scene.js';

export class WeatherRoom {
  constructor(element) {
    this.element = element;
    this.visible = false;
    this.rain = 0;
    this.speed = 0;
    this.direction = 0;
    this.sound = false;
    this.volume = .35;
    this._reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.quality = chooseWeatherQuality({
      width: innerWidth,
      dpr: devicePixelRatio,
      reduced: this._reduced
    });

    this.renderer = new THREE.WebGLRenderer({
      antialias: this.quality.name !== 'low',
      alpha: false,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(this.quality.pixelRatio);
    this.renderer.setClearColor('#0a1a21');
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = .92;
    this.renderer.shadowMap.enabled = this.quality.name === 'high';
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    element.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0a1a21');
    this.scene.fog = new THREE.FogExp2('#132a33', .031);
    this.camera = new THREE.PerspectiveCamera(43, 1, .1, 110);
    this.camera.position.set(0, 2.25, 8.6);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 1.05, -4.8);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = .055;
    this.controls.enablePan = false;
    this.controls.minDistance = 5.5;
    this.controls.maxDistance = 14;
    this.controls.minPolarAngle = .96;
    this.controls.maxPolarAngle = 1.47;
    this.controls.minAzimuthAngle = -.34;
    this.controls.maxAzimuthAngle = .34;

    this.sceneParts = buildStreetScene({THREE, scene: this.scene, quality: this.quality});
    this.rainSystem = createRainSystem({THREE, scene: this.scene, count: this.quality.drops});
    this.rippleSystem = createRippleSystem({
      THREE,
      scene: this.scene,
      count: this.quality.name === 'high' ? 110 : this.quality.name === 'medium' ? 80 : 52
    });
    this.rainLines = this.rainSystem.mesh;
    this.last = 0;
    this.staticDirty = true;
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(element);
    this.resize();
    this.animate = this.animate.bind(this);
    this.frame = requestAnimationFrame(this.animate);
  }

  get reduced() { return this._reduced; }
  set reduced(value) {
    this._reduced = Boolean(value);
    this.staticDirty = true;
  }

  resize() {
    const width = this.element.clientWidth || innerWidth;
    const height = this.element.clientHeight || innerHeight;
    if (!width || !height) return;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  update(row) {
    this.rain = Number(row.precipitation) || 0;
    this.speed = Number(row.wind_speed_10m) || 0;
    this.direction = Number(row.wind_direction_10m) || 0;
    this.staticDirty = true;
    this.audioMix();
  }

  snapshot() {
    return {
      quality: this.quality.name,
      rainSystem: 'instanced',
      drops: this.quality.drops,
      visibleDrops: this.rainSystem.visibleDrops,
      reflection: this.quality.reflection,
      reduced: this.reduced,
      visible: this.visible,
      triangles: this.renderer.info.render.triangles,
      motionSample: this.rainSystem.sample()
    };
  }

  async setSound(on) {
    this.sound = on;
    if (on) {
      if (!this.audio) {
        this.audio = new AudioContext();
        const length = this.audio.sampleRate * 3;
        const buffer = this.audio.createBuffer(1, length, this.audio.sampleRate);
        const values = buffer.getChannelData(0);
        let brown = 0;
        for (let index = 0; index < length; index++) {
          brown = (brown + .03 * (Math.random() * 2 - 1)) / 1.03;
          values[index] = brown * 3.5;
        }
        const source = this.audio.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        const filter = this.audio.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1900;
        this.gain = this.audio.createGain();
        this.gain.gain.value = 0;
        source.connect(filter).connect(this.gain).connect(this.audio.destination);
        source.start();
      }
      await this.audio.resume();
    }
    this.audioMix();
  }

  audioMix() {
    if (!this.audio) return;
    const level = this.sound && this.visible && !document.hidden
      ? this.volume * Math.min(.5, .08 + this.rain / 90)
      : 0;
    this.gain.gain.setTargetAtTime(level, this.audio.currentTime, .15);
  }

  setVisible(value) {
    this.visible = value;
    this.staticDirty = true;
    this.audioMix();
    if (value) this.resize();
  }

  animate(now) {
    this.frame = requestAnimationFrame(this.animate);
    if (!this.visible || document.hidden) return;
    const frameBudget = this.quality.name === 'low' ? 36 : 25;
    if (now - this.last < frameBudget) return;
    const dt = Math.min((now - this.last) / 1000, .05);
    this.last = now;
    this.controls.update();
    const values = {rain: this.rain, speed: this.speed, direction: this.direction};
    if (this.reduced || !this.quality.animate) {
      if (this.staticDirty) {
        this.rainSystem.setStatic(values);
        this.rippleSystem.setStatic(values);
        this.staticDirty = false;
      }
    } else {
      this.rainSystem.update({...values, dt});
      this.rippleSystem.update({...values, dt});
      this.sceneParts.trees.rotation.z = Math.sin(now * .0011) * Math.min(this.speed * .0007, .012);
    }
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.controls.dispose();
    this.rainSystem.dispose();
    this.rippleSystem.dispose();
    this.sceneParts.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
    this.audio?.close();
  }
}

export class MapWind {
  constructor(canvas, map, getField) {
    this.canvas = canvas;
    this.map = map;
    this.getField = getField;
    this.active = false;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.particles = [];
    this.last = 0;
    new ResizeObserver(() => this.resize()).observe(canvas.parentElement);
    this.resize();
    this.tick = this.tick.bind(this);
    requestAnimationFrame(this.tick);
  }

  resize() {
    const bounds = this.canvas.parentElement.getBoundingClientRect();
    const ratio = Math.min(devicePixelRatio, 1.5);
    this.canvas.width = bounds.width * ratio;
    this.canvas.height = bounds.height * ratio;
    this.canvas.style.width = bounds.width + 'px';
    this.canvas.style.height = bounds.height + 'px';
    this.ratio = ratio;
    this.particles = [];
  }

  tick(now) {
    requestAnimationFrame(this.tick);
    if (!this.active || document.hidden || now - this.last < 40) return;
    const dt = Math.min((now - this.last) / 1000, .08);
    this.last = now;
    const context = this.canvas.getContext('2d');
    const ratio = this.ratio;
    const width = this.canvas.width / ratio;
    const height = this.canvas.height / ratio;
    context.clearRect(0, 0, width * ratio, height * ratio);
    context.save();
    context.scale(ratio, ratio);
    context.strokeStyle = '#f0fcffb0';
    context.lineWidth = 1;
    context.shadowColor = '#285574';
    context.shadowBlur = 1;
    context.beginPath();
    while (this.particles.length < 350) {
      this.particles.push({x: Math.random() * width, y: Math.random() * height, life: Math.random() * 4});
    }
    for (const particle of this.particles) {
      const location = this.map.unproject([particle.x, particle.y]);
      const field = this.getField(location.lng, location.lat);
      if (!field) continue;
      const angle = this.map.getBearing() * Math.PI / 180;
      const u = field.u * Math.cos(angle) + field.v * Math.sin(angle);
      const v = field.u * Math.sin(angle) - field.v * Math.cos(angle);
      const length = Math.max(3, Math.min(19, Math.hypot(u, v) * .8));
      particle.life -= dt;
      if (particle.life < 0 || particle.x < 0 || particle.x > width || particle.y < 0 || particle.y > height) {
        particle.x = Math.random() * width;
        particle.y = Math.random() * height;
        particle.life = 3 + Math.random() * 3;
      }
      if (!this.reduced) {
        particle.x += u * dt * 2;
        particle.y += v * dt * 2;
      }
      const magnitude = Math.hypot(u, v) || 1;
      context.moveTo(particle.x, particle.y);
      context.lineTo(particle.x - u / magnitude * length, particle.y - v / magnitude * length);
    }
    context.stroke();
    context.restore();
  }
}
