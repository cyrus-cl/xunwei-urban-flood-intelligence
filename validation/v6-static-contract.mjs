import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('web/index.html');
const app = read('web/atlas-app.js');
const css = read('web/atlas-v6.css');
const v7css = read('web/atlas-v7.css');
const mapCode = read('web/atlas-map.js');
const server = read('static_server.mjs');
const launcher = read('open-project.mjs');
const powershellLauncher = read('start.ps1');
const sourceLedger = app.match(/function renderSourceLedger\(\)[^\n]*/)?.[0] ?? '';
const visibleUi = html + '\n' + sourceLedger;

for (const id of [
  'dataModeSwitch',
  'liveMode',
  'historyMode',
  'dataClock',
  'dataState',
  'dataTimestamp',
  'weatherFieldCanvas',
  'actionCard',
  'actionLevel',
  'actionTrend',
  'factorRing',
  'factorList',
  'affectedObjects',
  'decisionSummary',
  'inspectionMode',
  'rainLayerToggle',
  'windLayerToggle',
  'floodLayerToggle'
]) {
  assert.match(html, new RegExp('id="' + id + '"'), 'missing V6 element: ' + id);
}

for (const phrase of [
  '现场验证待开展',
  'RBF Kernel Ridge',
  '训练 / 校准 / 测试',
  'AI4Climate · 赛题 05',
  '街道实验室',
  '雨的一天',
  'AI 快估',
  '智能洞察'
]) {
  assert.equal(visibleUi.includes(phrase), false, 'forbidden visible phrase: ' + phrase);
}

assert.match(html, /body class="v7(?:\s+v6)?"/);
assert.match(html, /atlas-v6\.css/);
assert.match(html, /atlas-v7\.css/);
for (const id of ['demoReplay', 'toastAction']) assert.match(html, new RegExp(`id="${id}"`));
assert.match(html, /<main id="atlas"/);
assert.match(html, /<aside id="sourceRail"/);
assert.match(html, /<section id="actionCard"/);
assert.match(html, /<footer class="time-deck"/);
assert.doesNotMatch(html, /id="rainformFrame"/);
assert.doesNotMatch(html, /id="weatherRoom"/);
assert.doesNotMatch(app, /sourceContent\(\)\.catch/);
assert.match(app, /renderSourceLedger\(\)/);

assert.match(css, /--ink-950:/);
assert.match(css, /--rain-cyan:/);
assert.match(css, /font-variant-numeric:\s*tabular-nums/);
assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)/);
assert.match(css, /:focus-visible/);
assert.match(css, /\.action-card/);
assert.match(css, /\.factor-ring/);
assert.doesNotMatch(css, /linear-gradient\([^)]*(#7c3aed|#a855f7|#ec4899)/i);
for (const token of ['--rain-ice', '--wind-mint', '--water-indigo', '--hazard-coral', '--action-copper']) assert.match(v7css, new RegExp(token));
assert.match(v7css, /--source-rail-width:\s*176px/);
assert.match(v7css, /--decision-rail-width:\s*294px/);
assert.match(v7css, /@media \(min-width:\s*1700px\)[\s\S]*--decision-rail-width:\s*318px/);
assert.match(v7css, /@media \(max-width:\s*1320px\) and \(min-width:\s*1100px\)[\s\S]*--decision-rail-width:\s*276px/);
assert.match(v7css, /\.v7 \.time-deck\s*\{[^}]*right:\s*calc\(var\(--decision-rail-width\) \+ 27px\)/);
assert.match(v7css, /\.v7 \.factor-list b\s*\{[^}]*white-space:\s*normal/);
assert.match(v7css, /\.v7 \.affected-objects strong\s*\{[^}]*white-space:\s*normal/);
assert.match(mapCode, /right:\s*330/);
assert.match(v7css, /--timeline-height:\s*34px/);
assert.doesNotMatch(app, /setInterval\s*\(/);
assert.match(server, /2026\.10\.17-v7/);
assert.match(launcher, /2026\.10\.17-v7/);
assert.match(powershellLauncher, /2026\.10\.17-v7/);

console.log(JSON.stringify({passed: 48, total: 48}));
