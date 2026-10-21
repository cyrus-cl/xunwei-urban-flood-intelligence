// Scenario counts describe a deliberately chosen sensitivity set, never probability.
export const LAND={10:'林地',20:'灌木地',30:'草地',40:'耕地',50:'建设用地',60:'裸地',70:'冰雪',80:'常年水体',90:'湿地',95:'红树林',100:'苔藓地'};
export function nearestCell(grid,lon,lat){
  if(!Number.isFinite(lon)||!Number.isFinite(lat))return null;
  const cos=Math.cos(lat*Math.PI/180);let index=-1,d2=Infinity;
  for(let i=0;i<grid.longitude.length;i++){let d=((grid.longitude[i]-lon)*cos)**2+(grid.latitude[i]-lat)**2;if(d<d2){d2=d;index=i;}}
  const row=Math.floor(index/grid.size),col=index%grid.size,distance=Math.sqrt(d2)*111320;
  return row>0&&row<grid.size-1&&col>0&&col<grid.size-1&&distance<=150?{index,distance_m:distance}:null;
}
export function inspectCell(index,fields,grid,exposure){
  const values=fields.map(f=>f.depth[index]),sorted=[...values].sort((a,b)=>a-b),n=grid.size;
  const neighbors=[];for(let r=-1;r<=1;r++)for(let c=-1;c<=1;c++){let j=index+r*n+c;if(j>=0&&j<n*n)for(let f of fields)neighbors.push(f.depth[j]);}
  const count=t=>values.filter(x=>x>=t).length,land=exposure.worldcover_class_at_grid_center[index];
  return {grid_index:index,grid_lon:grid.longitude[index],grid_lat:grid.latitude[index],land_class:land,land_name:LAND[land]||'分类待核对',permanent_water:land===80,
    exceed_count:count(.1),scenario_count:fields.length,threshold_cm:10,threshold_sensitivity:{at_8cm:count(.08),at_12cm:count(.12)},
    min_cm:sorted[0]*100,median_cm:sorted[Math.floor(sorted.length/2)]*100,max_cm:sorted.at(-1)*100,
    nearby_3x3_min_cm:Math.min(...neighbors)*100,nearby_3x3_max_cm:Math.max(...neighbors)*100,
    road_sample_km:exposure.road_km_per_grid[index],cases:fields.map((f,i)=>({peak_mm_h:f.peak,drainage_mm_h:f.drainage,depth_cm:values[i]*100})),
    interpretation:land===80?'常年水体格点，请核对实际地点':'180 米格点情景筛查，现场情况待核对'};
}
export function screenPlaces(places,fields,grid,exposure){
  if(!Array.isArray(places)||places.length>30)throw Error('关注地点最多保存 30 处');
  return places.map(p=>{const q=nearestCell(grid,Number(p.lon),Number(p.lat));return q?{id:p.id,...inspectCell(q.index,fields,grid,exposure),snap_distance_m:q.distance_m,coverage:'in_grid'}:{id:p.id,coverage:'outside',interpretation:'地点在计算范围之外，暂保留为待核对地点'};});
}
export function screeningCandidates(fields,grid,exposure){
  const candidates=[];for(let i=grid.size+1;i<grid.longitude.length-grid.size;i++){let c=i%grid.size;if(c===0||c===grid.size-1||exposure.worldcover_class_at_grid_center[i]!==50||exposure.road_km_per_grid[i]<.03)continue;
    const count=fields.reduce((s,f)=>s+(f.depth[i]>=.1?1:0),0);if(count<Math.ceil(fields.length*2/3))continue;
    candidates.push({i,count,road:exposure.road_km_per_grid[i]});}
  candidates.sort((a,b)=>b.count-a.count||b.road-a.road||a.i-b.i);
  const selected=[];for(let c of candidates){if(selected.some(o=>Math.hypot((grid.longitude[c.i]-grid.longitude[o.i])*.868,grid.latitude[c.i]-grid.latitude[o.i])*111320<650))continue;selected.push(c);if(selected.length===8)break;}
  return selected.map(c=>inspectCell(c.i,fields,grid,exposure));
}
