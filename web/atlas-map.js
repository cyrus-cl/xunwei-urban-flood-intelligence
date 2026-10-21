import * as maplibregl from './vendor/maplibre-gl.mjs';
import {interpolateField} from './map-weather-layer.js';
import {inspectionTerrain} from './atlas-spatial.js';
import {colour} from './visual-scales.js';
const imageCoordinates=b=>[[b[0],b[3]],[b[2],b[3]],[b[2],b[1]],[b[0],b[1]]];
export {colour};
export function fieldImage(values,n=129,kind='depth'){
  const canvas=document.createElement('canvas');canvas.width=canvas.height=n;const ctx=canvas.getContext('2d'),img=ctx.createImageData(n,n);
  for(let i=0;i<values.length;i++){const v=values[i],c=colour(kind==='depth'?v*100:v,kind);img.data.set([...c,!Number.isFinite(v)||v<=(kind==='depth'?.001:.01)?0:kind==='depth'?Math.min(225,105+v*190):Math.min(170,52+v*4)],i*4);}ctx.putImageData(img,0,0);return canvas.toDataURL();
}
export async function atlasTexture(){
  const response=await fetch('data/city_texture.png');
  if(!response.ok)throw Error('城市底图纹理暂不可用');
  const url=URL.createObjectURL(await response.blob()),image=new Image();image.src=url;await image.decode();
  return {url,image};
}
export class AtlasMap{
  constructor({terrain,grid,texture,provider,onPick,onError}){this.grid=grid;this.terrain=terrain;this.texture=texture;this.provider=provider||{mode:'local',reason:'legacy'};this.onPick=onPick;this.onError=onError;this.theme='flood';this.dataLayers={rain:true,wind:true,flood:true};this.is3d=false;this.options={satellite:false,roads:true,buildings:true,bounds:true};this.maps=[];this.markers=[];this.placeMarkers=[];this.depth=null;this.baseDepth=null;this.compare=false;this.ready=this.initialize();}
  async initialize(){
    try{this.map=await this.mount('atlasMap',false,this.provider);}
    catch(error){
      if(this.provider.mode!=='online')throw error;
      this.provider={mode:'local',reason:'style-error'};
      this.map=await this.mount('atlasMap',false,this.provider);
      this.onError?.('在线底图中断，已切换本地资料快照');
    }
    this.installControls();this.installEvents();return this;
  }
  async mount(id,base=false,provider=this.provider){
    const map=this.create(id,base,provider);
    try{
      await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('地图样式加载超时')),8000);map.once('load',()=>{clearTimeout(timer);resolve();});});
      this.registerProjectLayers(map,base,provider);
      if(this.is3d){this.ensureBuildings(map);map.setTerrain({source:'dem',exaggeration:1});}
      if(base&&this.baseDepth)map.getSource('flood')?.updateImage({url:fieldImage(this.baseDepth)});
      return map;
    }catch(error){map.remove();this.maps=this.maps.filter(item=>item!==map);throw error;}
  }
  registerProjectLayers(map,base=false,provider=this.provider){
    const project=this.style(base);
    const sources={...project.sources};
    if(provider.mode==='online')delete sources.atlas;
    for(const [id,source] of Object.entries(sources))if(!map.getSource(id))map.addSource(id,source);
    const before=provider.mode==='online'?map.getStyle().layers?.find(layer=>layer.type==='symbol')?.id:undefined;
    for(const layer of project.layers){
      if(layer.id==='background'||(provider.mode==='online'&&layer.id==='atlas')||map.getLayer(layer.id))continue;
      map.addLayer(layer,before);
    }
  }
  installControls(){
    const attribution=this.provider.mode==='online'
      ? '<a href="https://openfreemap.org/" target="_blank" rel="noopener">OpenFreeMap</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> · Copernicus DEM'
      : '本地资料快照 · © Overture / OpenStreetMap · ESA WorldCover 2021 · Copernicus DEM';
    this.map.addControl(new maplibregl.AttributionControl({compact:true,customAttribution:attribution}),'bottom-left');
    const scale=new maplibregl.ScaleControl({maxWidth:90,unit:'metric'}),slot=document.getElementById('mapScale');slot.replaceChildren(scale.onAdd(this.map));
    if(this.provider.mode==='local')this.labels();
  }
  installEvents(){
    this.map.on('click',e=>{if(e.originalEvent.target.closest?.('.place-pin'))return;this.onPick?.({lon:e.lngLat.lng,lat:e.lngLat.lat});});
    this.map.on('move',()=>{if(this.baseline&&this.compare)this.baseline.jumpTo({center:this.map.getCenter(),zoom:this.map.getZoom(),pitch:this.map.getPitch(),bearing:this.map.getBearing()});const north=document.querySelector('#northButton svg');if(north)north.style.transform=`rotate(${-this.map.getBearing()}deg)`;});
  }
  gridCoordinates(){const g=this.grid,n=g.size,p=i=>[g.longitude[i],g.latitude[i]],a=p(0),b=p(n-1),c=p(n*n-1),d=p(n*(n-1)),u=[(b[0]-a[0])/(n-1),(b[1]-a[1])/(n-1)],v=[(d[0]-a[0])/(n-1),(d[1]-a[1])/(n-1)];return [[a[0]-u[0]/2-v[0]/2,a[1]-u[1]/2-v[1]/2],[b[0]+u[0]/2-v[0]/2,b[1]+u[1]/2-v[1]/2],[c[0]+u[0]/2+v[0]/2,c[1]+u[1]/2+v[1]/2],[d[0]-u[0]/2+v[0]/2,d[1]-u[1]/2+v[1]/2]];}
  style(base=false){const bounds=this.gridCoordinates(),blank=fieldImage(new Array(16641).fill(0));return {version:8,sources:{
    atlas:{type:'image',url:this.texture,coordinates:imageCoordinates(this.terrain.bounds)},dem:{type:'raster-dem',tiles:[new URL('data/dem/',location.href).href+'{z}/{x}/{y}.png'],tileSize:256,minzoom:8,maxzoom:11,bounds:this.terrain.bounds,encoding:'mapbox'},roads:{type:'geojson',data:'data/atlas_roads.geojson',tolerance:.4},water:{type:'geojson',data:'data/atlas_water.geojson'},buildings:{type:'geojson',data:{type:'FeatureCollection',features:[]},tolerance:.25},flood:{type:'image',url:this.depth?fieldImage(base?this.baseDepth:this.depth):blank,coordinates:bounds},rain:{type:'image',url:this.rainImage||fieldImage(new Array(289).fill(0),17,'rain'),coordinates:this.rainBounds||imageCoordinates([118.375,27.375,122.625,31.625])},scope:{type:'geojson',data:{type:'FeatureCollection',features:[{type:'Feature',geometry:{type:'Polygon',coordinates:[[...bounds,bounds[0]]]},properties:{}}]}},track:{type:'geojson',data:this.track||{type:'FeatureCollection',features:[]}}},layers:[
    {id:'background',type:'background',paint:{'background-color':'#071219'}},
    {id:'atlas',type:'raster',source:'atlas',paint:{'raster-opacity':.82,'raster-saturation':-.55,'raster-contrast':.22,'raster-brightness-min':.04,'raster-brightness-max':.58,'raster-fade-duration':0}},
    {id:'water',type:'line',source:'water',paint:{'line-color':'#68c7ed','line-width':['interpolate',['linear'],['zoom'],9,.5,12,2.5,15,9],'line-opacity':.64}},
    {id:'building-flat',type:'fill',source:'buildings',minzoom:11,paint:{'fill-color':'#6f8793','fill-opacity':.42,'fill-outline-color':'#a9c4ca45'}},
    {id:'road-casing',type:'line',source:'roads',paint:{'line-color':'#213b47','line-width':['interpolate',['linear'],['zoom'],9,.9,12,2.3,15,7],'line-opacity':.82}},
    {id:'road',type:'line',source:'roads',paint:{'line-color':['match',['get','class'],['motorway','trunk'],'#c9a36f','#73909a'],'line-width':['interpolate',['linear'],['zoom'],9,.5,12,1.35,15,5],'line-opacity':.76}},
    {id:'flood',type:'raster',source:'flood',layout:{visibility:this.dataLayers.flood?'visible':'none'},paint:{'raster-opacity':.78,'raster-resampling':'nearest','raster-fade-duration':180}},
    {id:'rain',type:'raster',source:'rain',layout:{visibility:this.dataLayers.rain?'visible':'none'},paint:{'raster-opacity':.48,'raster-resampling':'linear','raster-fade-duration':220}},
    {id:'building-3d',type:'fill-extrusion',source:'buildings',minzoom:11.5,layout:{visibility:this.is3d?'visible':'none'},paint:{'fill-extrusion-color':'#68808a','fill-extrusion-height':['get','height_m'],'fill-extrusion-base':0,'fill-extrusion-opacity':.78,'fill-extrusion-vertical-gradient':true}},
    {id:'scope',type:'line',source:'scope',paint:{'line-color':'#4c829e','line-opacity':.65,'line-width':1.4,'line-dasharray':[4,3]}},
    {id:'track',type:'line',source:'track',paint:{'line-color':'#996843','line-width':2,'line-dasharray':[3,2],'line-opacity':.85}}
  ]};}
  create(id,base=false,provider=this.provider){const map=new maplibregl.Map({container:id,style:provider.mode==='online'?provider.styleUrl:this.style(base),center:[121.522,29.869],zoom:11.65,pitch:0,bearing:-8,attributionControl:false,maxZoom:17,minZoom:7,canvasContextAttributes:{preserveDrawingBuffer:false},renderWorldCopies:false});this.maps.push(map);map.on('error',e=>this.onError?.(e.error?.message||'地图图层暂时中断'));return map;}
  labels(){const labels=[['宁波市',121.544,29.875,'city'],['海曙区',121.50,29.874,''],['江北区',121.556,29.907,''],['鄞州区',121.568,29.823,''],['镇海区',121.71,29.95,''],['北仑区',121.839,29.9,''],['东钱湖',121.646,29.755,'water'],['姚江',121.508,29.91,'water'],['奉化江',121.553,29.848,'water']];for(const [name,lon,lat,kind] of labels){const el=document.createElement('div');el.className='geo-label '+kind;el.textContent=name;this.markers.push(new maplibregl.Marker({element:el}).setLngLat([lon,lat]).addTo(this.map));}}
  setDepth(result){this.depth=result.peak_depth_m;this.baseDepth=result.baseline_peak_depth_m;this.map.getSource('flood')?.updateImage({url:fieldImage(this.depth)});this.baseline?.getSource('flood')?.updateImage({url:fieldImage(this.baseDepth)});}
  setRain(sites,index,nextIndex=index,progress=1){const lons=[...new Set(sites.map(s=>s.lon))].sort((a,b)=>a-b),lats=[...new Set(sites.map(s=>s.lat))].sort((a,b)=>b-a),dict=new Map(sites.map(s=>[s.lon+','+s.lat,s])),from=[],to=[];for(const lat of lats)for(const lon of lons){const rain=dict.get(lon+','+lat)?.rain||[];from.push(rain[index]??NaN);to.push(rain[nextIndex]??NaN);}const values=interpolateField(from,to,progress);this.rainImage=fieldImage(values,lons.length,'rain');this.rainBounds=imageCoordinates([lons[0]-.125,lats.at(-1)-.125,lons.at(-1)+.125,lats[0]+.125]);for(const map of this.maps)map.getSource('rain')?.updateImage({url:this.rainImage,coordinates:this.rainBounds});}
  setTrack(track){this.track=track;for(const map of this.maps)map.getSource('track')?.setData(track);}
  setTheme(theme){this.theme=theme;if(theme==='flood'&&!this.dataLayers.flood)this.setDataLayer('flood',true);if(theme==='rain'&&!this.dataLayers.rain)this.setDataLayer('rain',true);}
  setDataLayer(name,value){if(!(name in this.dataLayers))return;this.dataLayers[name]=Boolean(value);if(name!=='wind'){for(const map of this.maps)if(map.getLayer(name))map.setLayoutProperty(name,'visibility',value?'visible':'none');}if(name==='flood'&&!value&&this.compare)this.setCompare(false);}
  ensureSatellite(map){if(map.getSource('satellite'))return;map.addSource('satellite',{type:'image',url:'data/satellite_2021.png',coordinates:imageCoordinates([121,29,122,30])});map.addLayer({id:'satellite',type:'raster',source:'satellite',paint:{'raster-saturation':-.38,'raster-brightness-min':.20,'raster-brightness-max':.94,'raster-fade-duration':0}},map.getLayer('water')?'water':undefined);}
  removeSatellite(map){if(map.getLayer('satellite'))map.removeLayer('satellite');if(map.getSource('satellite'))map.removeSource('satellite');}
  ensureBuildings(map,data){if(data)this.buildingsData=data;const next=this.buildingsData;if(!next)return;if(map.__rainHereBuildingsData!==next){map.getSource('buildings')?.setData(next);map.__rainHereBuildingsData=next;}map.__rainHereBuildings=true;}
  releaseBuildings(map){map.__rainHereBuildings=false;}
  ensureInspectionLayers(map){const empty={type:'FeatureCollection',features:[]},desktop=innerWidth>=760;if(!map.getSource('flood-inspection'))map.addSource('flood-inspection',{type:'geojson',data:empty});if(desktop&&!map.getLayer('flood-outline'))map.addLayer({id:'flood-outline',type:'line',source:'flood-inspection',layout:{visibility:'none'},paint:{'line-color':'#8fa6ff','line-width':['interpolate',['linear'],['zoom'],11,.45,15,1.5],'line-opacity':.82}});if(!map.getLayer('flood-3d'))map.addLayer({id:'flood-3d',type:'fill-extrusion',source:'flood-inspection',layout:{visibility:'none'},paint:{'fill-extrusion-color':['interpolate',['linear'],['get','depth_m'],.05,'#657fc9',.1,'#6d74c5',.25,'#98579e',.5,'#e45f63'],'fill-extrusion-height':['+',.22,['*',['get','depth_m'],8]],'fill-extrusion-base':.08,'fill-extrusion-opacity':.68,'fill-extrusion-vertical-gradient':true}},map.getLayer('building-3d')?'building-3d':undefined);if(!map.getSource('impacted-buildings'))map.addSource('impacted-buildings',{type:'geojson',data:empty});if(!map.getLayer('impacted-building-3d'))map.addLayer({id:'impacted-building-3d',type:'fill-extrusion',source:'impacted-buildings',minzoom:11.5,layout:{visibility:'none'},paint:{'fill-extrusion-color':'#e45f63','fill-extrusion-height':['coalesce',['get','height_m'],12],'fill-extrusion-base':0,'fill-extrusion-opacity':.94,'fill-extrusion-vertical-gradient':true}});if(desktop){map.setPaintProperty('flood-3d','fill-extrusion-height-transition',{duration:650,delay:120});map.setPaintProperty('flood-3d','fill-extrusion-opacity-transition',{duration:360});map.setPaintProperty('impacted-building-3d','fill-extrusion-opacity-transition',{duration:280});}}
  setInspectionData({buildings,floodCells,impactedBuildings}){const map=this.map;this.inspection=true;this.ensureBuildings(map,buildings);this.ensureInspectionLayers(map);map.getSource('flood-inspection').setData(floodCells);map.getSource('impacted-buildings').setData(impactedBuildings);if(map.getLayer('flood-outline'))map.setLayoutProperty('flood-outline','visibility','visible');map.setLayoutProperty('flood-3d','visibility','visible');map.setLayoutProperty('impacted-building-3d','visibility','visible');}
  clearInspection(){this.inspection=false;const map=this.map;for(const id of ['flood-outline','flood-3d','impacted-building-3d'])if(map.getLayer(id))map.setLayoutProperty(id,'visibility','none');}
  setOption(name,value){this.options[name]=value;if(name==='satellite'){for(const map of this.maps)value?this.ensureSatellite(map):this.removeSatellite(map);return;}const ids={roads:['road','road-casing','water'],buildings:['building-flat','building-3d'],bounds:['scope']}[name]||[];for(const map of this.maps){if(name==='buildings'&&value&&this.is3d)this.ensureBuildings(map);for(const id of ids)if(map.getLayer(id))map.setLayoutProperty(id,'visibility',value&&(id!=='building-3d'||this.is3d)?'visible':'none');}}
  set3d(value,animateCamera=true){this.is3d=value;if(!value&&this.inspection)this.clearInspection();const terrain=value&&inspectionTerrain(innerWidth);for(const map of this.maps){if(!map.getLayer('building-3d'))continue;if(value&&this.options.buildings)this.ensureBuildings(map);else this.releaseBuildings(map);map.setLayoutProperty('building-3d','visibility',value&&this.options.buildings?'visible':'none');map.setLayoutProperty('building-flat','visibility',value?'none':this.options.buildings?'visible':'none');map.setTerrain(terrain?{source:'dem',exaggeration:1}:null);}if(animateCamera)this.map.easeTo({pitch:value?57:0,bearing:value?-20:-8,duration:700});}
  pins(selected,places=[]){this.placeMarkers.forEach(m=>m.remove());this.placeMarkers=[];const rows=[...places.filter(p=>p.id!==selected.id),selected];for(const p of rows){const el=document.createElement('button');el.className='place-pin '+(p.id&&p.id!==selected.id?'registered':'');el.setAttribute('aria-label','查看'+p.name);el.innerHTML='<svg viewBox="0 0 34 44" aria-hidden="true"><path d="M17 2C5 2 1 12 4 22l13 20 13-20C33 12 29 2 17 2Z" fill="'+(p.id&&p.id!==selected.id?'#325767':'#ad754b')+'" stroke="#f7eee0" stroke-width="2"/><circle cx="17" cy="16" r="5" fill="#f3efde"/></svg><span></span>';el.querySelector('span').textContent=p.name;el.onclick=e=>{e.stopPropagation();this.onPick(p);};this.placeMarkers.push(new maplibregl.Marker({element:el,anchor:'bottom-left'}).setLngLat([p.lon,p.lat]).addTo(this.map));}}
  async setCompare(value){this.compare=value;const el=document.getElementById('baselineMap');el.classList.toggle('hidden',!value);document.getElementById('compareDivider').classList.toggle('hidden',!value);if(value&&!this.baseline){this.baseline=await this.mount('baselineMap',true,this.provider);el.style.pointerEvents='none';}if(value){this.baseline.resize();this.baseline.jumpTo({center:this.map.getCenter(),zoom:this.map.getZoom(),pitch:this.map.getPitch(),bearing:this.map.getBearing()});this.setSplit(+document.getElementById('compareRange').value);}}
  setSplit(percent){document.getElementById('baselineMap').style.clipPath=`inset(0 0 0 ${percent}%)`;document.getElementById('compareDivider').style.left=percent+'%';}
  focus(p,zoom){this.map.flyTo({center:[p.lon,p.lat],zoom:zoom??Math.max(this.map.getZoom(),12.6),padding:innerWidth>760?{left:0,top:0,right:330,bottom:55}:{left:0,top:70,right:0,bottom:340},...(this.is3d?{pitch:57,bearing:-20}:{}),duration:900,essential:true});}
}
