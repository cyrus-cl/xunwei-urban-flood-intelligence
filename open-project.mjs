const version = '2026.10.17-v7';

if (!process.argv.includes('--no-browser') && !process.argv.includes('--open')) {
  process.argv.push('--open');
}

console.log(`Starting XUNWEI ${version}`);
await import('./static_server.mjs');
