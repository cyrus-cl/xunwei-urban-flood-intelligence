import test from 'node:test';
import assert from 'node:assert/strict';
import {createDemoDirector} from '../web/demo-director.js';

test('demo skips automatic replay after the version was seen', () => {
  const director = createDemoDirector({seen: () => true, markSeen() {}, requestFrame() { throw Error('must not schedule'); }});
  assert.equal(director.start({automatic: true}), false);
});

test('manual input cancels an active demo', () => {
  let cancelled = false;
  const director = createDemoDirector({seen: () => false, markSeen() {}, requestFrame: () => 7, cancelFrame: id => { cancelled = id === 7; }});
  director.start({automatic: false});
  director.interrupt('pointer');
  assert.equal(cancelled, true);
  assert.equal(director.active, false);
});

test('timeline receives bounded progress and finishes', () => {
  let frame;
  let tick;
  const updates = [];
  const director = createDemoDirector({duration: 100, now: () => 10, requestFrame: callback => { tick = callback; return ++frame || 1; }, cancelFrame() {}});
  director.start({timeline: [{update: (elapsed, progress) => updates.push([elapsed, progress])}]});
  tick(60);
  tick(130);
  assert.deepEqual(updates, [[50, 0.5], [120, 1]]);
  assert.equal(director.active, false);
});
