export function createDemoDirector({
  version = 'v7-command-center',
  duration = 30000,
  seen = key => localStorage.getItem(key) === '1',
  markSeen = key => localStorage.setItem(key, '1'),
  requestFrame = globalThis.requestAnimationFrame,
  cancelFrame = globalThis.cancelAnimationFrame ?? (() => {}),
  now = globalThis.performance?.now.bind(globalThis.performance) ?? Date.now
} = {}) {
  const key = `rainhere-demo-${version}`;
  let frame = 0;
  let started = 0;
  let steps = [];

  const api = {
    active: false,
    start({automatic = false, timeline = []} = {}) {
      if (automatic && seen(key)) return false;
      api.stop();
      steps = timeline;
      started = now();
      api.active = true;
      if (automatic) markSeen(key);
      frame = requestFrame(tick);
      return true;
    },
    stop() {
      if (frame) cancelFrame(frame);
      frame = 0;
      api.active = false;
    },
    interrupt(reason = 'manual') {
      if (!api.active) return false;
      api.stop();
      api.onInterrupt?.(reason);
      return true;
    },
    onInterrupt: null
  };

  function tick(timestamp) {
    if (!api.active) return;
    const elapsed = Math.max(0, timestamp - started);
    for (const step of steps) step.update?.(elapsed, Math.min(1, elapsed / duration));
    if (elapsed >= duration) api.stop();
    else frame = requestFrame(tick);
  }

  return api;
}
