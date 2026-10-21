(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ts="165",Oi={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,ys=1,Uu=2,gc=1,Fu=2,Nn=3,si=0,Qt=1,jt=2,ai=0,ln=1,ur=2,Es=3,ws=4,vc=5,ei=100,Iu=101,Nu=102,Ou=103,Bu=104,zu=200,zo=201,ku=202,Hu=203,ko=204,Ho=205,Gu=206,Vu=207,Wu=208,Xu=209,Yu=210,qu=211,Zu=212,Ku=213,$u=214,ju=0,Ju=1,Qu=2,Aa=3,ed=4,td=5,nd=6,id=7,_c=0,rd=1,ad=2,oi=0,od=1,sd=2,ld=3,cd=4,ud=5,dd=6,hd=7,xc=300,dr=301,hr=302,Go=303,Vo=304,ka=306,Wo=1e3,Mn=1001,Xo=1002,Jt=1003,fd=1004,Yr=1005,At=1006,Qa=1007,Ai=1008,li=1009,pd=1010,md=1011,Ta=1012,Sc=1013,fr=1014,On=1015,kr=1016,Mc=1017,yc=1018,pr=1020,gd=35902,vd=1021,_d=1022,pn=1023,xd=1024,Sd=1025,or=1026,mr=1027,Md=1028,Ec=1029,yd=1030,wc=1031,bc=1033,eo=33776,to=33777,no=33778,io=33779,bs=35840,As=35841,Ts=35842,Cs=35843,Rs=36196,Ps=37492,Ds=37496,Ls=37808,Us=37809,Fs=37810,Is=37811,Ns=37812,Os=37813,Bs=37814,zs=37815,ks=37816,Hs=37817,Gs=37818,Vs=37819,Ws=37820,Xs=37821,ro=36492,Ys=36494,qs=36495,Ed=36283,Zs=36284,Ks=36285,$s=36286,wd=3200,bd=3201,Ad=0,Td=1,ti="",on="srgb",hi="srgb-linear",ns="display-p3",Ha="display-p3-linear",Ca="linear",ct="srgb",Ra="rec709",Pa="p3",zi=7680,js=519,Cd=512,Rd=513,Pd=514,Ac=515,Dd=516,Ld=517,Ud=518,Fd=519,Js=35044,It=35048,Qs="300 es",Bn=2e3,Da=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const Ur=Math.PI/180,Nr=180/Math.PI;function Mr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function is(i,e){return(i%e+e)%e}function Id(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Nd(i,e,t){return i!==e?(t-i)/(e-i):0}function Fr(i,e,t){return(1-t)*i+t*e}function Od(i,e,t,n){return Fr(i,e,1-Math.exp(-t*n))}function Bd(i,e=1){return e-Math.abs(is(i,e*2)-e)}function zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gd(i,e){return i+Math.random()*(e-i)}function Vd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&(el=i);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xd(i){return i*Ur}function Yd(i){return i*Nr}function qd(i){return(i&i-1)===0&&i!==0}function Zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $d(i,e,t,n,r){const a=Math.cos,o=Math.sin,s=a(t/2),c=o(t/2),l=a((e+n)/2),d=o((e+n)/2),h=a((e-n)/2),f=o((e-n)/2),m=a((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(s*d,c*h,c*f,s*l);break;case"YZY":i.set(c*f,s*d,c*h,s*l);break;case"ZXZ":i.set(c*h,c*f,s*d,s*l);break;case"XZX":i.set(s*d,c*v,c*m,s*l);break;case"YXY":i.set(c*m,s*d,c*v,s*l);break;case"ZYZ":i.set(c*v,c*m,s*d,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ci={DEG2RAD:Ur,RAD2DEG:Nr,generateUUID:Mr,clamp:Gt,euclideanModulo:is,mapLinear:Id,inverseLerp:Nd,lerp:Fr,damp:Od,pingpong:Bd,smoothstep:zd,smootherstep:kd,randInt:Hd,randFloat:Gd,randFloatSpread:Vd,seededRandom:Wd,degToRad:Xd,radToDeg:Yd,isPowerOfTwo:qd,ceilPowerOfTwo:Zd,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:$d,normalize:Xt,denormalize:ir};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,r,a,o,s,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l)}set(e,t,n,r,a,o,s,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],m=n[5],v=n[8],_=r[0],p=r[3],u=r[6],E=r[1],S=r[4],A=r[7],D=r[2],C=r[5],T=r[8];return a[0]=o*_+s*E+c*D,a[3]=o*p+s*S+c*C,a[6]=o*u+s*A+c*T,a[1]=l*_+d*E+h*D,a[4]=l*p+d*S+h*C,a[7]=l*u+d*A+h*T,a[2]=f*_+m*E+v*D,a[5]=f*p+m*S+v*C,a[8]=f*u+m*A+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*s*l-n*a*d+n*s*c+r*a*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=d*o-s*l,f=s*c-d*a,m=l*a-o*c,v=t*h+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*l-d*n)*_,e[2]=(s*n-r*o)*_,e[3]=f*_,e[4]=(d*t-r*c)*_,e[5]=(r*a-s*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new qe;function Tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jd(){const i=La("canvas");return i.style.display="block",i}const tl={};function Cc(i){i in tl||(tl[i]=!0,console.warn(i))}function Jd(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const nl=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qr={[hi]:{transfer:Ca,primaries:Ra,toReference:i=>i,fromReference:i=>i},[on]:{transfer:ct,primaries:Ra,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ha]:{transfer:Ca,primaries:Pa,toReference:i=>i.applyMatrix3(il),fromReference:i=>i.applyMatrix3(nl)},[ns]:{transfer:ct,primaries:Pa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(il),fromReference:i=>i.applyMatrix3(nl).convertLinearToSRGB()}},Qd=new Set([hi,Ha]),at={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=qr[e].toReference,r=qr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return qr[i].primaries},getTransfer:function(i){return i===ti?Ca:qr[i].transfer}};function sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class eh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=La("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=sr(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let th=0;class Rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(so(r[o].image)):a.push(so(r[o]))}else a=so(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nh=0;class Vt extends Ui{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Mn,r=Mn,a=At,o=Ai,s=pn,c=li,l=Vt.DEFAULT_ANISOTROPY,d=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Mr(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=xc;Vt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],m=c[5],v=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,A=(m+1)/2,D=(u+1)/2,C=(d+f)/4,T=(h+_)/4,O=(v+p)/4;return S>A&&S>D?S<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(S),r=C/n,a=T/n):A>D?A<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),n=C/r,a=O/r):D<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),n=T/a,r=O/a),this.set(n,r,a,t),this}let E=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(p-v)/E,this.y=(h-_)/E,this.z=(f-d)/E,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Vt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends ih{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pc extends Vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rh extends Vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let c=n[r+0],l=n[r+1],d=n[r+2],h=n[r+3];const f=a[o+0],m=a[o+1],v=a[o+2],_=a[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(h!==_||c!==f||l!==m||d!==v){let p=1-s;const u=c*f+l*m+d*v+h*_,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const D=Math.sqrt(S),C=Math.atan2(D,u*E);p=Math.sin(p*C)/D,s=Math.sin(s*C)/D}const A=s*E;if(c=c*p+f*A,l=l*p+m*A,d=d*p+v*A,h=h*p+_*A,p===1-s){const D=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=D,l*=D,d*=D,h*=D}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],c=n[r+1],l=n[r+2],d=n[r+3],h=a[o],f=a[o+1],m=a[o+2],v=a[o+3];return e[t]=s*v+d*h+c*m-l*f,e[t+1]=c*v+d*f+l*h-s*m,e[t+2]=l*v+d*m+s*f-c*h,e[t+3]=d*v-s*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),d=s(r/2),h=s(a/2),f=c(n/2),m=c(r/2),v=c(a/2);switch(o){case"XYZ":this._x=f*d*h+l*m*v,this._y=l*m*h-f*d*v,this._z=l*d*v+f*m*h,this._w=l*d*h-f*m*v;break;case"YXZ":this._x=f*d*h+l*m*v,this._y=l*m*h-f*d*v,this._z=l*d*v-f*m*h,this._w=l*d*h+f*m*v;break;case"ZXY":this._x=f*d*h-l*m*v,this._y=l*m*h+f*d*v,this._z=l*d*v+f*m*h,this._w=l*d*h-f*m*v;break;case"ZYX":this._x=f*d*h-l*m*v,this._y=l*m*h+f*d*v,this._z=l*d*v-f*m*h,this._w=l*d*h+f*m*v;break;case"YZX":this._x=f*d*h+l*m*v,this._y=l*m*h+f*d*v,this._z=l*d*v-f*m*h,this._w=l*d*h-f*m*v;break;case"XZY":this._x=f*d*h-l*m*v,this._y=l*m*h-f*d*v,this._z=l*d*v+f*m*h,this._w=l*d*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(a-l)*m,this._z=(o-r)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(a-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(o-r)/m,this._x=(a+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*s+r*l-a*c,this._y=r*d+o*c+a*s-n*l,this._z=a*d+o*l+n*c-r*s,this._w=o*d-n*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,s),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*n),d=2*(s*t-a*r),h=2*(a*n-o*t);return this.x=t+c*l+o*h-s*d,this.y=n+c*d+s*l-a*h,this.z=r+c*h+a*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-n*c,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new F,rl=new Pi;class yr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(a,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Kr.subVectors(this.max,Tr),Hi.subVectors(e.a,Tr),Gi.subVectors(e.b,Tr),Vi.subVectors(e.c,Tr),Zn.subVectors(Gi,Hi),Kn.subVectors(Vi,Gi),gi.subVectors(Hi,Vi);let t=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-gi.z,gi.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,gi.z,0,-gi.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-gi.y,gi.x,0];return!co(t,Hi,Gi,Vi,Kr)||(t=[1,0,0,0,1,0,0,0,1],!co(t,Hi,Gi,Vi,Kr))?!1:($r.crossVectors(Zn,Kn),t=[$r.x,$r.y,$r.z],co(t,Hi,Gi,Vi,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new F,new F,new F,new F,new F,new F,new F,new F],vn=new F,Zr=new yr,Hi=new F,Gi=new F,Vi=new F,Zn=new F,Kn=new F,gi=new F,Tr=new F,Kr=new F,$r=new F,vi=new F;function co(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){vi.fromArray(i,a);const s=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),d=n.dot(vi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>s)return!1}return!0}const ah=new yr,Cr=new F,uo=new F;class Hr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ah.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Cr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(uo)),this.expandByPoint(Cr.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new F,ho=new F,jr=new F,$n=new F,fo=new F,Jr=new F,po=new F;class Gr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ho.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(ho);const a=e.distanceTo(t)*.5,o=-this.direction.dot(jr),s=$n.dot(this.direction),c=-$n.dot(jr),l=$n.lengthSq(),d=Math.abs(1-o*o);let h,f,m,v;if(d>0)if(h=o*c-s,f=o*s-c,v=a*d,h>=0)if(f>=-v)if(f<=v){const _=1/d;h*=_,f*=_,m=h*(h+o*f+2*s)+f*(o*h+f+2*c)+l}else f=a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;else f=-a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-v?(h=Math.max(0,-(-o*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),m=-h*h+f*(f+2*c)+l):f<=v?(h=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(h=Math.max(0,-(o*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),m=-h*h+f*(f+2*c)+l);else f=o>0?-a:a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ho).addScaledVector(jr,f),m}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),r=Ln.dot(Ln)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(a=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,r,a){fo.subVectors(t,e),Jr.subVectors(n,e),po.crossVectors(fo,Jr);let o=this.direction.dot(po),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;$n.subVectors(this.origin,e);const c=s*this.direction.dot(Jr.crossVectors($n,Jr));if(c<0)return null;const l=s*this.direction.dot(fo.cross($n));if(l<0||c+l>o)return null;const d=-s*$n.dot(po);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,a,o,s,c,l,d,h,f,m,v,_,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l,d,h,f,m,v,_,p)}set(e,t,n,r,a,o,s,c,l,d,h,f,m,v,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=a,u[5]=o,u[9]=s,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=v,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),a=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=o*d,m=o*h,v=s*d,_=s*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+v*l,t[5]=f-_*l,t[9]=-s*c,t[2]=_-f*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,m=c*h,v=l*d,_=l*h;t[0]=f+_*s,t[4]=v*s-m,t[8]=o*l,t[1]=o*h,t[5]=o*d,t[9]=-s,t[2]=m*s-v,t[6]=_+f*s,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,m=c*h,v=l*d,_=l*h;t[0]=f-_*s,t[4]=-o*h,t[8]=v+m*s,t[1]=m+v*s,t[5]=o*d,t[9]=_-f*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,m=o*h,v=s*d,_=s*h;t[0]=c*d,t[4]=v*l-m,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=m*l-v,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,v=s*c,_=s*l;t[0]=c*d,t[4]=_-f*h,t[8]=v*h+m,t[1]=h,t[5]=o*d,t[9]=-s*d,t[2]=-l*d,t[6]=m*h+v,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,m=o*l,v=s*c,_=s*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+_,t[5]=o*d,t[9]=m*h-v,t[2]=v*h-m,t[6]=s*d,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oh,e,sh)}lookAt(e,t,n){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),jn.crossVectors(n,rn),jn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),jn.crossVectors(n,rn)),jn.normalize(),Qr.crossVectors(rn,jn),r[0]=jn.x,r[4]=Qr.x,r[8]=rn.x,r[1]=jn.y,r[5]=Qr.y,r[9]=rn.y,r[2]=jn.z,r[6]=Qr.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],m=n[13],v=n[2],_=n[6],p=n[10],u=n[14],E=n[3],S=n[7],A=n[11],D=n[15],C=r[0],T=r[4],O=r[8],w=r[12],M=r[1],P=r[5],I=r[9],N=r[13],W=r[2],J=r[6],V=r[10],ie=r[14],k=r[3],he=r[7],ge=r[11],pe=r[15];return a[0]=o*C+s*M+c*W+l*k,a[4]=o*T+s*P+c*J+l*he,a[8]=o*O+s*I+c*V+l*ge,a[12]=o*w+s*N+c*ie+l*pe,a[1]=d*C+h*M+f*W+m*k,a[5]=d*T+h*P+f*J+m*he,a[9]=d*O+h*I+f*V+m*ge,a[13]=d*w+h*N+f*ie+m*pe,a[2]=v*C+_*M+p*W+u*k,a[6]=v*T+_*P+p*J+u*he,a[10]=v*O+_*I+p*V+u*ge,a[14]=v*w+_*N+p*ie+u*pe,a[3]=E*C+S*M+A*W+D*k,a[7]=E*T+S*P+A*J+D*he,a[11]=E*O+S*I+A*V+D*ge,a[15]=E*w+S*N+A*ie+D*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],m=e[14],v=e[3],_=e[7],p=e[11],u=e[15];return v*(+a*c*h-r*l*h-a*s*f+n*l*f+r*s*m-n*c*m)+_*(+t*c*m-t*l*f+a*o*f-r*o*m+r*l*d-a*c*d)+p*(+t*l*h-t*s*m-a*o*h+n*o*m+a*s*d-n*l*d)+u*(-r*s*d-t*c*h+t*s*f+r*o*h-n*o*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],m=e[11],v=e[12],_=e[13],p=e[14],u=e[15],E=h*p*l-_*f*l+_*c*m-s*p*m-h*c*u+s*f*u,S=v*f*l-d*p*l-v*c*m+o*p*m+d*c*u-o*f*u,A=d*_*l-v*h*l+v*s*m-o*_*m-d*s*u+o*h*u,D=v*h*c-d*_*c-v*s*f+o*_*f+d*s*p-o*h*p,C=t*E+n*S+r*A+a*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=E*T,e[1]=(_*f*a-h*p*a-_*r*m+n*p*m+h*r*u-n*f*u)*T,e[2]=(s*p*a-_*c*a+_*r*l-n*p*l-s*r*u+n*c*u)*T,e[3]=(h*c*a-s*f*a-h*r*l+n*f*l+s*r*m-n*c*m)*T,e[4]=S*T,e[5]=(d*p*a-v*f*a+v*r*m-t*p*m-d*r*u+t*f*u)*T,e[6]=(v*c*a-o*p*a-v*r*l+t*p*l+o*r*u-t*c*u)*T,e[7]=(o*f*a-d*c*a+d*r*l-t*f*l-o*r*m+t*c*m)*T,e[8]=A*T,e[9]=(v*h*a-d*_*a-v*n*m+t*_*m+d*n*u-t*h*u)*T,e[10]=(o*_*a-v*s*a+v*n*l-t*_*l-o*n*u+t*s*u)*T,e[11]=(d*s*a-o*h*a-d*n*l+t*h*l+o*n*m-t*s*m)*T,e[12]=D*T,e[13]=(d*_*r-v*h*r+v*n*f-t*_*f-d*n*p+t*h*p)*T,e[14]=(v*s*r-o*_*r-v*n*c+t*_*c+o*n*p-t*s*p)*T,e[15]=(o*h*r-d*s*r+d*n*c-t*h*c-o*n*f+t*s*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,l=a*o,d=a*s;return this.set(l*o+n,l*s-r*c,l*c+r*s,0,l*s+r*c,d*s+n,d*c-r*o,0,l*c-r*s,d*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,d=o+o,h=s+s,f=a*l,m=a*d,v=a*h,_=o*d,p=o*h,u=s*h,E=c*l,S=c*d,A=c*h,D=n.x,C=n.y,T=n.z;return r[0]=(1-(_+u))*D,r[1]=(m+A)*D,r[2]=(v-S)*D,r[3]=0,r[4]=(m-A)*C,r[5]=(1-(f+u))*C,r[6]=(p+E)*C,r[7]=0,r[8]=(v+S)*T,r[9]=(p-E)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),s=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const l=1/a,d=1/o,h=1/s;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=Bn){const c=this.elements,l=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(s===Bn)m=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(s===Da)m=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=Bn){const c=this.elements,l=1/(t-e),d=1/(n-r),h=1/(o-a),f=(t+e)*l,m=(n+r)*d;let v,_;if(s===Bn)v=(o+a)*h,_=-2*h;else if(s===Da)v=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new F,_n=new vt,oh=new F(0,0,0),sh=new F(1,1,1),jn=new F,Qr=new F,rn=new F,al=new vt,ol=new Pi;class Vn{constructor(e=0,t=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class rs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lh=0;const sl=new F,Xi=new Pi,Un=new vt,ea=new F,Rr=new F,ch=new F,uh=new Pi,ll=new F(1,0,0),cl=new F(0,1,0),ul=new F(0,0,1),dl={type:"added"},dh={type:"removed"},Yi={type:"childadded",child:null},mo={type:"childremoved",child:null};class Zt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new F,t=new Vn,n=new Pi,r=new F(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new qe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return sl.copy(e).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Rr,ea,this.up):Un.lookAt(ea,Rr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Un),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dh),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(s){const c=[];for(const l in s){const d=s[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new F(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new F,Fn=new F,go=new F,In=new F,qi=new F,Zi=new F,hl=new F,vo=new F,_o=new F,xo=new F;class An{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){xn.subVectors(r,t),Fn.subVectors(n,t),go.subVectors(e,t);const o=xn.dot(xn),s=xn.dot(Fn),c=xn.dot(go),l=Fn.dot(Fn),d=Fn.dot(go),h=o*l-s*s;if(h===0)return a.set(0,0,0),null;const f=1/h,m=(l*c-s*d)*f,v=(o*d-s*c)*f;return a.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,r,a,o,s,c){return this.getBarycoord(e,t,n,r,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,In.x),c.addScaledVector(o,In.y),c.addScaledVector(s,In.z),c)}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Fn.subVectors(e,t),xn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),xn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return An.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;qi.subVectors(r,n),Zi.subVectors(a,n),vo.subVectors(e,n);const c=qi.dot(vo),l=Zi.dot(vo);if(c<=0&&l<=0)return t.copy(n);_o.subVectors(e,r);const d=qi.dot(_o),h=Zi.dot(_o);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(qi,o);xo.subVectors(e,a);const m=qi.dot(xo),v=Zi.dot(xo);if(v>=0&&m<=v)return t.copy(a);const _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return s=l/(l-v),t.copy(n).addScaledVector(Zi,s);const p=d*v-m*h;if(p<=0&&h-d>=0&&m-v>=0)return hl.subVectors(a,r),s=(h-d)/(h-d+(m-v)),t.copy(r).addScaledVector(hl,s);const u=1/(p+_+f);return o=_*u,s=f*u,t.copy(n).addScaledVector(qi,o).addScaledVector(Zi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ta={h:0,s:0,l:0};function So(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=is(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=So(o,a,e+1/3),this.g=So(o,a,e),this.b=So(o,a,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=on){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return at.fromWorkingColorSpace(zt.copy(this),e),Math.round(Gt(zt.r*255,0,255))*65536+Math.round(Gt(zt.g*255,0,255))*256+Math.round(Gt(zt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,a=zt.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let c,l;const d=(s+o)/2;if(s===o)c=0,l=0;else{const h=o-s;switch(l=d<=.5?h/(o+s):h/(2-o-s),o){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=on){at.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(ta);const n=Fr(Jn.h,ta.h,t),r=Fr(Jn.s,ta.s,t),a=Fr(Jn.l,ta.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Te;Te.NAMES=Dc;let hh=0;class Er extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=ln,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=js,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ln&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Aa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==js&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ni extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,na=new Be;class De{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array),a=Xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Js&&(e.usage=this.usage),e}}class Lc extends De{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uc extends De{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gn extends De{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fh=0;const un=new vt,Mo=new Zt,Ki=new F,an=new yr,Pr=new yr,Lt=new F;class Ot extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?Uc:Lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new qe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];an.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Pr.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(an.min,Pr.min),an.expandByPoint(Lt),Lt.addVectors(an.max,Pr.max),an.expandByPoint(Lt)):(an.expandByPoint(Pr.min),an.expandByPoint(Pr.max))}an.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Lt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let l=0,d=s.count;l<d;l++)Lt.fromBufferAttribute(s,l),c&&(Ki.fromBufferAttribute(e,l),Lt.add(Ki)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],c=[];for(let O=0;O<n.count;O++)s[O]=new F,c[O]=new F;const l=new F,d=new F,h=new F,f=new Be,m=new Be,v=new Be,_=new F,p=new F;function u(O,w,M){l.fromBufferAttribute(n,O),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),f.fromBufferAttribute(a,O),m.fromBufferAttribute(a,w),v.fromBufferAttribute(a,M),d.sub(l),h.sub(l),m.sub(f),v.sub(f);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(P),s[O].add(_),s[w].add(_),s[M].add(_),c[O].add(p),c[w].add(p),c[M].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,w=E.length;O<w;++O){const M=E[O],P=M.start,I=M.count;for(let N=P,W=P+I;N<W;N+=3)u(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new F,A=new F,D=new F,C=new F;function T(O){D.fromBufferAttribute(r,O),C.copy(D);const w=s[O];S.copy(w),S.sub(D.multiplyScalar(D.dot(w))).normalize(),A.crossVectors(C,w);const P=A.dot(c[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,P)}for(let O=0,w=E.length;O<w;++O){const M=E[O],P=M.start,I=M.count;for(let N=P,W=P+I;N<W;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,a=new F,o=new F,s=new F,c=new F,l=new F,d=new F,h=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),s.add(d),c.add(d),l.add(d),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(s,c){const l=s.array,d=s.itemSize,h=s.normalized,f=new l.constructor(c.length*d);let m=0,v=0;for(let _=0,p=c.length;_<p;_++){s.isInterleavedBufferAttribute?m=c[_]*s.data.stride+s.offset:m=c[_]*d;for(let u=0;u<d;u++)f[v++]=l[m++]}return new De(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,n);t.setAttribute(s,l)}const a=this.morphAttributes;for(const s in a){const c=[],l=a[s];for(let d=0,h=l.length;d<h;d++){const f=l[d],m=e(f,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const a=e.morphAttributes;for(const l in a){const d=[],h=a[l];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new vt,_i=new Gr,ia=new Hr,pl=new F,$i=new F,ji=new F,Ji=new F,yo=new F,ra=new F,aa=new Be,oa=new Be,sa=new Be,ml=new F,gl=new F,vl=new F,la=new F,ca=new F;class wt extends Zt{constructor(e=new Ot,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){ra.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const d=s[c],h=a[c];d!==0&&(yo.fromBufferAttribute(h,e),o?ra.addScaledVector(yo,d):ra.addScaledVector(yo.sub(t),d))}t.add(ra)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(a),_i.copy(e.ray).recast(e.near),!(ia.containsPoint(_i.origin)===!1&&(_i.intersectSphere(ia,pl)===null||_i.origin.distanceToSquared(pl)>(e.far-e.near)**2))&&(fl.copy(a).invert(),_i.copy(e.ray).applyMatrix4(fl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const p=f[v],u=o[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let A=E,D=S;A<D;A+=3){const C=s.getX(A),T=s.getX(A+1),O=s.getX(A+2);r=ua(this,u,e,n,l,d,h,C,T,O),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const E=s.getX(p),S=s.getX(p+1),A=s.getX(p+2);r=ua(this,o,e,n,l,d,h,E,S,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const p=f[v],u=o[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=E,D=S;A<D;A+=3){const C=A,T=A+1,O=A+2;r=ua(this,u,e,n,l,d,h,C,T,O),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const E=p,S=p+1,A=p+2;r=ua(this,o,e,n,l,d,h,E,S,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function ph(i,e,t,n,r,a,o,s){let c;if(e.side===Qt?c=n.intersectTriangle(o,a,r,!0,s):c=n.intersectTriangle(r,a,o,e.side===si,s),c===null)return null;ca.copy(s),ca.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ca);return l<t.near||l>t.far?null:{distance:l,point:ca.clone(),object:i}}function ua(i,e,t,n,r,a,o,s,c,l){i.getVertexPosition(s,$i),i.getVertexPosition(c,ji),i.getVertexPosition(l,Ji);const d=ph(i,e,t,n,$i,ji,Ji,la);if(d){r&&(aa.fromBufferAttribute(r,s),oa.fromBufferAttribute(r,c),sa.fromBufferAttribute(r,l),d.uv=An.getInterpolation(la,$i,ji,Ji,aa,oa,sa,new Be)),a&&(aa.fromBufferAttribute(a,s),oa.fromBufferAttribute(a,c),sa.fromBufferAttribute(a,l),d.uv1=An.getInterpolation(la,$i,ji,Ji,aa,oa,sa,new Be)),o&&(ml.fromBufferAttribute(o,s),gl.fromBufferAttribute(o,c),vl.fromBufferAttribute(o,l),d.normal=An.getInterpolation(la,$i,ji,Ji,ml,gl,vl,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:c,c:l,normal:new F,materialIndex:0};An.getNormal($i,ji,Ji,h.normal),d.face=h}return d}class wr extends Ot{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],d=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,o,a,0),v("z","y","x",1,-1,n,t,-e,o,a,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new gn(l,3)),this.setAttribute("normal",new gn(d,3)),this.setAttribute("uv",new gn(h,2));function v(_,p,u,E,S,A,D,C,T,O,w){const M=A/T,P=D/O,I=A/2,N=D/2,W=C/2,J=T+1,V=O+1;let ie=0,k=0;const he=new F;for(let ge=0;ge<V;ge++){const pe=ge*P-N;for(let Ie=0;Ie<J;Ie++){const He=Ie*M-I;he[_]=He*E,he[p]=pe*S,he[u]=W,l.push(he.x,he.y,he.z),he[_]=0,he[p]=0,he[u]=C>0?1:-1,d.push(he.x,he.y,he.z),h.push(Ie/T),h.push(1-ge/O),ie+=1}}for(let ge=0;ge<O;ge++)for(let pe=0;pe<T;pe++){const Ie=f+pe+J*ge,He=f+pe+J*(ge+1),Y=f+(pe+1)+J*(ge+1),ae=f+(pe+1)+J*ge;c.push(Ie,He,ae),c.push(He,Y,ae),k+=6}s.addGroup(m,k,w),m+=k,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=gr(i[t]);for(const r in n)e[r]=n[r]}return e}function mh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const gh={clone:gr,merge:Yt};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ic extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new F,_l=new Be,xl=new Be;class hn extends Ic{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,_l,xl),t.subVectors(xl,_l)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,er=1;class xh extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Qi,er,e,t);r.layers=this.layers,this.add(r);const a=new hn(Qi,er,e,t);a.layers=this.layers,this.add(a);const o=new hn(Qi,er,e,t);o.layers=this.layers,this.add(o);const s=new hn(Qi,er,e,t);s.layers=this.layers,this.add(s);const c=new hn(Qi,er,e,t);c.layers=this.layers,this.add(c);const l=new hn(Qi,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,c]=t;for(const l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Nc extends Vt{constructor(e,t,n,r,a,o,s,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,r,a,o,s,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sh extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wr(5,5,5),a=new Ct({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:ai});a.uniforms.tEquirect.value=t;const o=new wt(r,a),s=t.minFilter;return t.minFilter===Ai&&(t.minFilter=At),new xh(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const Eo=new F,Mh=new F,yh=new qe;class wn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Eo.subVectors(n,t).cross(Mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Eo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yh.getNormalMatrix(e),r=this.coplanarPoint(Eo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Hr,da=new F;class Oc{constructor(e=new wn,t=new wn,n=new wn,r=new wn,a=new wn,o=new wn){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],d=r[5],h=r[6],f=r[7],m=r[8],v=r[9],_=r[10],p=r[11],u=r[12],E=r[13],S=r[14],A=r[15];if(n[0].setComponents(c-a,f-l,p-m,A-u).normalize(),n[1].setComponents(c+a,f+l,p+m,A+u).normalize(),n[2].setComponents(c+o,f+d,p+v,A+E).normalize(),n[3].setComponents(c-o,f-d,p-v,A-E).normalize(),n[4].setComponents(c-s,f-h,p-_,A-S).normalize(),t===Bn)n[5].setComponents(c+s,f+h,p+_,A+S).normalize();else if(t===Da)n[5].setComponents(s,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bc(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Eh(i){const e=new WeakMap;function t(s,c){const l=s.array,d=s.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),s.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:h}}function n(s,c,l){const d=c.array,h=c._updateRange,f=c.updateRanges;if(i.bindBuffer(l,s),h.count===-1&&f.length===0&&i.bufferSubData(l,0,d),f.length!==0){for(let m=0,v=f.length;m<v;m++){const _=f[m];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(i.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,c),l.version=s.version}}return{get:r,remove:a,update:o}}class Rn extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(r),l=s+1,d=c+1,h=e/s,f=t/c,m=[],v=[],_=[],p=[];for(let u=0;u<d;u++){const E=u*f-o;for(let S=0;S<l;S++){const A=S*h-a;v.push(A,-E,0),_.push(0,0,1),p.push(S/s),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<s;E++){const S=E+l*u,A=E+l*(u+1),D=E+1+l*(u+1),C=E+1+l*u;m.push(S,A,C),m.push(A,D,C)}this.setIndex(m),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,qh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ef=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Up=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:wh,alphahash_pars_fragment:bh,alphamap_fragment:Ah,alphamap_pars_fragment:Th,alphatest_fragment:Ch,alphatest_pars_fragment:Rh,aomap_fragment:Ph,aomap_pars_fragment:Dh,batching_pars_vertex:Lh,batching_vertex:Uh,begin_vertex:Fh,beginnormal_vertex:Ih,bsdfs:Nh,iridescence_fragment:Oh,bumpmap_pars_fragment:Bh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Gh,color_fragment:Vh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:Yh,common:qh,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Kh,displacementmap_pars_vertex:$h,displacementmap_vertex:jh,emissivemap_fragment:Jh,emissivemap_pars_fragment:Qh,colorspace_fragment:ef,colorspace_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:rf,envmap_pars_fragment:af,envmap_pars_vertex:of,envmap_physical_pars_fragment:vf,envmap_vertex:sf,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:uf,fog_pars_fragment:df,gradientmap_pars_fragment:hf,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:Sf,lights_phong_pars_fragment:Mf,lights_physical_fragment:yf,lights_physical_pars_fragment:Ef,lights_fragment_begin:wf,lights_fragment_maps:bf,lights_fragment_end:Af,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Pf,map_fragment:Df,map_pars_fragment:Lf,map_particle_fragment:Uf,map_particle_pars_fragment:Ff,metalnessmap_fragment:If,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:kf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:Yf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:jf,opaque_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:sp,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:up,skinning_pars_vertex:dp,skinning_vertex:hp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:vp,transmission_fragment:_p,transmission_pars_fragment:xp,uv_pars_fragment:Sp,uv_pars_vertex:Mp,uv_vertex:yp,worldpos_vertex:Ep,background_vert:wp,background_frag:bp,backgroundCube_vert:Ap,backgroundCube_frag:Tp,cube_vert:Cp,cube_frag:Rp,depth_vert:Pp,depth_frag:Dp,distanceRGBA_vert:Lp,distanceRGBA_frag:Up,equirect_vert:Fp,equirect_frag:Ip,linedashed_vert:Np,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:kp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:Yp,meshphong_frag:qp,meshphysical_vert:Zp,meshphysical_frag:Kp,meshtoon_vert:$p,meshtoon_frag:jp,points_vert:Jp,points_frag:Qp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},fe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},bn={basic:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([fe.lights,fe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bn.physical={uniforms:Yt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ha={r:0,b:0,g:0},Si=new Vn,rm=new vt;function am(i,e,t,n,r,a,o){const s=new Te(0);let c=a===!0?0:1,l,d,h=null,f=0,m=null;function v(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const A=v(E);A===null?u(s,c):A&&A.isColor&&(u(A,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,S){const A=v(S);A&&(A.isCubeTexture||A.mapping===ka)?(d===void 0&&(d=new wt(new wr(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:gr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Si.copy(S.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Si)),d.material.toneMapped=at.getTransfer(A.colorSpace)!==ct,(h!==A||f!==A.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=A,f=A.version,m=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new wt(new Rn(2,2),new Ct({name:"BackgroundMaterial",uniforms:gr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,S){E.getRGB(ha,Fc(i)),n.buffers.color.setClear(ha.r,ha.g,ha.b,S,o)}return{getClearColor:function(){return s},setClearColor:function(E,S=1){s.set(E),c=S,u(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(s,c)},render:_,addToRenderList:p}}function om(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,o=!1;function s(M,P,I,N,W){let J=!1;const V=h(N,I,P);a!==V&&(a=V,l(a.object)),J=m(M,N,I,W),J&&v(M,N,I,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,A(M,P,I,N),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,P,I){const N=I.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let J=W[P.id];J===void 0&&(J={},W[P.id]=J);let V=J[N];return V===void 0&&(V=f(c()),J[N]=V),V}function f(M){const P=[],I=[],N=[];for(let W=0;W<t;W++)P[W]=0,I[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:N,object:M,attributes:{},index:null}}function m(M,P,I,N){const W=a.attributes,J=P.attributes;let V=0;const ie=I.getAttributes();for(const k in ie)if(ie[k].location>=0){const ge=W[k];let pe=J[k];if(pe===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),ge===void 0||ge.attribute!==pe||pe&&ge.data!==pe.data)return!0;V++}return a.attributesNum!==V||a.index!==N}function v(M,P,I,N){const W={},J=P.attributes;let V=0;const ie=I.getAttributes();for(const k in ie)if(ie[k].location>=0){let ge=J[k];ge===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const pe={};pe.attribute=ge,ge&&ge.data&&(pe.data=ge.data),W[k]=pe,V++}a.attributes=W,a.attributesNum=V,a.index=N}function _(){const M=a.newAttributes;for(let P=0,I=M.length;P<I;P++)M[P]=0}function p(M){u(M,0)}function u(M,P){const I=a.newAttributes,N=a.enabledAttributes,W=a.attributeDivisors;I[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),W[M]!==P&&(i.vertexAttribDivisor(M,P),W[M]=P)}function E(){const M=a.newAttributes,P=a.enabledAttributes;for(let I=0,N=P.length;I<N;I++)P[I]!==M[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function S(M,P,I,N,W,J,V){V===!0?i.vertexAttribIPointer(M,P,I,W,J):i.vertexAttribPointer(M,P,I,N,W,J)}function A(M,P,I,N){_();const W=N.attributes,J=I.getAttributes(),V=P.defaultAttributeValues;for(const ie in J){const k=J[ie];if(k.location>=0){let he=W[ie];if(he===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const ge=he.normalized,pe=he.itemSize,Ie=e.get(he);if(Ie===void 0)continue;const He=Ie.buffer,Y=Ie.type,ae=Ie.bytesPerElement,ve=Y===i.INT||Y===i.UNSIGNED_INT||he.gpuType===Sc;if(he.isInterleavedBufferAttribute){const oe=he.data,ze=oe.stride,Pe=he.offset;if(oe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<k.locationSize;Xe++)u(k.location+Xe,oe.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Xe=0;Xe<k.locationSize;Xe++)p(k.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Xe=0;Xe<k.locationSize;Xe++)S(k.location+Xe,pe/k.locationSize,Y,ge,ze*ae,(Pe+pe/k.locationSize*Xe)*ae,ve)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)u(k.location+oe,he.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<k.locationSize;oe++)p(k.location+oe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let oe=0;oe<k.locationSize;oe++)S(k.location+oe,pe/k.locationSize,Y,ge,pe*ae,pe/k.locationSize*oe*ae,ve)}}else if(V!==void 0){const ge=V[ie];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(k.location,ge);break;case 3:i.vertexAttrib3fv(k.location,ge);break;case 4:i.vertexAttrib4fv(k.location,ge);break;default:i.vertexAttrib1fv(k.location,ge)}}}}E()}function D(){O();for(const M in n){const P=n[M];for(const I in P){const N=P[I];for(const W in N)d(N[W].object),delete N[W];delete P[I]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const I in P){const N=P[I];for(const W in N)d(N[W].object),delete N[W];delete P[I]}delete n[M.id]}function T(M){for(const P in n){const I=n[P];if(I[M.id]===void 0)continue;const N=I[M.id];for(const W in N)d(N[W].object),delete N[W];delete I[M.id]}}function O(){w(),o=!0,a!==r&&(a=r,l(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:O,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function sm(i,e,t){let n;function r(l){n=l}function a(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function s(l,d,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(l[m],d[m]);else{f.multiDrawArraysWEBGL(n,l,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v];t.update(m,n,1)}}function c(l,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)o(l[v],d[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let v=0;for(let _=0;_<h;_++)v+=d[_];for(let _=0;_<f.length;_++)t.update(v,n,f[_])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function lm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(C){const T=C===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==li&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==On&&!T)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:u,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:A,maxSamples:D}}function cm(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new wn,s=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!r||v===null||v.length===0||a&&!p)a?d(null):l();else{const E=a?0:n,S=E*4;let A=u.clippingState||null;c.value=A,A=d(v,f,S,m);for(let D=0;D!==S;++D)A[D]=t[D];u.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,m,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,v!==!0||p===null){const u=m+_*4,E=f.matrixWorldInverse;s.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,A=m;S!==_;++S,A+=4)o.copy(h[S]).applyMatrix4(E,s),o.normal.toArray(p,A),p[A+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function um(i){let e=new WeakMap;function t(o,s){return s===Go?o.mapping=dr:s===Vo&&(o.mapping=hr),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===Go||s===Vo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class zc extends Ic{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,Sl=[.125,.215,.35,.446,.526,.582],bi=20,wo=new zc,Ml=new Te;let bo=null,Ao=0,To=0,Co=!1;const Ei=(1+Math.sqrt(5))/2,tr=1/Ei,yl=[new F(-Ei,tr,0),new F(Ei,tr,0),new F(-tr,0,Ei),new F(tr,0,Ei),new F(0,Ei,-tr),new F(0,Ei,tr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class El{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){bo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,Ao,To),this._renderer.xr.enabled=Co,e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:kr,format:pn,colorSpace:hi,depthBuffer:!1},r=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(a)),this._blurMaterial=hm(a,e,t)}return r}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,r){const s=new hn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Ml),d.toneMapping=oi,d.autoClear=!1;const m=new ni({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new wt(new wr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Ml),_=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(s.up.set(0,c[u],0),s.lookAt(l[u],0,0)):E===1?(s.up.set(0,0,c[u]),s.lookAt(0,l[u],0)):(s.up.set(0,c[u],0),s.lookAt(0,0,l[u]));const S=this._cubeSize;fa(r,E*S,u>2?S:0,S,S),d.setRenderTarget(r),_&&d.render(v,s),d.render(e,s)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===dr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;fa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=yl[(r-a-1)%yl.length];this._blur(e,a-1,a,o,s)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new wt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*bi-1),_=a/v,p=isFinite(a)?1+Math.floor(d*_):bi;p>bi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);const u=[];let E=0;for(let T=0;T<bi;++T){const O=T/_,w=Math.exp(-O*O/2);u.push(w),T===0?E+=w:T<p&&(E+=2*w)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const A=this._sizeLods[r],D=3*A*(r>S-rr?r-S+rr:0),C=4*(this._cubeSize-A);fa(t,D,C,3*A,2*A),c.setRenderTarget(t),c.render(h,wo)}}function dm(i){const e=[],t=[],n=[];let r=i;const a=i-rr+1+Sl.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>i-rr?c=Sl[o-i+rr-1]:o===0&&(c=0),n.push(c);const l=1/(s-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,v=6,_=3,p=2,u=1,E=new Float32Array(_*v*m),S=new Float32Array(p*v*m),A=new Float32Array(u*v*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,O=C>2?0:-1,w=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];E.set(w,_*v*C),S.set(f,p*v*C);const M=[C,C,C,C,C,C];A.set(M,u*v*C)}const D=new Ot;D.setAttribute("position",new De(E,_)),D.setAttribute("uv",new De(S,p)),D.setAttribute("faceIndex",new De(A,u)),e.push(D),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hm(i,e,t){const n=new Float32Array(bi),r=new F(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function bl(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Al(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function as(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fm(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===Go||c===Vo,d=c===dr||c===hr;if(l||d){let h=e.get(s);const f=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==f)return t===null&&(t=new El(i)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const m=s.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new El(i)),h=l?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",a),h.texture):null}}}return s}function r(s){let c=0;const l=6;for(let d=0;d<l;d++)s[d]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Cc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mm(i,e,t,n){const r={},a=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const _=m[v];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const f=[],m=h.index,v=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let S=0,A=E.length;S<A;S+=3){const D=E[S+0],C=E[S+1],T=E[S+2];f.push(D,C,C,T,T,D)}}else if(v!==void 0){const E=v.array;_=v.version;for(let S=0,A=E.length/3-1;S<A;S+=3){const D=S+0,C=S+1,T=S+2;f.push(D,C,C,T,T,D)}}else return;const p=new(Tc(f)?Uc:Lc)(f,1);p.version=_;const u=a.get(h);u&&e.remove(u),a.set(h,p)}function d(h){const f=a.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function gm(i,e,t){let n;function r(f){n=f}let a,o;function s(f){a=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,a,f*o),t.update(m,n,1)}function l(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,a,f*o,v),t.update(m,n,v))}function d(f,m,v){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<v;p++)this.render(f[p]/o,m[p]);else{_.multiDrawElementsWEBGL(n,m,0,a,f,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];t.update(p,n,1)}}function h(f,m,v,_){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,_,0,v);let u=0;for(let E=0;E<v;E++)u+=m[E];for(let E=0;E<_.length;E++)t.update(u,n,_[E])}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function vm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _m(i,e,t){const n=new WeakMap,r=new Tt;function a(o,s,c){const l=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(s);if(f===void 0||f.count!==h){let w=function(){T.dispose(),n.delete(s),s.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const m=s.morphAttributes.position!==void 0,v=s.morphAttributes.normal!==void 0,_=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],u=s.morphAttributes.normal||[],E=s.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let A=s.attributes.position.count*S,D=1;A>e.maxTextureSize&&(D=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*D*4*h),T=new Pc(C,A,D,h);T.type=On,T.needsUpdate=!0;const O=S*4;for(let M=0;M<h;M++){const P=p[M],I=u[M],N=E[M],W=A*D*4*M;for(let J=0;J<P.count;J++){const V=J*O;m===!0&&(r.fromBufferAttribute(P,J),C[W+V+0]=r.x,C[W+V+1]=r.y,C[W+V+2]=r.z,C[W+V+3]=0),v===!0&&(r.fromBufferAttribute(I,J),C[W+V+4]=r.x,C[W+V+5]=r.y,C[W+V+6]=r.z,C[W+V+7]=0),_===!0&&(r.fromBufferAttribute(N,J),C[W+V+8]=r.x,C[W+V+9]=r.y,C[W+V+10]=r.z,C[W+V+11]=N.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new Be(A,D)},n.set(s,f),s.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const v=s.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function xm(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}class kc extends Vt{constructor(e,t,n,r,a,o,s,c,l,d=or){if(d!==or&&d!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===or&&(n=fr),n===void 0&&d===mr&&(n=pr),super(null,r,a,o,s,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hc=new Vt,Gc=new kc(1,1);Gc.compareFunction=Ac;const Vc=new Pc,Wc=new rh,Xc=new Nc,Tl=[],Cl=[],Rl=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function br(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Tl[r];if(a===void 0&&(a=new Float32Array(r),Tl[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),Pt(t,n)}}function bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),Pt(t,n)}}function Am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Rl.set(n),i.uniformMatrix4fv(this.addr,!1,Rl),Pt(t,n)}}function Tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Im(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?Gc:Hc;t.setTexture2D(e||a,r)}function Nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wc,r)}function Om(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xc,r)}function Bm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vc,r)}function zm(i){switch(i){case 5126:return Sm;case 35664:return Mm;case 35665:return ym;case 35666:return Em;case 35674:return wm;case 35675:return bm;case 35676:return Am;case 5124:case 35670:return Tm;case 35667:case 35671:return Cm;case 35668:case 35672:return Rm;case 35669:case 35673:return Pm;case 5125:return Dm;case 36294:return Lm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function km(i,e){i.uniform1fv(this.addr,e)}function Hm(i,e){const t=br(e,this.size,2);i.uniform2fv(this.addr,t)}function Gm(i,e){const t=br(e,this.size,3);i.uniform3fv(this.addr,t)}function Vm(i,e){const t=br(e,this.size,4);i.uniform4fv(this.addr,t)}function Wm(i,e){const t=br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xm(i,e){const t=br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ym(i,e){const t=br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qm(i,e){i.uniform1iv(this.addr,e)}function Zm(i,e){i.uniform2iv(this.addr,e)}function Km(i,e){i.uniform3iv(this.addr,e)}function $m(i,e){i.uniform4iv(this.addr,e)}function jm(i,e){i.uniform1uiv(this.addr,e)}function Jm(i,e){i.uniform2uiv(this.addr,e)}function Qm(i,e){i.uniform3uiv(this.addr,e)}function eg(i,e){i.uniform4uiv(this.addr,e)}function tg(i,e,t){const n=this.cache,r=e.length,a=Ga(t,r);Rt(n,a)||(i.uniform1iv(this.addr,a),Pt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hc,a[o])}function ng(i,e,t){const n=this.cache,r=e.length,a=Ga(t,r);Rt(n,a)||(i.uniform1iv(this.addr,a),Pt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wc,a[o])}function ig(i,e,t){const n=this.cache,r=e.length,a=Ga(t,r);Rt(n,a)||(i.uniform1iv(this.addr,a),Pt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xc,a[o])}function rg(i,e,t){const n=this.cache,r=e.length,a=Ga(t,r);Rt(n,a)||(i.uniform1iv(this.addr,a),Pt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vc,a[o])}function ag(i){switch(i){case 5126:return km;case 35664:return Hm;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return Ym;case 5124:case 35670:return qm;case 35667:case 35671:return Zm;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return jm;case 36294:return Jm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return rg}}class og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zm(t.type)}}class sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ag(t.type)}}class lg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function Ll(i,e){i.seq.push(e),i.map[e.id]=e}function cg(i,e,t){const n=i.name,r=n.length;for(Ro.lastIndex=0;;){const a=Ro.exec(n),o=Ro.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){Ll(t,l===void 0?new og(s,i,e):new sg(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new lg(s),Ll(t,h)),t=h}}}class Ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);cg(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ug=37297;let dg=0;function hg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function fg(i){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i);let n;switch(e===t?n="":e===Pa&&t===Ra?n="LinearDisplayP3ToLinearSRGB":e===Ra&&t===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case hi:case Ha:return[n,"LinearTransferOETF"];case on:case ns:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hg(i.getShaderSource(e),o)}else return r}function pg(i,e){const t=fg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mg(i,e){let t;switch(e){case od:t="Linear";break;case sd:t="Reinhard";break;case ld:t="OptimizedCineon";break;case cd:t="ACESFilmic";break;case dd:t="AgX";break;case hd:t="Neutral";break;case ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function vg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _g(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Lr(i){return i!==""}function Il(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(xg,Mg)}const Sg=new Map;function Mg(i,e){let t=Ye[e];if(t===void 0){const n=Sg.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(i){return i.replace(yg,Eg)}function Eg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Bl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function bg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case hr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ag(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case rd:e="ENVMAP_BLENDING_MIX";break;case ad:e="ENVMAP_BLENDING_ADD";break}return e}function Cg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rg(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=wg(t),l=bg(t),d=Ag(t),h=Tg(t),f=Cg(t),m=gg(t),v=vg(a),_=r.createProgram();let p,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lr).join(`
`),u.length>0&&(u+=`
`)):(p=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),u=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==oi?mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,pg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Yo(o),o=Il(o,t),o=Nl(o,t),s=Yo(s),s=Il(s,t),s=Nl(s,t),o=Ol(o),s=Ol(s),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Qs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=E+p+o,A=E+u+s,D=Ul(r,r.VERTEX_SHADER,S),C=Ul(r,r.FRAGMENT_SHADER,A);r.attachShader(_,D),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(D).trim(),W=r.getShaderInfoLog(C).trim();let J=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,D,C);else{const ie=Fl(r,D,"vertex"),k=Fl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+ie+`
`+k)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||W==="")&&(V=!1);V&&(P.diagnostics={runnable:J,programLog:I,vertexShader:{log:N,prefix:p},fragmentShader:{log:W,prefix:u}})}r.deleteShader(D),r.deleteShader(C),O=new Ea(r,_),w=_g(r,_)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,ug)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}let Pg=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lg(e),t.set(e,n)),n}}class Lg{constructor(e){this.id=Pg++,this.code=e,this.usedTimes=0}}function Ug(i,e,t,n,r,a,o){const s=new rs,c=new Dg,l=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,M,P,I,N){const W=I.fog,J=N.geometry,V=w.isMeshStandardMaterial?I.environment:null,ie=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),k=ie&&ie.mapping===ka?ie.image.height:null,he=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const ge=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pe=ge!==void 0?ge.length:0;let Ie=0;J.morphAttributes.position!==void 0&&(Ie=1),J.morphAttributes.normal!==void 0&&(Ie=2),J.morphAttributes.color!==void 0&&(Ie=3);let He,Y,ae,ve;if(he){const tt=bn[he];He=tt.vertexShader,Y=tt.fragmentShader}else He=w.vertexShader,Y=w.fragmentShader,c.update(w),ae=c.getVertexShaderID(w),ve=c.getFragmentShaderID(w);const oe=i.getRenderTarget(),ze=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,Xe=!!w.map,R=!!w.matcap,Ke=!!ie,$e=!!w.aoMap,te=!!w.lightMap,Z=!!w.bumpMap,_e=!!w.normalMap,xe=!!w.displacementMap,Me=!!w.emissiveMap,je=!!w.metalnessMap,b=!!w.roughnessMap,x=w.anisotropy>0,L=w.clearcoat>0,$=w.dispersion>0,j=w.iridescence>0,Q=w.sheen>0,Ee=w.transmission>0,se=x&&!!w.anisotropyMap,ue=L&&!!w.clearcoatMap,Ne=L&&!!w.clearcoatNormalMap,le=L&&!!w.clearcoatRoughnessMap,be=j&&!!w.iridescenceMap,Je=j&&!!w.iridescenceThicknessMap,Ue=Q&&!!w.sheenColorMap,me=Q&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,Ve=!!w.specularColorMap,ft=!!w.specularIntensityMap,g=Ee&&!!w.transmissionMap,q=Ee&&!!w.thicknessMap,z=!!w.gradientMap,K=!!w.alphaMap,re=w.alphaTest>0,Ce=!!w.alphaHash,ke=!!w.extensions;let pt=oi;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pt=i.toneMapping);const xt={shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:Y,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:hi,alphaToCoverage:!!w.alphaToCoverage,map:Xe,matcap:R,envMap:Ke,envMapMode:Ke&&ie.mapping,envMapCubeUVHeight:k,aoMap:$e,lightMap:te,bumpMap:Z,normalMap:_e,displacementMap:f&&xe,emissiveMap:Me,normalMapObjectSpace:_e&&w.normalMapType===Td,normalMapTangentSpace:_e&&w.normalMapType===Ad,metalnessMap:je,roughnessMap:b,anisotropy:x,anisotropyMap:se,clearcoat:L,clearcoatMap:ue,clearcoatNormalMap:Ne,clearcoatRoughnessMap:le,dispersion:$,iridescence:j,iridescenceMap:be,iridescenceThicknessMap:Je,sheen:Q,sheenColorMap:Ue,sheenRoughnessMap:me,specularMap:Ge,specularColorMap:Ve,specularIntensityMap:ft,transmission:Ee,transmissionMap:g,thicknessMap:q,gradientMap:z,opaque:w.transparent===!1&&w.blending===ln&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:re,alphaHash:Ce,combine:w.combine,mapUv:Xe&&_(w.map.channel),aoMapUv:$e&&_(w.aoMap.channel),lightMapUv:te&&_(w.lightMap.channel),bumpMapUv:Z&&_(w.bumpMap.channel),normalMapUv:_e&&_(w.normalMap.channel),displacementMapUv:xe&&_(w.displacementMap.channel),emissiveMapUv:Me&&_(w.emissiveMap.channel),metalnessMapUv:je&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:se&&_(w.anisotropyMap.channel),clearcoatMapUv:ue&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(w.sheenRoughnessMap.channel),specularMapUv:Ge&&_(w.specularMap.channel),specularColorMapUv:Ve&&_(w.specularColorMap.channel),specularIntensityMapUv:ft&&_(w.specularIntensityMap.channel),transmissionMapUv:g&&_(w.transmissionMap.channel),thicknessMapUv:q&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(_e||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(Xe||K),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:Xe&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jt,flipSided:w.side===Qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ke&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function u(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(E(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){s.disableAll(),M.supportsVertexTextures&&s.enable(0),M.instancing&&s.enable(1),M.instancingColor&&s.enable(2),M.instancingMorph&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),M.dispersion&&s.enable(20),M.batchingColor&&s.enable(21),w.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.doubleSided&&s.enable(10),M.flipSided&&s.enable(11),M.useDepthPacking&&s.enable(12),M.dithering&&s.enable(13),M.transmission&&s.enable(14),M.sheen&&s.enable(15),M.opaque&&s.enable(16),M.pointsUvs&&s.enable(17),M.decodeVideoTexture&&s.enable(18),M.alphaToCoverage&&s.enable(19),w.push(s.mask)}function A(w){const M=v[w.type];let P;if(M){const I=bn[M];P=gh.clone(I.uniforms)}else P=w.uniforms;return P}function D(w,M){let P;for(let I=0,N=d.length;I<N;I++){const W=d[I];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Rg(i,M,w,a),d.push(P)),P}function C(w){if(--w.usedTimes===0){const M=d.indexOf(w);d[M]=d[d.length-1],d.pop(),w.destroy()}}function T(w){c.remove(w)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:A,acquireProgram:D,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:O}}function Fg(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,v,_,p){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:_,group:p},i[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=_,u.group=p),e++,u}function s(h,f,m,v,_,p){const u=o(h,f,m,v,_,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(h,f,m,v,_,p){const u=o(h,f,m,v,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,f){t.length>1&&t.sort(h||Ig),n.length>1&&n.sort(f||zl),r.length>1&&r.sort(f||zl)}function d(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:c,finish:d,sort:l}}function Ng(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new kl,i.set(n,[o])):r>=a.length?(o=new kl,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Og(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Te};break;case"SpotLight":t={position:new F,direction:new F,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Bg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zg=0;function kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hg(i){const e=new Og,t=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,a=new vt,o=new vt;function s(l){let d=0,h=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,v=0,_=0,p=0,u=0,E=0,S=0,A=0,D=0,C=0,T=0;l.sort(kg);for(let w=0,M=l.length;w<M;w++){const P=l[w],I=P.color,N=P.intensity,W=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=I.r*N,h+=I.g*N,f+=I.b*N;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],N);T++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=V,m++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(I).multiplyScalar(N),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const ie=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,ie.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=ie.matrix,P.castShadow){const k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=J,A++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(I).multiplyScalar(N),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=V,p++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const ie=P.shadow,k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,k.shadowCameraNear=ie.camera.near,k.shadowCameraFar=ie.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=J,n.pointShadowMatrix[v]=P.shadow.matrix,S++}n.point[v]=V,v++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(N),V.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[u]=V,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==m||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==p||O.hemiLength!==u||O.numDirectionalShadows!==E||O.numPointShadows!==S||O.numSpotShadows!==A||O.numSpotMaps!==D||O.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=A+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,O.directionalLength=m,O.pointLength=v,O.spotLength=_,O.rectAreaLength=p,O.hemiLength=u,O.numDirectionalShadows=E,O.numPointShadows=S,O.numSpotShadows=A,O.numSpotMaps=D,O.numLightProbes=T,n.version=zg++)}function c(l,d){let h=0,f=0,m=0,v=0,_=0;const p=d.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const S=l[u];if(S.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),h++}else if(S.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const A=n.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:s,setupView:c,state:n}}function Hl(i){const e=new Hg(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function s(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Gg(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new Hl(i),e.set(r,[s])):a>=o.length?(s=new Hl(i),o.push(s)):s=o[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}class Vg extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wg extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qg(i,e,t){let n=new Oc;const r=new Be,a=new Be,o=new Tt,s=new Vg({depthPacking:bd}),c=new Wg,l={},d=t.maxTextureSize,h={[si]:Qt,[Qt]:si,[jt]:jt},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Xg,fragmentShader:Yg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ot;v.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc;let u=this.type;this.render=function(C,T,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ai),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=u!==Nn&&this.type===Nn,W=u===Nn&&this.type!==Nn;for(let J=0,V=C.length;J<V;J++){const ie=C[J],k=ie.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const he=k.getFrameExtents();if(r.multiply(he),a.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/he.x),r.x=a.x*he.x,k.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/he.y),r.y=a.y*he.y,k.mapSize.y=a.y)),k.map===null||N===!0||W===!0){const pe=this.type!==Nn?{minFilter:Jt,magFilter:Jt}:{};k.map!==null&&k.map.dispose(),k.map=new Gn(r.x,r.y,pe),k.map.texture.name=ie.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ge=k.getViewportCount();for(let pe=0;pe<ge;pe++){const Ie=k.getViewport(pe);o.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),I.viewport(o),k.updateMatrices(ie,pe),n=k.getFrustum(),A(T,O,k.camera,ie,this.type)}k.isPointLightShadow!==!0&&this.type===Nn&&E(k,O),k.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(w,M,P)};function E(C,T){const O=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gn(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,O,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,O,m,_,null)}function S(C,T,O,w){let M=null;const P=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=O.isPointLight===!0?c:s,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=M.uuid,N=T.uuid;let W=l[I];W===void 0&&(W={},l[I]=W);let J=W[N];J===void 0&&(J=M.clone(),W[N]=J,T.addEventListener("dispose",D)),M=J}if(M.visible=T.visible,M.wireframe=T.wireframe,w===Nn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=O}return M}function A(C,T,O,w,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Nn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const N=e.update(C),W=C.material;if(Array.isArray(W)){const J=N.groups;for(let V=0,ie=J.length;V<ie;V++){const k=J[V],he=W[k.materialIndex];if(he&&he.visible){const ge=S(C,he,w,M);C.onBeforeShadow(i,C,T,O,N,ge,k),i.renderBufferDirect(O,null,N,ge,C,k),C.onAfterShadow(i,C,T,O,N,ge,k)}}}else if(W.visible){const J=S(C,W,w,M);C.onBeforeShadow(i,C,T,O,N,J,null),i.renderBufferDirect(O,null,N,J,C,null),C.onAfterShadow(i,C,T,O,N,J,null)}}const I=C.children;for(let N=0,W=I.length;N<W;N++)A(I[N],T,O,w,M)}function D(C){C.target.removeEventListener("dispose",D);for(const O in l){const w=l[O],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function Zg(i){function e(){let g=!1;const q=new Tt;let z=null;const K=new Tt(0,0,0,0);return{setMask:function(re){z!==re&&!g&&(i.colorMask(re,re,re,re),z=re)},setLocked:function(re){g=re},setClear:function(re,Ce,ke,pt,xt){xt===!0&&(re*=pt,Ce*=pt,ke*=pt),q.set(re,Ce,ke,pt),K.equals(q)===!1&&(i.clearColor(re,Ce,ke,pt),K.copy(q))},reset:function(){g=!1,z=null,K.set(-1,0,0,0)}}}function t(){let g=!1,q=null,z=null,K=null;return{setTest:function(re){re?ve(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(re){q!==re&&!g&&(i.depthMask(re),q=re)},setFunc:function(re){if(z!==re){switch(re){case ju:i.depthFunc(i.NEVER);break;case Ju:i.depthFunc(i.ALWAYS);break;case Qu:i.depthFunc(i.LESS);break;case Aa:i.depthFunc(i.LEQUAL);break;case ed:i.depthFunc(i.EQUAL);break;case td:i.depthFunc(i.GEQUAL);break;case nd:i.depthFunc(i.GREATER);break;case id:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}z=re}},setLocked:function(re){g=re},setClear:function(re){K!==re&&(i.clearDepth(re),K=re)},reset:function(){g=!1,q=null,z=null,K=null}}}function n(){let g=!1,q=null,z=null,K=null,re=null,Ce=null,ke=null,pt=null,xt=null;return{setTest:function(tt){g||(tt?ve(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(tt){q!==tt&&!g&&(i.stencilMask(tt),q=tt)},setFunc:function(tt,St,Mt){(z!==tt||K!==St||re!==Mt)&&(i.stencilFunc(tt,St,Mt),z=tt,K=St,re=Mt)},setOp:function(tt,St,Mt){(Ce!==tt||ke!==St||pt!==Mt)&&(i.stencilOp(tt,St,Mt),Ce=tt,ke=St,pt=Mt)},setLocked:function(tt){g=tt},setClear:function(tt){xt!==tt&&(i.clearStencil(tt),xt=tt)},reset:function(){g=!1,q=null,z=null,K=null,re=null,Ce=null,ke=null,pt=null,xt=null}}}const r=new e,a=new t,o=new n,s=new WeakMap,c=new WeakMap;let l={},d={},h=new WeakMap,f=[],m=null,v=!1,_=null,p=null,u=null,E=null,S=null,A=null,D=null,C=new Te(0,0,0),T=0,O=!1,w=null,M=null,P=null,I=null,N=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,V=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=V>=1):ie.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=V>=2);let k=null,he={};const ge=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Ie=new Tt().fromArray(ge),He=new Tt().fromArray(pe);function Y(g,q,z,K){const re=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(g,Ce),i.texParameteri(g,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(g,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<z;ke++)g===i.TEXTURE_3D||g===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(q+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Ce}const ae={};ae[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),a.setFunc(Aa),Z(!1),_e(ys),ve(i.CULL_FACE),$e(ai);function ve(g){l[g]!==!0&&(i.enable(g),l[g]=!0)}function oe(g){l[g]!==!1&&(i.disable(g),l[g]=!1)}function ze(g,q){return d[g]!==q?(i.bindFramebuffer(g,q),d[g]=q,g===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=q),g===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=q),!0):!1}function Pe(g,q){let z=f,K=!1;if(g){z=h.get(q),z===void 0&&(z=[],h.set(q,z));const re=g.textures;if(z.length!==re.length||z[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,ke=re.length;Ce<ke;Ce++)z[Ce]=i.COLOR_ATTACHMENT0+Ce;z.length=re.length,K=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,K=!0);K&&i.drawBuffers(z)}function Xe(g){return m!==g?(i.useProgram(g),m=g,!0):!1}const R={[ei]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};R[Ou]=i.MIN,R[Bu]=i.MAX;const Ke={[zu]:i.ZERO,[zo]:i.ONE,[ku]:i.SRC_COLOR,[ko]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Xu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(g,q,z,K,re,Ce,ke,pt,xt,tt){if(g===ai){v===!0&&(oe(i.BLEND),v=!1);return}if(v===!1&&(ve(i.BLEND),v=!0),g!==vc){if(g!==_||tt!==O){if((p!==ei||S!==ei)&&(i.blendEquation(i.FUNC_ADD),p=ei,S=ei),tt)switch(g){case ln:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ur:i.blendFunc(i.ONE,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ws:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case ln:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ur:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ws:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}u=null,E=null,A=null,D=null,C.set(0,0,0),T=0,_=g,O=tt}return}re=re||q,Ce=Ce||z,ke=ke||K,(q!==p||re!==S)&&(i.blendEquationSeparate(R[q],R[re]),p=q,S=re),(z!==u||K!==E||Ce!==A||ke!==D)&&(i.blendFuncSeparate(Ke[z],Ke[K],Ke[Ce],Ke[ke]),u=z,E=K,A=Ce,D=ke),(pt.equals(C)===!1||xt!==T)&&(i.blendColor(pt.r,pt.g,pt.b,xt),C.copy(pt),T=xt),_=g,O=!1}function te(g,q){g.side===jt?oe(i.CULL_FACE):ve(i.CULL_FACE);let z=g.side===Qt;q&&(z=!z),Z(z),g.blending===ln&&g.transparent===!1?$e(ai):$e(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),a.setFunc(g.depthFunc),a.setTest(g.depthTest),a.setMask(g.depthWrite),r.setMask(g.colorWrite);const K=g.stencilWrite;o.setTest(K),K&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),Me(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(g){w!==g&&(g?i.frontFace(i.CW):i.frontFace(i.CCW),w=g)}function _e(g){g!==Lu?(ve(i.CULL_FACE),g!==M&&(g===ys?i.cullFace(i.BACK):g===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),M=g}function xe(g){g!==P&&(J&&i.lineWidth(g),P=g)}function Me(g,q,z){g?(ve(i.POLYGON_OFFSET_FILL),(I!==q||N!==z)&&(i.polygonOffset(q,z),I=q,N=z)):oe(i.POLYGON_OFFSET_FILL)}function je(g){g?ve(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function b(g){g===void 0&&(g=i.TEXTURE0+W-1),k!==g&&(i.activeTexture(g),k=g)}function x(g,q,z){z===void 0&&(k===null?z=i.TEXTURE0+W-1:z=k);let K=he[z];K===void 0&&(K={type:void 0,texture:void 0},he[z]=K),(K.type!==g||K.texture!==q)&&(k!==z&&(i.activeTexture(z),k=z),i.bindTexture(g,q||ae[g]),K.type=g,K.texture=q)}function L(){const g=he[k];g!==void 0&&g.type!==void 0&&(i.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ue(g){Ie.equals(g)===!1&&(i.scissor(g.x,g.y,g.z,g.w),Ie.copy(g))}function me(g){He.equals(g)===!1&&(i.viewport(g.x,g.y,g.z,g.w),He.copy(g))}function Ge(g,q){let z=c.get(q);z===void 0&&(z=new WeakMap,c.set(q,z));let K=z.get(g);K===void 0&&(K=i.getUniformBlockIndex(q,g.name),z.set(g,K))}function Ve(g,q){const K=c.get(q).get(g);s.get(q)!==K&&(i.uniformBlockBinding(q,K,g.__bindingPointIndex),s.set(q,K))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},k=null,he={},d={},h=new WeakMap,f=[],m=null,v=!1,_=null,p=null,u=null,E=null,S=null,A=null,D=null,C=new Te(0,0,0),T=0,O=!1,w=null,M=null,P=null,I=null,N=null,Ie.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:oe,bindFramebuffer:ze,drawBuffers:Pe,useProgram:Xe,setBlending:$e,setMaterial:te,setFlipSided:Z,setCullFace:_e,setLineWidth:xe,setPolygonOffset:Me,setScissorTest:je,activeTexture:b,bindTexture:x,unbindTexture:L,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:be,texImage3D:Je,updateUBOMapping:Ge,uniformBlockBinding:Ve,texStorage2D:Ne,texStorage3D:le,texSubImage2D:Q,texSubImage3D:Ee,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Ue,viewport:me,reset:ft}}function Kg(i,e,t,n,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,x){return m?new OffscreenCanvas(b,x):La("canvas")}function _(b,x,L){let $=1;const j=je(b);if((j.width>L||j.height>L)&&($=L/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor($*j.width),Ee=Math.floor($*j.height);h===void 0&&(h=v(Q,Ee));const se=x?v(Q,Ee):h;return se.width=Q,se.height=Ee,se.getContext("2d").drawImage(b,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Q+"x"+Ee+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Jt&&b.minFilter!==At}function u(b){i.generateMipmap(b)}function E(b,x,L,$,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=x;if(x===i.RED&&(L===i.FLOAT&&(Q=i.R32F),L===i.HALF_FLOAT&&(Q=i.R16F),L===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Q=i.R8UI),L===i.UNSIGNED_SHORT&&(Q=i.R16UI),L===i.UNSIGNED_INT&&(Q=i.R32UI),L===i.BYTE&&(Q=i.R8I),L===i.SHORT&&(Q=i.R16I),L===i.INT&&(Q=i.R32I)),x===i.RG&&(L===i.FLOAT&&(Q=i.RG32F),L===i.HALF_FLOAT&&(Q=i.RG16F),L===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Q=i.RG8UI),L===i.UNSIGNED_SHORT&&(Q=i.RG16UI),L===i.UNSIGNED_INT&&(Q=i.RG32UI),L===i.BYTE&&(Q=i.RG8I),L===i.SHORT&&(Q=i.RG16I),L===i.INT&&(Q=i.RG32I)),x===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),x===i.RGBA){const Ee=j?Ca:at.getTransfer($);L===i.FLOAT&&(Q=i.RGBA32F),L===i.HALF_FLOAT&&(Q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Q=Ee===ct?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(b,x){let L;return b?x===null||x===fr||x===pr?L=i.DEPTH24_STENCIL8:x===On?L=i.DEPTH32F_STENCIL8:x===Ta&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fr||x===pr?L=i.DEPTH_COMPONENT24:x===On?L=i.DEPTH_COMPONENT32F:x===Ta&&(L=i.DEPTH_COMPONENT16),L}function A(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Jt&&b.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function D(b){const x=b.target;x.removeEventListener("dispose",D),T(x),x.isVideoTexture&&d.delete(x)}function C(b){const x=b.target;x.removeEventListener("dispose",C),w(x)}function T(b){const x=n.get(b);if(x.__webglInit===void 0)return;const L=b.source,$=f.get(L);if($){const j=$[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&O(b),Object.keys($).length===0&&f.delete(L)}n.remove(b)}function O(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const L=b.source,$=f.get(L);delete $[x.__cacheKey],o.memory.textures--}function w(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let j=0;j<x.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[$][j]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=b.textures;for(let $=0,j=L.length;$<j;$++){const Q=n.get(L[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(L[$])}n.remove(b)}let M=0;function P(){M=0}function I(){const b=M;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),M+=1,b}function N(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function W(b,x){const L=n.get(b);if(b.isVideoTexture&&xe(b),b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(L,b,x);return}}t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+x)}function J(b,x){const L=n.get(b);if(b.version>0&&L.__version!==b.version){He(L,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+x)}function V(b,x){const L=n.get(b);if(b.version>0&&L.__version!==b.version){He(L,b,x);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+x)}function ie(b,x){const L=n.get(b);if(b.version>0&&L.__version!==b.version){Y(L,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+x)}const k={[Wo]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},he={[Jt]:i.NEAREST,[fd]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},ge={[Cd]:i.NEVER,[Fd]:i.ALWAYS,[Rd]:i.LESS,[Ac]:i.LEQUAL,[Pd]:i.EQUAL,[Ud]:i.GEQUAL,[Dd]:i.GREATER,[Ld]:i.NOTEQUAL};function pe(b,x){if(x.type===On&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===At||x.magFilter===Qa||x.magFilter===Yr||x.magFilter===Ai||x.minFilter===At||x.minFilter===Qa||x.minFilter===Yr||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,k[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,k[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,k[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,he[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==Yr&&x.minFilter!==Ai||x.type===On&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ie(b,x){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",D));const $=x.source;let j=f.get($);j===void 0&&(j={},f.set($,j));const Q=N(x);if(Q!==b.__cacheKey){j[Q]===void 0&&(j[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[Q].usedTimes++;const Ee=j[b.__cacheKey];Ee!==void 0&&(j[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&O(x)),b.__cacheKey=Q,b.__webglTexture=j[Q].texture}return L}function He(b,x,L){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const j=Ie(b,x),Q=x.source;t.bindTexture($,b.__webglTexture,i.TEXTURE0+L);const Ee=n.get(Q);if(Q.version!==Ee.__version||j===!0){t.activeTexture(i.TEXTURE0+L);const se=at.getPrimaries(at.workingColorSpace),ue=x.colorSpace===ti?null:at.getPrimaries(x.colorSpace),Ne=x.colorSpace===ti||se===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let le=_(x.image,!1,r.maxTextureSize);le=Me(x,le);const be=a.convert(x.format,x.colorSpace),Je=a.convert(x.type);let Ue=E(x.internalFormat,be,Je,x.colorSpace,x.isVideoTexture);pe($,x);let me;const Ge=x.mipmaps,Ve=x.isVideoTexture!==!0,ft=Ee.__version===void 0||j===!0,g=Q.dataReady,q=A(x,le);if(x.isDepthTexture)Ue=S(x.format===mr,x.type),ft&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ue,le.width,le.height,0,be,Je,null));else if(x.isDataTexture)if(Ge.length>0){Ve&&ft&&t.texStorage2D(i.TEXTURE_2D,q,Ue,Ge[0].width,Ge[0].height);for(let z=0,K=Ge.length;z<K;z++)me=Ge[z],Ve?g&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,me.width,me.height,be,Je,me.data):t.texImage2D(i.TEXTURE_2D,z,Ue,me.width,me.height,0,be,Je,me.data);x.generateMipmaps=!1}else Ve?(ft&&t.texStorage2D(i.TEXTURE_2D,q,Ue,le.width,le.height),g&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,be,Je,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,le.width,le.height,0,be,Je,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,q,Ue,Ge[0].width,Ge[0].height,le.depth);for(let z=0,K=Ge.length;z<K;z++)if(me=Ge[z],x.format!==pn)if(be!==null)if(Ve){if(g)if(x.layerUpdates.size>0){for(const re of x.layerUpdates){const Ce=me.width*me.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,re,me.width,me.height,1,be,me.data.slice(Ce*re,Ce*(re+1)),0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,me.width,me.height,le.depth,be,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Ue,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?g&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,me.width,me.height,le.depth,be,Je,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,Ue,me.width,me.height,le.depth,0,be,Je,me.data)}else{Ve&&ft&&t.texStorage2D(i.TEXTURE_2D,q,Ue,Ge[0].width,Ge[0].height);for(let z=0,K=Ge.length;z<K;z++)me=Ge[z],x.format!==pn?be!==null?Ve?g&&t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,me.width,me.height,be,me.data):t.compressedTexImage2D(i.TEXTURE_2D,z,Ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?g&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,me.width,me.height,be,Je,me.data):t.texImage2D(i.TEXTURE_2D,z,Ue,me.width,me.height,0,be,Je,me.data)}else if(x.isDataArrayTexture)if(Ve){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,q,Ue,le.width,le.height,le.depth),g)if(x.layerUpdates.size>0){let z;switch(Je){case i.UNSIGNED_BYTE:switch(be){case i.ALPHA:z=1;break;case i.LUMINANCE:z=1;break;case i.LUMINANCE_ALPHA:z=2;break;case i.RGB:z=3;break;case i.RGBA:z=4;break;default:throw new Error(`Unknown texel size for format ${be}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:z=1;break;default:throw new Error(`Unknown texel size for type ${Je}.`)}const K=le.width*le.height*z;for(const re of x.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,be,Je,le.data.slice(K*re,K*(re+1)));x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,Je,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,be,Je,le.data);else if(x.isData3DTexture)Ve?(ft&&t.texStorage3D(i.TEXTURE_3D,q,Ue,le.width,le.height,le.depth),g&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,Je,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,be,Je,le.data);else if(x.isFramebufferTexture){if(ft)if(Ve)t.texStorage2D(i.TEXTURE_2D,q,Ue,le.width,le.height);else{let z=le.width,K=le.height;for(let re=0;re<q;re++)t.texImage2D(i.TEXTURE_2D,re,Ue,z,K,0,be,Je,null),z>>=1,K>>=1}}else if(Ge.length>0){if(Ve&&ft){const z=je(Ge[0]);t.texStorage2D(i.TEXTURE_2D,q,Ue,z.width,z.height)}for(let z=0,K=Ge.length;z<K;z++)me=Ge[z],Ve?g&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,be,Je,me):t.texImage2D(i.TEXTURE_2D,z,Ue,be,Je,me);x.generateMipmaps=!1}else if(Ve){if(ft){const z=je(le);t.texStorage2D(i.TEXTURE_2D,q,Ue,z.width,z.height)}g&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Je,le)}else t.texImage2D(i.TEXTURE_2D,0,Ue,be,Je,le);p(x)&&u($),Ee.__version=Q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Y(b,x,L){if(x.image.length!==6)return;const $=Ie(b,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+L);const Q=n.get(j);if(j.version!==Q.__version||$===!0){t.activeTexture(i.TEXTURE0+L);const Ee=at.getPrimaries(at.workingColorSpace),se=x.colorSpace===ti?null:at.getPrimaries(x.colorSpace),ue=x.colorSpace===ti||Ee===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,be=[];for(let K=0;K<6;K++)!Ne&&!le?be[K]=_(x.image[K],!0,r.maxCubemapSize):be[K]=le?x.image[K].image:x.image[K],be[K]=Me(x,be[K]);const Je=be[0],Ue=a.convert(x.format,x.colorSpace),me=a.convert(x.type),Ge=E(x.internalFormat,Ue,me,x.colorSpace),Ve=x.isVideoTexture!==!0,ft=Q.__version===void 0||$===!0,g=j.dataReady;let q=A(x,Je);pe(i.TEXTURE_CUBE_MAP,x);let z;if(Ne){Ve&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,q,Ge,Je.width,Je.height);for(let K=0;K<6;K++){z=be[K].mipmaps;for(let re=0;re<z.length;re++){const Ce=z[re];x.format!==pn?Ue!==null?Ve?g&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Ce.width,Ce.height,Ue,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Ge,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?g&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Ce.width,Ce.height,Ue,me,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Ge,Ce.width,Ce.height,0,Ue,me,Ce.data)}}}else{if(z=x.mipmaps,Ve&&ft){z.length>0&&q++;const K=je(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,q,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(le){Ve?g&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be[K].width,be[K].height,Ue,me,be[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,be[K].width,be[K].height,0,Ue,me,be[K].data);for(let re=0;re<z.length;re++){const ke=z[re].image[K].image;Ve?g&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,ke.width,ke.height,Ue,me,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Ge,ke.width,ke.height,0,Ue,me,ke.data)}}else{Ve?g&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ue,me,be[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Ue,me,be[K]);for(let re=0;re<z.length;re++){const Ce=z[re];Ve?g&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Ue,me,Ce.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Ge,Ue,me,Ce.image[K])}}}p(x)&&u(i.TEXTURE_CUBE_MAP),Q.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ae(b,x,L,$,j,Q){const Ee=a.convert(L.format,L.colorSpace),se=a.convert(L.type),ue=E(L.internalFormat,Ee,se,L.colorSpace);if(!n.get(x).__hasExternalTextures){const le=Math.max(1,x.width>>Q),be=Math.max(1,x.height>>Q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Q,ue,le,be,x.depth,0,Ee,se,null):t.texImage2D(j,Q,ue,le,be,0,Ee,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),_e(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,n.get(L).__webglTexture,0,Z(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,n.get(L).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(b,x,L){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const $=x.depthTexture,j=$&&$.isDepthTexture?$.type:null,Q=S(x.stencilBuffer,j),Ee=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=Z(x);_e(x)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Q,x.width,x.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,b)}else{const $=x.textures;for(let j=0;j<$.length;j++){const Q=$[j],Ee=a.convert(Q.format,Q.colorSpace),se=a.convert(Q.type),ue=E(Q.internalFormat,Ee,se,Q.colorSpace),Ne=Z(x);L&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ue,x.width,x.height):_e(x)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,ue,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ue,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,j=Z(x);if(x.depthTexture.format===or)_e(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(x.depthTexture.format===mr)_e(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ze(b){const x=n.get(b),L=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");oe(x.__webglFramebuffer,b)}else if(L){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=i.createRenderbuffer(),ve(x.__webglDepthbuffer[$],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),ve(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(b,x,L){const $=n.get(b);x!==void 0&&ae($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&ze(b)}function Xe(b){const x=b.texture,L=n.get(b),$=n.get(x);b.addEventListener("dispose",C);const j=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),Q){L.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[se]=[];for(let ue=0;ue<x.mipmaps.length;ue++)L.__webglFramebuffer[se][ue]=i.createFramebuffer()}else L.__webglFramebuffer[se]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)L.__webglFramebuffer[se]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let se=0,ue=j.length;se<ue;se++){const Ne=n.get(j[se]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&_e(b)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const ue=j[se];L.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[se]);const Ne=a.convert(ue.format,ue.colorSpace),le=a.convert(ue.type),be=E(ue.internalFormat,Ne,le,ue.colorSpace,b.isXRRenderTarget===!0),Je=Z(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,be,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,L.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),pe(i.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ae(L.__webglFramebuffer[se][ue],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else ae(L.__webglFramebuffer[se],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(x)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let se=0,ue=j.length;se<ue;se++){const Ne=j[se],le=n.get(Ne);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),pe(i.TEXTURE_2D,Ne),ae(L.__webglFramebuffer,b,Ne,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),p(Ne)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),pe(se,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ae(L.__webglFramebuffer[ue],b,x,i.COLOR_ATTACHMENT0,se,ue);else ae(L.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,se,0);p(x)&&u(se),t.unbindTexture()}b.depthBuffer&&ze(b)}function R(b){const x=b.textures;for(let L=0,$=x.length;L<$;L++){const j=x[L];if(p(j)){const Q=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(j).__webglTexture;t.bindTexture(Q,Ee),u(Q),t.unbindTexture()}}}const Ke=[],$e=[];function te(b){if(b.samples>0){if(_e(b)===!1){const x=b.textures,L=b.width,$=b.height;let j=i.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(b),se=x.length>1;if(se)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ue]);const Ne=n.get(x[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,L,$,0,0,L,$,j,i.NEAREST),c===!0&&(Ke.length=0,$e.length=0,Ke.push(i.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ke.push(Q),$e.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ue]);const Ne=n.get(x[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Z(b){return Math.min(r.maxSamples,b.samples)}function _e(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xe(b){const x=o.render.frame;d.get(b)!==x&&(d.set(b,x),b.update())}function Me(b,x){const L=b.colorSpace,$=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==hi&&L!==ti&&(at.getTransfer(L)===ct?($!==pn||j!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),x}function je(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=V,this.setTextureCube=ie,this.rebindTextures=Pe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=_e}function $g(i,e){function t(n,r=ti){let a;const o=at.getTransfer(r);if(n===li)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return i.BYTE;if(n===md)return i.SHORT;if(n===Ta)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===fr)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===kr)return i.HALF_FLOAT;if(n===vd)return i.ALPHA;if(n===_d)return i.RGB;if(n===pn)return i.RGBA;if(n===xd)return i.LUMINANCE;if(n===Sd)return i.LUMINANCE_ALPHA;if(n===or)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===Md)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===yd)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===bc)return i.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(o===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===eo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===eo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bs||n===As||n===Ts||n===Cs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===bs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===As)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ts)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rs||n===Ps||n===Ds)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Rs||n===Ps)return o===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ds)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ls||n===Us||n===Fs||n===Is||n===Ns||n===Os||n===Bs||n===zs||n===ks||n===Hs||n===Gs||n===Vs||n===Ws||n===Xs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ls)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Us)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fs)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Is)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ns)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Os)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bs)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zs)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ks)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hs)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gs)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vs)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ws)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xs)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===Ys||n===qs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ro)return o===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ys)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===Zs||n===Ks||n===$s)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ro)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Zs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$s)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class jg extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tn extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jg={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Vt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:Qg,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class n0 extends Ui{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,d=null,h=null,f=null,m=null,v=null;const _=new t0,p=t.getContextAttributes();let u=null,E=null;const S=[],A=[],D=new Be;let C=null;const T=new hn;T.layers.enable(1),T.viewport=new Tt;const O=new hn;O.layers.enable(2),O.viewport=new Tt;const w=[T,O],M=new jg;M.layers.enable(1),M.layers.enable(2);let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=S[Y];return ae===void 0&&(ae=new Po,S[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=S[Y];return ae===void 0&&(ae=new Po,S[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=S[Y];return ae===void 0&&(ae=new Po,S[Y]=ae),ae.getHandSpace()};function N(Y){const ae=A.indexOf(Y.inputSource);if(ae===-1)return;const ve=S[ae];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,l||o),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",J);for(let Y=0;Y<S.length;Y++){const ae=A[Y];ae!==null&&(A[Y]=null,S[Y].disconnect(ae))}P=null,I=null,_.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,E=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",W),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Gn(m.framebufferWidth,m.framebufferHeight,{format:pn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,ve=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?mr:or,ve=p.stencil?pr:fr);const ze={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Gn(f.textureWidth,f.textureHeight,{format:pn,type:li,depthTexture:new kc(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(Y){for(let ae=0;ae<Y.removed.length;ae++){const ve=Y.removed[ae],oe=A.indexOf(ve);oe>=0&&(A[oe]=null,S[oe].disconnect(ve))}for(let ae=0;ae<Y.added.length;ae++){const ve=Y.added[ae];let oe=A.indexOf(ve);if(oe===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=A.length){A.push(ve),oe=Pe;break}else if(A[Pe]===null){A[Pe]=ve,oe=Pe;break}if(oe===-1)break}const ze=S[oe];ze&&ze.connect(ve)}}const V=new F,ie=new F;function k(Y,ae,ve){V.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(ve.matrixWorld);const oe=V.distanceTo(ie),ze=ae.projectionMatrix.elements,Pe=ve.projectionMatrix.elements,Xe=ze[14]/(ze[10]-1),R=ze[14]/(ze[10]+1),Ke=(ze[9]+1)/ze[5],$e=(ze[9]-1)/ze[5],te=(ze[8]-1)/ze[0],Z=(Pe[8]+1)/Pe[0],_e=Xe*te,xe=Xe*Z,Me=oe/(-te+Z),je=Me*-te;ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(je),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Xe+Me,x=R+Me,L=_e-je,$=xe+(oe-je),j=Ke*R/x*b,Q=$e*R/x*b;Y.projectionMatrix.makePerspective(L,$,j,Q,b,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function he(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),M.near=O.near=T.near=Y.near,M.far=O.far=T.far=Y.far,(P!==M.near||I!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,I=M.far,T.near=P,T.far=I,O.near=P,O.far=I,T.updateProjectionMatrix(),O.updateProjectionMatrix(),Y.updateProjectionMatrix());const ae=Y.parent,ve=M.cameras;he(M,ae);for(let oe=0;oe<ve.length;oe++)he(ve[oe],ae);ve.length===2?k(M,T,O):M.projectionMatrix.copy(T.projectionMatrix),ge(Y,M,ae)};function ge(Y,ae,ve){ve===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Nr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let pe=null;function Ie(Y,ae){if(d=ae.getViewerPose(l||o),v=ae,d!==null){const ve=d.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let oe=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Pe=0;Pe<ve.length;Pe++){const Xe=ve[Pe];let R=null;if(m!==null)R=m.getViewport(Xe);else{const $e=h.getViewSubImage(f,Xe);R=$e.viewport,Pe===0&&(e.setRenderTargetTextures(E,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(E))}let Ke=w[Pe];Ke===void 0&&(Ke=new hn,Ke.layers.enable(Pe),Ke.viewport=new Tt,w[Pe]=Ke),Ke.matrix.fromArray(Xe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Xe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(R.x,R.y,R.width,R.height),Pe===0&&(M.matrix.copy(Ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(Ke)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Pe=h.getDepthInformation(ve[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,r.renderState)}}for(let ve=0;ve<S.length;ve++){const oe=A[ve],ze=S[ve];oe!==null&&ze!==void 0&&ze.update(oe,ae,l||o)}pe&&pe(Y,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}const He=new Bc;He.setAnimationLoop(Ie),this.setAnimationLoop=function(Y){pe=Y},this.dispose=function(){}}}const Mi=new Vn,i0=new vt;function r0(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Fc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,E,S,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),h(p,u)):u.isMeshPhongMaterial?(a(p,u),d(p,u)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,A)):u.isMeshMatcapMaterial?(a(p,u),v(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),_(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?c(p,u,E,S):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Qt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Qt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const E=e.get(u),S=E.envMap,A=E.envMapRotation;S&&(p.envMap.value=S,Mi.copy(A),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(Mi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,E,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=S*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const E=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function a0(i,e,t,n){let r={},a={},o=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const A=S.program;n.uniformBlockBinding(E,A)}function l(E,S){let A=r[E.id];A===void 0&&(v(E),A=d(E),r[E.id]=A,E.addEventListener("dispose",p));const D=S.program;n.updateUBOMapping(E,D);const C=e.render.frame;a[E.id]!==C&&(f(E),a[E.id]=C)}function d(E){const S=h();E.__bindingPointIndex=S;const A=i.createBuffer(),D=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function h(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=r[E.id],A=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,T=A.length;C<T;C++){const O=Array.isArray(A[C])?A[C]:[A[C]];for(let w=0,M=O.length;w<M;w++){const P=O[w];if(m(P,C,w,D)===!0){const I=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let J=0;J<N.length;J++){const V=N[J],ie=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,I+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,S,A,D){const C=E.value,T=S+"_"+A;if(D[T]===void 0)return typeof C=="number"||typeof C=="boolean"?D[T]=C:D[T]=C.clone(),!0;{const O=D[T];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return D[T]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function v(E){const S=E.uniforms;let A=0;const D=16;for(let T=0,O=S.length;T<O;T++){const w=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,P=w.length;M<P;M++){const I=w[M],N=Array.isArray(I.value)?I.value:[I.value];for(let W=0,J=N.length;W<J;W++){const V=N[W],ie=_(V),k=A%D;k!==0&&D-k<ie.boundary&&(A+=D-k),I.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=ie.storage}}}const C=A%D;return C>0&&(A+=D-C),E.__size=A,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function u(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:c,update:l,dispose:u}}class o0{constructor(e={}){const{canvas:t=jd(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=oi,this.toneMappingExposure=1;const S=this;let A=!1,D=0,C=0,T=null,O=-1,w=null;const M=new Tt,P=new Tt;let I=null;const N=new Te(0);let W=0,J=t.width,V=t.height,ie=1,k=null,he=null;const ge=new Tt(0,0,J,V),pe=new Tt(0,0,J,V);let Ie=!1;const He=new Oc;let Y=!1,ae=!1;const ve=new vt,oe=new F,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Xe(){return T===null?ie:1}let R=n;function Ke(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ts}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",K,!1),R===null){const U="webgl2";if(R=Ke(U,y),R===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $e,te,Z,_e,xe,Me,je,b,x,L,$,j,Q,Ee,se,ue,Ne,le,be,Je,Ue,me,Ge,Ve;function ft(){$e=new pm(R),$e.init(),me=new $g(R,$e),te=new lm(R,$e,e,me),Z=new Zg(R),_e=new vm(R),xe=new Fg,Me=new Kg(R,$e,Z,xe,te,me,_e),je=new um(S),b=new fm(S),x=new Eh(R),Ge=new om(R,x),L=new mm(R,x,_e,Ge),$=new xm(R,L,x,_e),be=new _m(R,te,Me),ue=new cm(xe),j=new Ug(S,je,b,$e,te,Ge,ue),Q=new r0(S,xe),Ee=new Ng,se=new Gg($e),le=new am(S,je,b,Z,$,f,c),Ne=new qg(S,$,te),Ve=new a0(R,_e,te,Z),Je=new sm(R,$e,_e),Ue=new gm(R,$e,_e),_e.programs=j.programs,S.capabilities=te,S.extensions=$e,S.properties=xe,S.renderLists=Ee,S.shadowMap=Ne,S.state=Z,S.info=_e}ft();const g=new n0(S,R);this.xr=g,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=$e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=$e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(J,V,!1))},this.getSize=function(y){return y.set(J,V)},this.setSize=function(y,U,G=!0){if(g.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,V=U,t.width=Math.floor(y*ie),t.height=Math.floor(U*ie),G===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(J*ie,V*ie).floor()},this.setDrawingBufferSize=function(y,U,G){J=y,V=U,ie=G,t.width=Math.floor(y*G),t.height=Math.floor(U*G),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(ge)},this.setViewport=function(y,U,G,X){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,U,G,X),Z.viewport(M.copy(ge).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(pe)},this.setScissor=function(y,U,G,X){y.isVector4?pe.set(y.x,y.y,y.z,y.w):pe.set(y,U,G,X),Z.scissor(P.copy(pe).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(y){Z.setScissorTest(Ie=y)},this.setOpaqueSort=function(y){k=y},this.setTransparentSort=function(y){he=y},this.getClearColor=function(y){return y.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(y=!0,U=!0,G=!0){let X=0;if(y){let B=!1;if(T!==null){const de=T.texture.format;B=de===bc||de===wc||de===Ec}if(B){const de=T.texture.type,Se=de===li||de===fr||de===Ta||de===pr||de===Mc||de===yc,ye=le.getClearColor(),Ae=le.getClearAlpha(),Fe=ye.r,Oe=ye.g,Le=ye.b;Se?(m[0]=Fe,m[1]=Oe,m[2]=Le,m[3]=Ae,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=Fe,v[1]=Oe,v[2]=Le,v[3]=Ae,R.clearBufferiv(R.COLOR,0,v))}else X|=R.COLOR_BUFFER_BIT}U&&(X|=R.DEPTH_BUFFER_BIT),G&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Ee.dispose(),se.dispose(),xe.dispose(),je.dispose(),b.dispose(),$.dispose(),Ge.dispose(),Ve.dispose(),j.dispose(),g.dispose(),g.removeEventListener("sessionstart",St),g.removeEventListener("sessionend",Mt),en.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=_e.autoReset,U=Ne.enabled,G=Ne.autoUpdate,X=Ne.needsUpdate,B=Ne.type;ft(),_e.autoReset=y,Ne.enabled=U,Ne.autoUpdate=G,Ne.needsUpdate=X,Ne.type=B}function K(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function re(y){const U=y.target;U.removeEventListener("dispose",re),Ce(U)}function Ce(y){ke(y),xe.remove(y)}function ke(y){const U=xe.get(y).programs;U!==void 0&&(U.forEach(function(G){j.releaseProgram(G)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,G,X,B,de){U===null&&(U=ze);const Se=B.isMesh&&B.matrixWorld.determinant()<0,ye=Cu(y,U,G,X,B);Z.setMaterial(X,Se);let Ae=G.index,Fe=1;if(X.wireframe===!0){if(Ae=L.getWireframeAttribute(G),Ae===void 0)return;Fe=2}const Oe=G.drawRange,Le=G.attributes.position;let nt=Oe.start*Fe,mt=(Oe.start+Oe.count)*Fe;de!==null&&(nt=Math.max(nt,de.start*Fe),mt=Math.min(mt,(de.start+de.count)*Fe)),Ae!==null?(nt=Math.max(nt,0),mt=Math.min(mt,Ae.count)):Le!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,Le.count));const gt=mt-nt;if(gt<0||gt===1/0)return;Ge.setup(B,X,ye,G,Ae);let nn,rt=Je;if(Ae!==null&&(nn=x.get(Ae),rt=Ue,rt.setIndex(nn)),B.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*Xe()),rt.setMode(R.LINES)):rt.setMode(R.TRIANGLES);else if(B.isLine){let Re=X.linewidth;Re===void 0&&(Re=1),Z.setLineWidth(Re*Xe()),B.isLineSegments?rt.setMode(R.LINES):B.isLineLoop?rt.setMode(R.LINE_LOOP):rt.setMode(R.LINE_STRIP)}else B.isPoints?rt.setMode(R.POINTS):B.isSprite&&rt.setMode(R.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?rt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)rt.renderInstances(nt,gt,B.count);else if(G.isInstancedBufferGeometry){const Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Wt=Math.min(G.instanceCount,Re);rt.renderInstances(nt,gt,Wt)}else rt.render(nt,gt)};function pt(y,U,G){y.transparent===!0&&y.side===jt&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,Wr(y,U,G),y.side=si,y.needsUpdate=!0,Wr(y,U,G),y.side=jt):Wr(y,U,G)}this.compile=function(y,U,G=null){G===null&&(G=y),p=se.get(G),p.init(U),E.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),y!==G&&y.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return y.traverse(function(B){const de=B.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const ye=de[Se];pt(ye,G,B),X.add(ye)}else pt(de,G,B),X.add(de)}),E.pop(),p=null,X},this.compileAsync=function(y,U,G=null){const X=this.compile(y,U,G);return new Promise(B=>{function de(){if(X.forEach(function(Se){xe.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){B(y);return}setTimeout(de,10)}$e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let xt=null;function tt(y){xt&&xt(y)}function St(){en.stop()}function Mt(){en.start()}const en=new Bc;en.setAnimationLoop(tt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(y){xt=y,g.setAnimationLoop(y),y===null?en.stop():en.start()},g.addEventListener("sessionstart",St),g.addEventListener("sessionend",Mt),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),g.enabled===!0&&g.isPresenting===!0&&(g.cameraAutoUpdate===!0&&g.updateCamera(U),U=g.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,U,T),p=se.get(y,E.length),p.init(U),E.push(p),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),He.setFromProjectionMatrix(ve),ae=this.localClippingEnabled,Y=ue.init(this.clippingPlanes,ae),_=Ee.get(y,u.length),_.init(),u.push(_),g.enabled===!0&&g.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&tn(de,U,-1/0,S.sortObjects)}tn(y,U,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(k,he),Pe=g.enabled===!1||g.isPresenting===!1||g.hasDepthSensing()===!1,Pe&&le.addToRenderList(_,y),this.info.render.frame++,Y===!0&&ue.beginShadows();const G=p.state.shadowsArray;Ne.render(G,y,U),Y===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,B=_.transmissive;if(p.setupLights(),U.isArrayCamera){const de=U.cameras;if(B.length>0)for(let Se=0,ye=de.length;Se<ye;Se++){const Ae=de[Se];fi(X,B,y,Ae)}Pe&&le.render(y);for(let Se=0,ye=de.length;Se<ye;Se++){const Ae=de[Se];Yn(_,y,Ae,Ae.viewport)}}else B.length>0&&fi(X,B,y,U),Pe&&le.render(y),Yn(_,y,U);T!==null&&(Me.updateMultisampleRenderTarget(T),Me.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(S,y,U),Ge.resetDefaultState(),O=-1,w=null,E.pop(),E.length>0?(p=E[E.length-1],Y===!0&&ue.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function tn(y,U,G,X){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||He.intersectsSprite(y)){X&&oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);const Se=$.update(y),ye=y.material;ye.visible&&_.push(y,Se,ye,G,oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||He.intersectsObject(y))){const Se=$.update(y),ye=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),oe.copy(y.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),oe.copy(Se.boundingSphere.center)),oe.applyMatrix4(y.matrixWorld).applyMatrix4(ve)),Array.isArray(ye)){const Ae=Se.groups;for(let Fe=0,Oe=Ae.length;Fe<Oe;Fe++){const Le=Ae[Fe],nt=ye[Le.materialIndex];nt&&nt.visible&&_.push(y,Se,nt,G,oe.z,Le)}}else ye.visible&&_.push(y,Se,ye,G,oe.z,null)}}const de=y.children;for(let Se=0,ye=de.length;Se<ye;Se++)tn(de[Se],U,G,X)}function Yn(y,U,G,X){const B=y.opaque,de=y.transmissive,Se=y.transparent;p.setupLightsView(G),Y===!0&&ue.setGlobalState(S.clippingPlanes,G),X&&Z.viewport(M.copy(X)),B.length>0&&pi(B,U,G),de.length>0&&pi(de,U,G),Se.length>0&&pi(Se,U,G),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fi(y,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Gn(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?kr:li,minFilter:Ai,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const de=p.state.transmissionRenderTarget[X.id],Se=X.viewport||M;de.setSize(Se.z,Se.w);const ye=S.getRenderTarget();S.setRenderTarget(de),S.getClearColor(N),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),Pe?le.render(G):S.clear();const Ae=S.toneMapping;S.toneMapping=oi;const Fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Y===!0&&ue.setGlobalState(S.clippingPlanes,X),pi(y,G,X),Me.updateMultisampleRenderTarget(de),Me.updateRenderTargetMipmap(de),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Le=0,nt=U.length;Le<nt;Le++){const mt=U[Le],gt=mt.object,nn=mt.geometry,rt=mt.material,Re=mt.group;if(rt.side===jt&&gt.layers.test(X.layers)){const Wt=rt.side;rt.side=Qt,rt.needsUpdate=!0,_s(gt,G,X,nn,rt,Re),rt.side=Wt,rt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Me.updateMultisampleRenderTarget(de),Me.updateRenderTargetMipmap(de))}S.setRenderTarget(ye),S.setClearColor(N,W),Fe!==void 0&&(X.viewport=Fe),S.toneMapping=Ae}function pi(y,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let B=0,de=y.length;B<de;B++){const Se=y[B],ye=Se.object,Ae=Se.geometry,Fe=X===null?Se.material:X,Oe=Se.group;ye.layers.test(G.layers)&&_s(ye,U,G,Ae,Fe,Oe)}}function _s(y,U,G,X,B,de){y.onBeforeRender(S,U,G,X,B,de),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(S,U,G,X,y,de),B.transparent===!0&&B.side===jt&&B.forceSinglePass===!1?(B.side=Qt,B.needsUpdate=!0,S.renderBufferDirect(G,U,X,B,y,de),B.side=si,B.needsUpdate=!0,S.renderBufferDirect(G,U,X,B,y,de),B.side=jt):S.renderBufferDirect(G,U,X,B,y,de),y.onAfterRender(S,U,G,X,B,de)}function Wr(y,U,G){U.isScene!==!0&&(U=ze);const X=xe.get(y),B=p.state.lights,de=p.state.shadowsArray,Se=B.state.version,ye=j.getParameters(y,B.state,de,U,G),Ae=j.getProgramCacheKey(ye);let Fe=X.programs;X.environment=y.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(y.isMeshStandardMaterial?b:je).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",re),Fe=new Map,X.programs=Fe);let Oe=Fe.get(Ae);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===Se)return Ss(y,ye),Oe}else ye.uniforms=j.getUniforms(y),y.onBuild(G,ye,S),y.onBeforeCompile(ye,S),Oe=j.acquireProgram(ye,Ae),Fe.set(Ae,Oe),X.uniforms=ye.uniforms;const Le=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=ue.uniform),Ss(y,ye),X.needsLights=Pu(y),X.lightsStateVersion=Se,X.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function xs(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ea.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Ss(y,U){const G=xe.get(y);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Cu(y,U,G,X,B){U.isScene!==!0&&(U=ze),Me.resetTextureUnits();const de=U.fog,Se=X.isMeshStandardMaterial?U.environment:null,ye=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:hi,Ae=(X.isMeshStandardMaterial?b:je).get(X.envMap||Se),Fe=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color;let gt=oi;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=S.toneMapping);const nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=nn!==void 0?nn.length:0,Re=xe.get(X),Wt=p.state.lights;if(Y===!0&&(ae===!0||y!==w)){const cn=y===w&&X.id===O;ue.setState(X,y,cn)}let ot=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Wt.state.version||Re.outputColorSpace!==ye||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==Ae||X.fog===!0&&Re.fog!==de||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ue.numPlanes||Re.numIntersection!==ue.numIntersection)||Re.vertexAlphas!==Fe||Re.vertexTangents!==Oe||Re.morphTargets!==Le||Re.morphNormals!==nt||Re.morphColors!==mt||Re.toneMapping!==gt||Re.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Re.__version=X.version);let Pn=Re.currentProgram;ot===!0&&(Pn=Wr(X,U,B));let Xr=!1,mi=!1,$a=!1;const Dt=Pn.getUniforms(),qn=Re.uniforms;if(Z.useProgram(Pn.program)&&(Xr=!0,mi=!0,$a=!0),X.id!==O&&(O=X.id,mi=!0),Xr||w!==y){Dt.setValue(R,"projectionMatrix",y.projectionMatrix),Dt.setValue(R,"viewMatrix",y.matrixWorldInverse);const cn=Dt.map.cameraPosition;cn!==void 0&&cn.setValue(R,oe.setFromMatrixPosition(y.matrixWorld)),te.logarithmicDepthBuffer&&Dt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Dt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),w!==y&&(w=y,mi=!0,$a=!0)}if(B.isSkinnedMesh){Dt.setOptional(R,B,"bindMatrix"),Dt.setOptional(R,B,"bindMatrixInverse");const cn=B.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Dt.setValue(R,"boneTexture",cn.boneTexture,Me))}B.isBatchedMesh&&(Dt.setOptional(R,B,"batchingTexture"),Dt.setValue(R,"batchingTexture",B._matricesTexture,Me),Dt.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&Dt.setValue(R,"batchingColorTexture",B._colorsTexture,Me));const ja=G.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0)&&be.update(B,G,Pn),(mi||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,Dt.setValue(R,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(qn.envMap.value=Ae,qn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(qn.envMapIntensity.value=U.environmentIntensity),mi&&(Dt.setValue(R,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&Ru(qn,$a),de&&X.fog===!0&&Q.refreshFogUniforms(qn,de),Q.refreshMaterialUniforms(qn,X,ie,V,p.state.transmissionRenderTarget[y.id]),Ea.upload(R,xs(Re),qn,Me)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ea.upload(R,xs(Re),qn,Me),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Dt.setValue(R,"center",B.center),Dt.setValue(R,"modelViewMatrix",B.modelViewMatrix),Dt.setValue(R,"normalMatrix",B.normalMatrix),Dt.setValue(R,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const cn=X.uniformsGroups;for(let Ja=0,Du=cn.length;Ja<Du;Ja++){const Ms=cn[Ja];Ve.update(Ms,Pn),Ve.bind(Ms,Pn)}}return Pn}function Ru(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Pu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,U,G){xe.get(y.texture).__webglTexture=U,xe.get(y.depthTexture).__webglTexture=G;const X=xe.get(y);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const G=xe.get(y);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,G=0){T=y,D=U,C=G;let X=!0,B=null,de=!1,Se=!1;if(y){const Ae=xe.get(y);Ae.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(R.FRAMEBUFFER,null),X=!1):Ae.__webglFramebuffer===void 0?Me.setupRenderTarget(y):Ae.__hasExternalTextures&&Me.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);const Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const Oe=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?B=Oe[U][G]:B=Oe[U],de=!0):y.samples>0&&Me.useMultisampledRTT(y)===!1?B=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[G]:B=Oe,M.copy(y.viewport),P.copy(y.scissor),I=y.scissorTest}else M.copy(ge).multiplyScalar(ie).floor(),P.copy(pe).multiplyScalar(ie).floor(),I=Ie;if(Z.bindFramebuffer(R.FRAMEBUFFER,B)&&X&&Z.drawBuffers(y,B),Z.viewport(M),Z.scissor(P),Z.setScissorTest(I),de){const Ae=xe.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,G)}else if(Se){const Ae=xe.get(y.texture),Fe=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,Fe)}O=-1},this.readRenderTargetPixels=function(y,U,G,X,B,de,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se]),ye){Z.bindFramebuffer(R.FRAMEBUFFER,ye);try{const Ae=y.texture,Fe=Ae.format,Oe=Ae.type;if(!te.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-X&&G>=0&&G<=y.height-B&&R.readPixels(U,G,X,B,me.convert(Fe),me.convert(Oe),de)}finally{const Ae=T!==null?xe.get(T).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,U,G,X,B,de,Se){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se]),ye){Z.bindFramebuffer(R.FRAMEBUFFER,ye);try{const Ae=y.texture,Fe=Ae.format,Oe=Ae.type;if(!te.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-X&&G>=0&&G<=y.height-B){const Le=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Le),R.bufferData(R.PIXEL_PACK_BUFFER,de.byteLength,R.STREAM_READ),R.readPixels(U,G,X,B,me.convert(Fe),me.convert(Oe),0),R.flush();const nt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await Jd(R,nt,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Le),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,de)}finally{R.deleteBuffer(Le),R.deleteSync(nt)}return de}}finally{const Ae=T!==null?xe.get(T).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(y,U=null,G=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const X=Math.pow(2,-G),B=Math.floor(y.image.width*X),de=Math.floor(y.image.height*X),Se=U!==null?U.x:0,ye=U!==null?U.y:0;Me.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,Se,ye,B,de),Z.unbindTexture()},this.copyTextureToTexture=function(y,U,G=null,X=null,B=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,y=arguments[1],U=arguments[2],B=arguments[3]||0,G=null);let de,Se,ye,Ae,Fe,Oe;G!==null?(de=G.max.x-G.min.x,Se=G.max.y-G.min.y,ye=G.min.x,Ae=G.min.y):(de=y.image.width,Se=y.image.height,ye=0,Ae=0),X!==null?(Fe=X.x,Oe=X.y):(Fe=0,Oe=0);const Le=me.convert(U.format),nt=me.convert(U.type);Me.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const mt=R.getParameter(R.UNPACK_ROW_LENGTH),gt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),nn=R.getParameter(R.UNPACK_SKIP_PIXELS),rt=R.getParameter(R.UNPACK_SKIP_ROWS),Re=R.getParameter(R.UNPACK_SKIP_IMAGES),Wt=y.isCompressedTexture?y.mipmaps[B]:y.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Wt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Wt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ae),y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,B,Fe,Oe,de,Se,Le,nt,Wt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,B,Fe,Oe,Wt.width,Wt.height,Le,Wt.data):R.texSubImage2D(R.TEXTURE_2D,B,Fe,Oe,Le,nt,Wt),R.pixelStorei(R.UNPACK_ROW_LENGTH,mt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,nn),R.pixelStorei(R.UNPACK_SKIP_ROWS,rt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Re),B===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(y,U,G=null,X=null,B=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,y=arguments[2],U=arguments[3],B=arguments[4]||0);let de,Se,ye,Ae,Fe,Oe,Le,nt,mt;const gt=y.isCompressedTexture?y.mipmaps[B]:y.image;G!==null?(de=G.max.x-G.min.x,Se=G.max.y-G.min.y,ye=G.max.z-G.min.z,Ae=G.min.x,Fe=G.min.y,Oe=G.min.z):(de=gt.width,Se=gt.height,ye=gt.depth,Ae=0,Fe=0,Oe=0),X!==null?(Le=X.x,nt=X.y,mt=X.z):(Le=0,nt=0,mt=0);const nn=me.convert(U.format),rt=me.convert(U.type);let Re;if(U.isData3DTexture)Me.setTexture3D(U,0),Re=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Me.setTexture2DArray(U,0),Re=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Wt=R.getParameter(R.UNPACK_ROW_LENGTH),ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Pn=R.getParameter(R.UNPACK_SKIP_PIXELS),Xr=R.getParameter(R.UNPACK_SKIP_ROWS),mi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,gt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Oe),y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Re,B,Le,nt,mt,de,Se,ye,nn,rt,gt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Re,B,Le,nt,mt,de,Se,ye,nn,gt.data):R.texSubImage3D(Re,B,Le,nt,mt,de,Se,ye,nn,rt,gt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Wt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,mi),B===0&&U.generateMipmaps&&R.generateMipmap(Re),Z.unbindTexture()},this.initRenderTarget=function(y){xe.get(y).__webglFramebuffer===void 0&&Me.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Me.setTextureCube(y,0):y.isData3DTexture?Me.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Me.setTexture2DArray(y,0):Me.setTexture2D(y,0),Z.unbindTexture()},this.resetState=function(){D=0,C=0,T=null,Z.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ns?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Ha?"display-p3":"srgb"}}class os{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new os(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qo extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class s0 extends Vt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=Jt,d=Jt,h,f){super(null,o,s,c,l,d,r,a,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi extends De{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class l0 extends Er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ua=new F,Fa=new F,Gl=new vt,Dr=new Gr,pa=new Hr,Do=new F,Vl=new F;class c0 extends Zt{constructor(e=new Ot,t=new l0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ua.fromBufferAttribute(t,r-1),Fa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ua.distanceTo(Fa);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=a,e.ray.intersectsSphere(pa)===!1)return;Gl.copy(r).invert(),Dr.copy(e.ray).applyMatrix4(Gl);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=m,p=v-1;_<p;_+=l){const u=d.getX(_),E=d.getX(_+1),S=ma(this,e,Dr,c,u,E);S&&t.push(S)}if(this.isLineLoop){const _=d.getX(v-1),p=d.getX(m),u=ma(this,e,Dr,c,_,p);u&&t.push(u)}}else{const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=m,p=v-1;_<p;_+=l){const u=ma(this,e,Dr,c,_,_+1);u&&t.push(u)}if(this.isLineLoop){const _=ma(this,e,Dr,c,v-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function ma(i,e,t,n,r,a){const o=i.geometry.attributes.position;if(Ua.fromBufferAttribute(o,r),Fa.fromBufferAttribute(o,a),t.distanceSqToSegment(Ua,Fa,Do,Vl)>n)return;Do.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Do);if(!(c<e.near||c>e.far))return{distance:c,point:Vl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Wl=new F,Xl=new F;class Yc extends c0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Wl.fromBufferAttribute(t,r),Xl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wl.distanceTo(Xl);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u0 extends Er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yl=new vt,Zo=new Gr,ga=new Hr,va=new F;class ss extends Zt{constructor(e=new Ot,t=new u0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),ga.radius+=a,e.ray.intersectsSphere(ga)===!1)return;Yl.copy(r).invert(),Zo.copy(e.ray).applyMatrix4(Yl);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let v=f,_=m;v<_;v++){const p=l.getX(v);va.fromBufferAttribute(h,p),ql(va,p,c,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,_=m;v<_;v++)va.fromBufferAttribute(h,v),ql(va,v,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function ql(i,e,t,n,r,a,o){const s=Zo.distanceSqToPoint(i);if(s<t){const c=new F;Zo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:o})}}class qc extends Vt{constructor(e,t,n,r,a,o,s,c,l){super(e,t,n,r,a,o,s,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends Ot{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+s,Math.PI);let l=0;const d=[],h=new F,f=new F,m=[],v=[],_=[],p=[];for(let u=0;u<=n;u++){const E=[],S=u/n;let A=0;u===0&&o===0?A=.5/t:u===n&&c===Math.PI&&(A=-.5/t);for(let D=0;D<=t;D++){const C=D/t;h.x=-e*Math.cos(r+C*a)*Math.sin(o+S*s),h.y=e*Math.cos(o+S*s),h.z=e*Math.sin(r+C*a)*Math.sin(o+S*s),v.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(C+A,1-S),E.push(l++)}d.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){const S=d[u][E+1],A=d[u][E],D=d[u+1][E],C=d[u+1][E+1];(u!==0||o>0)&&m.push(S,A,C),(u!==n-1||c<Math.PI)&&m.push(A,D,C)}this.setIndex(m),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class d0 extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class h0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zl(){return(typeof performance>"u"?Date:performance).now()}const Kl=new vt;class f0{constructor(e,t,n=0,r=1/0){this.ray=new Gr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(e,t=!0,n=[]){return Ko(e,this,n,t),n.sort($l),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Ko(e[r],this,n,t);return n.sort($l),n}}function $l(i,e){return i.distance-e.distance}function Ko(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let o=0,s=a.length;o<s;o++)Ko(a[o],e,t,!0)}}class jl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ts}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ts);const Jl={type:"change"},Lo={type:"start"},Ql={type:"end"},_a=new Gr,ec=new wn,p0=Math.cos(70*ci.DEG2RAD);class m0 extends Ui{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",ue),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Jl),n.update(),a=r.NONE},this.update=(function(){const g=new F,q=new Pi().setFromUnitVectors(e.up,new F(0,1,0)),z=q.clone().invert(),K=new F,re=new Pi,Ce=new F,ke=2*Math.PI;return function(xt=null){const tt=n.object.position;g.copy(tt).sub(n.target),g.applyQuaternion(q),s.setFromVector3(g),n.autoRotate&&a===r.NONE&&I(M(xt)),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let St=n.minAzimuthAngle,Mt=n.maxAzimuthAngle;isFinite(St)&&isFinite(Mt)&&(St<-Math.PI?St+=ke:St>Math.PI&&(St-=ke),Mt<-Math.PI?Mt+=ke:Mt>Math.PI&&(Mt-=ke),St<=Mt?s.theta=Math.max(St,Math.min(Mt,s.theta)):s.theta=s.theta>(St+Mt)/2?Math.max(St,s.theta):Math.min(Mt,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let en=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)s.radius=ge(s.radius);else{const tn=s.radius;s.radius=ge(s.radius*l),en=tn!=s.radius}if(g.setFromSpherical(s),g.applyQuaternion(z),tt.copy(n.target).add(g),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&C){let tn=null;if(n.object.isPerspectiveCamera){const Yn=g.length();tn=ge(Yn*l);const fi=Yn-tn;n.object.position.addScaledVector(A,fi),n.object.updateMatrixWorld(),en=!!fi}else if(n.object.isOrthographicCamera){const Yn=new F(D.x,D.y,0);Yn.unproject(n.object);const fi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),en=fi!==n.object.zoom;const pi=new F(D.x,D.y,0);pi.unproject(n.object),n.object.position.sub(pi).add(Yn),n.object.updateMatrixWorld(),tn=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tn).add(n.object.position):(_a.origin.copy(n.object.position),_a.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_a.direction))<p0?e.lookAt(n.target):(ec.setFromNormalAndCoplanarPoint(n.object.up,n.target),_a.intersectPlane(ec,n.target))))}else if(n.object.isOrthographicCamera){const tn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),tn!==n.object.zoom&&(n.object.updateProjectionMatrix(),en=!0)}return l=1,C=!1,en||K.distanceToSquared(n.object.position)>o||8*(1-re.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>o?(n.dispatchEvent(Jl),K.copy(n.object.position),re.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",be),n.domElement.removeEventListener("pointerdown",je),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",j),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",Ee,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ue),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new jl,c=new jl;let l=1;const d=new F,h=new Be,f=new Be,m=new Be,v=new Be,_=new Be,p=new Be,u=new Be,E=new Be,S=new Be,A=new F,D=new Be;let C=!1;const T=[],O={};let w=!1;function M(g){return g!==null?2*Math.PI/60*n.autoRotateSpeed*g:2*Math.PI/60/60*n.autoRotateSpeed}function P(g){const q=Math.abs(g*.01);return Math.pow(.95,n.zoomSpeed*q)}function I(g){c.theta-=g}function N(g){c.phi-=g}const W=(function(){const g=new F;return function(z,K){g.setFromMatrixColumn(K,0),g.multiplyScalar(-z),d.add(g)}})(),J=(function(){const g=new F;return function(z,K){n.screenSpacePanning===!0?g.setFromMatrixColumn(K,1):(g.setFromMatrixColumn(K,0),g.crossVectors(n.object.up,g)),g.multiplyScalar(z),d.add(g)}})(),V=(function(){const g=new F;return function(z,K){const re=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;g.copy(Ce).sub(n.target);let ke=g.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),W(2*z*ke/re.clientHeight,n.object.matrix),J(2*K*ke/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(z*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),J(K*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ie(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function he(g,q){if(!n.zoomToCursor)return;C=!0;const z=n.domElement.getBoundingClientRect(),K=g-z.left,re=q-z.top,Ce=z.width,ke=z.height;D.x=K/Ce*2-1,D.y=-(re/ke)*2+1,A.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function ge(g){return Math.max(n.minDistance,Math.min(n.maxDistance,g))}function pe(g){h.set(g.clientX,g.clientY)}function Ie(g){he(g.clientX,g.clientX),u.set(g.clientX,g.clientY)}function He(g){v.set(g.clientX,g.clientY)}function Y(g){f.set(g.clientX,g.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const q=n.domElement;I(2*Math.PI*m.x/q.clientHeight),N(2*Math.PI*m.y/q.clientHeight),h.copy(f),n.update()}function ae(g){E.set(g.clientX,g.clientY),S.subVectors(E,u),S.y>0?ie(P(S.y)):S.y<0&&k(P(S.y)),u.copy(E),n.update()}function ve(g){_.set(g.clientX,g.clientY),p.subVectors(_,v).multiplyScalar(n.panSpeed),V(p.x,p.y),v.copy(_),n.update()}function oe(g){he(g.clientX,g.clientY),g.deltaY<0?k(P(g.deltaY)):g.deltaY>0&&ie(P(g.deltaY)),n.update()}function ze(g){let q=!1;switch(g.code){case n.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),q=!0;break}q&&(g.preventDefault(),n.update())}function Pe(g){if(T.length===1)h.set(g.pageX,g.pageY);else{const q=Ve(g),z=.5*(g.pageX+q.x),K=.5*(g.pageY+q.y);h.set(z,K)}}function Xe(g){if(T.length===1)v.set(g.pageX,g.pageY);else{const q=Ve(g),z=.5*(g.pageX+q.x),K=.5*(g.pageY+q.y);v.set(z,K)}}function R(g){const q=Ve(g),z=g.pageX-q.x,K=g.pageY-q.y,re=Math.sqrt(z*z+K*K);u.set(0,re)}function Ke(g){n.enableZoom&&R(g),n.enablePan&&Xe(g)}function $e(g){n.enableZoom&&R(g),n.enableRotate&&Pe(g)}function te(g){if(T.length==1)f.set(g.pageX,g.pageY);else{const z=Ve(g),K=.5*(g.pageX+z.x),re=.5*(g.pageY+z.y);f.set(K,re)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const q=n.domElement;I(2*Math.PI*m.x/q.clientHeight),N(2*Math.PI*m.y/q.clientHeight),h.copy(f)}function Z(g){if(T.length===1)_.set(g.pageX,g.pageY);else{const q=Ve(g),z=.5*(g.pageX+q.x),K=.5*(g.pageY+q.y);_.set(z,K)}p.subVectors(_,v).multiplyScalar(n.panSpeed),V(p.x,p.y),v.copy(_)}function _e(g){const q=Ve(g),z=g.pageX-q.x,K=g.pageY-q.y,re=Math.sqrt(z*z+K*K);E.set(0,re),S.set(0,Math.pow(E.y/u.y,n.zoomSpeed)),ie(S.y),u.copy(E);const Ce=(g.pageX+q.x)*.5,ke=(g.pageY+q.y)*.5;he(Ce,ke)}function xe(g){n.enableZoom&&_e(g),n.enablePan&&Z(g)}function Me(g){n.enableZoom&&_e(g),n.enableRotate&&te(g)}function je(g){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(g.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",x)),!me(g)&&(Je(g),g.pointerType==="touch"?Ne(g):L(g)))}function b(g){n.enabled!==!1&&(g.pointerType==="touch"?le(g):$(g))}function x(g){switch(Ue(g),T.length){case 0:n.domElement.releasePointerCapture(g.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(Ql),a=r.NONE;break;case 1:const q=T[0],z=O[q];Ne({pointerId:q,pageX:z.x,pageY:z.y});break}}function L(g){let q;switch(g.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case Oi.DOLLY:if(n.enableZoom===!1)return;Ie(g),a=r.DOLLY;break;case Oi.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enablePan===!1)return;He(g),a=r.PAN}else{if(n.enableRotate===!1)return;pe(g),a=r.ROTATE}break;case Oi.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enableRotate===!1)return;pe(g),a=r.ROTATE}else{if(n.enablePan===!1)return;He(g),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Lo)}function $(g){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Y(g);break;case r.DOLLY:if(n.enableZoom===!1)return;ae(g);break;case r.PAN:if(n.enablePan===!1)return;ve(g);break}}function j(g){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(g.preventDefault(),n.dispatchEvent(Lo),oe(Q(g)),n.dispatchEvent(Ql))}function Q(g){const q=g.deltaMode,z={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(q){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return g.ctrlKey&&!w&&(z.deltaY*=10),z}function Ee(g){g.key==="Control"&&(w=!0,n.domElement.getRootNode().addEventListener("keyup",se,{passive:!0,capture:!0}))}function se(g){g.key==="Control"&&(w=!1,n.domElement.getRootNode().removeEventListener("keyup",se,{passive:!0,capture:!0}))}function ue(g){n.enabled===!1||n.enablePan===!1||ze(g)}function Ne(g){switch(Ge(g),T.length){case 1:switch(n.touches.ONE){case Bi.ROTATE:if(n.enableRotate===!1)return;Pe(g),a=r.TOUCH_ROTATE;break;case Bi.PAN:if(n.enablePan===!1)return;Xe(g),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(g),a=r.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$e(g),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Lo)}function le(g){switch(Ge(g),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;te(g),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Z(g),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(g),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(g),n.update();break;default:a=r.NONE}}function be(g){n.enabled!==!1&&g.preventDefault()}function Je(g){T.push(g.pointerId)}function Ue(g){delete O[g.pointerId];for(let q=0;q<T.length;q++)if(T[q]==g.pointerId){T.splice(q,1);return}}function me(g){for(let q=0;q<T.length;q++)if(T[q]==g.pointerId)return!0;return!1}function Ge(g){let q=O[g.pointerId];q===void 0&&(q=new Be,O[g.pointerId]=q),q.set(g.pageX,g.pageY)}function Ve(g){const q=g.pointerId===T[0]?T[1]:T[0];return O[q]}n.domElement.addEventListener("contextmenu",be),n.domElement.addEventListener("pointerdown",je),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",j,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ee,{passive:!0,capture:!0}),this.update()}}function g0(){const i=navigator.userAgent||"";let e="";try{e=document.referrer?new URL(document.referrer).hostname:""}catch{e=""}const t=/Twitter(?:Android| for iPhone)?|com\.twitter|X\.com/i.test(i),n=/(^|\.)(?:x\.com|twitter\.com|t\.co)$/i.test(e);return t||n}const Zc=g0(),v0=new URLSearchParams(window.location.search).get("lang");var fc;const _0=v0||(Zc?"en":((fc=navigator.languages)==null?void 0:fc[0])||navigator.language||"en"),Or=/^zh(?:-|$)/i.test(_0)?"zh-CN":"en",tc={"zh-CN":{documentTitle:"看见一场雨 · 雨到哪里",description:"Rainform「数据成雨」将 24 小时逐时降雨数据转化为可交互的实时粒子雨景。拖动降雨曲线，观察雨幕随数据重塑。",socialDescription:"Rainform「数据成雨」：拖动 24 小时降雨曲线，实时重塑由 Three.js 与 WebGL 驱动的粒子雨幕。",socialImageAlt:"Rainform 数据成雨生成的液态金属粒子雨幕",dashboardAria:"Rainform 数据成雨交互式粒子雨幕",sceneAria:"可交互的珍珠雨幕数据图",canvasAria:"可交互的珍珠雨幕降雨强度图",toolbarAria:"图表工具",editorToggle:"编辑降雨数据",soundEnable:"开启雨声",soundDisable:"关闭雨声",soundUnavailable:"当前浏览器不支持雨声音频",editorTitle:"编辑降雨数据",editorDescription:"拖动折线节点即可实时预览，松手后自动保存；也可以展开数字输入进行精确编辑。",editorCloseAria:"关闭降雨数据编辑器",close:"关闭",curveTitle:"逐时降雨曲线",liveSave:"实时保存",chartAria:"可拖拽降雨折线图",chartSvgAria:"00:00 至 24:00 降雨量折线，可上下拖动各小时节点",chartHint:"上下拖动节点调整雨量 · 方向键微调 · Shift + 方向键快速调整",preciseTitle:"精确输入 25 个时间点",preciseUnit:"单位：mm/h",inputGridAria:"00:00 至 24:00 的逐时降雨量",restoreDefault:"恢复默认",applyPrecise:"应用精确数据",axisTitle:"降雨强度",axisSubtitle:"每小时降水",axisUnit:"毫米/小时",rotateTitle:"请旋转至横屏",rotateDescription:"旋转手机以完整体验 Rainform 数据成雨",rotateSoundSuggestion:"建议开启声音",rotateDesktopSuggestion:"电脑端体验更佳",rotateBrowserSuggestion:"如果当前页面无法旋转，请轻点“⋮”并选择“在浏览器中打开”",rainfallInputAria:({time:i})=>`${i} 降雨量，毫米每小时`,chartPointAria:({time:i})=>`${i} 降雨量`,rainfallValueText:({value:i})=>`${i} 毫米每小时`,savedHour:({time:i})=>`已保存 ${i} 的降雨量。`,savedValue:({time:i,value:e})=>`已保存 ${i} · ${e} mm/h`,editorReady:"拖动节点会实时更新雨幕，松手后自动保存。",emptyRainfall:"请输入降雨量",invalidRainfall:"请输入大于或等于 0 的有限数字",invalidCount:({count:i})=>`有 ${i} 个时间点需要修正，已定位到第一处。`,applying:"正在重建降雨效果…",applied:({count:i,maximum:e})=>`已应用并保存 ${i} 个时间点，当前最大值 ${e} mm/h。`,applyFailed:"应用降雨数据失败",restored:"已恢复并应用内置默认降雨数据。",dataLengthError:({count:i})=>`降雨数据必须包含 ${i} 个时间点`,dataValueError:"降雨量必须是大于或等于 0 的有限数字",webglTitle:"无法显示实时雨景",webglUnavailable:"此设备或浏览器无法创建 WebGL2 图形环境。请升级浏览器，或确认硬件加速已开启。",webglInterrupted:"图形环境暂时中断，正在等待浏览器恢复。"},en:{documentTitle:"A day of rain · Rain Here",description:"Rainform turns 24 hours of hourly rainfall data into an interactive real-time particle landscape. Drag the rainfall curve to reshape the rain curtain.",socialDescription:"Rainform turns a 24-hour rainfall curve into a real-time particle landscape powered by Three.js and WebGL.",socialImageAlt:"Rainform liquid-metal particle rain generated from 24 hours of rainfall data",dashboardAria:"Rainform interactive rainfall particle landscape",sceneAria:"Interactive particle-based rainfall chart",canvasAria:"Interactive particle-based rainfall intensity chart",toolbarAria:"Chart tools",editorToggle:"Edit rainfall data",soundEnable:"Turn rain sound on",soundDisable:"Turn rain sound off",soundUnavailable:"Rain audio is not supported by this browser",editorTitle:"Edit rainfall data",editorDescription:"Drag a point for a live preview; changes save when released. Expand the fields below for precise input.",editorCloseAria:"Close rainfall data editor",close:"Close",curveTitle:"Hourly rainfall curve",liveSave:"Live save",chartAria:"Draggable rainfall line chart",chartSvgAria:"Rainfall from 00:00 to 24:00; drag each hourly point vertically to adjust it",chartHint:"Drag points vertically · Arrow keys for fine control · Shift + arrow keys for larger steps",preciseTitle:"Enter all 25 data points",preciseUnit:"Unit: mm/h",inputGridAria:"Hourly rainfall from 00:00 to 24:00",restoreDefault:"Restore defaults",applyPrecise:"Apply precise data",axisTitle:"Rainfall intensity",axisSubtitle:"Hourly rainfall",axisUnit:"mm/h",rotateTitle:"Rotate to landscape",rotateDescription:"Turn your phone sideways for the complete Rainform experience",rotateSoundSuggestion:"Sound on recommended",rotateDesktopSuggestion:"Best experienced on desktop",rotateBrowserSuggestion:"If this page cannot rotate, tap “⋮” and choose “Open in Browser”",rainfallInputAria:({time:i})=>`${i} rainfall, millimeters per hour`,chartPointAria:({time:i})=>`${i} rainfall`,rainfallValueText:({value:i})=>`${i} millimeters per hour`,savedHour:({time:i})=>`Saved rainfall at ${i}.`,savedValue:({time:i,value:e})=>`Saved ${i} · ${e} mm/h`,editorReady:"Dragging a point updates the rain live; releasing it saves the change.",emptyRainfall:"Enter a rainfall value",invalidRainfall:"Enter a finite number greater than or equal to 0",invalidCount:({count:i})=>`${i} data point${i===1?"":"s"} need correction. The first has been selected.`,applying:"Rebuilding the rainfall effect…",applied:({count:i,maximum:e})=>`Applied and saved ${i} data points. Current maximum: ${e} mm/h.`,applyFailed:"Failed to apply rainfall data",restored:"Restored and applied the built-in rainfall data.",dataLengthError:({count:i})=>`Rainfall data must contain ${i} data points`,dataValueError:"Rainfall must be a finite number greater than or equal to 0",webglTitle:"Unable to display the live rain scene",webglUnavailable:"This device or browser could not create a WebGL2 graphics context. Update the browser or make sure hardware acceleration is enabled.",webglInterrupted:"The graphics context was interrupted. Waiting for the browser to restore it."}};function ut(i,e={}){const t=tc[Or][i]??tc.en[i]??i;return typeof t=="function"?t(e):t}function x0(){var i,e,t,n,r,a,o;document.documentElement.lang=Or,document.title=ut("documentTitle"),(i=document.querySelector('meta[name="description"]'))==null||i.setAttribute("content",ut("description")),(e=document.querySelector('meta[property="og:locale"]'))==null||e.setAttribute("content",Or==="zh-CN"?"zh_CN":"en_US"),(t=document.querySelector('meta[property="og:title"]'))==null||t.setAttribute("content",ut("documentTitle")),(n=document.querySelector('meta[property="og:description"]'))==null||n.setAttribute("content",ut("socialDescription")),(r=document.querySelector('meta[property="og:image:alt"]'))==null||r.setAttribute("content",ut("socialImageAlt")),(a=document.querySelector('meta[name="twitter:title"]'))==null||a.setAttribute("content",ut("documentTitle")),(o=document.querySelector('meta[name="twitter:description"]'))==null||o.setAttribute("content",ut("socialDescription")),document.querySelectorAll("[data-i18n]").forEach(s=>{s.textContent=ut(s.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria-label]").forEach(s=>{s.setAttribute("aria-label",ut(s.dataset.i18nAriaLabel))}),document.querySelectorAll("[data-i18n-title]").forEach(s=>{s.setAttribute("title",ut(s.dataset.i18nTitle))})}x0();const ee=document.querySelector("#scene-root"),Fi=document.querySelector(".rainfall-dashboard"),S0=document.querySelector("#scene-toolbar"),Kc=document.querySelector("#selection-readout"),M0=Kc.querySelector(".readout-time"),y0=Kc.querySelector(".readout-value");document.querySelector("#rainfall-editor-toggle");const yn=document.querySelector("#rain-sound-toggle"),Uo=document.querySelector("#rainfall-editor");document.querySelector("#rainfall-data-form");document.querySelector("#rainfall-input-grid");document.querySelector("#rainfall-editor-status");document.querySelector("#rainfall-editor-errors");document.querySelector("#rainfall-line-chart");document.querySelector("#rainfall-chart-time");document.querySelector("#rainfall-chart-value");document.querySelector("#rainfall-precise-editor");ee.dataset.locale=Or;ee.dataset.launchContext=Zc?"x-embedded":"standard";function $c(i){let e=ee.querySelector(".webgl-fallback");if(!e){e=document.createElement("section"),e.className="webgl-fallback",e.setAttribute("role","status"),e.setAttribute("aria-live","polite");const t=document.createElement("strong"),n=document.createElement("span");t.textContent=ut("webglTitle"),e.append(t,n),ee.appendChild(e)}e.querySelector("span").textContent=i,e.hidden=!1}function E0(){const i=ee.querySelector(".webgl-fallback");i&&(i.hidden=!0)}let Ti=!1,jc=0,Jc=null;const $o=Object.freeze(Array(25).fill(0));let Nt=[...$o],Kt=Math.max(...Nt),Di=12.8,mn=[],cs=Di,sn=0;const jo=12.8,Ia=10,Qe=-.14,Jo=1831565813,Cn=795749149,nc=1403592059,ic=835170137,w0=2051879369,b0=1284468263,Va=!1,_t={BASE:0,AMBIENT:1,DOWNPOUR:2},ui={width:22.5,depth:10.4,frontZ:4.9},Ir={center:.2,thickness:.85,jitter:.22},dn=window.__rainAudioBoot,A0=Math.min(window.innerWidth,window.innerHeight),T0=Math.max(window.innerWidth,window.innerHeight);window.matchMedia("(pointer: coarse)").matches||A0<=500&&T0<=1e3;const we={enabled:!1,started:!1,context:(dn==null?void 0:dn.context)??null,gain:(dn==null?void 0:dn.gain)??null,buffer:(dn==null?void 0:dn.buffer)??null,preloadPromise:null,source:null,intentToken:0,sourceToken:0,contextObserved:!1},rc=1,C0=4.8,R0=1.8;function P0(){if(Kt<=0)return 0;const i=Nt.reduce((n,r)=>n+r,0)/Nt.length,e=We(i/Ia,0,1),t=We(Kt/Ia,0,1);return We(e*.76+t*.24,0,1)}function vr(){const i=P0();ee.dataset.rainSoundStrength=i.toFixed(3);const e=i>0?.18+Math.pow(i,.62)*.4:0;return We(e*C0,0,R0)*(window.__rainformVolume??.35)}function Qc(){if(!we.context){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t;try{t=new e({latencyHint:"interactive"})}catch{t=new e}const n=t.createGain();n.gain.value=0,n.connect(t.destination),we.context=t,we.gain=n}const{context:i}=we;return we.contextObserved||(we.contextObserved=!0,ee.dataset.rainSoundEngine="web-audio-buffer-loop",ee.dataset.rainSoundContext=i.state,ee.dataset.rainSoundBaseLatency=Number.isFinite(i.baseLatency)?i.baseLatency.toFixed(4):"unknown",i.addEventListener("statechange",()=>{ee.dataset.rainSoundContext=i.state,i.state==="running"&&we.enabled&&we.source&&(ee.dataset.rainSoundAutoplay="playing")})),i}function zn(i){const{context:e,gain:t}=we;if(!e||!t)return;const n=e.currentTime;t.gain.cancelScheduledValues(n),t.gain.value=i,t.gain.setValueAtTime(i,n),ee.dataset.rainSoundGain=i.toFixed(3)}function D0(){const i=we.enabled?vr():0;zn(i)}function Wa(){if(!yn)return;const i=ut(we.enabled?"soundDisable":"soundEnable");yn.setAttribute("aria-pressed",String(we.enabled)),yn.setAttribute("aria-label",i),yn.setAttribute("title",i),ee.dataset.rainSound=we.enabled?"on":"off"}function eu(){const i=Qc();return i?we.buffer?Promise.resolve(ac(we.buffer)):(we.preloadPromise||(we.preloadPromise=fetch(new URL("../audio/rain-loop.wav",import.meta.url)).then(e=>{if(!e.ok)throw new Error(`Rain audio request failed: ${e.status}`);return e.arrayBuffer()}).then(e=>i.decodeAudioData(e)).then(ac).catch(e=>{throw we.preloadPromise=null,e})),we.preloadPromise):Promise.reject(new Error("Web Audio is not supported"))}function ac(i){return we.buffer=i,ee.dataset.rainSoundDuration=i.duration.toFixed(3),ee.dataset.rainSoundLoop="seamless-buffer",ee.dataset.rainSoundLoaded="true",tu(i),i}function tu(i=we.buffer){if(we.source||!i||!we.context||!we.gain)return we.source;const e=we.context.createBufferSource(),t=++we.sourceToken;e.buffer=i,e.loop=!0,e.playbackRate.value=rc,e.connect(we.gain),e.onended=()=>{t===we.sourceToken&&(we.source=null)},e.start(),we.source=e,we.started=!0,ee.dataset.rainSoundStarted="true",ee.dataset.rainSoundPlaybackRate=rc.toFixed(1);const n=we.enabled&&we.context.state==="running";return zn(n?vr():0),ee.dataset.rainSoundAutoplay=n?"playing":"waiting-for-gesture",e}function L0(){const i=we.source;i&&(we.source=null,++we.sourceToken,i.onended=null,i.stop())}function nu(i){const e=Qc();if(!e){we.enabled=!1,Wa();return}const t=e.state==="running"?Promise.resolve():e.resume(),n=eu();zn(vr()),Promise.all([t,n]).then(([,r])=>{i!==we.intentToken||!we.enabled||(tu(r),zn(vr()),ee.dataset.rainSoundAutoplay="playing")}).catch(()=>{i===we.intentToken&&(zn(0),ee.dataset.rainSoundAutoplay="waiting-for-gesture")})}function U0(i){const e=++we.intentToken;we.enabled=i,Wa(),i?nu(e):zn(0);parent.postMessage({type:"rainform-sound-state",enabled:we.enabled},location.origin)}function F0(){we.enabled&&nu(we.intentToken)}function iu(){yn&&U0(!we.enabled)}yn==null||yn.addEventListener("pointerdown",i=>{!i.isPrimary||i.button!==0||iu()});yn==null||yn.addEventListener("click",i=>{i.detail===0&&iu()});const ru=i=>{i.target instanceof Element&&i.target.closest("#rain-sound-toggle")||F0()};document.addEventListener("pointerdown",ru,{capture:!0,passive:!0});document.addEventListener("keydown",ru);document.addEventListener("visibilitychange",()=>{const{context:i}=we;i&&(document.hidden||!Ti?i.suspend().catch(()=>{}):we.enabled&&we.started&&i.resume().then(()=>{we.enabled&&zn(vr())}).catch(()=>{}))});window.addEventListener("pagehide",()=>{zn(0),L0()},{once:!0});ee.dataset.rainSoundStarted="false";ee.dataset.rainSoundLoaded="false";ee.dataset.rainSoundProfile="procedurally-generated-rain-loop";Wa();ee.dataset.rainSoundAutoplay="waiting-for-gesture";eu().catch(()=>{});var pc;(pc=dn==null?void 0:dn.autoplayPromise)==null||pc.then(i=>{var t;const e=((t=navigator.userActivation)==null?void 0:t.hasBeenActive)===!0;!i||e||we.intentToken!==0||we.enabled||(we.enabled=!0,Wa(),zn(vr()),ee.dataset.rainSoundAutoplay="playing")});const Ar={worldHeight:6.6,plotWidth:17,z:Ir.center+Ir.thickness+.32,dragThreshold:5};Au();const wi={resX:768,resZ:384,xMin:-22.5*.55,xMax:ui.width*.55,zMin:-10.4*.6,zMax:ui.frontZ*1.5},Ft={fog:0,pearlBright:new Te(13818078),pearlMid:new Te(8688290),pearlDark:new Te(4345436),waterBright:new Te(10662076),waterMid:new Te(5924984),waterDark:new Te(2633792)},ne={readout:{offsetX:0,offsetY:0},camera:{frameTargetYOffset:1.15,desktop:{pos:[-.27,3.6,16.6],target:[-.27,2.45,.26],fov:35},tablet:{pos:[-.27,4.5,20.4],target:[-.27,3.35,.2],fov:37},mobile:{pos:[-.27,4.9,24.2],target:[-.27,3.75,.16],fov:40}},mist:{color:11253439,opacity:.28,height:3.5,reflectionOpacity:0},pearls:{maxPointSize:1.9,minPointSize:25.3,alpha:3},rain:{baseWeight:.62,exponent:.05},metalRain:{darkColor:0,midColor:12766171,brightColor:16448511,tintColor:37375,pearlBandFrequency:5.5,pearlBandSpeed:-2.55,pearlSpecularPower:30,pearlFresnelStrength:1.56,threadBandDensity:.081,threadBandSpeed:-.9,threadMirrorStrength:.93,bodyBandDensity:5.4,bodyBandSpeed:-1.1,bodyMirrorStrength:.78,filamentBandDensity:2.35,filamentBandSpeed:.84,filamentMirrorStrength:.58,highlightMirrorStrength:.9},floorGlow:{base:-.77,baseByStrength:.48,lowerCurtain:.13,lowerCurtainByStrength:-.89,downpour:-1.43,downpourByStrength:.67,ambient:-.06},glint:{opacity:3,alphaMax:2.13,maxSize:62},foam:{opacity:2.67,maxSize:73.6},spray:{opacity:2.33,maxSize:86.3},water:{deepColor:0,surfaceColor:2830912,roughness:1,specularStrength:2.5,rippleHighlight:3,surfaceOpacity:5,wavePrimary:0,waveSecondary:0,reflStrength:.5,reflFade:2.15,rearFadeNearZ:-.7,rearFadeFarZ:-4.2},waterfallBody:{deepColor:1711651,midColor:13423835,brightColor:658447,broadSway:0,fineSway:0,streakFrequency:38.1,fineStreakFrequency:499.6,streakSharpness:.05,fineStreakSharpness:40,fineStreakWeight:-2,baseMass:0,riseMass:.64,cloudLow:.68,cloudHigh:1.05,gapDarkness:.05,streakBrightness:1.4,bottomFeather:.2,opacity:3},waterfallFilaments:{edgeWidth:3,highlightEdgeWidth:1.75,opacity:0,highlightOpacity:.28,bottomMistOpacity:5},ripple:{gain:0,damping:.9999,dropRain:1.51,dropClick:.95,displace:.012},orbit:{minDistance:9,maxDistance:30,azimuthDeg:60,minPolarDeg:52,maxPolarDeg:93,damping:.08}};JSON.parse(JSON.stringify(ne));function I0(i){if(typeof i=="number"&&Number.isFinite(i))return Math.max(0,Math.min(16777215,Math.round(i)));const e=String(i??"").trim().replace(/^#/,"");return/^[0-9a-f]{6}$/i.test(e)?parseInt(e,16):0}function Et(i){return`#${(Number(i)>>>0).toString(16).padStart(6,"0").slice(-6)}`}function $t(i){const e=Number(i)>>>0;return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function st(i,e,t){return new Te(i).lerp(new Te(e),We(t,0,1)).getHex()}function N0(i){const e=I0(i);if(e===0)return{base:e,backgroundTop:0,backgroundMid:0,backgroundBottom:0,fog:0,shadow:0,panel:527380,panelTop:1843760,panelBottom:395536,accent:37375,textStrong:16448511,textMid:12766171,textSoft:9412024,axisLine:15067632,axisTick:12766171,axisStrong:16777215,axisTime:14476011,axisValue:16054010,axisUnit:12108239,metalDark:0,metalMid:12766171,metalBright:16448511,metalTint:37375,waterDeep:0,waterSurface:2830912,mist:11253439,waterfallDeep:1711651,waterfallMid:13423835,waterfallBright:658447};const t=new Te(e),r=t.r*.2126+t.g*.7152+t.b*.0722>.42?0:16777215,a=st(e,0,.7);return{base:e,backgroundTop:st(e,r,.035),backgroundMid:e,backgroundBottom:st(e,0,.24),fog:st(e,0,.18),shadow:0,panel:a,panelTop:st(a,16777215,.09),panelBottom:st(a,0,.38),accent:st(e,r,.56),textStrong:st(e,16777215,.95),textMid:st(e,16777215,.76),textSoft:st(e,16777215,.58),axisLine:st(e,r,.9),axisTick:st(e,r,.72),axisStrong:st(e,r,.98),axisTime:st(e,r,.84),axisValue:st(e,r,.94),axisUnit:st(e,r,.66),metalDark:st(e,r,.08),metalMid:st(e,r,.64),metalBright:st(e,r,.96),metalTint:st(e,r,.34),waterDeep:st(e,r,.035),waterSurface:st(e,r,.24),mist:st(e,r,.62),waterfallDeep:st(e,r,.12),waterfallMid:st(e,r,.68),waterfallBright:st(e,r,.92)}}function O0(){return 0}function B0(i){const e=document.documentElement.style,t=i.base===0?.72:.9,n=i.base===0?.8:.94;e.setProperty("--background-top",Et(i.backgroundTop)),e.setProperty("--background-mid",Et(i.backgroundMid)),e.setProperty("--background-bottom",Et(i.backgroundBottom)),e.setProperty("--model-metal-dark",Et(i.metalDark)),e.setProperty("--model-metal-mid",Et(i.metalMid)),e.setProperty("--model-metal-bright",Et(i.metalBright)),e.setProperty("--model-metal-tint",Et(i.metalTint)),e.setProperty("--theme-highlight-rgb",$t(i.textMid)),e.setProperty("--theme-shadow-rgb",$t(i.shadow)),e.setProperty("--theme-panel-rgb",$t(i.panel)),e.setProperty("--panel-surface-top",`rgba(${$t(i.panelTop)}, ${t})`),e.setProperty("--panel-surface-bottom",`rgba(${$t(i.panelBottom)}, ${n})`),e.setProperty("--panel-border",`rgba(${$t(i.textStrong)}, 0.17)`),e.setProperty("--panel-divider",`rgba(${$t(i.textStrong)}, 0.1)`),e.setProperty("--panel-card-border",`rgba(${$t(i.textStrong)}, 0.13)`),e.setProperty("--panel-control-bg",`rgba(${$t(i.textStrong)}, 0.055)`),e.setProperty("--panel-control-hover",`rgba(${$t(i.textStrong)}, 0.1)`),e.setProperty("--panel-text-main",`rgba(${$t(i.textStrong)}, 0.94)`),e.setProperty("--panel-text-soft",`rgba(${$t(i.textMid)}, 0.58)`),e.setProperty("--panel-accent",`rgba(${$t(i.accent)}, 0.78)`),e.setProperty("--panel-accent-soft",`rgba(${$t(i.accent)}, 0.14)`)}function z0(i){Ft.fog=i.fog,Ft.pearlBright.setHex(i.metalBright),Ft.pearlMid.setHex(i.metalMid),Ft.pearlDark.setHex(i.metalDark),Ft.waterBright.setHex(i.mist),Ft.waterMid.setHex(i.waterSurface),Ft.waterDark.setHex(i.waterDeep)}let au=O0(),bt=N0(au);B0(bt);z0(bt);function ou(){const i=Number(ne.readout.offsetX)||0,e=Number(ne.readout.offsetY)||0;et!=null&&et.readout&&et.readout.mesh.position.set(et.readout.anchorX+i,et.readout.anchorY+e,et.readout.anchorZ),ee.dataset.readoutMode="world-space-rotating",ee.dataset.readoutOffsetX=String(i),ee.dataset.readoutOffsetY=String(e),delete ee.dataset.readoutBottom,delete ee.dataset.readoutRight,delete ee.dataset.readoutTop}const us=window.matchMedia("(pointer: coarse)").matches,di=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function kn(){const i=Math.min(window.innerWidth,window.innerHeight),e=Math.max(window.innerWidth,window.innerHeight);return window.innerWidth>window.innerHeight&&i<=500&&e<=1e3}function su(){const i=kn()?2:us?1.65:1.75;return Math.min(window.devicePixelRatio||1,i)}let ii=su();const fn=us?{chains:2e3,ambientChains:800,downpourChains:1400,waterfallFilaments:1900,waterGlints:0,rippleEventsPerSecond:28}:{chains:2e3,ambientChains:800,downpourChains:1400,waterfallFilaments:1900,waterGlints:0,rippleEventsPerSecond:60},Sn={showAxes:!0,showWater:!0,showMist:!0,showRainLines:!0,showPearls:!0,showWaterGlints:!0,showImpacts:Va,showPeakWaterfall:!1};Sn.showImpacts=Sn.showImpacts&&Va;const ce={pointerActive:!1,pointerDown:!1,pointerMoved:!1,pointerHour:18,pointerWorld:new F,pointerNdc:new Be,pointerClient:{x:0,y:0},downClient:{x:0,y:0},downView:{x:0,y:0},activePointerId:null,selectedHour:18,selectedActive:!1,burst:0,lastHoverRippleAt:-1,view:{targetX:0,targetY:0},readoutKey:""};let Ze;try{Ze=new o0({antialias:!0,alpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),ee.dataset.webglStatus="ready"}catch(i){throw $c(ut("webglUnavailable")),ee.dataset.webglStatus="unavailable",i}Ze.setPixelRatio(ii);Ze.setSize(window.innerWidth,window.innerHeight);ee.dataset.rendererPixelRatio=ii.toFixed(2);Ze.outputColorSpace=on;Ze.domElement.setAttribute("aria-label",ut("canvasAria"));ee.appendChild(Ze.domElement);Ze.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),ee.dataset.webglStatus="lost",$c(ut("webglInterrupted"))});Ze.domElement.addEventListener("webglcontextrestored",()=>{ee.dataset.webglStatus="ready",E0()});const Li=new qo;Li.fog=new os(Ft.fog,us?.019:.022);const qt=new hn(35,window.innerWidth/window.innerHeight,.1,110),xa=new F,En=new F;new F;const oc=.04;let ar=null,dt=null;Vr();dt=new m0(qt,Ze.domElement);dt.enableDamping=!0;dt.dampingFactor=ne.orbit.damping;dt.enablePan=!1;dt.enableZoom=!0;dt.rotateSpeed=.55;dt.zoomSpeed=.8;dt.minDistance=ne.orbit.minDistance;dt.maxDistance=ne.orbit.maxDistance;dt.minPolarAngle=ci.degToRad(ne.orbit.minPolarDeg);dt.maxPolarAngle=ci.degToRad(ne.orbit.maxPolarDeg);dt.minAzimuthAngle=-ci.degToRad(ne.orbit.azimuthDeg);dt.maxAzimuthAngle=ci.degToRad(ne.orbit.azimuthDeg);dt.target.copy(En);dt.update();const Fo=new f0,k0=new wn(new F(0,1,0),-Qe),H0=new wn(new F(0,0,1),-1.37),nr=new F,wa=new h0,_r=new Tt(0,1,0,1),xr=new F(.002,0,.002),Sr=new Be,Na={value:0},Br=new Tn;Br.name="pearl-rainfall-visualization";Li.add(Br);let et=pu();ar=et.fitBounds.clone();Vr();ou();ds(et);Tu();const Wn=j0(),lu=J0();let Hn=vu();Wn.material.uniforms.uRainLut.value=Hn.lut;Wn.material.uniforms.uLutBounds.value.set(Hn.lutXMin,Hn.lutSpan);const lr=Kt<=0,cu=mn.length>0,sc=lr?0:bu(Kt);let it=gu(lr?0:Math.max(1,Math.round(fn.chains*sc)),lr?0:Math.max(1,Math.round(fn.ambientChains*Math.pow(sc,1.08))),lr||!cu?0:fn.downpourChains),Ht=_u(lr||!cu?0:fn.waterfallFilaments,it.data),ri=xu(lr?0:fn.waterGlints),ht=Su(0,0,fn.rippleEventsPerSecond);const zr=ov(Ze);Br.add(et.group,lu,Wn,Hn.mesh,it.lines,it.points,Ht.group,ri.points,ht.foam,ht.droplets,ht.crowns);du();di&&(hs(it,0,0),fs(ri,0,0));hu();Ni();Ze.domElement.addEventListener("pointerdown",vv,{passive:!0});Ze.domElement.addEventListener("pointermove",_v,{passive:!0});Ze.domElement.addEventListener("pointerup",xv,{passive:!0});Ze.domElement.addEventListener("pointercancel",Sv,{passive:!0});Ze.domElement.addEventListener("pointerleave",Mv,{passive:!0});Ze.domElement.addEventListener("dblclick",Ev);document.addEventListener("pointermove",i=>{i.target!==Ze.domElement&&qa()},{passive:!0});S0.addEventListener("pointerenter",qa);Uo==null||Uo.addEventListener("pointerenter",qa);window.addEventListener("resize",Ka);window.addEventListener("orientationchange",Ka);var mc;(mc=window.visualViewport)==null||mc.addEventListener("resize",Ka);window.addEventListener("blur",yv);ee.dataset.releaseChannel="public";uu();function uu(){if(requestAnimationFrame(uu),!Ti||document.hidden){wa.getDelta();return}jc++;const i=Math.min(wa.getDelta(),.04),e=wa.elapsedTime;ce.burst=Math.max(0,ce.burst-i*1.1),Hn.material.uniforms.uTime.value=di?6.2:e,di||(iv(ht,e,i),hs(it,e,i),fs(ri,e,i)),ce.pointerActive&&e-ce.lastHoverRippleAt>.18&&(ce.lastHoverRippleAt=e,ps(zr,ce.pointerWorld.x,ce.pointerWorld.z,.34+cr(ce.pointerHour)*.28,!1)),sv(zr,Ze),lv(e),wv(),K0(et),Ni(),Ze.render(Li,qt)}function du(){et.group.visible=Sn.showAxes,Wn.visible=Sn.showWater,lu.visible=Sn.showWater,Hn.mesh.visible=Sn.showMist,it.lines.visible=Sn.showRainLines,it.points.visible=Sn.showPearls,ri.points.visible=Sn.showWaterGlints;const i=Va;ht.foam.visible=i,ht.droplets.visible=i,ht.crowns.visible=i,Ht.group.visible=Sn.showPeakWaterfall,ee.dataset.axisVisibility="visible"}function hu(){var e;ee.dataset.rainMaterial="procedural-liquid-metal",ee.dataset.rainEdgeMode=kn()?"mobile-crisp":"authored",ee.dataset.rainfallMax=String(Number(Kt.toFixed(3))),ee.dataset.axisMax=String(Number(Di.toFixed(3))),ee.dataset.rainfallValues=Nt.join(","),ee.dataset.rainfallPointCount=String(Nt.length);const i=Nt.map((t,n)=>t===0?n:null).filter(t=>t!==null);ee.dataset.zeroRainfallCount=String(i.length),ee.dataset.zeroRainfallHours=i.join(","),ee.dataset.zeroRainSuppression="anchor-feathered",ee.dataset.rainfallResponse="continuous-raw-hourly-v2",ee.dataset.rainfallDry=String(Kt<=0),ee.dataset.chainCount=String(it.data.count),ee.dataset.zeroSuppressedChainCount=String(((e=it.data.presence)==null?void 0:e.reduce((t,n)=>t+(n<=.08?1:0),0))??0),ee.dataset.baseChainCount=String(it.data.baseCount),ee.dataset.ambientChainCount=String(it.data.ambientCount),ee.dataset.downpourChainCount=String(it.data.downpourCount),ee.dataset.pearlCount=String(it.data.pearlCount),ee.dataset.streakCount=String(it.data.downpourCount),ee.dataset.waterfallBodyCount=String(Ht.bodyCount),ee.dataset.waterfallPeakCount=String(Ht.peakCount),ee.dataset.waterfallFilamentCapacity=String(Ht.filamentCapacity),ee.dataset.activeWaterfallFilaments=String(Ht.visibleFilamentCount),ee.dataset.bridgeFilamentCount=String(Ht.bridgeFilamentCount),ee.dataset.coreFilamentCount=String(Ht.coreFilamentCount),ee.dataset.lowerFilamentCount=String(Ht.lowerFilamentCount),ee.dataset.wideFilamentCount=String(Ht.wideFilamentCount),ee.dataset.foregroundFilamentCount=String(Ht.foregroundFilamentCount),ee.dataset.highlightFilamentCount=String(Ht.highlightFilamentCount),ee.dataset.waterfallRibbonSegments=String(Ht.ribbonSegments),ee.dataset.activeBridgeTrails=String(it.data.activeBridgeTrailCount),ee.dataset.waterfallPlotClip="off",ee.dataset.baselineImpactCount=String(ht.data.staticSeedCount),ee.dataset.splashImpactsEnabled=String(Va),ee.dataset.activeStormParticles=String(ht.data.activeCount),ee.dataset.activeFoamParticles=String(ht.data.activeFoamCount),ee.dataset.activeSprayDroplets=String(ht.data.activeDropletCount),ee.dataset.activeCrownLines=String(ht.data.activeCrownCount),ee.dataset.peakImpactCount=String(ht.data.totalPeakCollisions),ee.dataset.stormEmissionRate=ht.data.currentEmissionRate.toFixed(1),ee.dataset.activeRipples="0",ee.dataset.rainPlotClip="off",ee.dataset.rainCeilingValue=String(Number(cs.toFixed(3))),ee.dataset.rainCeilingWorldY=sn.toFixed(3),ee.dataset.ambientCurtainMode="data-driven-ceiling",ee.dataset.axisMode="3d-reference-labels",ee.dataset.axisVisibility=et.group.visible?"visible":"hidden",ee.dataset.timeTickCount=String(et.timeTickCount),ee.dataset.valueTickCount=String(et.valueTickCount),ee.dataset.axisLabelCount=String(et.labelCount)}function G0(i){if(!Array.isArray(i)||i.length!==$o.length)throw new TypeError(ut("dataLengthError",{count:$o.length}));Nt=i.map(t=>{const n=Number(t);if(!Number.isFinite(n)||n<0)throw new TypeError(ut("dataValueError"));return Pv(n)}),Au(),V0(),D0(),ce.readoutKey="",Ni(!0)}function V0(){const i=Kt<=0,e=mn.length>0,t=i?0:bu(Kt),n=pu(),r=vu(),a=gu(i?0:Math.max(1,Math.round(fn.chains*t)),i?0:Math.max(1,Math.round(fn.ambientChains*Math.pow(t,1.08))),i||!e?0:fn.downpourChains),o=_u(i||!e?0:fn.waterfallFilaments,a.data),s=xu(i?0:fn.waterGlints),c=Su(0,0,fn.rippleEventsPerSecond),l=[et.group,Hn.mesh,it.lines,it.points,Ht.group,ri.points,ht.foam,ht.droplets,ht.crowns];Wn.material.uniforms.uRainLut.value=r.lut,Wn.material.uniforms.uLutBounds.value.set(r.lutXMin,r.lutSpan),Br.remove(...l),l.forEach(W0),et=n,ar=et.fitBounds.clone(),ou(),ds(et),Hn=r,it=a,Ht=o,ri=s,ht=c,Br.add(et.group,Hn.mesh,it.lines,it.points,Ht.group,ri.points,ht.foam,ht.droplets,ht.crowns),X0(zr),du(),di&&(hs(it,0,0),fs(ri,0,0)),hu()}function W0(i){var r;if(!i)return;const e=new Set,t=new Set,n=new Set;i.traverse(a=>{a.geometry&&e.add(a.geometry),(Array.isArray(a.material)?a.material:[a.material]).filter(Boolean).forEach(s=>t.add(s))});for(const a of t){for(const o of Object.values(a))o!=null&&o.isTexture&&n.add(o);for(const o of Object.values(a.uniforms||{}))(r=o==null?void 0:o.value)!=null&&r.isTexture&&n.add(o.value)}n.forEach(a=>a.dispose()),e.forEach(a=>a.dispose()),t.forEach(a=>a.dispose())}function X0(i){const e=Ze.getRenderTarget(),t=Ze.autoClear;Ze.autoClear=!0,Ze.setRenderTarget(i.rtA),Ze.clear(),Ze.setRenderTarget(i.rtB),Ze.clear(),Ze.setRenderTarget(e),Ze.autoClear=t,i.dropCount=0,i.dropGeometry.setDrawRange(0,0),i.texture=i.rtA.texture,Wn.material.uniforms.uHeightField.value=i.texture,ee.dataset.activeRipples="0"}function fu(i,e){const t=We(Math.round(e),0,24),n=wu(e).toFixed(1),r=`${t}-${n}-${au}`;if(i.key===r)return;const{canvas:a,context:o,texture:s}=i;o.clearRect(0,0,a.width,a.height),o.textAlign="left",o.textBaseline="middle";const c=a.width-12,l=ut("axisUnit");o.font='450 32px Inter, "PingFang SC", "Microsoft YaHei", sans-serif';const d=o.measureText(l).width,h=18,f=8,m=48,v=26,_=218,p=h+f+m,u=16;let E=116;o.font=`350 ${E}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`;let S=o.measureText(n).width;const A=c-d-u-p;S>A&&(E=Math.max(72,E*A/S),o.font=`350 ${E}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`,S=o.measureText(n).width);const D=p,C=Math.min(c-d,D+S+u);o.globalAlpha=.92,o.fillStyle=Et(bt.axisTick),o.fillRect(h,v,f,_-v),o.globalAlpha=1,o.fillStyle=Et(bt.axisTime),o.font='550 42px Inter, "PingFang SC", "Microsoft YaHei", sans-serif',o.fillText(`${String(t).padStart(2,"0")}:00`,D,48),o.fillStyle=Et(bt.axisStrong),o.font=`350 ${E}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`,o.fillText(n,D,158),o.fillStyle=Et(bt.axisTick),o.font='450 32px Inter, "PingFang SC", "Microsoft YaHei", sans-serif',o.fillText(l,C,166),s.needsUpdate=!0,i.key=r}function Y0(i,e,t,n){const r=document.createElement("canvas");r.width=480,r.height=260;const a=r.getContext("2d"),o=new qc(r);o.colorSpace=on,o.minFilter=At,o.magFilter=At,o.generateMipmaps=!1,o.anisotropy=Math.min(4,Ze.capabilities.getMaxAnisotropy());const s=new ni({map:o,transparent:!0,opacity:n,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,side:jt}),c=.98,l=c*r.width/r.height,d=new Rn(l,c);d.translate(-l*.5,0,0);const h=new wt(d,s);h.name="axis-dynamic-readout",h.position.set(i,e,t),h.renderOrder=9.6,h.visible=!1;const f={mesh:h,material:s,canvas:r,context:a,texture:o,anchorX:i,anchorY:e,anchorZ:t,key:""};return fu(f,ce.selectedHour),f}function pu(){const i=new Tn;i.name="rainfall-3d-axes";const e=.85,t=new ni({color:bt.axisLine,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),n=new ni({color:bt.axisTick,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),r=new ni({color:bt.axisStrong,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),a=new ni({color:bt.axisStrong,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),o=Ut(0),s=Ut(24),c=Qe-.18,l=sn,d=Ar.z,h=l+1.42,f=[o,c,d,s,c,d,o,c,d,o,l,d],m=[],v=new Tn;v.name="axis-labels";const _=[];for(let I=0;I<=24;I+=2){const N=Ut(I);m.push(N,c,d);const W=Sa(`${String(I).padStart(2,"0")}:00`,{height:.2,fontSize:54,fontWeight:400,mobileScale:1.55,color:Et(bt.axisTime)});W.sprite.position.set(N,c-.27,d+.04),v.add(W.sprite),_.push({material:W.material,baseOpacity:W.opacity})}const p=[],u=hv(),E=o-.72;for(const I of u){const N=Z0(I);I>0&&p.push(o-.08,N,d,o+.08,N,d);const W=Sa(fv(I),{height:.27,fontSize:64,fontWeight:350,mobileOffsetX:-.32,anchorX:0,color:Et(bt.axisValue)});W.sprite.position.set(E,N+.02,d+.04),v.add(W.sprite),_.push({material:W.material,baseOpacity:W.opacity});const J=Sa(ut("axisUnit"),{height:.14,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,anchorX:0,color:Et(bt.axisUnit)});J.sprite.position.set(E,N-.22,d+.04),v.add(J.sprite),_.push({material:J.material,baseOpacity:J.opacity})}const S=E,A=Or==="zh-CN"?[{text:ut("axisTitle"),y:h-.22,height:.44,fontSize:76,fontWeight:550,mobileOffsetX:-.32,color:Et(bt.axisStrong)},{text:ut("axisSubtitle"),y:h-.57,height:.22,fontSize:52,fontWeight:450,mobileScale:1.55,mobileOffsetX:-.32,color:Et(bt.axisTime)},{text:ut("axisUnit"),y:h-.82,height:.15,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,color:Et(bt.axisUnit)}]:[{text:ut("axisTitle"),y:h-.22,height:.4,fontSize:76,fontWeight:550,mobileOffsetX:-.32,color:Et(bt.axisStrong)},{text:ut("axisSubtitle"),y:h-.57,height:.19,fontSize:46,fontWeight:450,mobileScale:1.55,mobileOffsetX:-.32,color:Et(bt.axisTime)},{text:ut("axisUnit"),y:h-.82,height:.15,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,color:Et(bt.axisUnit)}];for(const I of A){const N=Sa(I.text,{height:I.height,fontSize:I.fontSize,fontWeight:I.fontWeight,mobileScale:I.mobileScale,mobileOffsetX:I.mobileOffsetX,anchorX:0,color:I.color});N.sprite.position.set(S,I.y,d+.04),N.material.opacity=e,v.add(N.sprite),_.push({material:N.material,baseOpacity:e})}const D=Y0(s,h-.49,d+.05,e);D.mesh.position.x+=Number(ne.readout.offsetX)||0,D.mesh.position.y+=Number(ne.readout.offsetY)||0,_.push({material:D.material,baseOpacity:e});const C=Ma("axis-lines",f,t,.009,9),T=q0("time-ticks",m,n,.011,9.1),O=Ma("value-ticks",p,n,.008,9.1),w=Ma("selected-time-marker",[0,c,d+.012,0,c+.48,d+.012],r,.01,9.3),M=Ma("hover-time-marker",[0,c,d+.018,0,c+.34,d+.018],a,.008,9.4);w.visible=!1,M.visible=!1,i.add(C,T,O,v,D.mesh,w,M),i.updateMatrixWorld(!0);const P=new yr().setFromObject(i,!0);return{group:i,fitBounds:P,labelGroup:v,readout:D,selectedMarker:w,hoverMarker:M,opacityEntries:[{material:t,baseOpacity:e},{material:n,baseOpacity:e},{material:r,baseOpacity:e},{material:a,baseOpacity:e},..._],opacity:1,dragging:!1,fadeStartedAt:-1,timeTickCount:13,valueTickCount:p.length/6,labelCount:13+u.length*2+A.length+1}}function q0(i,e,t,n,r){const a=new Tn;a.name=i;const o=new ls(n,16,10);for(let s=0;s<e.length;s+=3){const c=new wt(o,t);c.position.set(e[s],e[s+1],e[s+2]),c.renderOrder=r,a.add(c)}return a}function Sa(i,{height:e,fontSize:t,fontWeight:n=300,mobileScale:r=1.28,mobileOffsetX:a=0,anchorX:o=.5,color:s="#ffffff"}){const c=document.createElement("canvas"),l=c.getContext("2d"),d=3,h=t*d,f=`${n} ${h}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`;l.font=f;const m=Math.ceil(l.measureText(i).width+24*d),v=Math.ceil(h*1.45);c.width=m,c.height=v,l.clearRect(0,0,m,v),l.font=f,l.fillStyle=s,l.textAlign="center",l.textBaseline="middle",l.fillText(i,m*.5,v*.5);const _=new qc(c);_.colorSpace=on,_.minFilter=At,_.magFilter=At,_.generateMipmaps=!1,_.anisotropy=Math.min(4,Ze.capabilities.getMaxAnisotropy());const p=new ni({map:_,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,side:jt}),u=e*m/v,E=new Rn(u,e);E.translate((.5-o)*u,0,0);const S=new wt(E,p);return S.renderOrder=9.5,S.userData.mobileScale=r,S.userData.mobileOffsetX=a,{sprite:S,material:p,opacity:1}}function ds(i){var t;const e=kn();for(const n of((t=i==null?void 0:i.labelGroup)==null?void 0:t.children)||[]){const r=e?n.userData.mobileScale||1.28:1;Number.isFinite(n.userData.basePositionX)||(n.userData.basePositionX=n.position.x),n.scale.setScalar(r),n.position.x=n.userData.basePositionX+(e&&n.userData.mobileOffsetX||0)}ee.dataset.axisLabelScale=e?"1.28-1.90":"1.00"}function Ma(i,e,t,n,r){const a=new Tn;a.name=i;const o=new F(1,0,0);for(let s=0;s<e.length;s+=6){const c=new F(e[s],e[s+1],e[s+2]),l=new F(e[s+3],e[s+4],e[s+5]),d=l.clone().sub(c),h=d.length(),f=new wr(h,n,n),m=new wt(f,t);m.position.copy(c).add(l).multiplyScalar(.5),m.quaternion.setFromUnitVectors(o,d.normalize()),m.renderOrder=r,a.add(m)}return a}function Z0(i){return Qe+We(i/Di,0,1)*Ar.worldHeight}function mu(i,e){i.opacity=e;for(const t of i.opacityEntries)t.material.opacity=t.baseOpacity*e}function K0(i){i.selectedMarker.visible=!1,i.hoverMarker.position.x=Ut(ce.pointerHour),i.hoverMarker.visible=ce.pointerActive,i.readout.mesh.visible=ce.pointerActive,ce.pointerActive&&fu(i.readout,ce.pointerHour),ee.dataset.readoutVisibility=ce.pointerActive?"visible":"hidden",ee.dataset.cursorLineVisibility=ce.pointerActive?"visible":"hidden"}function $0(){et.dragging||(et.dragging=!0,et.fadeStartedAt=-1,et.group.visible=!1,mu(et,0),ee.dataset.axisVisibility="hidden")}function Xa(i=!1){!et.dragging&&!i||(et.dragging=!1,et.group.visible=Sn.showAxes,et.fadeStartedAt=-1,mu(et,1),ee.dataset.axisVisibility="visible")}function gu(i,e=0,t=0){const n=i+e+t,r={count:n,baseCount:i,ambientCount:e,downpourCount:t,role:new Uint8Array(n),style:new Uint8Array(n),resetSeed:new Uint32Array(n),seedIndex:new Uint32Array(n),hour:new Float32Array(n),strength:new Float32Array(n),presence:new Float32Array(n),stormWeight:new Float32Array(n),waterfallTop:new Float32Array(n),waterfallBlendTop:new Float32Array(n),waterfallFeather:new Float32Array(n),baseX:new Float32Array(n),z:new Float32Array(n),pathX:new Float32Array(n),pathZ:new Float32Array(n),top:new Float32Array(n),length:new Float32Array(n),headY:new Float32Array(n),speed:new Float32Array(n),near:new Float32Array(n),curtainLayer:new Uint8Array(n),driftX:new Float32Array(n),driftZ:new Float32Array(n),phase:new Float32Array(n),windSpeed:new Float32Array(n),alpha:new Float32Array(n),pearlStart:new Uint32Array(n),strandPearlCount:new Uint8Array(n),lineStart:new Uint32Array(n),lineCount:new Uint8Array(n),respawnCycle:new Uint32Array(n)},a=Ri(Jo),o=ms(ne.rain.baseWeight,ne.rain.exponent,a,!0),s=Ri(nc),c=()=>H(.04,23.96,s),l=Ri(ic),d=yu(l);let h=0,f=0;for(let te=0;te<i;te+=1){const Z=o(),_e=cr(Z),xe=uc(_e),Me=Ci(Z),je=Qo(Z),b=No(a),x=lt(.88,1.12,Xn(Z*1.55,Cn^1374857533)),L=H(-.32-_e*.34,.38+_e*.68,a),$=Math.min(sn,Qe+We(.95+Math.pow(je,.92)*5.8*x+L,.76,8.8)),j=a(),Q=j<.5?0:j<.85?1:2,Ee=Math.max(.8,$-Qe),se=H(.78,1.14,a)+_e*H(.62,1.08,a)+b*H(.12,.32,a),ue=Q===1?Math.max(.42,Math.min(se*H(.64,.9,a),Ee*H(.24,.42,a))):se,Ne=Math.round(lt(20,34,Math.pow(_e,.55))+b*H(0,4,a)+(Q===1?1:0));r.hour[te]=Z,Io(r,te,Z),r.role[te]=_t.BASE,r.resetSeed[te]=Jo,r.seedIndex[te]=te,r.strength[te]=_e,r.presence[te]=Me,r.near[te]=b,r.top[te]=$,r.length[te]=ue,r.curtainLayer[te]=Q,r.pearlStart[te]=h,r.strandPearlCount[te]=We(Ne,16,40),r.lineStart[te]=f,r.lineCount[te]=r.strandPearlCount[te]-1,r.speed[te]=H(1.5,2.45,a)+_e*H(1.15,2.55,a)+b*.42,r.driftX[te]=H(.004,.014,a)+b*H(.003,.009,a),r.driftZ[te]=H(.003,.01,a)+b*H(.002,.006,a),r.phase[te]=a()*Math.PI*2,r.windSpeed[te]=H(.22,.58,a),r.alpha[te]=H(.54,.96,a)*(.22+xe*1.18)*(.76+b*.72)*(Q===1?1.12:1)*Me,ba(r,te,!0),h+=r.strandPearlCount[te],f+=r.lineCount[te]}for(let te=0;te<e;te+=1){const Z=i+te,_e=c(),xe=cr(_e),Me=uc(xe),je=Ci(_e),b=No(s),x=Math.round(H(28,38,s));r.hour[Z]=_e,Io(r,Z,_e),r.role[Z]=_t.AMBIENT,r.resetSeed[Z]=nc,r.seedIndex[Z]=te,r.strength[Z]=xe,r.presence[Z]=je,r.near[Z]=b,r.top[Z]=sn,r.length[Z]=sn-Qe+H(.12,.3,s),r.curtainLayer[Z]=2,r.pearlStart[Z]=h,r.strandPearlCount[Z]=x,r.lineStart[Z]=f,r.lineCount[Z]=x-1,r.speed[Z]=0,r.driftX[Z]=H(.002,.008,s),r.driftZ[Z]=H(.002,.006,s),r.phase[Z]=s()*Math.PI*2,r.windSpeed[Z]=H(.18,.46,s),r.alpha[Z]=H(.08,.2,s)*(.08+Me*.92)*je,ba(r,Z,!0),h+=x,f+=x-1}for(let te=0;te<t;te+=1){const Z=i+e+te,_e=d(),xe=cr(_e),Me=Ci(_e),je=Qo(_e),b=No(l),x=lt(.9,1.12,Xn(_e*1.55,Cn^1374857533)),L=We(.95+Math.pow(je,.92)*5.8*x+H(-.22,.62,l),1.2,8.8),$=l()<.45,j=l()<.7?H(.08,.38,l):H(.38,.58,l),Q=$?L+H(-.12,.48,l):Math.max(.82,L*j+H(-.08,.24,l)),Ee=l(),se=Ee<.7?0:Ee<.94?1:2,ue=Math.round(se===0?H(13,19,l):se===1?H(15,21,l):H(16,22,l)),Ne=$?H(.82,1.5,l)+xe*H(.52,1.02,l):Math.min(H(.38,1.04,l),Q*H(.48,.86,l));r.hour[Z]=_e,Io(r,Z,_e),r.role[Z]=_t.DOWNPOUR,r.style[Z]=se,r.resetSeed[Z]=ic,r.seedIndex[Z]=te,r.strength[Z]=xe,r.presence[Z]=Me,r.near[Z]=b,r.top[Z]=Math.min(sn,Qe+Q),r.length[Z]=Math.max(.34,Ne),r.curtainLayer[Z]=0,r.pearlStart[Z]=h,r.strandPearlCount[Z]=ue,r.lineStart[Z]=f,r.lineCount[Z]=ue-1,r.speed[Z]=H(2.65,4.35,l)+xe*.72,r.driftX[Z]=0,r.driftZ[Z]=0,r.phase[Z]=l()*Math.PI*2,r.windSpeed[Z]=0,r.alpha[Z]=H(se===0?.26:.32,se===2?.62:.52,l)*(.88+xe*.34)*Me,ba(r,Z,!0),h+=ue,f+=ue-1}for(let te=0;te<n;te+=1)r.waterfallBlendTop[te]=r.waterfallTop[te]+Math.sin(r.phase[te]*2.17+r.hour[te]*.41)*.2;const m=new Float32Array(h*3),v=new Float32Array(h*3),_=new Float32Array(h),p=new Float32Array(h),u=new Float32Array(h),E=new Float32Array(h),S=new Float32Array(h),A=new Float32Array(h),D=new Float32Array(h),C=new Float32Array(h),T=new Float32Array(h),O=new Float32Array(h),w=new Float32Array(h),M=new Uint16Array(h),P=new Float32Array(h),I=new Float32Array(h),N=new Float32Array(h),W=new Float32Array(h),J=new Float32Array(h),V=new Float32Array(h),ie=new Float32Array(f*2*3),k=new Float32Array(f*2*3),he=new Float32Array(f*2),ge=new Float32Array(f*2),pe=new Float32Array(f),Ie=new Uint32Array(f),He=new Uint32Array(f),Y=new Uint16Array(f),ae=new Float32Array(f*2);for(let te=0;te<i;te+=1){const Z=r.pearlStart[te],_e=r.strandPearlCount[te],xe=r.strength[te],Me=r.near[te],je=H(1.15,1.7,a)+Me*H(.3,.82,a)+xe*H(.1,.4,a);for(let b=0;b<_e;b+=1){const x=Z+b,L=x*3,$=_e<=1?0:b/(_e-1),j=a();M[x]=te,P[x]=$,I[x]=H(-.006,.006,a),N[x]=a()*Math.PI*2,E[x]=1,A[x]=a(),D[x]=.3,C[x]=H(.35,.55,a),T[x]=H(.18,.4,a),u[x]=je*H(.92,1.08,a),O[x]=H(1.04,1.26,a);let Q;j<.14?(w[x]=H(.18,.32,a),Q=H(.95,1.22,a)):j<.46?(w[x]=H(.06,.16,a),Q=H(.56,.86,a)):(w[x]=H(.02,.08,a),Q=H(.26,.52,a)),p[x]=We(Q*(.68+Me*.5+xe*.4),0,1.1),_[x]=p[x],dc(v,L,xe,H(.72,1.12,a)*(.82+Me*.3)*(.78+Q*.36),a)}for(let b=0;b<_e-1;b+=1){const x=r.lineStart[te]+b,L=x*6;Ie[x]=Z+b,He[x]=Z+b+1,Y[x]=te,pe[x]=H(.009,.026,a)*(.54+xe*.44)*(.6+Me*.42),dc(k,L,xe,H(.2,.36,a)*(.78+Me*.24),a),k[L+3]=k[L]*1.12,k[L+4]=k[L+1]*1.12,k[L+5]=k[L+2]*1.12}}for(let te=0;te<e;te+=1){const Z=i+te,_e=r.pearlStart[Z],xe=r.strandPearlCount[Z],Me=r.strength[Z],je=r.near[Z],b=H(.58,1.02,s)+je*H(.08,.28,s);for(let x=0;x<xe;x+=1){const L=_e+x,$=L*3,j=xe<=1?0:x/(xe-1);M[L]=Z,P[L]=j,I[L]=H(-.004,.004,s),N[L]=s()*Math.PI*2,p[L]=H(.22,.5,s)*(.88+je*.22),_[L]=p[L],E[L]=1,A[L]=s(),D[L]=H(.72,.84,s),C[L]=H(.58,.78,s),T[L]=H(.55,.75,s),u[L]=b*H(.54,.88,s),O[L]=H(1.35,2,s),w[L]=H(.04,.14,s),ya(v,$,Me,H(.34,.62,s),_t.AMBIENT,0,s)}for(let x=0;x<xe-1;x+=1){const L=r.lineStart[Z]+x,$=L*6;Ie[L]=_e+x,He[L]=_e+x+1,Y[L]=Z,pe[L]=H(.003,.009,s)*(.72+Me*.24),ya(k,$,Me,H(.1,.2,s),_t.AMBIENT,0,s),k[$+3]=k[$]*1.08,k[$+4]=k[$+1]*1.08,k[$+5]=k[$+2]*1.08}}for(let te=0;te<t;te+=1){const Z=i+e+te,_e=r.pearlStart[Z],xe=r.strandPearlCount[Z],Me=r.strength[Z],je=r.near[Z],b=r.style[Z],x=b===0?H(.35,.5,l):b===1?H(.5,.7,l):H(.75,.95,l),L=(H(1.05,1.72,l)+je*H(.28,.82,l)+Me*H(.1,.38,l))*x;for(let $=0;$<xe;$+=1){const j=_e+$,Q=j*3,Ee=xe<=1?0:$/(xe-1),se=l();M[j]=Z,P[j]=Ee,I[j]=H(-.004,.004,l),N[j]=l()*Math.PI*2,p[j]=H(.2,b===2?.64:.5,l)*(.88+je*.24+Me*.2),_[j]=p[j],E[j]=1,A[j]=l(),D[j]=H(.34,.48,l),C[j]=H(.48,.7,l),T[j]=H(.32,.58,l),u[j]=L*(se<.7?H(.68,.94,l):H(.88,1.14,l)),O[j]=b===0?H(1.28,1.82,l):H(1.05,1.48,l),w[j]=b===2?H(.3,.52,l):H(.08,.24,l),ya(v,Q,Me,H(.38,b===2?.86:.68,l),_t.DOWNPOUR,b,l)}for(let $=0;$<xe-1;$+=1){const j=r.lineStart[Z]+$,Q=j*6;Ie[j]=_e+$,He[j]=_e+$+1,Y[j]=Z,pe[j]=H(.008,b===2?.025:.021,l)*(.78+Me*.34)*(.82+je*.22),ya(k,Q,Me,H(.2,b===2?.42:.34,l),_t.DOWNPOUR,b,l),k[Q+3]=k[Q]*1.1,k[Q+4]=k[Q+1]*1.1,k[Q+5]=k[Q+2]*1.1}}let ve=0;for(let te=0;te<h;te+=1){const Z=M[te];W[te]=r.stormWeight[Z],J[te]=r.waterfallBlendTop[Z],V[te]=r.waterfallFeather[Z],W[te]>.08&&A[te]>.55&&(ve+=1)}for(let te=0;te<f;te+=1){const Z=r.stormWeight[Y[te]],_e=Math.sin((Y[te]+1)*12.9898)*43758.5453,xe=(_e-Math.floor(_e))*Math.PI*2;ae[te*2]=Z,ae[te*2+1]=Z,he[te*2]=xe,he[te*2+1]=xe}const oe=new Ot;oe.setAttribute("position",new De(m,3).setUsage(It)),oe.setAttribute("aColor",new De(v,3)),oe.setAttribute("aAlpha",new De(_,1).setUsage(It)),oe.setAttribute("aSize",new De(u,1)),oe.setAttribute("aUpperScale",new De(E,1).setUsage(It)),oe.setAttribute("aUpperProgress",new De(S,1).setUsage(It)),oe.setAttribute("aAspect",new De(O,1)),oe.setAttribute("aHighlight",new De(w,1)),oe.setAttribute("aStorm",new De(W,1)),oe.setAttribute("aWaterfallTop",new De(J,1)),oe.setAttribute("aWaterfallFeather",new De(V,1)),oe.setAttribute("aMorphSeed",new De(A,1));const ze=new Ct({uniforms:{uTime:{value:0},uPixelRatio:{value:ii},uFogDensity:{value:Li.fog.density},uMetalDark:{value:new Te(ne.metalRain.darkColor)},uMetalMid:{value:new Te(ne.metalRain.midColor)},uMetalBright:{value:new Te(ne.metalRain.brightColor)},uMetalTint:{value:new Te(ne.metalRain.tintColor)},uPearlBandFrequency:{value:ne.metalRain.pearlBandFrequency},uPearlBandSpeed:{value:ne.metalRain.pearlBandSpeed},uPearlSpecularPower:{value:ne.metalRain.pearlSpecularPower},uPearlFresnelStrength:{value:ne.metalRain.pearlFresnelStrength},uViewport:{value:Sr},uPlotBounds:{value:_r},uPlotFeather:{value:xr},uPlotClip:Na,uMobileCrisp:{value:kn()?1:0},uMinPointSize:{value:ne.pearls.minPointSize},uMaxPointSize:{value:ne.pearls.maxPointSize}},vertexShader:`
      uniform float uPixelRatio;
      uniform float uBeadScale;
      uniform float uMobileCrisp;
      uniform float uMinPointSize;
      uniform float uMaxPointSize;
      attribute vec3 aColor;
      attribute float aAlpha;
      attribute float aSize;
      attribute float aUpperScale;
      attribute float aUpperProgress;
      attribute float aAspect;
      attribute float aHighlight;
      attribute float aStorm;
      attribute float aWaterfallTop;
      attribute float aWaterfallFeather;
      attribute float aMorphSeed;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vAspect;
      varying float vHighlight;
      varying float vUpperProgress;
      varying float vTrailScale;
      varying float vFogDepth;
      varying float vStorm;
      varying float vWaterfall;

      void main() {
        float waterfallTransition = aStorm * (
          1.0 - smoothstep(
            aWaterfallTop - aWaterfallFeather,
            aWaterfallTop + aWaterfallFeather,
            position.y
          )
        );
        float massEntry = smoothstep(0.22, 0.92, waterfallTransition);
        float morphEligibility = mix(
          smoothstep(0.55, 0.82, aMorphSeed),
          0.62 + smoothstep(0.12, 0.98, aMorphSeed) * 0.38,
          massEntry
        );
        float trailEntry = smoothstep(0.04, 0.5, waterfallTransition);
        float lowerTrailRetention = 1.0 - smoothstep(0.96, 1.0, waterfallTransition) * 0.08;
        float trailScale = morphEligibility * trailEntry * lowerTrailRetention;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float depthScale = clamp(20.0 / max(5.2, -mvPosition.z), 0.82, 2.42);
        vColor = aColor;
        vAlpha = aAlpha;
        vAspect = aAspect
          * (1.0 + trailScale * mix(0.9, 2.2, massEntry))
          * mix(1.0, 0.72, massEntry);
        vHighlight = aHighlight;
        vUpperProgress = aUpperProgress;
        vTrailScale = trailScale;
        vFogDepth = -mvPosition.z;
        vStorm = aStorm;
        vWaterfall = waterfallTransition;
        gl_PointSize = mix(1.0, 0.5, uMobileCrisp) * uBeadScale * clamp(
          aSize * aUpperScale * (1.0 + trailScale * mix(0.7, 1.75, massEntry)) * uPixelRatio * depthScale,
          uMinPointSize * uPixelRatio,
          uMaxPointSize * uPixelRatio
        );
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uFogDensity;
      uniform vec3 uMetalDark;
      uniform vec3 uMetalMid;
      uniform vec3 uMetalBright;
      uniform vec3 uMetalTint;
      uniform float uPearlBandFrequency;
      uniform float uPearlBandSpeed;
      uniform float uPearlSpecularPower;
      uniform float uPearlFresnelStrength;
      uniform float uMobileCrisp;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      uniform float uPlotClip;
      uniform float uBeadAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vAspect;
      varying float vHighlight;
      varying float vUpperProgress;
      varying float vTrailScale;
      varying float vFogDepth;
      varying float vStorm;
      varying float vWaterfall;

      void main() {
        vec2 point = gl_PointCoord - vec2(0.5);
        vec2 pearlPoint = vec2(point.x * vAspect, point.y);
        float distanceToEdge = length(pearlPoint);
        float waterfallMass = smoothstep(0.28, 1.0, vWaterfall);
        float edge = mix(
          1.0 - smoothstep(0.46, 0.5, distanceToEdge),
          1.0 - smoothstep(0.28, 0.58, distanceToEdge),
          waterfallMass
        );
        float crispEdge = 1.0 - smoothstep(0.44, 0.5, distanceToEdge);
        edge = mix(edge, crispEdge, uMobileCrisp);
        float sheetEdge = 1.0 - smoothstep(
          0.42,
          0.62,
          length(vec2(point.x * 0.94, point.y * 0.62))
        );
        edge = max(edge, sheetEdge * waterfallMass * mix(0.32, 0.08, uMobileCrisp));
        if (edge < 0.01) discard;

        float body = exp(-dot(pearlPoint, pearlPoint) * mix(4.6, 2.6, waterfallMass));
        float verticalSheet = exp(-(point.x * point.x * mix(18.0, 5.8, waterfallMass) + point.y * point.y * mix(6.0, 1.36, waterfallMass)))
          * waterfallMass;
        float lowerGlow = smoothstep(-0.34, 0.42, point.y) * mix(0.12, 0.28, waterfallMass);
        // Soft satin pearl sheen instead of a tight gem specular.
        vec2 sheenPoint = pearlPoint - vec2(-0.12, 0.18);
        float highlight = exp(-dot(sheenPoint, sheenPoint) * 40.0)
          * vHighlight
          * mix(1.0, 0.4, vUpperProgress);
        // Cool rim light on the lower/shadow side gives pearls roundness + weight.
        float opticalDetail = mix(1.0, 0.15, uMobileCrisp);
        float rimLight = smoothstep(0.32, 0.5, distanceToEdge)
          * smoothstep(0.05, -0.4, point.y) * vHighlight * 0.28 * opticalDetail;
        float rim = smoothstep(0.36, 0.5, distanceToEdge) * 0.08 * opticalDetail;
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));
        horizontalMask = mix(1.0, horizontalMask, uPlotClip);
        float lowerMask = 1.0 - smoothstep(
          uPlotBounds.w - uPlotFeather.z,
          uPlotBounds.w,
          screenUv.y
        );
        lowerMask = mix(1.0, lowerMask, uPlotClip);
        float plotMask = horizontalMask * lowerMask;

        // Reconstruct a soft sphere normal from the point sprite. Alternating
        // dark and bright reflection bands make the pearl read as mercury
        // without converting every drop to a costly lit mesh.
        vec2 metalPoint = clamp(pearlPoint / 0.5, vec2(-1.0), vec2(1.0));
        float metalZ = sqrt(max(0.0, 1.0 - dot(metalPoint, metalPoint)));
        vec3 metalNormal = normalize(vec3(metalPoint, metalZ));
        vec3 keyDirection = normalize(vec3(-0.42, 0.62, 1.0));
        float metalSpecular = pow(
          max(0.0, dot(metalNormal, keyDirection)),
          max(0.01, uPearlSpecularPower)
        );
        float metalFresnel = pow(1.0 - clamp(metalNormal.z, 0.0, 1.0), 2.4);
        float reflectionWave = 0.5 + 0.5 * sin(
          metalNormal.y * uPearlBandFrequency
          + metalNormal.x * 2.4
          - uTime * uPearlBandSpeed
          + vStorm * 2.2
        );
        float mirrorBand = smoothstep(0.34, 0.86, reflectionWave);
        float shadowBand = smoothstep(0.68, 0.98, 1.0 - reflectionWave);
        vec3 color = mix(uMetalDark, uMetalMid, mirrorBand * 0.82 + body * 0.12);
        color = mix(color, uMetalBright, clamp(
          metalSpecular * 1.2 + metalFresnel * uPearlFresnelStrength,
          0.0,
          1.0
        ));
        float tintStrength = (verticalSheet * 0.2 + lowerGlow * 0.08)
          * mix(1.0, 0.62, uMobileCrisp);
        color = mix(color, uMetalTint, tintStrength);
        color = mix(color, uMetalDark, shadowBand * 0.56 + rim * 0.16);
        color += uMetalBright * (highlight * 0.18 + rimLight * 0.2);
        color *= mix(1.0, 0.78, vUpperProgress);
        color = mix(color, vec3(0.0, 0.0, 0.0), fogFactor * 0.48);
        float alpha = uBeadAlpha * edge * vAlpha * plotMask
          * mix(1.0, 0.45, uMobileCrisp)
          * (0.78 + highlight * 0.05 * opticalDetail + rimLight * 0.18 + verticalSheet * mix(0.16, 0.04, uMobileCrisp))
          * (1.0 - fogFactor * 0.38);
        if (alpha < 0.001) discard;
        gl_FragColor = vec4(color, min(0.94, alpha));
      }
    `,transparent:!0,depthWrite:!1,blending:ln}),Pe=new Ot;Pe.setAttribute("position",new De(ie,3).setUsage(It)),Pe.setAttribute("aColor",new De(k,3)),Pe.setAttribute("aAlpha",new De(ge,1).setUsage(It)),Pe.setAttribute("aStorm",new De(ae,1)),Pe.setAttribute("aBandPhase",new De(he,1));const Xe=new Ct({uniforms:{uTime:{value:0},uFogDensity:{value:Li.fog.density},uMetalDark:{value:new Te(ne.metalRain.darkColor)},uMetalMid:{value:new Te(ne.metalRain.midColor)},uMetalBright:{value:new Te(ne.metalRain.brightColor)},uThreadBandDensity:{value:ne.metalRain.threadBandDensity},uThreadBandSpeed:{value:ne.metalRain.threadBandSpeed},uThreadMirrorStrength:{value:ne.metalRain.threadMirrorStrength},uViewport:{value:Sr},uPlotBounds:{value:_r},uPlotFeather:{value:xr},uPlotClip:Na,uMobileCrisp:{value:kn()?1:0}},vertexShader:`
      attribute vec3 aColor;
      attribute float aAlpha;
      attribute float aStorm;
      attribute float aBandPhase;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFogDepth;
      varying float vStorm;
      varying float vBandPhase;

      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vColor = aColor;
        vAlpha = aAlpha;
        vFogDepth = -mvPosition.z;
        vStorm = aStorm;
        vBandPhase = aBandPhase;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uFogDensity;
      uniform vec3 uMetalDark;
      uniform vec3 uMetalMid;
      uniform vec3 uMetalBright;
      uniform float uThreadBandDensity;
      uniform float uThreadBandSpeed;
      uniform float uThreadMirrorStrength;
      uniform float uMobileCrisp;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      uniform float uPlotClip;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFogDepth;
      varying float vStorm;
      varying float vBandPhase;

      void main() {
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));
        horizontalMask = mix(1.0, horizontalMask, uPlotClip);
        float lowerMask = 1.0 - smoothstep(
          uPlotBounds.w - uPlotFeather.z,
          uPlotBounds.w,
          screenUv.y
        );
        lowerMask = mix(1.0, lowerMask, uPlotClip);
        float alpha = vAlpha * horizontalMask * lowerMask
          * mix(1.0, 5.0, uMobileCrisp)
          * (1.0 - fogFactor * 0.42);
        if (alpha < 0.0005) discard;
        float reflectionWave = 0.5 + 0.5 * sin(
          gl_FragCoord.y * uThreadBandDensity
          + gl_FragCoord.x * uThreadBandDensity * 0.1777778
          + vBandPhase
          - uTime * uThreadBandSpeed
          + vStorm * 2.6
        );
        float mirrorBand = smoothstep(0.42, 0.86, reflectionWave);
        float darkBand = smoothstep(0.7, 0.98, 1.0 - reflectionWave);
        vec3 color = mix(uMetalDark, uMetalMid, mirrorBand);
        color = mix(
          color,
          uMetalBright,
          mirrorBand * mirrorBand * (uThreadMirrorStrength + vStorm * 0.26)
        );
        color = mix(color, uMetalDark, darkBand * 0.58);
        color = mix(color, vec3(0.0, 0.0, 0.0), fogFactor * 0.55);
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:ln}),R=new ss(oe,ze);R.renderOrder=3,ze.uniforms.uBeadScale={value:1},ze.uniforms.uBeadAlpha={value:ne.pearls.alpha};const Ke=new Yc(Pe,Xe);Ke.renderOrder=2;const $e={...r,pearlCount:h,lineTotal:f,pearlPositions:m,pearlAlphas:_,pearlBaseAlpha:p,pearlUpperScales:E,pearlUpperProgress:S,pearlUpperSeed:A,pearlTopRetention:D,pearlTopSize:C,pearlTopAlpha:T,pearlChain:M,pearlFraction:P,pearlOffsetY:I,pearlShimmer:N,linePositions:ie,lineAlphas:ge,lineBaseAlpha:pe,linePearlA:Ie,linePearlB:He,lineChain:Y,activeBridgeTrailCount:ve};return{points:R,lines:Ke,data:$e}}function hs(i,e,t){const n=i.data;i.points.material.uniforms.uTime.value=e,i.lines.material.uniforms.uTime.value=e;for(let r=0;r<n.count;r+=1){const a=n.role[r]===_t.AMBIENT,o=n.headY[r]-n.length[r];a?n.headY[r]=sn-.03:n.headY[r]-=n.speed[r]*t*.58*(.92+ce.burst*.08);const s=n.headY[r]-n.length[r],c=n.phase[r],l=Math.sin(e*n.windSpeed[r]+c),d=Math.cos(e*n.windSpeed[r]*.72+c*.7),h=n.baseX[r]+l*n.driftX[r],f=n.z[r]+d*n.driftZ[r];if(n.pathX[r]=h,n.pathZ[r]=f,!a&&n.presence[r]>.08&&o>=Qe&&s<Qe){const m=rv(ht,h,f,n.hour[r],n.strength[r],n.near[r],n.role[r]);av(ht,zr,h,f,n.strength[r],m,n.role[r])}!a&&s<Qe&&ba(n,r,!1)}for(let r=0;r<n.pearlCount;r+=1){const a=n.pearlChain[r],o=n.pearlFraction[r],s=r*3,c=n.headY[a]-o*n.length[a]+n.pearlOffsetY[r],l=Math.min(c,sn),d=1-kt(sn-.055,sn,c),h=Math.max(.8,n.top[a]-Qe),f=(l-Qe)/h,m=1-We(f,0,1),v=n.pathX[a],_=n.pathZ[a],p=es(n.hour[a],n.baseX[a],n.z[a]),u=.9+Math.sin(e*4.2+n.pearlShimmer[r])*.12,E=kt(.55,1,f),S=lt(1,n.pearlTopRetention[r],Math.pow(E,1.15)),A=E<=0?1:1-kt(S-.06,S+.06,n.pearlUpperSeed[r]),D=lt(1,n.pearlTopSize[r],Math.pow(E,1.05)),C=lt(1,n.pearlTopAlpha[r],Math.pow(E,1.1))*A,T=n.role[a],O=n.stormWeight[a],w=n.waterfallBlendTop[a],M=n.waterfallFeather[a],P=O*(1-kt(w-M,w+M,l)),I=We((n.pearlUpperSeed[r]-.55)/.27,0,1),N=T===_t.DOWNPOUR?lt(.5,.82,I):lt(.4,.68,I),W=lt(1,N,P),J=lt(1,T===_t.DOWNPOUR?lt(.96,1.62,I):lt(.78,1.36,I),kt(.22,1,P)),V=lt(1,T===_t.DOWNPOUR?lt(.76,.98,I):lt(.62,.86,I),kt(.48,1,P)),ie=T===_t.DOWNPOUR?kt(Qe+.015,Qe+.1,l):kt(Qe+.02,Qe+.12,l),k=n.curtainLayer[a]===1?1:0,he=T===_t.BASE?1+kt(.02,.5,m)*(ne.floorGlow.base+n.strength[a]*ne.floorGlow.baseByStrength)*(1-O)+k*(ne.floorGlow.lowerCurtain+n.strength[a]*ne.floorGlow.lowerCurtainByStrength)*(1-O):T===_t.DOWNPOUR?1+kt(.02,.54,m)*(ne.floorGlow.downpour+n.strength[a]*ne.floorGlow.downpourByStrength)*(1-O):1+kt(.02,.5,m)*ne.floorGlow.ambient;n.pearlPositions[s]=v,n.pearlPositions[s+1]=l,n.pearlPositions[s+2]=_,n.pearlUpperScales[r]=D*J,n.pearlUpperProgress[r]=E,n.pearlAlphas[r]=We(n.pearlBaseAlpha[r]*n.alpha[a]*u*d*C*ie*he*W*V*(1+p*.56+ce.burst*za(n.hour[a],ce.selectedHour)*.38),0,.96)}for(let r=0;r<n.lineTotal;r+=1){const a=n.linePearlA[r]*3,o=n.linePearlB[r]*3,s=r*6,c=r*2,l=n.lineChain[r],d=n.role[l],h=(n.pearlPositions[a+1]+n.pearlPositions[o+1])*.5,f=n.stormWeight[l],m=n.waterfallBlendTop[l],v=n.waterfallFeather[l],_=f*(1-kt(m-v,m+v,h)),p=1+4*_*(1-_)*.88,u=lt(1,d===_t.DOWNPOUR?.12:.2,_)*p,E=es(n.hour[l],n.baseX[l],n.z[l]),S=We((n.pearlAlphas[n.linePearlA[r]]+n.pearlAlphas[n.linePearlB[r]])*.86,0,1),A=d===_t.DOWNPOUR?2.45:d===_t.AMBIENT?1.2:1,D=n.lineBaseAlpha[r]*S*(.76+E*.52)*A*u;n.linePositions[s]=n.pearlPositions[a],n.linePositions[s+1]=Math.max(Qe+.006,n.pearlPositions[a+1]),n.linePositions[s+2]=n.pearlPositions[a+2],n.linePositions[s+3]=n.pearlPositions[o],n.linePositions[s+4]=Math.max(Qe+.006,n.pearlPositions[o+1]),n.linePositions[s+5]=n.pearlPositions[o+2],n.lineAlphas[c]=D*.58,n.lineAlphas[c+1]=D}i.points.geometry.attributes.position.needsUpdate=!0,i.points.geometry.attributes.aAlpha.needsUpdate=!0,i.points.geometry.attributes.aUpperScale.needsUpdate=!0,i.points.geometry.attributes.aUpperProgress.needsUpdate=!0,i.lines.geometry.attributes.position.needsUpdate=!0,i.lines.geometry.attributes.aAlpha.needsUpdate=!0}function j0(){const i=new Rn(ui.width*1.16,ui.depth*2.3,150,92);i.rotateX(-Math.PI/2),i.translate(0,Qe,1.25);const e=new Ct({uniforms:{uTime:{value:0},uColorDeep:{value:new Te(ne.water.deepColor)},uColorSurface:{value:new Te(ne.water.surfaceColor)},uRoughness:{value:ne.water.roughness},uSpecularStrength:{value:ne.water.specularStrength},uRippleHighlight:{value:ne.water.rippleHighlight},uSurfaceOpacity:{value:ne.water.surfaceOpacity},uHeightField:{value:null},uFieldBounds:{value:new Tt(wi.xMin,wi.xMax,wi.zMin,wi.zMax)},uFieldTexel:{value:new Be(1/wi.resX,1/wi.resZ)},uRippleGain:{value:ne.ripple.gain},uRippleDisplace:{value:ne.ripple.displace},uWavePrimary:{value:ne.water.wavePrimary},uWaveSecondary:{value:ne.water.waveSecondary},uRainLut:{value:null},uLutBounds:{value:new Be(Ut(0),Ut(24)-Ut(0))},uReflStrength:{value:ne.water.reflStrength},uReflFade:{value:ne.water.reflFade},uRearFadeNearZ:{value:ne.water.rearFadeNearZ},uRearFadeFarZ:{value:ne.water.rearFadeFarZ}},vertexShader:`
      uniform float uTime;
      uniform sampler2D uHeightField;
      uniform vec4 uFieldBounds;
      uniform float uRippleDisplace;
      uniform float uWavePrimary;
      uniform float uWaveSecondary;
      varying vec2 vUv;
      varying vec3 vWorld;

      void main() {
        vec3 transformed = position;
        float wave = sin(uTime * 1.2 + position.x * 0.55 + position.z * 0.34) * uWavePrimary;
        wave += sin(-uTime * 0.86 + position.x * 0.18 - position.z * 0.9) * uWaveSecondary;
        // GPU 高度场驱动真实顶点起伏 — 雨滴落点在水面上顶出凹坑并向外扩散
        vec2 fUv = vec2(
          (position.x - uFieldBounds.x) / (uFieldBounds.y - uFieldBounds.x),
          (position.z - uFieldBounds.z) / (uFieldBounds.w - uFieldBounds.z)
        );
        if (fUv.x > 0.0 && fUv.x < 1.0 && fUv.y > 0.0 && fUv.y < 1.0) {
          wave += texture2D(uHeightField, fUv).r * uRippleDisplace;
        }
        transformed.y += wave;
        vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
        vWorld = worldPosition.xyz;
        vUv = uv;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uColorDeep;
      uniform vec3 uColorSurface;
      uniform float uRoughness;
      uniform float uSpecularStrength;
      uniform float uRippleHighlight;
      uniform float uSurfaceOpacity;
      uniform sampler2D uHeightField;
      uniform vec4 uFieldBounds;
      uniform vec2 uFieldTexel;
      uniform float uRippleGain;
      uniform sampler2D uRainLut;
      uniform vec2 uLutBounds;
      uniform float uReflStrength;
      uniform float uReflFade;
      uniform float uRearFadeNearZ;
      uniform float uRearFadeFarZ;
      varying vec2 vUv;
      varying vec3 vWorld;

      void main() {
        // Sample GPU height field neighbours → per-pixel surface normal
        vec2 fUv = vec2(
          (vWorld.x - uFieldBounds.x) / (uFieldBounds.y - uFieldBounds.x),
          (vWorld.z - uFieldBounds.z) / (uFieldBounds.w - uFieldBounds.z)
        );
        float hC = 0.0, hL = 0.0, hR = 0.0, hT = 0.0, hB = 0.0;
        if (fUv.x > 0.01 && fUv.x < 0.99 && fUv.y > 0.01 && fUv.y < 0.99) {
          hC = texture2D(uHeightField, fUv).r;
          hL = texture2D(uHeightField, fUv - vec2(uFieldTexel.x, 0.0)).r;
          hR = texture2D(uHeightField, fUv + vec2(uFieldTexel.x, 0.0)).r;
          hT = texture2D(uHeightField, fUv + vec2(0.0, uFieldTexel.y)).r;
          hB = texture2D(uHeightField, fUv - vec2(0.0, uFieldTexel.y)).r;
        }

        // Surface normal from finite-difference height gradients.
        // Fixed scale: gradient of ~0.08 → ~15° tilt — subtle but visible.
        // uRippleGain only controls reflected light energy, not geometry height.
        float nScale = 3.5;
        vec3 normal = normalize(vec3((hL - hR) * nScale, 1.0, (hB - hT) * nScale));

        // Physical water lighting: Fresnel + specular + diffuse
        vec3 viewDir   = normalize(cameraPosition - vWorld);
        vec3 lightDir  = normalize(vec3(-0.35, 0.88, 0.42));
        float diffuse  = max(dot(normal, lightDir), 0.0);
        float fresnel  = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.5);
        vec3 reflDir   = reflect(-lightDir, normal);
        float specularPower = mix(150.0, 28.0, uRoughness);
        float specular = pow(max(dot(reflDir, viewDir), 0.0), specularPower);

        // Use local slope + curvature instead of broad height values. This keeps
        // highlights on the moving ripple rings rather than whitening the whole
        // surface into a frosted sheet.
        float neighbourAverage = (hL + hR + hT + hB) * 0.25;
        float rippleSlope = length(vec2(hL - hR, hB - hT));
        float rippleCurvature = abs(hC - neighbourAverage);
        float rippleSignal = (rippleSlope * 1.7 + rippleCurvature * 2.8) * uRippleGain;
        float rippleEnergy = smoothstep(0.08, 0.68, rippleSignal);
        float rippleHighlight = pow(rippleEnergy, 1.65);
        float rippleGlow = rippleHighlight * (0.42 + diffuse * 0.48);

        // Keep the base water dark and mirror-like; reserve the pale blue-white
        // energy for narrow specular and ripple highlights.
        vec3 edgeColor = vec3(0.58, 0.69, 0.82);
        vec3 rippleColor = vec3(0.72, 0.84, 0.96);
        float surfaceFill = mix(0.12, 0.34, uRoughness);
        float fresnelFill = mix(0.42, 0.24, uRoughness);
        float diffuseFill = mix(0.025, 0.2, uRoughness);
        vec3 color = mix(
          uColorDeep,
          uColorSurface,
          surfaceFill + fresnel * fresnelFill + diffuse * diffuseFill
        );
        color += edgeColor * specular * uSpecularStrength;
        color += rippleColor * rippleGlow * uRippleHighlight;

        // Rain-column reflection: rain above mirrors into the dark water surface
        float dz        = vWorld.z - 1.15;
        float depthFade = smoothstep(-0.7, 0.0, dz) * (1.0 - smoothstep(0.2, uReflFade, dz));
        float wobX      = vWorld.x + (hL - hR) * 1.15;
        float lutX      = clamp((wobX - uLutBounds.x) / uLutBounds.y, 0.0, 1.0);
        float colRain   = pow(texture2D(uRainLut, vec2(lutX, 0.5)).r, 1.3);
        float hMask     = smoothstep(-0.01, 0.05, lutX) * (1.0 - smoothstep(0.95, 1.01, lutX));
        // Gentle shimmer driven by height field, not synthetic sine stripes
        float shimmer = 0.7 + 0.3 * sin(uTime * 0.9 + wobX * 1.4 + dz * 2.2 + hC * 4.0);
        // Grey-blue reflection matches pearl colour → bridges rain-to-water
        float rippleReflection = 1.0 + rippleHighlight * 0.62;
        color += vec3(0.56, 0.66, 0.78)
          * colRain * depthFade * hMask * shimmer * uReflStrength * rippleReflection;

        // Broad waterline seam: soft grey-blue glow where rain meets water
        float seam = colRain * exp(-pow(dz * 1.4, 2.0)) * 0.5 * hMask;
        color += vec3(0.44, 0.54, 0.66) * seam;

        // Clamp the physical surface opacity first, then apply the rear mask.
        // This matters when surfaceOpacity > 1: otherwise the clamp keeps most
        // of the fade fully opaque and produces a sudden edge near the back.
        float frontFade = smoothstep(0.0, 0.14, vUv.y);
        float rearFade = smoothstep(
          min(uRearFadeFarZ, uRearFadeNearZ),
          max(uRearFadeFarZ, uRearFadeNearZ),
          vWorld.z
        );
        float surfaceAlpha = min(
          0.88,
          uSurfaceOpacity + fresnel * 0.18 + rippleGlow * 0.3
        );
        // Feather both physical side edges so rotating the scene never reveals
        // the water plane as a hard rectangular wall.
        float sideFade = smoothstep(0.0, 0.16, vUv.x)
          * smoothstep(0.0, 0.16, 1.0 - vUv.x);
        float alpha = surfaceAlpha * frontFade * rearFade * sideFade;
        if (alpha < 0.002) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:ln}),t=new wt(i,e);return t.renderOrder=0,t}function J0(){const i=new Rn(ui.width*1.16,ui.depth*2.3);i.rotateX(-Math.PI/2),i.translate(0,Qe-.28,1.25);const e=new Ct({uniforms:{uColor:{value:new Te(ne.water.deepColor)},uRearFadeNearZ:{value:ne.water.rearFadeNearZ},uRearFadeFarZ:{value:ne.water.rearFadeFarZ}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vUv = uv;
        vWorld = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uRearFadeNearZ;
      uniform float uRearFadeFarZ;
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        float frontFade = smoothstep(0.0, 0.12, vUv.y);
        float rearFade = smoothstep(
          min(uRearFadeFarZ, uRearFadeNearZ),
          max(uRearFadeFarZ, uRearFadeNearZ),
          vWorld.z
        );
        float sideFade = smoothstep(0.0, 0.18, vUv.x)
          * smoothstep(0.0, 0.18, 1.0 - vUv.x);
        float alpha = 0.75 * frontFade * rearFade * sideFade;
        if (alpha < 0.002) discard;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,side:jt,toneMapped:!1}),t=new wt(i,e);return t.renderOrder=-1,t}function vu(){const e=Ut(0),t=Ut(24),n=t-e,r=new Float32Array(256),a=new Float32Array(256);for(let f=0;f<=24;f+=.04){const m=We((Ut(f)-e)/n,0,1),v=cr(f),_=m*255,p=7,u=Math.max(0,Math.floor(_-p)),E=Math.min(255,Math.ceil(_+p));for(let S=u;S<=E;S+=1){const A=(S-_)/p,D=Math.exp(-A*A*1.3);r[S]+=v*D,a[S]+=D}}const o=new Float32Array(256*4);for(let f=0;f<256;f+=1){const m=f/255*24,v=Ci(m),_=(a[f]>0?Math.pow(r[f]/a[f],1.12):0)*v;o[f*4]=_,o[f*4+1]=_,o[f*4+2]=_,o[f*4+3]=1}const s=new s0(o,256,1,pn,On);s.minFilter=At,s.magFilter=At,s.wrapS=Mn,s.wrapT=Mn,s.needsUpdate=!0;const c=ne.mist.height,l=new Rn(n*1.01,c,1,1);l.translate((e+t)*.5,Qe+c*.5-.42,1.15);const d=new Ct({uniforms:{uTime:{value:0},uLut:{value:s},uColor:{value:new Te(ne.mist.color)},uOpacity:{value:ne.mist.opacity},uReflOpacity:{value:ne.mist.reflectionOpacity},uViewport:{value:Sr},uPlotBounds:{value:_r},uPlotFeather:{value:xr}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform sampler2D uLut;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uReflOpacity;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(41.21, 289.7))) * 43758.5453);
      }

      void main() {
        float intensity = texture2D(uLut, vec2(vUv.x, 0.5)).r;
        // Vertical profile: a bright core right at the waterline that fades up
        // into a low haze, and fades OUT below the waterline so the band never
        // shows as a panel beneath the axis.
        float core = exp(-pow((vUv.y - 0.14) * 6.4, 2.0));
        float haze = exp(-pow((vUv.y - 0.2) * 2.4, 2.0)) * 0.5;
        float lowerCut = smoothstep(0.05, 0.14, vUv.y);
        float yb = (core + haze) * lowerCut;
        // Gentle breathing + fine grain so the band reads as drifting vapour.
        float drift = 0.88 + 0.12 * sin(uTime * 0.5 + vUv.x * 7.3);
        float grain = 0.9 + 0.1 * hash(floor(vUv * vec2(120.0, 92.0)) + floor(uTime * 1.3));
        intensity *= drift * grain;

        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));

        // Reflection of the rain in the water just below the waterline — a dim,
        // vertically-streaked glow that fades down with depth.
        float reflBand = smoothstep(0.0, 0.11, vUv.y) * (1.0 - smoothstep(0.1, 0.135, vUv.y));
        float reflStreak = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(vUv.x * 240.0 + hash(vec2(floor(vUv.x * 60.0), 1.0)) * 7.0), 1.8);
        float reflWobble = 0.85 + 0.15 * sin(uTime * 1.2 + vUv.x * 30.0);
        float refl = reflBand * reflStreak * reflWobble;

        float sideFade = smoothstep(0.0, 0.08, vUv.x)
          * smoothstep(0.0, 0.08, 1.0 - vUv.x);
        float a = intensity * (yb + refl * uReflOpacity) * uOpacity * horizontalMask * sideFade;
        if (a < 0.002) discard;
        vec3 color = uColor * (0.7 + intensity * 0.6);
        gl_FragColor = vec4(color, a);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:ur}),h=new wt(l,d);return h.name="rain-mist-band",h.renderOrder=1.7,h.frustumCulled=!1,{mesh:h,material:d,lut:s,lutXMin:e,lutSpan:n}}function _u(i,e){const t=new Tn;t.name="peak-waterfall-system";const n=Q0(),r=ev(),a=new wt(n,r);a.name="peak-waterfall-density-body",a.renderOrder=1.5,a.frustumCulled=!1;const o=tv(i,e),s=lc(!1),c=new wt(o.geometry,s);c.name="peak-waterfall-filaments",c.renderOrder=2.45,c.frustumCulled=!1;const l=lc(!0),d=new wt(o.highlightGeometry,l);return d.name="peak-waterfall-filament-highlights",d.renderOrder=2.75,d.frustumCulled=!1,t.add(a,c,d),{group:t,materials:[r,s,l],bodyCount:mn.length,peakCount:mn.length,filamentCapacity:i,visibleFilamentCount:i,bridgeFilamentCount:o.bridgeCount,coreFilamentCount:o.coreCount,lowerFilamentCount:o.lowerCount,wideFilamentCount:o.wideCount,foregroundFilamentCount:o.foregroundCount,highlightFilamentCount:o.highlightCount,ribbonSegments:o.ribbonSegments}}function Q0(){const n=2387*mn.length,r=new Float32Array(n*3),a=new Float32Array(n*2),o=new Float32Array(n),s=new Float32Array(n),c=new Uint16Array(mn.length*76*30*6);let l=0,d=0;for(let f=0;f<mn.length;f+=1){const[m,v]=mn[f],_=l;for(let p=0;p<=76;p+=1){const u=p/76,E=lt(m,v,u),S=gs(E),A=Ii(E),D=Qe,C=.18+(Xn(E*2.1,Cn^1910834091)-.5)*.16;for(let T=0;T<=30;T+=1){const O=T/30,w=l*3,M=l*2;r[w]=Ut(E),r[w+1]=lt(D,S,O),r[w+2]=C+(Xn(E*3.2+O*1.7,Cn^1335520561)-.5)*.08,a[M]=u,a[M+1]=O,o[l]=A,s[l]=f*17.3+u*4.7,l+=1}}for(let p=0;p<76;p+=1)for(let u=0;u<30;u+=1){const S=_+p*31+u,A=S+31;c[d++]=S,c[d++]=A,c[d++]=S+1,c[d++]=A,c[d++]=A+1,c[d++]=S+1}}const h=new Ot;return h.setAttribute("position",new De(r,3)),h.setAttribute("aLocal",new De(a,2)),h.setAttribute("aStorm",new De(o,1)),h.setAttribute("aSeed",new De(s,1)),h.setIndex(new De(c,1)),n>0&&h.computeBoundingSphere(),h}function ev(){return new Ct({uniforms:{uTime:{value:0},uMotion:{value:di?0:1},uDeep:{value:new Te(ne.metalRain.darkColor)},uMid:{value:new Te(ne.metalRain.midColor)},uBright:{value:new Te(ne.metalRain.brightColor)},uBodyBandDensity:{value:ne.metalRain.bodyBandDensity},uBodyBandSpeed:{value:ne.metalRain.bodyBandSpeed},uBodyMirrorStrength:{value:ne.metalRain.bodyMirrorStrength},uBroadSway:{value:ne.waterfallBody.broadSway},uFineSway:{value:ne.waterfallBody.fineSway},uStreakFrequency:{value:ne.waterfallBody.streakFrequency},uFineStreakFrequency:{value:ne.waterfallBody.fineStreakFrequency},uStreakSharpness:{value:ne.waterfallBody.streakSharpness},uFineStreakSharpness:{value:ne.waterfallBody.fineStreakSharpness},uFineStreakWeight:{value:ne.waterfallBody.fineStreakWeight},uBaseMass:{value:ne.waterfallBody.baseMass},uRiseMass:{value:ne.waterfallBody.riseMass},uCloudLow:{value:ne.waterfallBody.cloudLow},uCloudHigh:{value:ne.waterfallBody.cloudHigh},uGapDarkness:{value:ne.waterfallBody.gapDarkness},uStreakBrightness:{value:ne.waterfallBody.streakBrightness},uBottomFeather:{value:ne.waterfallBody.bottomFeather},uOpacity:{value:ne.waterfallBody.opacity},uViewport:{value:Sr},uPlotBounds:{value:_r},uPlotFeather:{value:xr},uPlotClip:Na},vertexShader:`
      uniform float uTime;
      uniform float uMotion;
      uniform float uBroadSway;
      uniform float uFineSway;
      attribute vec2 aLocal;
      attribute float aStorm;
      attribute float aSeed;
      varying vec2 vLocal;
      varying float vStorm;
      varying float vSeed;
      varying vec3 vWorld;

      void main() {
        float time = uTime * uMotion;
        vec3 transformed = position;
        float sway = sin(position.y * 2.8 - time * 1.9 + aSeed * 1.7) * uBroadSway;
        sway += sin(position.y * 7.1 - time * 4.2 - position.x) * uFineSway;
        transformed.x += sway * aStorm * (0.45 + aLocal.y * 0.55);
        vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
        vLocal = aLocal;
        vStorm = aStorm;
        vSeed = aSeed;
        vWorld = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime;
      uniform float uMotion;
      uniform vec3 uDeep;
      uniform vec3 uMid;
      uniform vec3 uBright;
      uniform float uBodyBandDensity;
      uniform float uBodyBandSpeed;
      uniform float uBodyMirrorStrength;
      uniform float uStreakFrequency;
      uniform float uFineStreakFrequency;
      uniform float uStreakSharpness;
      uniform float uFineStreakSharpness;
      uniform float uFineStreakWeight;
      uniform float uBaseMass;
      uniform float uRiseMass;
      uniform float uCloudLow;
      uniform float uCloudHigh;
      uniform float uGapDarkness;
      uniform float uStreakBrightness;
      uniform float uBottomFeather;
      uniform float uOpacity;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      uniform float uPlotClip;
      varying vec2 vLocal;
      varying float vStorm;
      varying float vSeed;
      varying vec3 vWorld;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n = i.x + i.y * 57.0;
        return mix(mix(hash(n), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
      }
      float fbm(vec2 p) {
        float value = noise(p) * 0.55;
        p = p * 2.03 + vec2(7.1, 13.7);
        value += noise(p) * 0.29;
        p = p * 2.07 + vec2(17.3, 5.9);
        value += noise(p) * 0.16;
        return value;
      }

      void main() {
        float time = uTime * uMotion;

        // Soft horizontal sheet edges.
        float edgeWarp = noise(vec2(vLocal.y * 6.0 - time * 0.6, vSeed));
        float edge = smoothstep(0.02 + edgeWarp * 0.04, 0.17, vLocal.x)
          * (1.0 - smoothstep(0.83, 0.98 - edgeWarp * 0.04, vLocal.x));

        // Vertical volume profile: a heavy bright mass at the base that billows
        // up and fades — the "reverse waterfall". Top feathers into the pearls.
        float baseMass = exp(-pow((vLocal.y - 0.04) * 2.6, 2.0));
        float rise = 1.0 - smoothstep(0.0, 0.8, vLocal.y);
        float topFade = 1.0 - smoothstep(0.6, 1.0, vLocal.y);

        // Soft organic billow (low frequency, slow) — this carries the volume
        // and light/dark, instead of hard procedural stripes.
        float billow = fbm(vec2(vWorld.x * 0.85 + vSeed * 0.3, vLocal.y * 1.7 - time * 0.5));
        float billow2 = fbm(vec2(vWorld.x * 1.7 - vSeed * 0.6, vLocal.y * 3.1 - time * 0.95));
        float cloud = smoothstep(0.22, 0.86, billow * 0.7 + billow2 * 0.42);

        // Vertical water-flow streaks give the bloom real texture (de-blur):
        // bright water columns separated by darker gaps, flowing downward.
        float warp = fbm(vec2(vWorld.x * 0.9 + vSeed, vLocal.y * 1.2 - time * 0.4));
        // 🎛️ 瀑布纹理对应 TUNING.waterfallBody：密度越大越细密，锐度越大越分明。
        float streaks = pow(
          0.5 + 0.5 * sin(vWorld.x * uStreakFrequency + warp * 5.0 + vSeed * 3.0),
          uStreakSharpness
        );
        float fineStreaks = pow(
          0.5 + 0.5 * sin(vWorld.x * uFineStreakFrequency + warp * 7.0),
          uFineStreakSharpness
        ) * uFineStreakWeight;
        float flow = clamp(streaks + fineStreaks, 0.0, 1.0);
        float advect = noise(vec2(vWorld.x * 8.0 + vSeed, vLocal.y * 6.0 + time * 2.0));
        flow *= (0.5 + advect * 0.75);

        // 🎛️ 瀑布密度对应 TUNING.waterfallBody：底部质量、云团对比、缝隙黑度、雨丝亮度。
        float volume = (baseMass * uBaseMass + rise * uRiseMass)
          * mix(uCloudLow, uCloudHigh, cloud)
          * mix(uGapDarkness, uStreakBrightness, flow);

        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));
        horizontalMask = mix(1.0, horizontalMask, uPlotClip);
        float lowerMask = 1.0 - smoothstep(
          uPlotBounds.w - uPlotFeather.z,
          uPlotBounds.w,
          screenUv.y
        );
        lowerMask = mix(1.0, lowerMask, uPlotClip);

        // Feather the bottom edge to black so the noisy geometry base never reads
        // as a lit "wave" silhouette near the waterline — it dissolves into the dark.
        // 🎛️ 瀑布底边对应 TUNING.waterfallBody.bottomFeather。
        float bottomFeather = smoothstep(0.0, max(0.0001, uBottomFeather), vLocal.y);
        float intensity = volume * edge * topFade * vStorm * horizontalMask * lowerMask * bottomFeather;
        if (intensity < 0.002) discard;

        // Moving black/silver reflection bands turn the procedural volume into
        // a mercury sheet. Normal alpha blending is used below so the dark
        // chrome cavities remain visible instead of disappearing additively.
        float reflectionSweep = 0.5 + 0.5 * sin(
          vWorld.x * uBodyBandDensity
          + warp * 5.4
          - vLocal.y * 2.1
          - time * uBodyBandSpeed
        );
        float mirrorBand = smoothstep(0.46, 0.9, reflectionSweep + flow * 0.18);
        float cavityBand = smoothstep(0.6, 0.96, 1.0 - reflectionSweep + (1.0 - cloud) * 0.14);
        vec3 color = mix(uDeep, uMid, clamp(cloud * 0.5 + volume * 0.16, 0.0, 1.0));
        color = mix(color, uBright, clamp(
          mirrorBand * uBodyMirrorStrength + flow * 0.3 + baseMass * 0.08,
          0.0,
          1.0
        ));
        color = mix(color, uDeep, cavityBand * 0.72);
        float metalAlpha = clamp(1.0 - exp(-intensity * uOpacity * 0.72), 0.0, 0.92);
        gl_FragColor = vec4(color, metalAlpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:jt,blending:ln})}function tv(i,e){const t=new d0,n=14,r=(n+1)*2,a=new Float32Array(r*3),o=new Float32Array(r*2),s=new Uint16Array(n*6);let c=0,l=0;for(let I=0;I<=n;I+=1){const N=I/n;for(let W=0;W<2;W+=1){const J=c*3,V=c*2;a[J]=W===0?-.5:.5,a[J+1]=N,a[J+2]=0,o[V]=W,o[V+1]=N,c+=1}}for(let I=0;I<n;I+=1){const N=I*2,W=N+1,J=N+2,V=N+3;s[l++]=N,s[l++]=W,s[l++]=J,s[l++]=J,s[l++]=W,s[l++]=V}t.setAttribute("position",new De(a,3)),t.setAttribute("uv",new De(o,2)),t.setIndex(new De(s,1));const d=new Float32Array(i*3),h=new Float32Array(i*2),f=new Float32Array(i*4),m=new Float32Array(i*2),v=new Float32Array(i),_=new Float32Array(i*3),p=new Float32Array(i),u=Ri(Cn^1850919347),E=yu(u),S=Math.round(i*.06),A=S,D=e.downpourCount>0?Math.round(i*.24):0,C=Math.round(i*.6);let T=0,O=0,w=0,M=0;for(let I=0;I<i;I+=1){const N=I<A,W=!N&&I<A+D,J=!N&&!W&&I<A+D+C,V=!N&&!W&&!J;p[I]=W?0:J?1:V?2:3;let ie=18,k=0;const he=I*3,ge=I*2,pe=I*4,Ie=I*2,He=I*3;if(W){const Y=e.baseCount+e.ambientCount+Math.floor(u()*e.downpourCount);ie=e.hour[Y],k=e.stormWeight[Y];const ae=e.waterfallTop[Y],ve=Math.max(Qe,ae-H(1.15,1.95,u)),oe=e.near[Y];d[he]=e.baseX[Y]+H(-.018,.018,u),d[he+1]=ve,d[he+2]=e.z[Y],h[ge]=H(.008,.028,u)*(.84+oe*.26),h[ge+1]=H(1.35,2.35,u),f[pe]=We(e.speed[Y],2.8,6.4),f[pe+1]=H(.006,.025,u),f[pe+2]=e.phase[Y],f[pe+3]=H(.26,.56,u),m[Ie]=H(6.5,13,u),m[Ie+1]=H(.34,.58,u),_[He]=e.windSpeed[Y],_[He+1]=e.driftX[Y],_[He+2]=e.driftZ[Y],T+=1}else{for(let R=0;R<14&&(ie=E(),k=Ii(ie),!(k>.08&&u()<Math.pow(k,.58)));R+=1);const Y=u(),ae=J&&u()<.34,ve=Math.max(Qe,Qe+(N?H(-.02,.16,u):V?H(-.08,.18,u):ae?H(.18,.72,u):H(-.12,.2,u))),oe=Math.max(.55,gs(ie)-ve),ze=N?H(.018,.044,u):V?H(.036,.082,u):u()<.82?H(.007,.022,u):H(.022,.042,u),Pe=u(),Xe=V?H(2.6,4.2,u):Pe<.28?H(3,4,u):Pe<.68?H(4,5.4,u):H(5.4,7,u);d[he]=Ut(ie)+H(-.08,.08,u),d[he+1]=ve,d[he+2]=Ba(N?H(.7,1,u):Y,u),h[ge]=ze,h[ge+1]=oe*(J?ae?H(.34,.66,u):H(.72,1.1,u):V?H(.5,.92,u):H(.68,1.02,u)),f[pe]=Xe,f[pe+1]=H(.006,V?.045:.034,u)*(.78+Y*.36),f[pe+2]=u()*Math.PI*2,f[pe+3]=N?H(.54,.92,u):J?H(.48,.9,u)*(.82+Y*.26):V?H(.34,.64,u):H(.3,.56,u),m[Ie]=J?H(4,9.4,u):V?H(2.6,6.8,u):H(4.8,10,u),m[Ie+1]=J?H(.22,.46,u):V?H(.18,.42,u):H(.28,.52,u),_[He]=H(.12,.42,u),_[He+1]=H(.0015,V?.007:.0055,u),_[He+2]=H(.0015,V?.006:.0045,u),N?M+=1:J?O+=1:V&&(w+=1)}v[I]=k}t.setAttribute("aAnchor",new yi(d,3)),t.setAttribute("aDimensions",new yi(h,2)),t.setAttribute("aFlow",new yi(f,4)),t.setAttribute("aBreaks",new yi(m,2)),t.setAttribute("aStorm",new yi(v,1)),t.setAttribute("aDrift",new yi(_,3)),t.setAttribute("aFilamentClass",new yi(p,1)),t.instanceCount=i;const P=t.clone();return P.instanceCount=S,{geometry:t,highlightGeometry:P,highlightCount:S,bridgeCount:T,coreCount:O,lowerCount:w,wideCount:w,foregroundCount:M,ribbonSegments:n}}function lc(i){return new Ct({uniforms:{uTime:{value:0},uMotion:{value:di?0:1},uDeep:{value:new Te(ne.metalRain.darkColor)},uMid:{value:new Te(ne.metalRain.midColor)},uBright:{value:new Te(ne.metalRain.brightColor)},uFilamentBandDensity:{value:ne.metalRain.filamentBandDensity},uFilamentBandSpeed:{value:ne.metalRain.filamentBandSpeed},uFilamentMirrorStrength:{value:i?ne.metalRain.highlightMirrorStrength:ne.metalRain.filamentMirrorStrength},uEdgeWidth:{value:i?ne.waterfallFilaments.highlightEdgeWidth:ne.waterfallFilaments.edgeWidth},uOpacity:{value:i?ne.waterfallFilaments.highlightOpacity:ne.waterfallFilaments.opacity},uBottomMistOpacity:{value:ne.waterfallFilaments.bottomMistOpacity},uViewport:{value:Sr},uPlotBounds:{value:_r},uPlotFeather:{value:xr},uPlotClip:Na},vertexShader:`
      uniform float uTime;
      uniform float uMotion;
      attribute vec3 aAnchor;
      attribute vec2 aDimensions;
      attribute vec4 aFlow;
      attribute vec2 aBreaks;
      attribute float aStorm;
      attribute vec3 aDrift;
      attribute float aFilamentClass;
      varying vec2 vUv;
      varying vec4 vFlow;
      varying vec2 vBreaks;
      varying float vStorm;
      varying float vFogDepth;
      varying float vFilamentClass;
      varying float vTurbulence;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n = i.x + i.y * 57.0;
        return mix(mix(hash(n), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
      }
      float fbm(vec2 p) {
        float value = noise(p) * 0.55;
        p = p * 2.03 + vec2(7.1, 11.3);
        value += noise(p) * 0.29;
        p = p * 2.11 + vec2(13.9, 5.7);
        value += noise(p) * 0.16;
        return value;
      }

      void main() {
        float time = uTime * uMotion;
        float localY = position.y;
        float bridgeClass = 1.0 - smoothstep(0.05, 0.95, abs(aFilamentClass - 0.0));
        float coreClass = 1.0 - smoothstep(0.05, 0.95, abs(aFilamentClass - 1.0));
        float wideClass = 1.0 - smoothstep(0.05, 0.95, abs(aFilamentClass - 2.0));
        float foregroundClass = 1.0 - smoothstep(0.05, 0.95, abs(aFilamentClass - 3.0));
        vec3 center = aAnchor;
        center.x += sin(time * aDrift.x + aFlow.z) * aDrift.y;
        center.z += cos(time * aDrift.x * 0.72 + aFlow.z * 0.7) * aDrift.z;
        center.y += localY * aDimensions.y;
        float fallTime = time * (0.22 + aFlow.x * 0.075);
        float localWarp = fbm(vec2(localY * 3.2 + aFlow.z * 0.43, fallTime * 0.55 + aAnchor.x * 0.18));
        float curl = fbm(vec2(
          localY * (6.0 + wideClass * 1.2) + localWarp * 1.1,
          aFlow.z * 0.77 - fallTime * 0.9
        )) * 2.0 - 1.0;
        float branch = sin(localY * (12.0 + wideClass * 2.0) + aFlow.z + fallTime * 1.45) * 0.45;
        branch += sin(localY * 31.0 - aFlow.z * 1.9 - fallTime * 2.15) * 0.16;
        branch += curl * (0.18 + foregroundClass * 0.08);
        float bendEnvelope = smoothstep(0.02, 0.22, localY)
          * (0.16 + localY * 0.48)
          * (1.0 - bridgeClass * 0.18);
        center.x += branch * aFlow.y * bendEnvelope * (0.42 + wideClass * 0.18 + foregroundClass * 0.12);
        center.z += curl * aFlow.y * (0.045 + wideClass * 0.04) * smoothstep(0.08, 0.74, localY);
        vec4 mvPosition = modelViewMatrix * vec4(center, 1.0);
        float pinch = fbm(vec2(localY * 9.0 + aFlow.z, fallTime * 0.92));
        float widthPulse = 0.7
          + pinch * 0.28
          + sin(localY * 18.0 + aFlow.z * 1.7) * 0.07;
        widthPulse *= mix(0.94, 1.18, wideClass);
        widthPulse *= mix(1.0, 1.08, foregroundClass);
        mvPosition.x += position.x * aDimensions.x * widthPulse;
        vUv = uv;
        vFlow = aFlow;
        vBreaks = aBreaks;
        vStorm = aStorm;
        vFogDepth = -mvPosition.z;
        vFilamentClass = aFilamentClass;
        vTurbulence = clamp(localWarp * 0.5 + abs(curl) * 0.26 + pinch * 0.24, 0.0, 1.08);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime;
      uniform float uMotion;
      uniform vec3 uDeep;
      uniform vec3 uMid;
      uniform vec3 uBright;
      uniform float uFilamentBandDensity;
      uniform float uFilamentBandSpeed;
      uniform float uFilamentMirrorStrength;
      uniform float uEdgeWidth;
      uniform float uOpacity;
      uniform float uBottomMistOpacity;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      uniform float uPlotClip;
      varying vec2 vUv;
      varying vec4 vFlow;
      varying vec2 vBreaks;
      varying float vStorm;
      varying float vFogDepth;
      varying float vFilamentClass;
      varying float vTurbulence;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n = i.x + i.y * 57.0;
        return mix(mix(hash(n), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
      }

      void main() {
        float time = uTime * uMotion;
        float centerDistance = abs(vUv.x - 0.5) * 2.0;
        float bridgeClass = 1.0 - smoothstep(0.05, 0.95, abs(vFilamentClass - 0.0));
        float coreClass = 1.0 - smoothstep(0.05, 0.95, abs(vFilamentClass - 1.0));
        float wideClass = 1.0 - smoothstep(0.05, 0.95, abs(vFilamentClass - 2.0));
        float foregroundClass = 1.0 - smoothstep(0.05, 0.95, abs(vFilamentClass - 3.0));
        float raggedEdge = noise(vec2(vFlow.z * 4.1 + vUv.y * 8.2, time * 0.22 + vUv.x * 2.3));
        // 🎛️ 瀑布雨丝宽度对应 TUNING.waterfallFilaments。
        float edgeWidth = uEdgeWidth
          + wideClass * 0.1
          + foregroundClass * 0.05;
        float core = 1.0 - smoothstep(${i?"0.04":"0.08"}, edgeWidth, centerDistance + (raggedEdge - 0.5) * 0.18);
        float endVariation = noise(vec2(vFlow.z, vBreaks.x));
        float bottomFade = smoothstep(0.0, 0.04 + endVariation * 0.075, vUv.y);
        float topFade = 1.0 - smoothstep(0.8 + endVariation * 0.12, 1.0, vUv.y);
        float advectedY = vUv.y * vBreaks.x + time * vFlow.x;
        ${i?`
        float fastPulse = 0.5 + 0.5 * sin(advectedY * 2.95 + vFlow.z * 6.1);
        float secondaryPulse = 0.5 + 0.5 * sin(advectedY * 1.22 - vFlow.z * 3.7);
        float streamNoise = fastPulse * 0.68 + noise(vec2(vFlow.z * 9.0 + vUv.x * 2.0, advectedY * 0.5)) * 0.32;
        float continuity = smoothstep(0.44, 0.82, fastPulse + secondaryPulse * 0.16 + vTurbulence * 0.1);
        `:`
        float domainWarp = noise(vec2(vFlow.z * 2.3, advectedY * 0.26));
        float streamNoise = noise(vec2(vFlow.z * 7.1 + domainWarp * 1.2 + vUv.x * 1.2, advectedY));
        float fineBreak = 0.5 + 0.5 * sin(advectedY * 2.65 + vFlow.z * 5.7 + domainWarp * 2.2);
        float secondaryBreak = noise(vec2(vFlow.z * 13.0 - vUv.x * 1.4, advectedY * 0.62 + domainWarp));
        float continuity = smoothstep(
          vBreaks.y - 0.18,
          vBreaks.y + 0.18,
          streamNoise * 0.52 + fineBreak * 0.3 + secondaryBreak * 0.18 + vTurbulence * 0.08
        );
        `}
        continuity = mix(continuity, 0.58 + continuity * 0.42, coreClass);
        continuity = mix(continuity, 0.38 + continuity * 0.62, wideClass);
        float verticalInk = smoothstep(
          0.46,
          0.92,
          noise(vec2(vFlow.z * 21.0 + vUv.x * 1.2, advectedY * 0.2))
        );
        float darkCut = smoothstep(
          0.5,
          0.9,
          noise(vec2(vFlow.z * 5.8 - vUv.x * 1.1, advectedY * 0.13 + 8.0))
        );
        float columnVoid = smoothstep(
          0.5,
          0.88,
          noise(vec2(vFlow.z * 3.6 + vUv.x * 0.7, floor(vUv.y * 7.0) * 0.37 + time * 0.08))
        );
        float columnFlicker = 0.72 + noise(vec2(vFlow.z * 11.0, vUv.y * 3.0 - time * 0.3)) * 0.48;
        float bottomMist = (1.0 - smoothstep(0.0, 0.22, vUv.y))
          * smoothstep(0.18, 0.72, streamNoise + vTurbulence * 0.2)
          * ${i?"0.0":"1.0"};
        float filament = core * bottomFade * topFade * continuity;
        float fogFactor = 1.0 - exp(-0.00046 * vFogDepth * vFogDepth);
        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));
        horizontalMask = mix(1.0, horizontalMask, uPlotClip);
        float lowerMask = 1.0 - smoothstep(
          uPlotBounds.w - uPlotFeather.z,
          uPlotBounds.w,
          screenUv.y
        );
        lowerMask = mix(1.0, lowerMask, uPlotClip);
        float classOpacity = 0.66
          + bridgeClass * 0.0
          + coreClass * 0.78
          + wideClass * 0.34
          + foregroundClass * 0.22;
        // 🎛️ 瀑布雨丝透明度对应 TUNING.waterfallFilaments。
        float alpha = (filament + bottomMist * uBottomMistOpacity)
          * vFlow.w
          * vStorm
          * classOpacity
          * uOpacity
          * (1.0 - fogFactor * 0.44) * horizontalMask * lowerMask;
        alpha *= columnFlicker;
        alpha *= mix(1.0, 0.6, darkCut * (1.0 - foregroundClass * 0.35));
        alpha *= mix(1.0, 0.56, columnVoid * (1.0 - bottomMist * 0.45) * (1.0 - foregroundClass * 0.35));
        float mercuryWave = 0.5 + 0.5 * sin(
          advectedY * uFilamentBandDensity
          + vFlow.z * 5.8
          + centerDistance * 2.6
          - time * uFilamentBandSpeed
        );
        float mercuryMirror = smoothstep(0.46, 0.88, mercuryWave + streamNoise * 0.18);
        vec3 color = mix(uDeep, uMid, 0.28 + streamNoise * 0.32 + bottomMist * 0.12);
        color = mix(color, uBright, clamp(
          mercuryMirror * uFilamentMirrorStrength
          + ${i?"0.28":"core * 0.12 + verticalInk * 0.16"},
          0.0,
          1.0
        ));
        color = mix(color, uDeep, (darkCut * 0.48 + columnVoid * 0.28) * (1.0 - foregroundClass * 0.35));
        if (alpha < 0.001) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:jt,blending:i?ur:ln})}function xu(i){const e=new Float32Array(i*3),t=new Float32Array(i*3),n=new Float32Array(i*3),r=new Float32Array(i),a=new Float32Array(i),o=new Float32Array(i),s=new Float32Array(i),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),v=Ri(w0),_=ms(.36,1.02,v);for(let u=0;u<i;u+=1){const E=_(),S=cr(E),A=Ci(E),D=u*3,C=.34+S*.52,T=Ut(E)+H(-C,C,v),O=v()<.62?H(.35,ui.frontZ*1.72,v):Ba(.54,v);e[D]=T,e[D+1]=Qe+H(.018,.06,v),e[D+2]=O,t.set(e.subarray(D,D+3),D),c[u]=E,l[u]=S,d[u]=A,h[u]=Ii(E),f[u]=v()*Math.PI*2,m[u]=H(.018,.052,v),a[u]=H(.08,.32,v)*(.32+Math.pow(S,.7)*1.25)*A,r[u]=a[u]*(.1+h[u]*.7),o[u]=H(.7,2.6,v)*(.74+S*.3),s[u]=v()<.42?H(2.4,5.4,v):H(1.18,2.3,v),mv(n,D,S,H(.36,.86,v),v)}return{points:Mu({positions:e,colors:n,alphas:r,sizes:o,aspects:s,horizontal:1,opacity:ne.glint.opacity,maxSize:ne.glint.maxSize,renderOrder:5}),data:{positions:e,original:t,alphas:r,baseAlpha:a,hour:c,strength:l,presence:d,storm:h,shimmer:f,speed:m,count:i}}}function fs(i,e,t){const n=i.data;for(let r=0;r<n.count;r+=1){const a=r*3,o=es(n.hour[r],n.positions[a],n.positions[a+2]);n.positions[a]=n.original[a]+Math.sin(e*.34+n.shimmer[r])*.018,n.positions[a+2]+=n.speed[r]*t,n.positions[a+2]>ui.frontZ*1.74&&(n.positions[a+2]=H(-10.4*.55,-10.4*.16)),n.positions[a+1]=Qe+.026+Math.sin(e*1.35+n.shimmer[r])*.006;const s=.78+Math.sin(e*2.1+n.shimmer[r])*.18;n.alphas[r]=We(n.baseAlpha[r]*(.1+n.storm[r]*.7)*s*(1+o*.52+ce.burst*za(n.hour[r],ce.selectedHour)*.18),0,ne.glint.alphaMax)}i.points.geometry.attributes.position.needsUpdate=!0,i.points.geometry.attributes.aAlpha.needsUpdate=!0}function Su(i,e,t){const n=Math.floor(i*.55),r=Math.floor(i*.35),a=0,o=cc(n,{horizontal:1,opacity:ne.foam.opacity,maxSize:ne.foam.maxSize,renderOrder:5,blending:ur}),s=cc(r,{horizontal:0,opacity:ne.spray.opacity,maxSize:ne.spray.maxSize,renderOrder:6,blending:ln}),c=nv(a);return{foam:o.points,droplets:s.points,crowns:c.lines,data:{count:i,foam:o,droplets:s,crowns:c,eventRate:e,rippleRate:t,emissionCredit:e*.2,rippleCredit:t*.2,random:Ri(b0),totalPeakCollisions:0,emittedEvents:0,windowEmitted:0,windowStartedAt:0,currentEmissionRate:0,activeCount:0,activeFoamCount:0,activeDropletCount:0,activeCrownCount:0,staticSeedCount:0}}}function cc(i,{horizontal:e,opacity:t,maxSize:n,renderOrder:r,blending:a}){const o=new Float32Array(i*3),s=new Float32Array(i*3),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),v=new Uint8Array(i),_=new Float32Array(i),p=new Float32Array(i),u=new Float32Array(i),E=new Float32Array(i),S=new Float32Array(i),A=new Float32Array(i),D=new Float32Array(i),C=new Float32Array(i),T=new Float32Array(i),O=new Float32Array(i),w=new Float32Array(i),M=new Float32Array(i);for(let I=0;I<i;I+=1)o[I*3+1]=-100;return{points:Mu({positions:o,colors:s,alphas:c,sizes:d,aspects:f,horizontal:e,opacity:t,maxSize:n,renderOrder:r,dynamicColor:!0,dynamicShape:!0,blending:a}),count:i,cursor:0,positions:o,colors:s,alphas:c,baseAlpha:l,sizes:d,baseSizes:h,aspects:f,baseAspects:m,active:v,startedAt:_,lifetime:p,originX:u,originZ:E,velocityX:S,velocityY:A,velocityZ:D,gravity:C,phase:T,hour:O,strength:w,near:M}}function nv(i){const e=new Float32Array(i*6),t=new Float32Array(i*6),n=new Float32Array(i*2),r=new Float32Array(i),a=new Uint8Array(i),o=new Uint8Array(i),s=new Float32Array(i),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),v=new Float32Array(i),_=new Float32Array(i),p=new Float32Array(i);for(let A=0;A<i;A+=1)e[A*6+1]=-100,e[A*6+4]=-100;const u=new Ot;u.setAttribute("position",new De(e,3).setUsage(It)),u.setAttribute("aColor",new De(t,3).setUsage(It)),u.setAttribute("aAlpha",new De(n,1).setUsage(It));const E=new Ct({uniforms:{uFogDensity:{value:Li.fog.density}},vertexShader:`
      attribute vec3 aColor;
      attribute float aAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFogDepth;

      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vColor = aColor;
        vAlpha = aAlpha;
        vFogDepth = -mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uFogDensity;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFogDepth;

      void main() {
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        gl_FragColor = vec4(vColor, vAlpha * (1.0 - fogFactor * 0.3));
      }
    `,transparent:!0,depthWrite:!1,blending:ur}),S=new Yc(u,E);return S.renderOrder=8,{lines:S,count:i,cursor:0,positions:e,colors:t,alphas:n,baseAlpha:r,active:a,kind:o,startedAt:s,lifetime:c,originX:l,originZ:d,angle:h,radius:f,height:m,phase:v,hour:_,strength:p}}function iv(i,e,t){const n=i.data;n.emissionCredit=Math.min(n.eventRate*.34,n.emissionCredit+n.eventRate*t),n.rippleCredit=Math.min(n.rippleRate*.55,n.rippleCredit+n.rippleRate*t);const r=e-n.windowStartedAt;r>=.5&&(n.currentEmissionRate=n.windowEmitted/Math.max(.001,r),n.windowEmitted=0,n.windowStartedAt=e)}function rv(i,e,t,n,r,a,o,s){i.data;const c=Ii(n);return We(r,0,1)<=0?0:c}function av(i,e,t,n,r,a,o,s){const c=i.data;if(c.rippleCredit<1)return;const l=o===_t.DOWNPOUR?1:o===_t.BASE?.48:.28,d=(.012+a*.14)*l;c.random()>d||(c.rippleCredit-=1,ps(e,t,n,.13+r*.25+a*.24,!1))}function Mu({positions:i,colors:e,alphas:t,sizes:n,aspects:r,orientations:a=null,horizontal:o,opacity:s,maxSize:c,renderOrder:l,dynamicColor:d=!1,dynamicShape:h=!1,blending:f=ln}){const m=i.length/3,v=a??new Float32Array(m).fill(o),_=new Ot;_.setAttribute("position",new De(i,3).setUsage(It)),_.setAttribute("aColor",d?new De(e,3).setUsage(It):new De(e,3)),_.setAttribute("aAlpha",new De(t,1).setUsage(It)),_.setAttribute("aSize",h?new De(n,1).setUsage(It):new De(n,1)),_.setAttribute("aAspect",h?new De(r,1).setUsage(It):new De(r,1)),_.setAttribute("aHorizontal",h?new De(v,1).setUsage(It):new De(v,1));const p=new Ct({uniforms:{uPixelRatio:{value:ii},uFogDensity:{value:Li.fog.density},uOpacity:{value:s},uMaxSize:{value:c}},vertexShader:`
      uniform float uPixelRatio;
      uniform float uMaxSize;
      attribute vec3 aColor;
      attribute float aAlpha;
      attribute float aSize;
      attribute float aAspect;
      attribute float aHorizontal;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vAspect;
      varying float vHorizontal;
      varying float vFogDepth;

      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float depthScale = clamp(19.0 / max(5.4, -mvPosition.z), 0.76, 1.98);
        vColor = aColor;
        vAlpha = aAlpha;
        vAspect = aAspect;
        vHorizontal = aHorizontal;
        vFogDepth = -mvPosition.z;
        gl_PointSize = clamp(aSize * uPixelRatio * depthScale, 0.72 * uPixelRatio, uMaxSize * uPixelRatio);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uFogDensity;
      uniform float uOpacity;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vAspect;
      varying float vHorizontal;
      varying float vFogDepth;

      void main() {
        vec2 point = gl_PointCoord - vec2(0.5);
        vec2 verticalShape = vec2(point.x * vAspect, point.y);
        vec2 horizontalShape = vec2(point.x / max(1.0, vAspect), point.y);
        vec2 shape = mix(verticalShape, horizontalShape, vHorizontal);
        float distanceToEdge = length(shape);
        float edge = 1.0 - smoothstep(0.38, 0.5, distanceToEdge);
        if (edge < 0.01) discard;

        float core = exp(-dot(shape, shape) * 6.8);
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        vec3 color = vColor * (0.82 + core * 0.48);
        color = mix(color, vec3(0.0, 0.0, 0.0), fogFactor * 0.62);
        gl_FragColor = vec4(color, min(0.74, edge * vAlpha * uOpacity * (1.0 - fogFactor * 0.44)));
      }
    `,transparent:!0,depthWrite:!1,blending:f}),u=new ss(_,p);return u.renderOrder=l,u}function ov(i){const{resX:e,resZ:t,xMin:n,xMax:r,zMin:a,zMax:o}=wi,s=160,c={type:kr,format:pn,minFilter:At,magFilter:At,depthBuffer:!1,stencilBuffer:!1,wrapS:Mn,wrapT:Mn};let l=new Gn(e,t,c),d=new Gn(e,t,c);const h=new zc(-1,1,1,-1,0,1),f=i.getRenderTarget();i.setRenderTarget(l),i.clear(),i.setRenderTarget(d),i.clear(),i.setRenderTarget(f);const m=new Ct({uniforms:{uField:{value:null},uTexel:{value:new Be(1/e,1/t)},uDamping:{value:ne.ripple.damping}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uField;
      uniform vec2 uTexel;
      uniform float uDamping;
      varying vec2 vUv;
      void main() {
        vec4 info = texture2D(uField, vUv);
        float l = texture2D(uField, vec2(vUv.x - uTexel.x, vUv.y)).r;
        float r = texture2D(uField, vec2(vUv.x + uTexel.x, vUv.y)).r;
        float t = texture2D(uField, vec2(vUv.x, vUv.y + uTexel.y)).r;
        float b = texture2D(uField, vec2(vUv.x, vUv.y - uTexel.y)).r;
        float average = (l + r + t + b) * 0.25;
        info.g += (average - info.r) * 2.0;
        info.g *= uDamping;
        info.r += info.g;
        float edge = smoothstep(0.0, 0.05, vUv.x)
          * smoothstep(0.0, 0.05, vUv.y)
          * smoothstep(0.0, 0.05, 1.0 - vUv.x)
          * smoothstep(0.0, 0.05, 1.0 - vUv.y);
        info.rg *= edge;
        gl_FragColor = info;
      }
    `,depthTest:!1,depthWrite:!1}),v=new qo;v.add(new wt(new Rn(2,2),m));const _=new Float32Array(s*3),p=new Float32Array(s),u=new Ot;u.setAttribute("position",new De(_,3).setUsage(It)),u.setAttribute("aAmp",new De(p,1).setUsage(It)),u.setDrawRange(0,0);const E=new Ct({uniforms:{uDropPx:{value:Math.max(5,e/210)}},vertexShader:`
      attribute float aAmp;
      uniform float uDropPx;
      varying float vAmp;
      void main() {
        vAmp = aAmp;
        gl_Position = vec4(position.xy, 0.0, 1.0);
        gl_PointSize = uDropPx;
      }
    `,fragmentShader:`
      varying float vAmp;
      void main() {
        vec2 c = (gl_PointCoord - 0.5) * 2.0;
        float d = length(c);
        if (d > 1.0) discard;
        float shape = exp(-d * d * 8.5);
        gl_FragColor = vec4(-shape * vAmp, 0.0, 0.0, 1.0);
      }
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:vc,blendEquation:ei,blendSrc:zo,blendDst:zo}),S=new qo;return S.add(new ss(u,E)),{rtA:l,rtB:d,simCamera:h,simMaterial:m,simScene:v,dropScene:S,dropGeometry:u,dropMaterial:E,dropPositions:_,dropAmps:p,dropCount:0,maxDrops:s,fieldBounds:{xMin:n,xMax:r,zMin:a,zMax:o},texture:l.texture}}function ps(i,e,t,n,r,a){if(i.dropCount>=i.maxDrops)return;const o=i.fieldBounds,s=(We(e,o.xMin,o.xMax)-o.xMin)/(o.xMax-o.xMin),c=(We(t,o.zMin,o.zMax)-o.zMin)/(o.zMax-o.zMin),l=i.dropCount;i.dropPositions[l*3]=s*2-1,i.dropPositions[l*3+1]=c*2-1,i.dropPositions[l*3+2]=0,i.dropAmps[l]=(r?ne.ripple.dropClick:ne.ripple.dropRain)*(.6+n),i.dropCount+=1}function sv(i,e,t){const n=e.getRenderTarget(),r=e.autoClear;i.dropCount>0&&(i.dropGeometry.setDrawRange(0,i.dropCount),i.dropGeometry.attributes.position.needsUpdate=!0,i.dropGeometry.attributes.aAmp.needsUpdate=!0,e.autoClear=!1,e.setRenderTarget(i.rtA),e.render(i.dropScene,i.simCamera),e.autoClear=r),i.simMaterial.uniforms.uField.value=i.rtA.texture,e.setRenderTarget(i.rtB),e.render(i.simScene,i.simCamera);const a=i.rtA;i.rtA=i.rtB,i.rtB=a,i.texture=i.rtA.texture,e.setRenderTarget(n),e.autoClear=r,Wn.material.uniforms.uHeightField.value=i.texture,ee.dataset.activeRipples=String(i.dropCount),i.dropCount=0}function lv(i){Wn.material.uniforms.uTime.value=di?0:i}function ba(i,e,t){var h,f;t||(i.respawnCycle[e]+=1);const n=((h=i.resetSeed)==null?void 0:h[e])||Jo,r=((f=i.seedIndex)==null?void 0:f[e])??e,a=Rv(n,r,i.respawnCycle[e]),o=i.strength[e],s=i.near[e],c=i.curtainLayer[e],l=Math.max(.8,i.top[e]-Qe),d=lt(.18,.68,Math.pow(o,.82));if(i.baseX[e]=We(Ut(i.hour[e])+H(-d,d,a),Ut(0)+.12,Ut(24)-.12),i.z[e]=Ba(s,a),i.role[e]===_t.AMBIENT){i.headY[e]=sn-.03;return}if(c===1){const m=Qe+l*H(.3,.44,a);i.headY[e]=H(Qe+i.length[e]*.72,m+i.length[e]*.4,a);return}if(c===0){i.headY[e]=H(Qe+i.length[e]*.78,i.top[e]+i.length[e]*.44,a);return}i.headY[e]=t?H(i.top[e]*.72,i.top[e]+i.length[e],a):i.top[e]+i.length[e]+H(.04,1.1,a)}function yu(i=Math.random){if(!mn.length)return ms(0,1,i,!0);const e=mn.map(([o,s])=>cv(o,s,i)),t=mn.map(([o,s])=>{let l=0;for(let d=0;d<24;d+=1){const h=lt(o,s,(d+.5)/24);l+=.02+Ii(h)*(.7+Oa(h))}return l*Math.max(.1,s-o)}),n=t.reduce((o,s)=>o+s,0);if(!Number.isFinite(n)||n<=0)return()=>H(.04,23.96,i);const r=[];let a=0;for(const o of t)a+=o/n,r.push(a);return()=>{const o=i(),s=Math.max(0,r.findIndex(c=>o<=c));return e[s]()}}function cv(i,e,t){const r=(e-i)/64,a=Array.from({length:64},(l,d)=>{const h=i+(d+.5)*r,f=Oa(h);return .001+Math.pow(Math.max(.001,f-.2),1.42)*Eu(h)}),o=a.reduce((l,d)=>l+d,0);if(!Number.isFinite(o)||o<=0)return()=>H(.04,23.96,t);const s=[];let c=0;for(const l of a)c+=l/o,s.push(c);return()=>{const l=t(),d=Math.max(0,s.findIndex(h=>l<=h));return We(i+(d+t())*r,i,e)}}function ms(i,e,t=Math.random,n=!1,r=2.35,a=!1){const o=n?96:24,s=24/o,c=Array.from({length:o},(f,m)=>{const v=(m+.5)*s,_=Oa(v),p=Ci(v),u=n?Eu(v):1,E=a?uv(v):1,S=.55+Math.max(0,e)*.35,A=Math.pow(_,S),D=i*Math.pow(_,.85);return p*(D+A*r*u)*E}),l=c.reduce((f,m)=>f+m,0);if(!Number.isFinite(l)||l<=0)return()=>H(.04,23.96,t);const d=[];let h=0;for(const f of c)h+=f/l,d.push(h);return()=>{const f=t(),v=Math.max(0,d.findIndex(E=>f<=E))*s;if(n)return We(v+t()*s,.04,23.96);const _=Oa(v),p=lt(.54,.95,Math.pow(_,.62)),u=((t()+t()+t())/3-.5)*2;return We(v+.5+u*p,.04,23.96)}}function uv(i){const t=i>=12?2.3:1.45,n=Math.abs(i/12-1);return We(t*Math.pow(n,t-1),.42,2.3)}function Eu(i){const e=Xn(i*.62,Cn),t=Xn(i*2.45,Cn^2135587861);return .68+e*.38+t*.34}function wu(i){const e=We(i,0,24),t=Math.floor(e),n=Math.min(t+1,Nt.length-1),r=e-t;return lt(Nt[t],Nt[n],r)}function Ci(i){const e=We(i,0,24),t=Math.floor(e),n=Math.min(t+1,Nt.length-1),r=e-t,a=Nt[t]>0,o=Nt[n]>0;if(!a&&!o)return 0;const s=.68;let c=1;return a||(c*=kt(0,s,r)),o||(c*=1-kt(1-s,1,r)),We(c,0,1)}function Ya(i){return wu(i)*Ci(i)}function Oa(i){return Kt<=0?0:We(Ya(i)/Kt,0,1)}function cr(i){return We(Ya(i)/Ia,0,2)}function uc(i){const e=Math.pow(We(i,0,1),.58),t=We(i-1,0,1)*.2;return e+t}function bu(i){const e=We(i/Ia,0,1);return e<=0?0:.05+Math.pow(e,.62)*.95}function Qo(i){return We(Ya(i)/Math.max(.001,cs),0,1)}function Au(){Kt=Nt.reduce((e,t)=>Math.max(e,t),0),Di=Kt>jo?dv(Kt):jo,cs=Di,sn=Qe+Ar.worldHeight,mn=pv()}function dv(i){if(!Number.isFinite(i)||i<=0)return jo;const t=10**Math.floor(Math.log10(i)),n=i/t,a=(n<=1?1:n<=2?2:n<=5?5:10)*t;return Number.isFinite(a)?a:i}function hv(){return[0,Di*.5,Di]}function fv(i){return Math.abs(i)>=1e6?i.toExponential(1):Math.abs(i)>=1e3?i.toLocaleString("zh-CN",{maximumFractionDigits:1}):Number.isInteger(i)?String(i):String(Number(i.toFixed(1)))}function pv(){if(Kt<=0)return[];const i=.25,e=[];let t=null;for(let r=0;r<=24+i*.5;r+=i){const a=Math.min(24,r),o=Ii(a)>.08;if(o&&t==null&&(t=Math.max(0,a-i)),(!o||a===24)&&t!=null){const s=o&&a===24?24:Math.min(24,a+i);e.push([t,s]),t=null}}const n=[];for(const r of e){const a=n[n.length-1];a&&r[0]-a[1]<=.5?a[1]=r[1]:n.push([...r])}return n.filter(([r,a])=>a-r>=.5)}function Ii(i){return kt(5.8,7.8,Ya(i))}function gs(i){const e=Qo(i),t=lt(.91,1.09,Xn(i*1.55,Cn^1374857533)),n=We(.95+Math.pow(e,.92)*5.8*t,1.2,8.8),r=lt(.92,1.08,Xn(i*3.4,Cn^382051033));return Qe+n*.54*r}function Io(i,e,t){i.stormWeight[e]=Ii(t),i.waterfallTop[e]=gs(t),i.waterfallFeather[e]=lt(1.35,2.05,Xn(t*2.7+e*.013,Cn^1982518513))}function No(i=Math.random){const e=i();return e<.38?H(.72,1,i):e<.68?H(.38,.72,i):H(0,.38,i)}function Ba(i,e=Math.random){const t=(i-.5)*2;return Ir.center+t*Ir.thickness+H(-.22,Ir.jitter,e)}function es(i,e,t){const n=ce.selectedActive?za(i,ce.selectedHour)*.44:0;if(!ce.pointerActive)return n;const r=za(i,ce.pointerHour),a=1-We(Math.hypot(e-ce.pointerWorld.x,(t-ce.pointerWorld.z)*.7)/3.2,0,1);return Math.max(n,r*a*.92)}function za(i,e){const t=Math.abs(i-e);return Math.max(0,1-t/2.25)}function dc(i,e,t,n,r=Math.random){const a=t>.62&&r()<.46?Ft.pearlBright:r()<.68?Ft.pearlMid:Ft.pearlDark,o=n*(.76+t*.28);i[e]=a.r*o,i[e+1]=a.g*o,i[e+2]=a.b*o}function ya(i,e,t,n,r,a,o=Math.random){const s=r===_t.AMBIENT?.01:a===2?.72:.018,c=o(),l=c<s?Ft.pearlBright:c<s+.68?Ft.pearlMid:Ft.pearlDark,d=n*(.76+t*.28);i[e]=l.r*d,i[e+1]=l.g*d,i[e+2]=l.b*d}function mv(i,e,t,n,r=Math.random){const a=t>.58&&r()<.34?Ft.waterBright:r()<.7?Ft.waterMid:Ft.waterDark,o=n*(.74+t*.24);i[e]=a.r*o,i[e+1]=a.g*o,i[e+2]=a.b*o}function Ut(i){return(i/24-.5)*Ar.plotWidth}function gv(i){return We((i/Ar.plotWidth+.5)*24,0,24)}function vv(i){var e,t;ce.pointerDown=!0,ce.pointerMoved=!1,ce.activePointerId=i.pointerId,(t=(e=Ze.domElement).setPointerCapture)==null||t.call(e,i.pointerId),ce.downClient.x=i.clientX,ce.downClient.y=i.clientY,ce.downView.x=ce.view.targetX,ce.downView.y=ce.view.targetY,vs(i)}function _v(i){if(vs(i),ce.pointerDown){const e=i.clientX-ce.downClient.x,t=i.clientY-ce.downClient.y;Math.hypot(e,t)>Ar.dragThreshold&&(ce.pointerMoved=!0,Fi.classList.add("is-dragged"),$0())}}function xv(i){vs(i),ce.pointerMoved||(ce.selectedHour=We(Math.round(ce.pointerHour),0,24),ce.selectedActive=!0,parent.postMessage({type:"rainform-hour",hour:ce.selectedHour},location.origin),ce.burst=1.55,ps(zr,ce.pointerWorld.x,ce.pointerWorld.z,.82,!0,wa.elapsedTime)),Za(i.pointerId),ce.pointerDown=!1,ce.pointerMoved=!1,Xa(),Ni(!0)}function Sv(i){Za(i.pointerId),ce.pointerDown=!1,ce.pointerMoved=!1,ce.pointerActive=!1,Fi.classList.remove("is-pointer-active"),Xa()}function qa(){ce.pointerActive=!1,Fi.classList.remove("is-pointer-active")}function Mv(){qa()}function yv(){Za(),ce.pointerDown=!1,ce.pointerMoved=!1,ce.pointerActive=!1,Fi.classList.remove("is-pointer-active"),Xa()}function Za(i=ce.activePointerId){var e,t;i!=null&&((t=(e=Ze.domElement).hasPointerCapture)!=null&&t.call(e,i)&&Ze.domElement.releasePointerCapture(i),ce.activePointerId=null)}function vs(i){const e=Ze.domElement.getBoundingClientRect(),t=(i.clientX-e.left)/e.width,n=(i.clientY-e.top)/e.height;ce.pointerClient.x=i.clientX,ce.pointerClient.y=i.clientY,ce.pointerNdc.set(t*2-1,-(n*2-1)),Fo.setFromCamera(ce.pointerNdc,qt),Fo.ray.intersectPlane(k0,ce.pointerWorld);const r=Fo.ray.intersectPlane(H0,nr),a=Ut(0),o=Ut(24),s=Qe-.18,c=sn,l=!!r&&nr.x>=a&&nr.x<=o&&nr.y>=s&&nr.y<=c;r&&(ce.pointerHour=gv(nr.x)),ce.pointerActive=l,Fi.classList.toggle("is-pointer-active",l)}function Ev(){Za(),ce.pointerDown=!1,ce.pointerMoved=!1,Vr(),ce.selectedHour=18,ce.selectedActive=!0,ce.burst=.7,Fi.classList.remove("is-dragged"),Xa(!0),Ni(!0)}function wv(i){dt&&dt.update()}function bv(){return window.innerWidth<760?"mobile":window.innerWidth<1100||window.innerWidth/window.innerHeight<1.72?"tablet":"desktop"}function Av(i,e,t,n,r,a){if(!i||i.isEmpty()||!Number.isFinite(r)||r<=0)return null;const o=1-We(a,0,.2)*2,s=Math.tan(ci.degToRad(n*.5)),c=s*r;if(s<=0||c<=0||o<=0)return null;const l=t.clone().cross(qt.up);l.lengthSq()<1e-8&&l.set(1,0,0),l.normalize();const d=l.clone().cross(t).normalize(),h=[];let f=0;for(const m of[i.min.x,i.max.x])for(const v of[i.min.y,i.max.y])for(const _ of[i.min.z,i.max.z]){const p=new F(m,v,_).sub(e),u=p.dot(l),E=p.dot(d),S=p.dot(t);h.push({horizontal:u,vertical:E,depthOffset:S}),f=Math.max(f,Math.abs(u)/(c*o)-S,Math.abs(E)/(s*o)-S,qt.near+.05-S)}return{requiredDistance:f,samples:h,tanHorizontal:c,tanVertical:s,viewportLimit:o}}function Tv(i,e){if(!i)return{horizontal:0,vertical:0};let t=0,n=0;for(const r of i.samples){const a=Math.max(qt.near,e+r.depthOffset);t=Math.max(t,Math.abs(r.horizontal)/(a*i.tanHorizontal)),n=Math.max(n,Math.abs(r.vertical)/(a*i.tanVertical))}return{horizontal:t,vertical:n}}function Cv(i){dt&&(dt.minDistance=ne.orbit.minDistance,dt.maxDistance=Math.max(ne.orbit.maxDistance,i*1.25))}function Vr(){const i=ne.camera[bv()],e=new F(i.pos[0],i.pos[1],i.pos[2]);En.set(i.target[0],i.target[1]+ne.camera.frameTargetYOffset,i.target[2]),qt.fov=i.fov;const t=En.clone().sub(e),n=t.length();n<=1e-6?t.set(0,0,-1):t.multiplyScalar(1/n),ar&&kn()&&(En.x=0,En.y=(ar.min.y+ar.max.y)*.5);const r=Av(ar,En,t,qt.fov,qt.aspect,oc),a=r&&kn()?r.requiredDistance:Math.max(n,(r==null?void 0:r.requiredDistance)||0);xa.copy(En).addScaledVector(t,-a),qt.position.copy(xa),qt.lookAt(En),qt.updateProjectionMatrix(),dt&&(Cv(a),dt.target.copy(En),qt.position.copy(xa),dt.update());const o=Tv(r,a);ee.dataset.cameraFitMode=r?"curated-axis-bounds":"preset-fallback",ee.dataset.cameraFitMargin=oc.toFixed(3),ee.dataset.cameraFitDistance=a.toFixed(3),ee.dataset.cameraFitRequiredDistance=r?r.requiredDistance.toFixed(3):"unavailable",ee.dataset.cameraFitHorizontalUsage=o.horizontal.toFixed(3),ee.dataset.cameraFitVerticalUsage=o.vertical.toFixed(3),ee.dataset.cameraFitPresetFloor=kn()?"disabled":"preserved";const s=En.clone().sub(xa),c=Math.hypot(s.x,s.z);ee.dataset.initialCameraPitchDeg=ci.radToDeg(Math.atan2(s.y,c)).toFixed(3),ee.dataset.initialCameraYawDeg=ci.radToDeg(Math.atan2(s.x,-s.z)).toFixed(3),ee.dataset.initialCameraView="front-facing"}function Ni(i=!1){const e=ce.pointerActive?ce.pointerHour:ce.selectedHour;Fi.classList.toggle("is-selected",ce.selectedActive);const t=We(Math.round(e),0,24),n=Nt[t],r=`${t}-${n.toFixed(1)}-${ce.pointerActive}-${i}`;(r!==ce.readoutKey||i)&&(M0.textContent=`${String(t).padStart(2,"0")}:00`,y0.textContent=n.toFixed(1),ce.readoutKey=r)}let Oo=0;function Bo(){var e,t,n,r;ii=su(),Ze.setPixelRatio(ii),Ze.setSize(window.innerWidth,window.innerHeight),ee.dataset.rendererPixelRatio=ii.toFixed(2);const i=kn()?1:0;(t=(e=it==null?void 0:it.points)==null?void 0:e.material)!=null&&t.uniforms&&(it.points.material.uniforms.uPixelRatio.value=ii,it.points.material.uniforms.uMobileCrisp.value=i),(r=(n=it==null?void 0:it.lines)==null?void 0:n.material)!=null&&r.uniforms&&(it.lines.material.uniforms.uMobileCrisp.value=i),ee.dataset.rainEdgeMode=i?"mobile-crisp":"authored",qt.aspect=window.innerWidth/window.innerHeight,Vr(),ds(et),Tu()}function Ka(){const i=++Oo;Bo(),requestAnimationFrame(()=>{i===Oo&&Bo()}),window.setTimeout(()=>{i===Oo&&Bo()},240)}function Tu(){_r.set(0,1,0,1),xr.set(.002,0,.002),Ze.getDrawingBufferSize(Sr)}function Ri(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Rv(i,e,t){const n=i^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507);return Ri(n>>>0)}function Xn(i,e){const t=Math.floor(i),n=kt(0,1,i-t);return lt(hc(t,e),hc(t+1,e),n)}function hc(i,e){let t=Math.imul(i^e,73244475);return t=Math.imul(t^t>>>16,73244475),((t^t>>>16)>>>0)/4294967295}function H(i,e,t=Math.random){return i+t()*(e-i)}function lt(i,e,t){return i+(e-i)*t}function We(i,e,t){return Math.min(t,Math.max(e,i))}function kt(i,e,t){const n=We((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Pv(i){const e=i*10;return Number.isFinite(e)?Math.round(e)/10:i}function Dv(i){if(i.type==="rainform-data"){if(!Array.isArray(i.values)||i.values.length!==25||!i.values.every(e=>typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1e3))return;Nt.some((e,t)=>e!==i.values[t])&&G0(i.values),Jc=i.metadata||null,ee.dataset.hostData="ready",ce.selectedHour=Math.max(0,Math.min(24,Math.round(i.hour||0))),ce.pointerActive=!1,ce.selectedActive=!0,Ni(!0)}else if(i.type==="rainform-visible"){const e=Ti;Ti=i.visible===!0,Ti?(e||Ka(),we.enabled&&we.context&&we.context.resume()):we.context&&we.context.suspend(),ee.dataset.hostVisible=String(Ti)}else i.type==="rainform-reset"&&(Vr(),dt.update())}window.addEventListener("message",i=>{i.origin!==location.origin||i.source!==parent||!i.data||Dv(i.data)});window.__rainformHost={setSound:(enabled,volume)=>{window.__rainformVolume=Math.max(0,Math.min(1,Number(volume)||0));U0(enabled===true)},setVolume:volume=>{window.__rainformVolume=Math.max(0,Math.min(1,Number(volume)||0));D0()},snapshot:()=>({values:[...Nt],max:Kt,selectedHour:ce.selectedHour,visible:Ti,frames:jc,metadata:Jc,sound:we.enabled,webgl:ee.dataset.webglStatus,geometries:Ze.info.memory.geometries,textures:Ze.info.memory.textures,points:Ze.info.render.points,camera:qt.position.toArray(),reducedMotion:di}),selectHour:i=>{Number.isFinite(i)&&(ce.selectedHour=Math.max(0,Math.min(24,Math.round(i))),ce.pointerActive=!1,Ni(!0),parent.postMessage({type:"rainform-hour",hour:ce.selectedHour},location.origin))}};parent.postMessage({type:"rainform-ready"},location.origin);

// rainform-host-volume: shared mute and volume for the local noncommercial derivative.
