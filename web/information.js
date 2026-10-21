export async function answerLocal(question,api){
 const s=api.state,q=question.trim(),rows=api.currentRows(),row=rows[s.index];
 const source={source_name:'ECMWF ERA5 历史再分析',source_url:'https://open-meteo.com/en/docs/historical-weather-api'};
 if(/今天|明天|后天|安全吗|能不能走|能开车|撤离|我家|小区积水|路口积水/.test(q))return {answer:'实时预警、通行和转移信息可以查看当地气象、交通与应急部门的最新发布。这里记录历史风雨与设定情景。',evidence:[{source_name:'浙江气象',source_url:'https://zj.cma.gov.cn/'}],kind:'official_information'};
 const place=['宁波','台州','温州'].find(x=>q.includes(x)),event=q.includes('梅花')?'muifa':q.includes('烟花')?'infa':s.event,match=event===s.event&&(!place||place===s.city)&&!(/余姚|北渡|海曙|全市|过程|河道|水位/.test(q));
 if(match&&/多少雨|雨量多少|下了多少|此刻雨量|当地雨量|过去.*小时/.test(q)){const h=/24|一天/.test(q)?24:/6/.test(q)?6:s.hours,value=api.rainSum(rows,s.index,h);return {answer:value===null?'所选累计时段的连续资料待补充。':(s.regionSite?'关注网格':s.city)+'，截至 '+row.time.slice(0,16).replace('T',' ')+'，过去 '+h+' 小时累计 '+value.toFixed(1)+' 毫米，每平方米约接到 '+value.toFixed(1)+' 升雨水。',evidence:[source],kind:'numeric'};}
 if(match&&/风速多少|风多大|阵风多少|当地风速/.test(q))return {answer:(s.regionSite?'关注网格':s.city)+'，'+row.time.slice(0,16).replace('T',' ')+'，10 米高度风速 '+Number(row.wind_speed_10m).toFixed(1)+' m/s，阵风 '+Number(row.wind_gusts_10m).toFixed(1)+' m/s。',evidence:[source],kind:'numeric'};
 const docs=await fetch('data/evidence.json').then(r=>r.json()),bigrams=t=>new Set(Array.from(t).slice(0,-1).map((c,i)=>c+t[i+1])),qb=bigrams(q),intent=/强降雨|集中|时段/.test(q)?'muifa-rain-period':/余姚.*水位|余姚.*河道/.test(q)?'muifa-yuyao-water':/北渡.*水位/.test(q)?'muifa-beidu-water':/全市.*雨|过程.*雨/.test(q)?'muifa-city-rain':null;
 const candidates=docs.filter(d=>(d.event==='all'||d.event===event)&&(!place||!d.regions?.length||d.regions.includes(place))).map(d=>{const db=bigrams(d.title+' '+d.summary),n=[...qb].filter(x=>db.has(x)).length;return {d,score:n/(Math.sqrt(qb.size*db.size)||1)+(d.id===intent?3:0)}}).sort((a,b)=>b.score-a.score);
 const found=candidates[0];if(!found||found.score<.07)return {answer:'这个问题的资料待补充。可以查看水情年报，或选择已记录的历史风雨。',evidence:[],kind:'missing'};
 return {answer:found.d.summary,evidence:[found.d],kind:'source_summary',retrieval:'local lexical matching; fixed verified summaries'};
}
