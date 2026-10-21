import {answerLocal} from './information.js';
import {LocalAI} from './local-ai.js';
const localAI=new LocalAI();
import {CityScene} from './scene.js';
import {RainformController} from './rainform-controller.js';
import * as maplibregl from './vendor/maplibre-gl.mjs';

const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const get=async name=>{const r=await fetch(`data/${name}`);if(!r.ok)throw Error(`${name} 资料加载中断`);return r.json();};
const [events,regionalMuifa,regionalInfa,terrain,physical,tracks,provinces]=await Promise.all(
  ['weather.json','regional_muifa.json','regional_infa.json','terrain.json','physical_grid.json','tracks.geojson','china_adm1.geojson'].map(get)
);
const regional={muifa:regionalMuifa,infa:regionalInfa};
const [station,historicalForcing]=await Promise.all(['station_lishe.json','historical_forcing.json'].map(get));
const state={mode:'history',view:'terrain',event:'muifa',city:'宁波',index:90,hours:1,regionSite:null,
  peak:30,drainage:6,forcing:'four_hours',surface:'map',playing:false,wind:true,rain:true,buildings:true,scenario:null,compare:.5};
let rainform;
let scene,map,mapReady=false,markers=[],scenarioRequest=0,scenarioTimer,askRequest=0,askAbort;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){state.wind=false;state.rain=false;$('windToggle').checked=false;$('rainToggle').checked=false;}
const eventData=()=>events.find(e=>e.id===state.event);
const siteRows=city=>eventData().sites.find(s=>s.name===city).rows;
const currentRows=()=>state.regionSite?regional[state.event].times.map((t,i)=>({time:t+'+08:00',
  precipitation:state.regionSite.rain[i],wind_speed_10m:state.regionSite.speed[i],
  wind_direction_10m:state.regionSite.direction[i],wind_gusts_10m:state.regionSite.gust[i]})):siteRows(state.city);
const value=(rows,i,key)=>rows[i]?.[key];
function rainSum(rows,i,hours){if(i-hours+1<0)return null;const a=rows.slice(i-hours+1,i+1).map(r=>r.precipitation);return a.length===hours&&a.every(Number.isFinite)?a.reduce((p,c)=>p+c,0):null;}
const directionLabel=degrees=>['北','东北','东','东南','南','西南','西','西北'][Math.round(degrees/45)%8];
function toast(message){$('toast').textContent=message;$('toast').classList.remove('hidden');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.add('hidden'),4000);}

function fieldFor(event,index){
  const sites=regional[event].sites;
  const lons=[...new Set(sites.map(s=>s.lon))].sort((a,b)=>a-b),lats=[...new Set(sites.map(s=>s.lat))].sort((a,b)=>a-b);
  const dictionary=new Map(sites.map(s=>[`${s.lon},${s.lat}`,s]));
  function node(x,y){
    const s=dictionary.get(`${lons[x]},${lats[y]}`);if(!s)return {u:0,v:0,rain:null};
    const speed=s.speed[index],dir=s.direction[index];if(!Number.isFinite(speed)||!Number.isFinite(dir))return {u:0,v:0,rain:null};
    return {u:-speed*Math.sin(dir*Math.PI/180),v:-speed*Math.cos(dir*Math.PI/180),rain:s.rain[index]};
  }
  return (lon,lat)=>{
    const x=Math.max(0,Math.min(lons.length-1,(lon-lons[0])/.25)),y=Math.max(0,Math.min(lats.length-1,(lat-lats[0])/.25));
    const ix=Math.min(Math.floor(x),lons.length-2),iy=Math.min(Math.floor(y),lats.length-2),fx=x-ix,fy=y-iy;
    const ns=[node(ix,iy),node(ix+1,iy),node(ix,iy+1),node(ix+1,iy+1)];const ws=[(1-fx)*(1-fy),fx*(1-fy),(1-fx)*fy,fx*fy];
    return {u:ns.reduce((a,s,i)=>a+s.u*ws[i],0),v:ns.reduce((a,s,i)=>a+s.v*ws[i],0),
      rain:ns.every(s=>Number.isFinite(s.rain))?ns.reduce((a,s,i)=>a+s.rain*ws[i],0):null};
  };
}
let currentField=fieldFor(state.event,state.index);

function updateWeather(){
  const rows=currentRows(),row=rows[state.index],rain=rainSum(rows,state.index,state.hours);
  const date=row.time.slice(0,10).split('-').map(Number),hour=row.time.slice(11,16);
  $('currentTime').textContent=`${date[1]} 月 ${date[2]} 日 ${hour}`;
  $('rainValue').textContent=rain===null?'—':rain.toFixed(1);
  document.querySelector('.rain-number small').textContent=`过去 ${state.hours} 小时`;
  $('rainSense').textContent=rain===null?'这个累计时段的资料待补充。':`每平方米接到 ${rain.toFixed(1)} 升雨水。`;
  const fill=Math.min(45,Math.max(2,(rain||0)/(state.hours===1?35:state.hours===6?120:250)*45));
  const y=58-fill;$('glassFill').setAttribute('d',`M${21-(58-y)/7} ${y}H${59+(58-y)/7}L59 58H21Z`);
  $('windValue').textContent=Number.isFinite(row.wind_speed_10m)?row.wind_speed_10m.toFixed(1):'—';
  $('gustValue').textContent=Number.isFinite(row.wind_gusts_10m)?row.wind_gusts_10m.toFixed(1):'—';
  $('windDirection').textContent=Number.isFinite(row.wind_direction_10m)?`来自${directionLabel(row.wind_direction_10m)}`:'风向资料待补充';
  $('windArrow').style.transform=`rotate(${row.wind_direction_10m||0}deg)`;
  const s=state.regionSite||eventData().sites.find(s=>s.name===state.city),lon=s.lon??s.returned_longitude,lat=s.lat??s.returned_latitude;
  $('weatherPrecision').textContent=`ERA5 历史再分析 · ${lon.toFixed(2)}°E ${lat.toFixed(2)}°N · 0.25° 网格`;
  const compare=$('compareCity').value,comparison=rainSum(siteRows(compare),state.index,state.hours);
  $('cityCompareValue').textContent=`${compare}同期 ${state.hours} 小时降雨 ${comparison===null?'—':comparison.toFixed(1)} 毫米`;
  $('timeRange').max=rows.length-1;$('timeRange').value=state.index;
  const first=rows[0].time,last=rows.at(-1).time;
  const short=t=>`${Number(t.slice(5,7))} 月 ${Number(t.slice(8,10))} 日`;
  $('dateStart').textContent=short(first);$('dateEnd').textContent=short(last);
  document.querySelectorAll('[data-hours]').forEach(b=>b.classList.toggle('active',+b.dataset.hours===state.hours));
  const observed=state.event==='muifa'&&state.city==='宁波'&&!state.regionSite?station.rows[row.time]:null;
  $('stationRecord').classList.toggle('hidden',state.city!=='宁波'||!!state.regionSite);
  $('stationValue').textContent=observed?`机场风速 ${observed.wind_speed_m_s.toFixed(1)} m/s${observed.direction_from_deg===null?'':`，来自${directionLabel(observed.direction_from_deg)}`}。`:'该时刻的机场观测待补充。';
  drawChart(rows);currentField=fieldFor(state.event,state.index);scene?.setWeather(currentField,row.precipitation);
  if(mapReady)updateMap();
  rainform?.sync();
  window.dispatchEvent(new CustomEvent('weather-result',{detail:{rows:currentRows(),index:state.index,place:state.regionSite?'关注网格':state.city,event:state.event}}));
  if(state.event==='muifa'){
    $('officialQuote').innerHTML='梅花影响期间，宁波全市过程面平均雨量达到 <b>291 毫米</b>。';
    $('officialLink').textContent='宁波市水情年报 · 2022 ↗';$('officialLink').href='data/ningbo_water_2022.pdf#page=32';
    $('officialScope').textContent='9 月 11 日至 15 日早上 · 全市区域记录';
  }else{
    $('officialQuote').textContent='烟花期间的风雨，可沿着 2021 年 7 月的时间回看。';
    $('officialLink').textContent='查看历史再分析资料说明 ↗';$('officialLink').href='https://open-meteo.com/en/docs/historical-weather-api';
    $('officialScope').textContent='7 月 22—29 日 · 三城区域网格';
  }
  if(state.mode==='history'){$('pageTitle').textContent=`${eventData().label}经过${state.regionSite?'关注的地方':state.city}`;}
  markers.forEach(m=>m.element.classList.toggle('selected',m.city===state.city&&!state.regionSite));
}
function drawChart(rows){
  const max=Math.max(1,...rows.map(r=>r.precipitation||0)),width=900,height=62,bar=width/rows.length;
  let html=`<svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">`;
  for(let i=0;i<rows.length;i++){const amount=rows[i].precipitation??0,y=height-amount/max*(height-7);html+=`<rect class="bar ${i===state.index?'highlight':''}" x="${i*bar}" y="${y}" width="${Math.max(.4,bar-1)}" height="${height-y}"/>`;}
  html+=`<line x1="${(state.index+.5)*bar}" x2="${(state.index+.5)*bar}" y1="0" y2="62" stroke="#ac7447" stroke-width="1"/></svg>`;
  $('rainChart').innerHTML=html;
}
function clearAnswer(){askRequest++;askAbort?.abort();$('answer').replaceChildren();}
function selectCity(city){state.city=city;state.regionSite=null;$('citySelect').value=city;clearAnswer();if(city!=='宁波'&&state.view!=='rainform')setView('region');updateWeather();}
function setIndex(i){state.index=Math.max(0,Math.min(currentRows().length-1,i));clearAnswer();updateWeather();}
function setView(view){
  if(state.mode==='scenario'&&(view==='region'||view==='rainform')){toast('积水情景以宁波的地形为范围。');return;}
  state.view=view;const region=view==='region',rainView=view==='rainform';
  $('stage').classList.toggle('rainform-view',rainView);
  $('rainformFrame').classList.toggle('hidden',!rainView);
  $('rainformGap').classList.add('hidden');
  $('rainDayToolbar').classList.toggle('hidden',!rainView);
  rainform?.setVisible(rainView);

  $('scene3d').classList.toggle('hidden',region||rainView);$('regionMap').classList.toggle('hidden',!region);$('mapWind').classList.toggle('hidden',!region);
  scene.visible=!region&&!rainView;
  if(rainView){
    $('visualFootnote').innerHTML='每个整点表示此前一小时的雨量；日雨量为 01:00 至次日 00:00 的 24 个记录之和。曲线间连续变化用于视觉表达。<br>Rain visualization derived from <a href="https://github.com/afterimage-lab/Rainform" target="_blank" rel="noopener">Rainform / 数据成雨</a> by afterimage · © 2026 · 非商业研究版本。';
  }else if(region){initMap();map?.resize();$('sceneLabel').textContent='浙江 · 逐小时风雨';$('sceneDetail').textContent='ERA5 再分析 · 0.25°';$('gestureHint').textContent='拖动地图 · 点击关注地点';
    $('visualFootnote').textContent='ERA5 289 个区域网格 · 颜色在网格间连续显示，资料精度为 0.25°。';
  }else{scene.setView(view);scene.resize();$('sceneLabel').textContent=view==='city'?'宁波 · 城区近看':'宁波 · 山、河与城';$('sceneDetail').textContent='真实地形 · 高差展示 ×3';$('gestureHint').textContent='拖动旋转 · 滚轮拉近';
    $('visualFootnote').textContent='Copernicus GLO-30 地表模型 · 24,000 个建筑体块。缺少高度的体块统一显示为 12 米。';}
  document.querySelector('.surface-options').classList.toggle('hidden',region||rainView);
  if(!region&&!rainView&&state.surface==='satellite')$('visualFootnote').textContent='Sentinel-2 2021 年度合成影像 · ESA WorldCover · 地形高差 ×3，缺失的建筑高度按 12 米展示。';
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));updateLegend();
}
function updateLegend(){
  $('legend').innerHTML=state.mode==='scenario'?'<span class="legend-title">情景最大积水</span><i class="water-gradient"></i><span>2</span><span>≥35 cm</span>':state.view==='region'?'<span class="legend-title">过去一小时雨量</span><i class="rain-gradient"></i><span>0</span><span>≥30 mm</span>':'<span class="legend-title">地表高度</span><i class="terrain-gradient"></i><span>0</span><span>1,000 m</span>';
}
async function setMode(mode){
  state.mode=mode;state.playing=false;$('playButton').textContent='▶';$('playButton').setAttribute('aria-label','播放历史风雨');
  const scenario=mode==='scenario';scene.setMode(mode);
  for(const id of ['timelinePanel','weatherPanel'])$(id).classList.toggle('hidden',scenario);
  for(const id of ['scenarioPanel','scenarioNote','compareLabels','compareDivider','compareRange'])$(id).classList.toggle('hidden',!scenario);
  document.querySelector('.event-picker').classList.toggle('hidden',scenario);
  $('windToggle').closest('label').classList.toggle('hidden',scenario);
  for(const view of ['region','rainform'])document.querySelector(`[data-view="${view}"]`).classList.toggle('hidden',scenario);
  $('pageTitle').textContent=scenario?'同一场雨，城市能少积多少水？':`${eventData().label}经过${state.city}`;
  $('pageSubtitle').textContent=scenario?'选一场雨，改变排水，再留下一份有依据的比较。':'沿着时间，看看风雨如何变化。';
  $('eyebrow').textContent=scenario?'同一座城，不同的降雨情景':'一场台风，一座城';
  document.querySelectorAll('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
  $('pointInfo').classList.add('hidden');clearAnswer();
  if(scenario){setView('terrain');scene.setWeather(currentField,state.peak);drawProfile();await requestScenario();}
  else{setView(state.view);updateWeather();updateLegend();}
}
function drawProfile(){
  const history=state.forcing==='muifa_day';
  const profile=history?historicalForcing.rain_mm_h:[.25,.65,1,.45].map(v=>v*state.peak);
  const max=Math.max(...profile,1);
  $('stormProfile').innerHTML=profile.map((v,i)=>`<div style="height:${Math.max(2,v/max*100)}%"><span>${history?'':v.toFixed(1)}</span></div>`).join('');
  $('stormProfile').setAttribute('aria-label',history?'梅花当日逐小时雨量':'四小时降雨形状');
  $('peakRange').disabled=history;$('peakRange').value=history?max:state.peak;$('peakOutput').value=history?max:state.peak;
  $('drainRange').step=history?'6':'.5';$('drainOutput').value=Number(state.drainage).toFixed(state.drainage%1?1:0);
  $('scenarioHours').textContent=history?'24 小时':'4 小时';
  $('forcingNote').textContent=history?'2022 年 9 月 14 日 · 日雨量 183.0 毫米 · ERA5 宁波网格':'四小时降雨 · 可调整最强一小时';
  $('scenarioDescription').textContent=`拖动分界，观察${history?'24':'四'}小时内曾达到的最大积水。深色对应较深积水，浅色底图帮助辨认城市范围。`;
  $('profileAssumption').textContent=history?'历史逐小时雨量在整个计算区域内均匀施加；24 小时结果由水流计算生成并保存。径流系数为 0.75，地表阻力取 0.04，边缘允许水流离开。':'四小时的雨量依次为峰值的 25%、65%、100%、45%。径流系数为 0.75，地表阻力取 0.04，边缘允许水流离开。';
  $('verifyButton').classList.toggle('hidden',history);
  document.querySelectorAll('[data-forcing]').forEach(b=>b.classList.toggle('active',b.dataset.forcing===state.forcing));
}
function showScenario(result){
  queueMicrotask(()=>window.dispatchEvent(new CustomEvent('scenario-result',{detail:result})));
  state.scenario=result;scene.updateDepth(result.peak_depth_m,result.baseline_peak_depth_m);
  $('areaValue').textContent=result.metrics.area_above_010m_km2.toFixed(1);
  $('reductionValue').textContent=`较基准 ${result.area_reduction_percent>=0?'减少':'增加'} ${Math.abs(result.area_reduction_percent).toFixed(0)}%`;
  $('overlapValue').textContent=`该范围与 ${result.metrics.building_footprint_overlap_010m.toLocaleString('zh-CN')} 个建筑轮廓中心重叠。`;
  $('scenarioStatus').textContent=result.kind==='physical_reference'?'参考演算':result.kind==='physical_precomputed'?'历史雨量演算':result.kind==='physical'?'完整演算':'快速估算';
  $('computeNote').textContent=result.kind==='physical_reference'?`核对雨峰 ${result.peak_mm_h}、排水 ${result.drainage_mm_h} 的已有演算；与快估平均差 ${result.reference_mae_mm.toFixed(2)} 毫米。`:result.kind==='physical_precomputed'?`正在阅读已保存的 24 小时水流计算；原计算用时 ${(result.compute_ms/1000).toFixed(1)} 秒。`:result.kind==='physical'?`本次完成演算，用时 ${(result.compute_ms/1000).toFixed(2)} 秒。`:'情景按明确的降雨与排水条件估算。';
  $('pointInfo').classList.add('hidden');
}
async function requestScenario(kind='surrogate'){
  const version=++scenarioRequest,peak=state.peak,drainage=state.drainage;
  $('scenarioStatus').textContent='正在计算';
  if(kind==='physical'){$('verifyButton').disabled=true;$('computeNote').textContent='正在按当前条件计算地表水流。';}
  try{
    const result=await localAI.call('scenario',{peak,drainage,kind,forcing:state.forcing});
    if(result.kind==='physical_reference'){state.peak=result.peak_mm_h;state.drainage=result.drainage_mm_h;drawProfile();}
    if(version!==scenarioRequest||state.mode!=='scenario')return;
    showScenario(result);
  }catch(error){if(version===scenarioRequest){$('scenarioStatus').textContent='资料待补充';$('computeNote').textContent=error.message;toast(error.message);}}
  finally{if(kind==='physical')$('verifyButton').disabled=false;}
}
function changeScenario(){if(state.forcing==='four_hours')state.peak=+$('peakRange').value;state.drainage=+$('drainRange').value;drawProfile();scene.setWeather(currentField,state.forcing==='muifa_day'?21.2:state.peak);scenarioRequest++;clearTimeout(scenarioTimer);scenarioTimer=setTimeout(()=>requestScenario(),140);}

const rainCanvas=document.createElement('canvas');rainCanvas.width=rainCanvas.height=256;
function rainImage(){
  const ctx=rainCanvas.getContext('2d'),pixels=ctx.createImageData(256,256);
  for(let row=0;row<256;row++)for(let col=0;col<256;col++){
    const lon=118.375+(col+.5)/256*4.25,lat=31.625-(row+.5)/256*4.25;
    const rain=currentField(lon,lat).rain,i=(row*256+col)*4;
    if(rain===null)continue;const t=Math.min(rain/30,1);
    pixels.data.set([Math.round(226-t*177),Math.round(232-t*135),Math.round(211-t*90),Math.round(18+Math.min(rain/20,1)*158)],i);
  }ctx.putImageData(pixels,0,0);return rainCanvas.toDataURL();
}
function trackData(){
  const name=state.event==='muifa'?'MUIFA':'IN-FA';const points=tracks.features.filter(f=>f.properties.name===name);
  const when=Date.parse(currentRows()[state.index].time),nearest=points.reduce((a,b)=>Math.abs(Date.parse(a.properties.time_utc)-when)<=Math.abs(Date.parse(b.properties.time_utc)-when)?a:b);
  return {type:'FeatureCollection',features:[{type:'Feature',geometry:{type:'LineString',coordinates:points.map(p=>p.geometry.coordinates)},properties:{}},
    {type:'Feature',geometry:nearest.geometry,properties:nearest.properties}]};
}
function initMap(){
  if(map)return;
  maplibregl.setWorkerUrl?.(new URL('./vendor/maplibre-gl-worker.mjs',import.meta.url).href);
  map=new maplibregl.Map({container:'regionMap',center:[120.85,29.35],zoom:6.1,minZoom:4,maxZoom:11,
    attributionControl:false,style:{version:8,sources:{},layers:[{id:'bg',type:'background',paint:{'background-color':'#dce8e6'}}]},fadeDuration:0});
  map.on('error',e=>console.warn('地图资料',e.error?.message));
  map.on('load',()=>{
    map.addSource('provinces',{type:'geojson',data:provinces});
    map.addLayer({id:'land',source:'provinces',type:'fill',paint:{'fill-color':'#e7e7d8','fill-opacity':1}});
    map.addLayer({id:'borders',source:'provinces',type:'line',paint:{'line-color':'#b8c5b7','line-width':.7}});
    map.addSource('rain',{type:'image',url:rainImage(),coordinates:[[118.375,31.625],[122.625,31.625],[122.625,27.375],[118.375,27.375]]});
    map.addLayer({id:'rain-image',source:'rain',type:'raster',paint:{'raster-opacity':.8,'raster-fade-duration':0}});
    map.addSource('track',{type:'geojson',data:trackData()});
    map.addLayer({id:'track-line',source:'track',type:'line',filter:['==','$type','LineString'],paint:{'line-color':'#af734c','line-width':1.5,'line-dasharray':[2,2]}});
    map.addLayer({id:'center-halo',source:'track',type:'circle',filter:['==','$type','Point'],paint:{'circle-radius':16,'circle-color':'#bd8050','circle-opacity':.12}});
    map.addLayer({id:'center',source:'track',type:'circle',filter:['==','$type','Point'],paint:{'circle-radius':5,'circle-color':'#bd8050','circle-stroke-color':'#f6f3e4','circle-stroke-width':2}});
    for(const [city,coords] of [['宁波',[121.544,29.8683]],['台州',[121.4208,28.6564]],['温州',[120.6994,27.9943]]]){
      const element=document.createElement('button');element.className='region-marker';element.textContent=city;element.setAttribute('aria-label',`查看${city}风雨`);element.onclick=e=>{e.stopPropagation();selectCity(city);};
      const marker=new maplibregl.Marker({element}).setLngLat(coords).addTo(map);markers.push({city,element,marker});
    }
    for(const [text,coords] of [['杭州',[120.15,30.28]],['浙江',[119.78,29.25]],['东海',[122.5,29.6]],['舟山',[122.20,30.0]]]){
      const el=document.createElement('span');el.textContent=text;el.style.cssText='font:10px Microsoft YaHei;color:#6d8c81;pointer-events:none';new maplibregl.Marker({element:el}).setLngLat(coords).addTo(map);
    }
    mapReady=true;updateMap();resizeMapWind();
  });
  map.on('click',e=>{
    if(e.originalEvent.target.closest?.('.region-marker'))return;
    const points=regional[state.event].sites;const lon=e.lngLat.lng,lat=e.lngLat.lat;
    if(lon<118.375||lon>122.625||lat<27.375||lat>31.625){toast('这个位置的区域风雨资料待补充。');return;}
    state.regionSite=points.reduce((a,b)=>(a.lon-lon)**2+(a.lat-lat)**2<(b.lon-lon)**2+(b.lat-lat)**2?a:b);clearAnswer();
    const d=state.regionSite;new maplibregl.Popup({closeButton:true}).setLngLat([d.lon,d.lat]).setHTML(`<div>关注网格<br>${d.lon.toFixed(2)}°E，${d.lat.toFixed(2)}°N<br>过去一小时 ${esc(d.rain[state.index])} 毫米</div>`).addTo(map);updateWeather();
  });
  map.on('resize',resizeMapWind);
}
function updateMap(){map.getSource('rain')?.updateImage({url:rainImage()});map.getSource('track')?.setData(trackData());}
const mapParticles=Array.from({length:520},()=>({lon:118.5+Math.random()*4,lat:27.5+Math.random()*4,life:Math.random()*4}));
function resizeMapWind(){const r=$('stage').getBoundingClientRect();$('mapWind').width=r.width*devicePixelRatio;$('mapWind').height=r.height*devicePixelRatio;$('mapWind').style.width=r.width+'px';$('mapWind').style.height=r.height+'px';}
let windLast=0;
function animateMapWind(now){
  requestAnimationFrame(animateMapWind);if(!mapReady||state.view!=='region'||document.hidden||now-windLast<40)return;
  const dt=Math.min((now-windLast)/1000,.08);windLast=now;
  const canvas=$('mapWind'),ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);if(!state.wind)return;
  ctx.save();ctx.scale(devicePixelRatio,devicePixelRatio);ctx.strokeStyle='#236e6660';ctx.lineWidth=.8;ctx.beginPath();
  for(const p of mapParticles){p.life-=dt;if(p.life<0){p.lon=118.5+Math.random()*4;p.lat=27.5+Math.random()*4;p.life=3+Math.random()*3;}
    const field=currentField(p.lon,p.lat);p.lon+=field.u*dt*.0016;p.lat+=field.v*dt*.0016;const a=map.project([p.lon,p.lat]),b=map.project([p.lon-field.u*.0016,p.lat-field.v*.0016]);ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
  }ctx.stroke();ctx.restore();
}
requestAnimationFrame(animateMapWind);

async function ask(question){
  const version=++askRequest;askAbort?.abort();askAbort=new AbortController();$('answer').textContent='正在查找相关原文。';
  try{
    if(state.regionSite&&/雨量|多少雨|降雨|风速/.test(question)&&!/梅花|烟花|宁波|台州|温州|河道|余姚/.test(question)){
      const row=currentRows()[state.index];$('answer').textContent=`关注网格过去一小时降雨 ${row.precipitation} 毫米，10 米高度风速 ${row.wind_speed_10m} m/s。来源：ERA5 历史再分析。`;return;
    }
    const result=await answerLocal(question,window.__rainHere);if(version!==askRequest)return;
    $('answer').innerHTML=`<p>${esc(result.answer)}</p>`+(result.evidence||[]).map(e=>`<a href="${esc(e.source_url)}" target="_blank" rel="noopener">${esc(e.source_name||e.title)}${e.page?` · 第 ${e.page} 页`:''} ↗</a>`).join('');
  }catch(e){if(version===askRequest&&e.name!=='AbortError')$('answer').textContent=e.message;}
}

function pickPoint(p){
  window.dispatchEvent(new CustomEvent('place-picked',{detail:p}));
  $('pointInfo').innerHTML=`<button aria-label="关闭格点资料">×</button><span>当前格点 · 情景最大积水</span><strong>${(p.depth*100).toFixed(1)} <small>cm</small></strong><p>基准 ${(p.baseline*100).toFixed(1)} cm</p><p>${p.lon.toFixed(3)}°E，${p.lat.toFixed(3)}°N</p><small>180 米计算网格 · ${state.scenario?.hours||4} 小时情景</small>`;
  $('pointInfo').classList.remove('hidden');$('pointInfo').querySelector('button').onclick=()=>$('pointInfo').classList.add('hidden');
}

try{
  scene=new CityScene($('scene3d'),terrain,physical,pickPoint);scene.visible=false;scene.reduced=reduced;scene.windOn=state.wind;scene.rainOn=state.rain;
  scene.setWeather(currentField,currentRows()[state.index].precipitation);await scene.loadBuildings();$('loading').classList.add('hidden');
}catch(error){$('loading').innerHTML=`<p>三维画面暂时中断。</p><p>${esc(error.message)}</p><button id="fallbackMap">查看浙江风雨</button>`;console.error(error);
  $('fallbackMap').onclick=()=>{$('loading').classList.add('hidden');scene={visible:false,setWeather(){},setMode(){}};setView('region');};
}

document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));
$('eventSelect').onchange=()=>{state.event=$('eventSelect').value;state.regionSite=null;state.index=Math.min(state.index,currentRows().length-1);clearAnswer();updateWeather();};
$('citySelect').onchange=()=>selectCity($('citySelect').value);$('compareCity').onchange=updateWeather;
$('timeRange').oninput=()=>setIndex(+$('timeRange').value);
$('rainChart').onclick=e=>{const rect=$('rainChart').getBoundingClientRect();setIndex(Math.floor((e.clientX-rect.left)/rect.width*currentRows().length));};
document.querySelectorAll('[data-hours]').forEach(b=>b.onclick=()=>{state.hours=+b.dataset.hours;clearAnswer();updateWeather();});
$('peakButton').onclick=()=>{const rows=currentRows();setIndex(rows.reduce((best,row,i)=>row.precipitation>rows[best].precipitation?i:best,0));};
$('playButton').onclick=()=>{state.playing=!state.playing;$('playButton').textContent=state.playing?'Ⅱ':'▶';$('playButton').setAttribute('aria-label',state.playing?'暂停历史风雨':'播放历史风雨');};
setInterval(()=>{if(state.playing&&state.mode==='history'&&!document.hidden)setIndex((state.index+1)%currentRows().length);},1000);
$('windToggle').onchange=()=>{state.wind=$('windToggle').checked;scene.windOn=state.wind;};
$('rainToggle').onchange=()=>{state.rain=$('rainToggle').checked;scene.rainOn=state.rain;};
$('buildingsToggle').onchange=()=>{state.buildings=$('buildingsToggle').checked;if(scene.buildings)scene.buildings.visible=state.buildings;};
$('zoomIn').onclick=()=>state.view==='region'?map?.zoomIn():scene.zoom(.8);
$('zoomOut').onclick=()=>state.view==='region'?map?.zoomOut():scene.zoom(1.25);
$('rotate').onclick=()=>state.view==='region'?map?.easeTo({bearing:map.getBearing()+30}):scene.rotate();
$('resetCamera').onclick=()=>state.view==='rainform'?rainform.reset():state.view==='region'?map?.flyTo({center:[120.85,29.35],zoom:6.1,bearing:0}):scene.setView(state.view);
document.querySelectorAll('[data-surface]').forEach(b=>b.onclick=()=>{state.surface=b.dataset.surface;scene.setSurface(state.surface);document.querySelectorAll('[data-surface]').forEach(v=>v.classList.toggle('active',v===b));setView(state.view);});
 document.querySelectorAll('[data-forcing]').forEach(b=>b.onclick=()=>{state.forcing=b.dataset.forcing;if(state.forcing==='muifa_day')state.drainage=Math.round(state.drainage/6)*6;$('drainRange').value=state.drainage;drawProfile();clearTimeout(scenarioTimer);requestScenario();});
 $('peakRange').oninput=changeScenario;$('drainRange').oninput=changeScenario;
$('verifyButton').onclick=()=>{clearTimeout(scenarioTimer);requestScenario('physical');};
function updateCompare(value){state.compare=Math.min(.95,Math.max(.05,value));scene.compare=state.compare;$('compareRange').value=state.compare*100;$('compareDivider').style.left=`${state.compare*100}%`;}
$('compareRange').oninput=()=>updateCompare(+$('compareRange').value/100);
let dragging=false;$('dividerHandle').onpointerdown=e=>{dragging=true;e.target.setPointerCapture(e.pointerId);e.preventDefault();};
$('dividerHandle').onpointermove=e=>{if(dragging){const r=$('stage').getBoundingClientRect();updateCompare((e.clientX-r.left)/r.width);}};
$('dividerHandle').onpointerup=()=>dragging=false;
$('sourcesButton').onclick=()=>$('sourcesDialog').showModal();$('closeSources').onclick=()=>$('sourcesDialog').close();
$('sourcesDialog').onclick=e=>{const r=$('sourcesDialog').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('sourcesDialog').close();};
$('askForm').onsubmit=e=>{e.preventDefault();ask($('question').value.trim());};
document.querySelectorAll('[data-question]').forEach(b=>b.onclick=()=>{$('question').value=b.dataset.question;ask(b.dataset.question);});

fetch('data/client_ai_report.json').then(r=>r.json()).then(r=>{const s=r.held_out_test_score;$('modelEvidence').textContent='113 个完整情景：77 训练、12 校准、24 测试。当前核回归快估在测试情景中的平均差 '+(s.mae_m*1000).toFixed(3)+' 毫米；10 厘米阈值重合指标 '+(s.csi_010m*100).toFixed(1)+'%。';}).catch(()=>{$('modelEvidence').textContent='模型检验资料可在项目说明中查看。';});
rainform=new RainformController({rows:currentRows,context:()=>{const site=state.regionSite||eventData().sites.find(s=>s.name===state.city);return {index:state.index,place:state.regionSite?'关注网格':state.city,lon:site.lon??site.returned_longitude,lat:site.lat??site.returned_latitude};},onIndex:setIndex});
updateWeather();drawProfile();
window.__rainHere={state,scene,rainform,get map(){return map},fieldFor,rainSum,setMode,setView,setIndex,selectCity,pickPoint,
  snapshot:()=>({state:{...state,scenario:state.scenario?{...state.scenario,peak_depth_m:undefined,baseline_peak_depth_m:undefined}:null},
    triangles:scene.renderer?.info.render.triangles,camera:scene.camera?.position.toArray(),field:currentField(121.5,29.75)})};

window.__rainHere.applyScenario=async ({peak=state.peak,drainage=state.drainage,forcing='four_hours'})=>{
  if(!Number.isFinite(peak)||peak<10||peak>60||!Number.isFinite(drainage)||drainage<0||drainage>12)return;
  if(!['four_hours','muifa_day'].includes(forcing))return;
  if(forcing==='muifa_day'&&![0,6,12].includes(drainage))return;
  state.peak=peak;state.drainage=drainage;state.forcing=forcing;
  $('peakRange').value=peak;$('drainRange').value=drainage;drawProfile();
  if(state.mode!=='scenario')await setMode('scenario');else await requestScenario();
};
window.__rainHere.showScenario=showScenario;
window.__rainHere.localAI=localAI;window.__rainHere.currentRows=currentRows;
await import('./mission.js').then(m=>m.connect(window.__rainHere));
await import('./preparedness.js').then(m=>m.connectPreparedness(window.__rainHere));

window.addEventListener('local-ai-busy',e=>{scene.busy=e.detail;});
