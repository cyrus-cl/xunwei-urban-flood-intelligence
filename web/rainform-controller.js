/** Connect the isolated Rainform derivative to actual historical records. */
export class RainformController {
  constructor({rows,context,onIndex}) {
    this.rows=rows;this.context=context;this.onIndex=onIndex;this.ready=false;this.active=false;this.pack=null;
    this.frame=document.getElementById('rainformFrame');this.select=document.getElementById('rainDaySelect');
    this.select.addEventListener('change',()=>{const i=this.rows().findIndex(r=>r.time.startsWith(this.select.value+'T00:00'));if(i>=0)this.onIndex(i+12);});
    document.getElementById('rainExport').onclick=()=>this.export();
    window.addEventListener('message',e=>{
      if(e.origin!==location.origin||e.source!==this.frame.contentWindow||!e.data)return;
      if(e.data.type==='rainform-ready'){this.ready=true;this.sync();}
      if(e.data.type==='rainform-hour'&&this.active&&this.pack&&Number.isInteger(e.data.hour)&&e.data.hour>=0&&e.data.hour<=24){this.onIndex(this.pack.start+e.data.hour);}
    });
    document.addEventListener('visibilitychange',()=>this.post({type:'rainform-visible',visible:this.active&&!!this.pack&&!document.hidden}));
  }
  post(data){if(this.ready)this.frame.contentWindow.postMessage(data,location.origin);}
  setVisible(visible){this.active=visible;if(visible&&!this.frame.getAttribute('src'))this.frame.src='vendor/rainform/index.html?lang=zh-CN';this.sync();}
  sync(){
    const rows=this.rows(),context=this.context(),day=rows[context.index]?.time.slice(0,10),days=[...new Set(rows.map(r=>r.time.slice(0,10)))];
    const complete=date=>{const i=rows.findIndex(r=>r.time.startsWith(date+'T00:00'));const slice=rows.slice(i,i+25);return i>=0&&slice.length===25&&slice.every((r,j)=>Number.isFinite(r.precipitation)&&Date.parse(r.time)===Date.parse(slice[0].time)+j*3600000);};
    this.select.replaceChildren(...days.map(date=>{const o=document.createElement('option');o.value=date;o.textContent=`${Number(date.slice(5,7))} 月 ${Number(date.slice(8))} 日${complete(date)?'':' · 资料待补充'}`;o.disabled=!complete(date);return o;}));this.select.value=day;
    const i=rows.findIndex(r=>r.time.startsWith(day+'T00:00'));this.pack=complete(day)?{start:i,rows:rows.slice(i,i+25),day}:null;
    const gap=document.getElementById('rainformGap');gap.classList.toggle('hidden',!this.active||!!this.pack);
    this.frame.classList.toggle('hidden',!this.active||!this.pack);document.getElementById('rainExport').disabled=!this.pack;
    document.getElementById('rainDayPlace').textContent=context.place;
    if(this.pack){
      const values=this.pack.rows.map(r=>r.precipitation),total=values.slice(1).reduce((a,b)=>a+b,0),max=Math.max(...values.slice(1));
      document.getElementById('rainDayTotal').textContent=total.toFixed(1);document.getElementById('rainDayPeak').textContent=max.toFixed(1);
      const metadata={date:day,place:context.place,lon:context.lon,lat:context.lat,timezone:'Asia/Shanghai',source:'ECMWF ERA5 via Open-Meteo',unit:'mm in preceding hour',total_mm:total};
      this.pack.metadata=metadata;
      this.post({type:'rainform-data',values,hour:context.index-i,metadata});
    }else{document.getElementById('rainDayTotal').textContent='—';document.getElementById('rainDayPeak').textContent='—';}
    this.post({type:'rainform-visible',visible:this.active&&!!this.pack&&!document.hidden});
  }
  reset(){this.post({type:'rainform-reset'});}
  export(){
    if(!this.pack)return;const p=this.pack,c=p.metadata;
    const csv='\ufeff'+[['record_time_utc_plus_08','precipitation_preceding_hour_mm','wind_speed_10m_m_s','wind_from_deg','gust_10m_m_s','grid_lon','grid_lat','source'],...p.rows.map(r=>[r.time,r.precipitation,r.wind_speed_10m,r.wind_direction_10m,r.wind_gusts_10m,c.lon,c.lat,'ECMWF ERA5 via Open-Meteo'])].map(a=>a.join(',')).join('\r\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=`ERA5_${c.lon.toFixed(2)}E_${c.lat.toFixed(2)}N_${p.day}.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
}
