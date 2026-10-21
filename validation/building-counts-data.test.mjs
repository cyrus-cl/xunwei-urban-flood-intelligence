import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => JSON.parse(fs.readFileSync(path.join(root, 'web', 'data', name), 'utf8'));

test('compact building counts retain every mapped real building center', () => {
  const centers = read('building_centers.json');
  const counts = read('building_counts.json');
  const mapped = centers.filter(item => Number.isInteger(item[2]) && item[2] >= 0 && item[2] < 129 * 129);

  assert.equal(counts.length, 129 * 129);
  assert.equal(counts.reduce((sum, count) => sum + count, 0), mapped.length);
  assert.ok(Math.max(...counts) > 20);
  assert.ok(fs.statSync(path.join(root, 'web', 'data', 'building_counts.json')).size < 70000);
});

