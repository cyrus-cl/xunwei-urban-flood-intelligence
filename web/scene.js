import {waterSurfaceMaterial} from './water-surface.js';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const COS=Math.cos(29.8*Math.PI/180), KM=111.32;
export const toWorld=(lon,lat,z=0)=>new THREE.Vector3((lon-121.5)*KM*COS,z/1000,(29.86-lat)*KM);
export const toGeo=(x,z)=>[121.5+x/(KM*COS),29.86-z/KM];

export class CityScene{
  constructor(element,terrain,physical,onPick){
    this.element=element;this.terrain=terrain;this.grid=physical;this.onPick=onPick;
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
    this.renderer.setClearColor('#0b2028');
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.05;
    this.renderer.setSize(element.clientWidth,element.clientHeight);
    element.appendChild(this.renderer.domElement);
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#0b2028');
    this.scene.fog=new THREE.Fog('#0b2028',40,110);
    this.camera=new THREE.PerspectiveCamera(38,element.clientWidth/element.clientHeight,.015,300);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.enableDamping=true;this.controls.dampingFactor=.07;
    this.controls.minDistance=.35;this.controls.maxDistance=115;
    this.controls.maxPolarAngle=Math.PI*.455;
    this.controls.minPolarAngle=.06;
    this.controls.enablePan=true;
    this.controls.screenSpacePanning=false;
    this.controls.addEventListener('start',()=>{this.targetCamera=null;this.targetLook=null;});
    this.scene.add(new THREE.HemisphereLight('#d5eff0','#152a33',1.35));
    const sun=new THREE.DirectionalLight('#e9f5ff',2.0);sun.position.set(-22,28,-12);this.scene.add(sun);
    const fill=new THREE.DirectionalLight('#bdd8de',1.1);fill.position.set(25,14,23);this.scene.add(fill);
    this.makeTerrain();this.makeWater();this.makeWeather();this.makeLabels();
    this.mode='history';this.view='terrain';this.windOn=true;this.rainOn=true;this.compare=.5;
    this.reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.visible=true;this.setView('terrain',true);this.last=0;
    this.raycaster=new THREE.Raycaster();this.pointer=new THREE.Vector2();
    let start;
    element.addEventListener('pointerdown',e=>{start=[e.clientX,e.clientY]});
    element.addEventListener('pointerup',e=>{
      if(this.mode!=='scenario'||!start||Math.hypot(e.clientX-start[0],e.clientY-start[1])>5)return;
      const r=element.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);
      this.raycaster.setFromCamera(this.pointer,this.camera);
      const hit=this.raycaster.intersectObject(this.water)[0];
      if(!hit)return;const [lon,lat]=toGeo(hit.point.x,hit.point.z);
      let nearest=0,d=Infinity;for(let i=0;i<this.grid.longitude.length;i++){
        const dd=(this.grid.longitude[i]-lon)**2*COS**2+(this.grid.latitude[i]-lat)**2;
        if(dd<d){d=dd;nearest=i;}
      }
      this.onPick?.({lon:this.grid.longitude[nearest],lat:this.grid.latitude[nearest],index:nearest,
        depth:this.selectedDepth?.[nearest]||0,baseline:this.baselineDepth?.[nearest]||0});
    });
    new ResizeObserver(()=>this.resize()).observe(element);
    this.animate=this.animate.bind(this);requestAnimationFrame(this.animate);
  }
  height(lon,lat){
    const t=this.terrain,[xmin,ymin,xmax,ymax]=t.bounds;
    const xx=(lon-xmin)/(xmax-xmin)*t.width-.5, yy=(ymax-lat)/(ymax-ymin)*t.height-.5;
    const ix=Math.min(t.width-2,Math.max(0,Math.floor(xx))),iy=Math.min(t.height-2,Math.max(0,Math.floor(yy)));
    const fx=Math.min(1,Math.max(0,xx-ix)),fy=Math.min(1,Math.max(0,yy-iy));
    const a=t.heights[iy*t.width+ix],b=t.heights[iy*t.width+ix+1],c=t.heights[(iy+1)*t.width+ix],d=t.heights[(iy+1)*t.width+ix+1];
    return ((a*(1-fx)+b*fx)*(1-fy)+(c*(1-fx)+d*fx)*fy)*3/1000;
  }
  makeTerrain(){
    const t=this.terrain,w=t.width,h=t.height,[xmin,ymin,xmax,ymax]=t.bounds;
    const positions=new Float32Array(w*h*3),uv=new Float32Array(w*h*2),colors=new Float32Array(w*h*3),indices=[];
    const low=new THREE.Color('#5a7977'),mid=new THREE.Color('#315b52'),high=new THREE.Color('#183b32');
    for(let row=0;row<h;row++)for(let col=0;col<w;col++){
      const i=row*w+col,lon=xmin+(col+.5)/w*(xmax-xmin),lat=ymax-(row+.5)/h*(ymax-ymin);
      const point=toWorld(lon,lat,t.heights[i]*3);positions.set(point.toArray(),i*3);
      uv.set([col/(w-1),1-row/(h-1)],i*2);
      const z=Math.max(t.heights[i],0),c=z<150?low.clone().lerp(mid,z/150):mid.clone().lerp(high,Math.min((z-150)/650,1));
      colors.set(c.toArray(),i*3);
      if(row<h-1&&col<w-1){const a=i,b=i+1,c=i+w,d=i+w+1;indices.push(a,c,b,b,c,d)}
    }
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
    geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
    geometry.setIndex(indices);geometry.computeVertexNormals();
    const texture=new THREE.TextureLoader().load('data/city_texture.png');texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;
    const material=new THREE.MeshStandardMaterial({map:texture,vertexColors:true,roughness:.95,metalness:0,side:THREE.DoubleSide});
    this.mapTexture=texture;this.land=new THREE.Mesh(geometry,material);this.scene.add(this.land);
    const edges=[];const base=-.35;
    function wall(a,b){edges.push(a[0],a[1],a[2],a[0],base,a[2],b[0],b[1],b[2],b[0],b[1],b[2],a[0],base,a[2],b[0],base,b[2])}
    for(let col=0;col<w-1;col++){wall(Array.from(positions.slice(col*3,col*3+3)),Array.from(positions.slice((col+1)*3,(col+1)*3+3)));const a=((h-1)*w+col)*3;wall(Array.from(positions.slice(a,a+3)),Array.from(positions.slice(a+3,a+6)));}
    for(let row=0;row<h-1;row++){const a=row*w*3,b=(row*w+w-1)*3;wall(Array.from(positions.slice(a,a+3)),Array.from(positions.slice(a+w*3,a+w*3+3)));wall(Array.from(positions.slice(b,b+3)),Array.from(positions.slice(b+w*3,b+w*3+3)));}
    const sideGeometry=new THREE.BufferGeometry();sideGeometry.setAttribute('position',new THREE.Float32BufferAttribute(edges,3));sideGeometry.computeVertexNormals();
    this.scene.add(new THREE.Mesh(sideGeometry,new THREE.MeshStandardMaterial({color:'#1a3941',roughness:1,side:THREE.DoubleSide})));
  }
  async loadBuildings(){
    const response=await fetch('data/buildings_mesh.f32');if(!response.ok)throw Error('建筑资料加载中断');
    const values=new Float32Array(await response.arrayBuffer());
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(values,3));geo.computeVertexNormals();
    this.buildings=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:'#d0dfd9',roughness:.9,side:THREE.DoubleSide}));
    this.scene.add(this.buildings);return values.length/9;
  }
  makeWater(){
    const grid=this.grid,n=grid.size,positions=new Float32Array(n*n*3),depth=new Float32Array(n*n),indices=[];
    for(let i=0;i<n*n;i++){
      const p=toWorld(grid.longitude[i],grid.latitude[i]);p.y=this.height(grid.longitude[i],grid.latitude[i])+.005;
      positions.set(p.toArray(),i*3);const row=Math.floor(i/n),col=i%n;
      if(row<n-1&&col<n-1)indices.push(i,i+n,i+1,i+1,i+n,i+n+1);
    }
    const make=()=>{
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(positions.slice(),3));g.setAttribute('depth',new THREE.BufferAttribute(depth.slice(),1));g.setIndex(indices);
      const mat=waterSurfaceMaterial();const mesh=new THREE.Mesh(g,mat);mesh.visible=false;mesh.renderOrder=3;this.scene.add(mesh);return mesh;
    };this.water=make();this.baseWater=make();
    const boundary=[];for(const i of [0,n-1,n*n-1,n*(n-1),0]){boundary.push(...Array.from(positions.slice(i*3,i*3+3)));}
    const geom=new THREE.BufferGeometry();geom.setAttribute('position',new THREE.Float32BufferAttribute(boundary,3));
    this.boundary=new THREE.Line(geom,new THREE.LineBasicMaterial({color:'#678b68',transparent:true,opacity:.65}));this.boundary.visible=false;this.scene.add(this.boundary);
  }
  updateDepth(selected,baseline){
    this.selectedDepth=selected;this.baselineDepth=baseline;
    this.water.geometry.attributes.depth.array.set(selected);this.water.geometry.attributes.depth.needsUpdate=true;
    this.baseWater.geometry.attributes.depth.array.set(baseline);this.baseWater.geometry.attributes.depth.needsUpdate=true;
  }
  makeWeather(){
    const count=1500;this.particles=[];const points=new Float32Array(count*6);
    for(let i=0;i<count;i++)this.particles.push({x:Math.random()*38-14,z:Math.random()*34-11,life:Math.random()*5});
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(points,3));
    this.wind=new THREE.LineSegments(geo,new THREE.LineBasicMaterial({color:'#80d7de',transparent:true,opacity:.30,depthWrite:false}));this.wind.frustumCulled=false;this.wind.renderOrder=4;this.scene.add(this.wind);
    const rainCount=1900;this.drops=[];const rainPoints=new Float32Array(rainCount*6);
    for(let i=0;i<rainCount;i++)this.drops.push({x:Math.random()*32-12,z:Math.random()*29-10,y:Math.random()*3.5+.3});
    const rg=new THREE.BufferGeometry();rg.setAttribute('position',new THREE.BufferAttribute(rainPoints,3));
    this.rain=new THREE.LineSegments(rg,new THREE.LineBasicMaterial({color:'#779fa8',transparent:true,opacity:.34,depthWrite:false}));this.rain.frustumCulled=false;this.rain.renderOrder=4;this.scene.add(this.rain);
  }
  makeLabels(){
    const label=(text,lon,lat)=>{
      const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;
      const ctx=canvas.getContext('2d');ctx.font='66px "Microsoft YaHei",sans-serif';ctx.textAlign='center';ctx.strokeStyle='#f8f5e3';ctx.lineWidth=10;ctx.strokeText(text,256,82);ctx.fillStyle='#234c40';ctx.fillText(text,256,82);
      const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
      const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map,transparent:true,depthTest:false,toneMapped:false}));
      sprite.position.copy(toWorld(lon,lat));sprite.position.y=this.height(lon,lat)+.15;sprite.scale.set(5.2,1.3,1);sprite.renderOrder=6;this.scene.add(sprite);return sprite;
    };this.cityLabel=label('宁波城区',121.547,29.873);this.hillLabel=label('西部山地',121.28,29.80);
  }
  setWeather(field,rain){this.field=field;this.rainAmount=rain;}
  setSurface(kind){
    if(kind==='satellite'){
      if(!this.satelliteTexture){this.satelliteTexture=new THREE.TextureLoader().load('data/satellite_2021.png');this.satelliteTexture.colorSpace=THREE.SRGBColorSpace;this.satelliteTexture.anisotropy=4;}
      this.land.material.map=this.satelliteTexture;this.land.material.vertexColors=false;
    }else{this.land.material.map=this.mapTexture;this.land.material.vertexColors=true;}
    this.land.material.needsUpdate=true;
  }
  setMode(mode){this.mode=mode;this.boundary.visible=mode==='scenario';}
  setView(view,immediate=false){
    this.view=view;let target,offset;
    if(view==='city'){target=toWorld(121.55,29.875);offset=new THREE.Vector3(1.8,1.9,2.8);this.cityLabel.visible=false;this.hillLabel.visible=false;}
    else{target=toWorld(121.455,29.837);offset=new THREE.Vector3(16,17,22);this.cityLabel.visible=true;this.hillLabel.visible=true;}
    target.y=this.height(...toGeo(target.x,target.z));
    this.targetCamera=target.clone().add(offset);this.targetLook=target;
    if(immediate){this.camera.position.copy(this.targetCamera);this.controls.target.copy(target);this.targetCamera=null;this.targetLook=null;}
  }
  resize(){if(!this.element.clientWidth||!this.element.clientHeight)return;const w=this.element.clientWidth,h=this.element.clientHeight;this.renderer.setSize(w,h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
  zoom(factor){const offset=this.camera.position.clone().sub(this.controls.target).multiplyScalar(factor);this.camera.position.copy(this.controls.target.clone().add(offset));this.targetCamera=null;}
  rotate(){const offset=this.camera.position.clone().sub(this.controls.target);offset.applyAxisAngle(new THREE.Vector3(0,1,0),Math.PI/6);this.camera.position.copy(this.controls.target.clone().add(offset));this.targetCamera=null;}
  animate(now){
    requestAnimationFrame(this.animate);if(!this.visible||document.hidden||now-this.last<(this.busy?250:32))return;
    const dt=Math.min((now-this.last)/1000,.25);this.last=now;
    if(this.targetCamera){
      const blend=1-Math.exp(-dt*6);
      this.camera.position.lerp(this.targetCamera,blend);this.controls.target.lerp(this.targetLook,blend);
      if(this.camera.position.distanceTo(this.targetCamera)<.01){this.targetCamera=null;this.targetLook=null;}
    }
    this.controls.update();this.scene.updateMatrixWorld();
    for(const mesh of [this.water,this.baseWater]){
      mesh.material.uniforms.time.value=now*.001;
      mesh.material.uniforms.eye.value.copy(this.camera.position);
      mesh.material.uniforms.motion.value=this.reduced?0:1;
    }
    this.wind.visible=this.windOn&&this.mode==='history';
    this.rain.visible=this.rainOn&&(this.rainAmount||0)>.1;
    if(this.wind.visible&&this.field){
      const positions=this.wind.geometry.attributes.position.array;
      for(let i=0;i<this.particles.length;i++){
        const p=this.particles[i];let [lon,lat]=toGeo(p.x,p.z);const v=this.field(lon,lat);
        p.life-=dt;if(p.life<0||p.x>24||p.x<-14||p.z>23||p.z<-11){p.x=Math.random()*38-14;p.z=Math.random()*34-11;p.life=3+Math.random()*4;}
        p.x+=v.u*dt*.24;p.z-=v.v*dt*.24;
        const magnitude=Math.hypot(v.u,v.v)||1,length=.15+Math.min(magnitude*.025,.5),y=this.height(lon,lat)+.09;
        positions.set([p.x,y,p.z,p.x-v.u/magnitude*length,y,p.z+v.v/magnitude*length],i*6);
      }this.wind.geometry.attributes.position.needsUpdate=true;
    }
    if(this.rain.visible){
      const positions=this.rain.geometry.attributes.position.array;
      const count=Math.min(this.drops.length,Math.max(50,Math.round(this.rainAmount*60)));this.rain.geometry.setDrawRange(0,count*2);
      for(let i=0;i<count;i++){
        const p=this.drops[i],[lon,lat]=toGeo(p.x,p.z),ground=this.height(lon,lat);
        p.y-=dt*2.2;if(p.y<ground){p.y=ground+2.5+Math.random();p.x=Math.random()*32-12;p.z=Math.random()*29-10;}
        positions.set([p.x,p.y,p.z,p.x-.025,p.y-.12,p.z+.02],i*6);
      }this.rain.geometry.attributes.position.needsUpdate=true;
    }
    this.water.visible=this.mode==='scenario';this.baseWater.visible=false;
    const r=this.renderer,w=this.element.clientWidth,h=this.element.clientHeight;
    if(this.mode==='scenario'&&this.selectedDepth){
      r.setScissorTest(true);r.setScissor(0,0,Math.round(w*this.compare),h);r.render(this.scene,this.camera);
      this.water.visible=false;this.baseWater.visible=true;r.setScissor(Math.round(w*this.compare),0,w-Math.round(w*this.compare),h);r.render(this.scene,this.camera);r.setScissorTest(false);this.water.visible=true;this.baseWater.visible=false;
    }else r.render(this.scene,this.camera);
    const direction=new THREE.Vector3();this.camera.getWorldDirection(direction);const degrees=Math.atan2(direction.x,-direction.z)*180/Math.PI;
    const north=document.querySelector('.north svg');if(north)north.style.transform=`rotate(${-degrees}deg)`;
  }
}
