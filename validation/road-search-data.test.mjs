import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = path.join(root, 'web/data/road_search.json');
const rows = JSON.parse(fs.readFileSync(file, 'utf8'));

assert.ok(Array.isArray(rows));
assert.ok(rows.length > 100);
assert.equal(new Set(rows.map(row => row.name)).size, rows.length);
assert.ok(rows.some(row => row.name.includes('中山')));
assert.ok(rows.every(row =>
  typeof row.name === 'string' &&
  Number.isFinite(row.lon) &&
  Number.isFinite(row.lat)
));
assert.ok(fs.statSync(file).size < 500_000);

console.log(JSON.stringify({passed: 6, total: 6, roads: rows.length}));
