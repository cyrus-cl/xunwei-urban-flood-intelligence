import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skippedDirectories = new Set(['.git', 'runtime', 'output', '.playwright-cli']);
const skippedExtensions = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.pdf', '.f32', '.npz', '.onnx', '.joblib', '.wav']);

function textFiles(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap(entry => {
    if (entry.isDirectory() && skippedDirectories.has(entry.name)) return [];
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return textFiles(target);
    if (skippedExtensions.has(path.extname(entry.name).toLowerCase())) return [];
    if (fs.statSync(target).size > 8 * 1024 * 1024) return [];
    return [target];
  });
}

const forbidden = [
  {name: 'Windows user or workspace path', pattern: /[A-Za-z]:\\(?:Users\\[^\\\r\n]+|ai4climate)(?:\\|$)/i},
  {name: 'personal numeric email', pattern: /\b\d{6,}@qq\.com\b/i},
  {name: 'embedded provider secret', pattern: /\bsk-[A-Za-z0-9_-]{20,}\b/},
  {name: 'assigned long credential', pattern: /(?:api[_-]?key|password|token)\s*[=:]\s*['"][^'"]{16,}['"]/i},
  {name: 'private key material', pattern: /BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY/}
];

test('public repository contains no embedded credentials or machine-specific paths', () => {
  const findings = [];
  for (const file of textFiles(root)) {
    const source = fs.readFileSync(file, 'utf8');
    for (const rule of forbidden) {
      if (rule.pattern.test(source)) findings.push(`${rule.name}: ${path.relative(root, file)}`);
    }
  }
  assert.deepEqual(findings, []);
});
