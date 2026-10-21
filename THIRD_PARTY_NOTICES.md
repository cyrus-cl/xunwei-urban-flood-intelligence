# 第三方来源与许可

| 项目 | 固定版本/来源 | 用途 | 许可与通知 |
|---|---|---|---|
| MapLibre GL JS |6.13.0，[固定版本](https://unpkg.com/maplibre-gl@6.13.0/)|本地地图|BSD-3-Clause，web/vendor/MAPLIBRE_LICENSE.txt|
| BAAI/bge-small-zh-v1.5 |[原模型](https://huggingface.co/BAAI/bge-small-zh-v1.5)|中文向量|模型卡MIT，MODEL_CARD.md与FlagEmbedding许可参考|
| Xenova转换权重 |[转换仓库](https://huggingface.co/Xenova/bge-small-zh-v1.5)，revision 75c43b069aac4d136ba6bc1122f995fedcfd2781|量化ONNX、分词器|原模型许可与转换来源，repository.json|
| ONNX Runtime |实装1.30.0|CPU推理|MIT，发行版通知|
| tokenizers |实装0.23.2|分词|Apache-2.0，发行版通知|
| NumPy |实装2.5.3|向量计算|BSD-3-Clause，发行版通知|
| geoBoundaries |gbOpen CHN ADM1，索引指向9469f09|真实省界|本次元数据标注Public Domain，boundary_metadata.json|
| Open-Meteo / ERA5 |历史天气样本|逐小时区域天气|CC BY 4.0，页面署名|
| Open-Meteo Forecast API |服务端实时请求|当前与逐小时预报|CC BY 4.0，产品数据依据页署名；10 分钟本地缓存|
| OpenFreeMap / OpenStreetMap |在线公开矢量样式与瓦片|真实在线底图|页面保留 OpenFreeMap 与 OpenStreetMap 署名；公共实例无服务等级承诺|
| Copernicus DEM / ESA WorldCover |项目内准备数据|三维地形与地表分类|保留 Copernicus 与 ESA WorldCover 来源说明|
| Overture / OpenStreetMap 建筑与道路 |项目内准备数据|道路、水系、建筑轮廓与空间相交|页面保留对应署名|
| NOAA IBTrACS / CMA |WP v04r01|事后路径|来源署名，O/P标记保留|
| 宁波市水情年报·2022 |官方PDF第32—33页|事实与原文|发布方版权，本地参考；公开分发全文需核对许可|
| 官方积水地图报道 |太湖流域管理局官网|查询背景|发布方版权，原链接|

`python_packages`中的其他依赖保留各自发行版通知，版本见 `requirements-lock.txt`。

V6 主页面没有加载 Rainform、Three.js 独立场景、WebFlood、Hydro3DJS、deck.gl 或调研中的风场插件；它们属于研究参考，不应被写成实际采用。DeepSeek 通过远程 API 生成受约束的语言摘要，不向浏览器分发 SDK 或密钥，也不参与数值研判。

量化模型的直接候选 LICENSE 链接返回404。模型卡MIT元数据、转换仓库记录和 FlagEmbedding 原许可参考已保存。参考许可的适用范围以原发布方说明为准。来源与文件哈希见 `validation/resource_manifest.json`。
