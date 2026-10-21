import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const atlasMap = read('web/atlas-map.js');
const atlasApp = read('web/atlas-app.js');
const quality = read('web/weather-quality.js');

assert.match(atlasMap, /data\/city_texture\.png/);
assert.doesNotMatch(atlasMap, /getImageData/);
assert.doesNotMatch(atlasMap, /preserveDrawingBuffer:\s*true/);
assert.match(atlasMap, /preserveDrawingBuffer:\s*false/);

assert.match(atlasApp, /createDataLoader/);
assert.doesNotMatch(
  atlasApp,
  /\['weather\.json','regional_muifa\.json','regional_infa\.json'/
);
assert.doesNotMatch(atlasApp, /get\('city_lines\.json'\)/);
assert.doesNotMatch(atlasApp, /await import\('\.\/weather-room\.js'\).*MapWind/s);

assert.match(quality, /drops:\s*2200/);
assert.match(quality, /drops:\s*1400/);
assert.match(quality, /drops:\s*800/);
assert.match(quality, /reflection:\s*0,\s*post:\s*false,\s*animate:\s*false/);

console.log(JSON.stringify({passed: 14, total: 14}));
