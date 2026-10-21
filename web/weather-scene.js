import {Reflector} from 'three/addons/objects/Reflector.js';

function disposeMaterial(material) {
  if (!material) return;
  for (const value of Object.values(material)) if (value?.isTexture) value.dispose();
  material.dispose?.();
}

export function buildStreetScene({THREE, scene, quality}) {
  const root = new THREE.Group();
  root.name = 'street-lab';
  scene.add(root);
  const geometries = new Set();
  const materials = new Set();
  const remember = object => {
    root.add(object);
    if (object.geometry) geometries.add(object.geometry);
    const list = Array.isArray(object.material) ? object.material : [object.material];
    list.filter(Boolean).forEach(material => materials.add(material));
    return object;
  };
  const material = options => {
    const result = new THREE.MeshStandardMaterial(options);
    materials.add(result);
    return result;
  };
  const box = (w, h, d, x, y, z, mat) => {
    const geometry = new THREE.BoxGeometry(w, h, d);
    geometries.add(geometry);
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return remember(mesh);
  };

  const sky = new THREE.HemisphereLight('#a9c8d2', '#07151c', 1.45);
  root.add(sky);
  const key = new THREE.DirectionalLight('#bfd4da', 1.7);
  key.position.set(-7, 11, 6);
  key.castShadow = quality.name === 'high';
  root.add(key);

  const asphalt = material({color: '#263b42', roughness: .31, metalness: .18});
  const pavement = material({color: '#59686a', roughness: .64, metalness: .04});
  const curb = material({color: '#9da39e', roughness: .72});
  const marking = material({color: '#c7c3ae', roughness: .48, emissive: '#4e4a3c', emissiveIntensity: .12});
  const facadeA = material({color: '#263b43', roughness: .72, metalness: .06});
  const facadeB = material({color: '#314a52', roughness: .68, metalness: .08});
  const facadeC = material({color: '#1c3139', roughness: .78, metalness: .04});
  const windowMaterial = material({color: '#73939a', roughness: .24, metalness: .32, emissive: '#315c68', emissiveIntensity: .45});
  const darkMetal = material({color: '#101f24', roughness: .38, metalness: .62});

  const street = box(10.6, .13, 52, 0, -.065, -15, asphalt);
  const sidewalks = [
    box(4.4, .24, 52, -7.5, .02, -15, pavement),
    box(4.4, .24, 52, 7.5, .02, -15, pavement)
  ];
  const curbs = [
    box(.18, .32, 52, -5.35, .08, -15, curb),
    box(.18, .32, 52, 5.35, .08, -15, curb)
  ];
  for (let z = -34; z < 8; z += 5.2) box(.11, .015, 2.5, 0, .016, z, marking);
  for (let i = 0; i < 7; i++) box(.58, .018, 4.8, -2.4 + i * .8, .018, 4.8, marking);

  let wetGround = street;
  let reflector = null;
  let reflectionTarget = null;
  if (quality.reflection > 0) {
    const geometry = new THREE.PlaneGeometry(10.45, 51.8);
    geometries.add(geometry);
    reflector = new Reflector(geometry, {
      color: 0x38535b,
      textureWidth: quality.reflection,
      textureHeight: quality.reflection,
      clipBias: .002
    });
    reflector.rotation.x = -Math.PI / 2;
    reflector.position.set(0, .012, -15);
    reflector.material.transparent = true;
    reflector.material.opacity = .29;
    reflector.name = 'wet-street-reflection';
    remember(reflector);
    wetGround = reflector;
    reflectionTarget = reflector.getRenderTarget();
  }

  const buildings = new THREE.Group();
  buildings.name = 'street-buildings';
  root.add(buildings);
  const blocks = [
    [-8.6, -5.5, 5.7, 8.2, facadeB],
    [8.4, -7.5, 5.3, 10.8, facadeA],
    [-8.8, -17.2, 5.9, 13.2, facadeC],
    [8.7, -20.2, 5.5, 8.8, facadeB],
    [-8.5, -31.2, 6.1, 11.6, facadeA]
  ];
  for (const [x, z, width, height, facade] of blocks) {
    const geometry = new THREE.BoxGeometry(width, height, 7.2);
    geometries.add(geometry);
    const building = new THREE.Mesh(geometry, facade);
    building.position.set(x, height / 2, z);
    building.castShadow = true;
    building.receiveShadow = true;
    buildings.add(building);
    const faceX = x < 0 ? x + width / 2 + .012 : x - width / 2 - .012;
    const columns = 3;
    const rows = Math.max(3, Math.floor(height / 1.65));
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const window = new THREE.Mesh(new THREE.PlaneGeometry(.48, .68), windowMaterial);
        geometries.add(window.geometry);
        window.position.set(faceX, 1 + row * 1.45, z - 2.1 + column * 2.05);
        window.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2;
        buildings.add(window);
      }
    }
  }

  const lamps = new THREE.Group();
  lamps.name = 'street-lamps';
  root.add(lamps);
  const lampGlow = material({color: '#e1b06f', roughness: .18, emissive: '#ffb85f', emissiveIntensity: 2.8});
  for (const x of [-4.75, 4.75]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.045, .07, 4.6, 8), darkMetal);
    geometries.add(pole.geometry);
    pole.position.set(x, 2.3, -3.2);
    lamps.add(pole);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(.75, .06, .06), darkMetal);
    geometries.add(arm.geometry);
    arm.position.set(x + (x < 0 ? .35 : -.35), 4.48, -3.2);
    lamps.add(arm);
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(.32, .08, .18), lampGlow);
    geometries.add(bulb.geometry);
    bulb.position.set(x + (x < 0 ? .68 : -.68), 4.4, -3.2);
    lamps.add(bulb);
    const light = new THREE.PointLight('#f0b86a', quality.name === 'low' ? 26 : 46, 9, 2);
    light.position.copy(bulb.position);
    lamps.add(light);
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(.55, 4.7),
      new THREE.MeshBasicMaterial({color: '#d49b59', transparent: true, opacity: .07, depthWrite: false})
    );
    geometries.add(glow.geometry);
    materials.add(glow.material);
    glow.rotation.x = -Math.PI / 2;
    glow.position.set(x, .025, -.95);
    lamps.add(glow);
  }

  const trees = new THREE.Group();
  trees.name = 'street-trees';
  root.add(trees);
  const trunkMaterial = material({color: '#3f504c', roughness: .9});
  const leafMaterial = material({color: '#3f6f61', roughness: .65, side: THREE.DoubleSide});
  const leafGeometry = new THREE.IcosahedronGeometry(.16, 0);
  geometries.add(leafGeometry);
  const leafCount = quality.name === 'low' ? 180 : 320;
  for (const x of [-6.25, 6.25]) {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.06, .11, 3.2, 8), trunkMaterial);
    geometries.add(trunk.geometry);
    trunk.position.set(x, 1.62, -11.2);
    trees.add(trunk);
    const leaves = new THREE.InstancedMesh(leafGeometry, leafMaterial, leafCount);
    const dummy = new THREE.Object3D();
    for (let index = 0; index < leafCount; index++) {
      const turn = index * 2.399963;
      const y = (index / leafCount - .5) * 2.25;
      const radius = Math.sqrt(Math.max(0, 1 - (y / 1.25) ** 2)) * (.55 + (index % 11) / 18);
      dummy.position.set(x + Math.cos(turn) * radius, 3.25 + y, -11.2 + Math.sin(turn) * radius);
      dummy.rotation.set(turn * .17, turn, turn * .11);
      dummy.scale.setScalar(.62 + (index % 7) * .055);
      dummy.updateMatrix();
      leaves.setMatrixAt(index, dummy.matrix);
    }
    trees.add(leaves);
  }

  const dispose = () => {
    scene.remove(root);
    reflectionTarget?.dispose?.();
    geometries.forEach(geometry => geometry.dispose());
    materials.forEach(disposeMaterial);
  };

  return {street, sidewalks, curbs, buildings, lamps, trees, wetGround, reflectionTarget, dispose};
}

export function createRainSystem({THREE, scene, count}) {
  const geometry = new THREE.PlaneGeometry(.018, .42);
  const material = new THREE.MeshBasicMaterial({
    color: '#c9e4ea', transparent: true, opacity: .38,
    depthWrite: false, side: THREE.DoubleSide
  });
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  mesh.name = 'instanced-rain';
  mesh.frustumCulled = false;
  mesh.count = 0;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(mesh);
  const drops = Array.from({length: count}, (_, index) => ({
    x: ((index * 73) % 997) / 997 * 23 - 11.5,
    y: ((index * 193) % 991) / 991 * 12 + .3,
    z: ((index * 389) % 983) / 983 * 38 - 30
  }));
  const dummy = new THREE.Object3D();
  let visibleDrops = 0;
  const roofHeight = drop => Math.abs(drop.x) > 5.35 && drop.z < -1 ? 7.5 : 0;
  const place = (drop, driftX, staticFrame) => {
    dummy.position.set(drop.x, drop.y, drop.z);
    dummy.rotation.set(0, 0, staticFrame ? -.08 : Math.atan2(driftX, 10));
    dummy.scale.set(1, .8 + (drop.y % 1) * .8, 1);
    dummy.updateMatrix();
  };
  const update = ({dt = 0, rain = 0, speed = 0, direction = 0, staticFrame = false}) => {
    visibleDrops = Math.min(count, Math.max(0, Math.round(rain * 72)));
    mesh.count = visibleDrops;
    const angle = direction * Math.PI / 180;
    const driftX = -Math.sin(angle) * speed * .18;
    const driftZ = -Math.cos(angle) * speed * .18;
    const fall = 8.6 + Math.min(rain, 40) * .07;
    for (let index = 0; index < visibleDrops; index++) {
      const drop = drops[index];
      if (!staticFrame) {
        drop.y -= dt * fall;
        drop.x += dt * driftX;
        drop.z += dt * driftZ;
      }
      if (drop.y < roofHeight(drop) || Math.abs(drop.x) > 12.5 || drop.z > 9 || drop.z < -34) {
        drop.x = ((index * 47 + performance.now() * .013) % 1000) / 1000 * 23 - 11.5;
        drop.y = 10 + (index % 23) / 23 * 4;
        drop.z = ((index * 97 + performance.now() * .009) % 1000) / 1000 * 38 - 30;
      }
      place(drop, driftX, staticFrame);
      mesh.setMatrixAt(index, dummy.matrix);
    }
    material.opacity = .23 + Math.min(rain / 70, .34);
    mesh.instanceMatrix.needsUpdate = true;
  };
  const setStatic = values => update({...values, dt: 0, staticFrame: true});
  const sample = () => drops[0]?.y ?? 0;
  const dispose = () => { scene.remove(mesh); geometry.dispose(); material.dispose(); };
  return {mesh, drops, update, setStatic, sample, get visibleDrops() { return visibleDrops; }, dispose};
}

export function createRippleSystem({THREE, scene, count}) {
  const geometry = new THREE.RingGeometry(.08, .105, 20);
  const material = new THREE.MeshBasicMaterial({
    color: '#95c4ce', transparent: true, opacity: .18,
    depthWrite: false, side: THREE.DoubleSide
  });
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  mesh.name = 'instanced-ripples';
  mesh.frustumCulled = false;
  mesh.count = 0;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(mesh);
  const ripples = Array.from({length: count}, (_, index) => ({
    x: ((index * 67) % 401) / 401 * 9.4 - 4.7,
    z: ((index * 131) % 397) / 397 * 39 - 30,
    phase: (index % 17) / 17
  }));
  const dummy = new THREE.Object3D();
  const update = ({dt = 0, rain = 0, staticFrame = false}) => {
    const visible = Math.min(count, Math.max(0, Math.round(rain * 2.4)));
    mesh.count = visible;
    for (let index = 0; index < visible; index++) {
      const ripple = ripples[index];
      if (!staticFrame) ripple.phase = (ripple.phase + dt * (.72 + Math.min(rain / 70, .6))) % 1;
      const phase = staticFrame ? .34 + (index % 5) * .08 : ripple.phase;
      dummy.position.set(ripple.x, .026, ripple.z);
      dummy.rotation.set(-Math.PI / 2, 0, 0);
      dummy.scale.setScalar(.25 + phase * 2.2);
      dummy.updateMatrix();
      mesh.setMatrixAt(index, dummy.matrix);
    }
    material.opacity = .1 + Math.min(rain / 120, .16);
    mesh.instanceMatrix.needsUpdate = true;
  };
  const setStatic = values => update({...values, dt: 0, staticFrame: true});
  const dispose = () => { scene.remove(mesh); geometry.dispose(); material.dispose(); };
  return {mesh, update, setStatic, dispose};
}
