# V5 前端来源与修改

V4 参照使用者提供的原型图重构页面。原型图承担视觉参考，地图与读数由本地真实资料和计算产生。

- MapLibre GL JS：保留本地项目自带源码与许可证，二维地图、建筑挤出、图层与相机使用其接口。原项目：https://github.com/maplibre/maplibre-gl-js。
- Three.js：保留原项目自带许可证；窗外场景、材质、灯光、雨滴与涟漪由本项目编写。原项目：https://github.com/mrdoob/three.js。
- Rainform / 云时成雨：沿用 V3 非商业研究衍生版本，保留 Required Notice、PolyForm Noncommercial 1.0.0 与原商业使用政策。V4 加入父页面声音/音量接口，音频仍使用该衍生版本的合成音源。新增脚本 `tools/shared_audio.mjs` 记录修改，原署名保留。
- Overture、OpenStreetMap、东亚建筑数据、ESA WorldCover / Sentinel-2、Copernicus DEM：原始来源与授权记录保持；新增 GeoJSON 属于现有数据的前端格式转换。建筑缺失高度按 12 米示意；当前建筑层年份为 2026。

本轮未引入视频、现场照片或外部音效。地点侧栏的小图来自现有 2021 年卫星合成影像的坐标裁剪。

三维反射沿用已有 Three.js 0.165.0 Reflector 模块（MIT），并与当前 Three.js 186 完成浏览器检查。

## V5 街道实验室技术参考

- V5 的实例化雨滴、湿路面和涟漪结构参考了本地归档的 `threejs-conference` / `rocksdanister/rain` MIT 源码思路，并重新按本项目 WebGL 与质量分级接口实现。
- 未复制该参考项目 `public/` 目录中的模型、贴图、音频或视频资产；街道、建筑、树木、路灯、雨滴和涟漪均由本项目前端程序几何与自制材质生成。
- OpenFreeMap / OpenStreetMap 仅作为在线地理底图；网络不可用时回退本地资料快照。风雨和积水结论不来自底图。
- Rainform 仍按 PolyForm Noncommercial 1.0.0 仅用于当前非商业比赛与研究展示；商业使用前必须另行取得许可或替换该模块。
