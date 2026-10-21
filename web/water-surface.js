/**
 * Adapted noise sampling, sunlight and Fresnel terms from Hydro3DJS.
 * https://github.com/uihilab/Hydro3DJS
 * Commit 094daef3d9d9aabc218edc25978fd665a9f3a482, src/shaders/water_shader.js.
 * MIT, Copyright (c) 2025. Full permission notice: vendor/licenses/Hydro3DJS.txt.
 * Surface appearance only. Depth attributes are supplied by Landlab / the trained proxy.
 */
import * as THREE from 'three';

export function waterSurfaceMaterial(){
  // Own deterministic procedural normal map; no third-party texture asset.
  const side=128,values=new Uint8Array(side*side*4);
  for(let y=0;y<side;y++)for(let x=0;x<side;x++){
    const a=x/side*Math.PI*2,b=y/side*Math.PI*2,i=(y*side+x)*4;
    values[i]=128+Math.round(44*Math.sin(a*7+b*3)+18*Math.cos(a*11-b*5));
    values[i+1]=128+Math.round(44*Math.cos(a*3-b*7)+18*Math.sin(a*5+b*11));
    values[i+2]=235;values[i+3]=255;
  }
  const texture=new THREE.DataTexture(values,side,side,THREE.RGBAFormat);
  texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.minFilter=texture.magFilter=THREE.LinearFilter;texture.needsUpdate=true;
  return new THREE.ShaderMaterial({transparent:true,side:THREE.DoubleSide,depthWrite:false,
    uniforms:{time:{value:0},normalSampler:{value:texture},eye:{value:new THREE.Vector3()},sunDirection:{value:new THREE.Vector3(.5,1,.8).normalize()},motion:{value:1}},
    vertexShader:`attribute float depth; varying float vDepth; varying vec3 worldPosition;
      void main(){vDepth=depth;worldPosition=(modelMatrix*vec4(position,1.0)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader:`uniform float time; uniform float motion; uniform sampler2D normalSampler; uniform vec3 eye; uniform vec3 sunDirection;
      varying float vDepth; varying vec3 worldPosition;
      vec4 getNoise(vec2 uv){
        float t=time*motion;
        vec2 uv0=(uv/103.0)+vec2(t/17.0,t/29.0);
        vec2 uv1=uv/107.0-vec2(t/-19.0,t/31.0);
        vec2 uv2=uv/vec2(8907.0,9803.0)+vec2(t/101.0,t/97.0);
        vec2 uv3=uv/vec2(1091.0,1027.0)-vec2(t/109.0,t/-113.0);
        return (texture2D(normalSampler,uv0)+texture2D(normalSampler,uv1)+texture2D(normalSampler,uv2)+texture2D(normalSampler,uv3))*0.5-1.0;
      }
      void main(){
        if(vDepth<0.018)discard;
        float depth=clamp(vDepth/0.35,0.0,1.0);
        vec3 color=mix(vec3(0.46,0.73,0.77),vec3(0.055,0.30,0.43),depth);
        vec4 noise=getNoise(worldPosition.xz*350.0);
        vec3 normal=normalize(vec3(noise.x*0.18,1.0,noise.y*0.18));
        vec3 eyeDirection=normalize(eye-worldPosition);
        vec3 reflection=normalize(reflect(-sunDirection,normal));
        float sun=pow(max(dot(eyeDirection,reflection),0.0),80.0);
        float theta=max(dot(eyeDirection,normal),0.0);
        float reflectance=0.02+(1.0-0.02)*pow(1.0-theta,5.0);
        // Preserve the calibrated depth hue; highlights describe the surface.
        color+=vec3(0.018)*noise.x+vec3(0.055)*min(reflectance,0.5)+vec3(0.10)*sun;
        gl_FragColor=vec4(color,0.82);
      }`
  });
}
