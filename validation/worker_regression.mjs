import fs from 'node:fs';
import path from 'node:path';
import {Worker,isMainThread,parentPort,workerData} from 'node:worker_threads';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
if(!isMainThread){
  globalThis.onmessage=null;globalThis.postMessage=x=>parentPort.postMessage(x);
  globalThis.fetch=async name=>{const p=path.join(workerData.web,String(name)),b=fs.readFileSync(p);return {json:async()=>JSON.parse(b.toString()),arrayBuffer:async()=>b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength)};};
  await import(pathToFileURL(path.join(workerData.web,'ai-worker.js')).href);
  parentPort.on('message',data=>globalThis.onmessage({data}));parentPort.postMessage({ready:true});
}else{
  const w=new Worker(fileURLToPath(import.meta.url),{workerData:{web:path.join(root,'web')}});let seq=0;const pending=new Map();let start;
  w.on('message',x=>{if(x.ready){start();return;}const q=pending.get(x.id);if(q){pending.delete(x.id);x.error?q.reject(Error(x.error)):q.resolve(x.result);}});
  w.on('error',e=>{for(const q of pending.values())q.reject(e);});
  await new Promise(r=>start=r);const call=(type,payload)=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});w.postMessage({id,type,payload});});
  const checks=[];const check=(name,pass,evidence)=>{checks.push({name,pass:!!pass,evidence});if(!pass)console.error('FAIL',name);};
  try{
    let r=await call('scenario',{peak:30,drainage:6,forcing:'four_hours'});check('trained AI scenario',Math.abs(r.metrics.area_above_010m_km2-42.4116)<1e-6,r.metrics);
    r=await call('scenario',{peak:30,drainage:6,forcing:'muifa_day'});check('historical original report preserved',r.metrics.area_above_010m_km2===88.6788,{report:r.metrics.area_above_010m_km2,export:r.metrics.export_grid_area_above_010m_km2});
    r=await call('screening',{peak:30,places:[{id:'inside',lon:121.5,lat:29.86},{id:'outside',lon:120.15,lat:30.28}]});
    check('9 deliberately chosen cases',r.scenarios.length===9&&r.probability===false,r.scenarios);
    check('outside point receives no depth',r.places[1].coverage==='outside'&&r.places[1].max_cm===undefined,r.places[1]);
    check('in-grid point has 9 case records',r.places[0].cases.length===9,r.places[0]);
    check('8 and 12 cm threshold counts ordered',r.places.every(p=>p.coverage!=='in_grid'||p.threshold_sensitivity.at_8cm>=p.exceed_count&&p.exceed_count>=p.threshold_sensitivity.at_12cm));
    check('candidate cells exclude water and have real road overlap',r.candidates.length>0&&r.candidates.every(c=>c.land_class===50&&c.road_sample_km>=.03),r.candidates.map(c=>({cell:c.grid_index,count:c.exceed_count,road_km:c.road_sample_km})));
    check('field validation explicitly pending',r.field_validation==='pending');
    check('map counts bounded',r.grid_exceed_counts.length===16641&&r.grid_exceed_counts.every(x=>x>=0&&x<=9));
    const chosen=r.candidates[0],direct=await call('scenario',{peak:30,drainage:6,forcing:'four_hours'}),registered=await call('screening',{peak:30,places:[{id:'candidate',lon:chosen.grid_lon,lat:chosen.grid_lat}]});
    check('location evidence matches actual AI field',Math.abs(registered.places[0].cases.find(c=>c.peak_mm_h===30&&c.drainage_mm_h===6).depth_cm-direct.peak_depth_m[chosen.grid_index]*100)<1e-8);
    for(const peak of [20,50]){const a=await call('screening',{peak,places:[]});check('sensitivity set in model domain '+peak,a.peaks.every(x=>x>=10&&x<=60)&&a.scenarios.length===9,{time_ms:a.client_ms,peaks:a.peaks});}
    for(const payload of [{peak:19,places:[]},{peak:51,places:[]},{peak:30,places:Array.from({length:31},(_,i)=>({id:String(i),lon:121.5,lat:29.86}))}]){let rejected=false;try{await call('screening',payload);}catch(e){rejected=true;}check('invalid scope rejected '+JSON.stringify({peak:payload.peak,n:payload.places.length}),rejected);}
    const out={created:new Date().toISOString(),engine:'Node worker_threads, same ES module as browser; local files only',checks,passed:checks.filter(c=>c.pass).length,total:checks.length,field_validation:'pending',first_screening_ms:r.client_ms};
    fs.writeFileSync(path.join(root,'validation','client_worker_regression_v3.json'),JSON.stringify(out,null,2));console.log(JSON.stringify({passed:out.passed,total:out.total,first_screening_ms:out.first_screening_ms,candidates:r.candidates.length}));if(out.passed!==out.total)process.exitCode=1;
  }finally{await w.terminate();}
}
