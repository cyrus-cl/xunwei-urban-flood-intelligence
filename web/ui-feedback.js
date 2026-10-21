const clamp = value => Math.max(0, Math.min(1, Number(value) || 0));

const BUTTONS = {
  save: {
    idle: {label: '保存情景', disabled: false},
    busy: {label: '正在整理', disabled: true},
    success: {label: '已保存', disabled: true},
    error: {label: '重新保存', disabled: false}
  }
};

export function buttonPhase(kind, phase) {
  return BUTTONS[kind]?.[phase] ?? {label: String(kind), disabled: phase === 'busy'};
}

export function applyButtonPhase(button, kind, phase) {
  const state = buttonPhase(kind, phase);
  button.textContent = state.label;
  button.disabled = state.disabled;
  button.dataset.phase = phase;
  return state;
}

export function interpolateNumber(from, to, progress) {
  return Number(from) + (Number(to) - Number(from)) * clamp(progress);
}

export function animateNumber(element, to, {duration = 520, decimals = 1, suffix = ''} = {}) {
  const from = Number(element.dataset.value ?? String(element.textContent).replace(/[^\d.-]/g, '')) || 0;
  const target = Number(to);
  if (!Number.isFinite(target) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.textContent = Number.isFinite(target) ? `${target.toFixed(decimals)}${suffix}` : '—';
    element.dataset.value = Number.isFinite(target) ? String(target) : '';
    return () => {};
  }
  const started = performance.now();
  let frame = 0;
  const tick = now => {
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${interpolateNumber(from, target, eased).toFixed(decimals)}${suffix}`;
    if (progress < 1) frame = requestAnimationFrame(tick);
    else element.dataset.value = String(target);
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}

export function revealSequence(elements, {className = 'is-revealed', step = 70} = {}) {
  const rows = [...elements];
  requestAnimationFrame(() => rows.forEach((element, index) => {
    element.style.setProperty('--reveal-delay', `${index * step}ms`);
    element.classList.add(className);
  }));
}
