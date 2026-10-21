import test from 'node:test';
import assert from 'node:assert/strict';
import {removePlace, restorePlace} from '../web/place-records.js';

test('remove and restore preserve the full record and order', () => {
  const places = [
    {id: 'a', name: 'A', checks: [true], note: 'keep'},
    {id: 'b', name: 'B', checks: [false], note: 'restore me'}
  ];
  const operation = removePlace(places, 'b');
  assert.deepEqual(operation.places.map(place => place.id), ['a']);
  assert.deepEqual(restorePlace(operation.places, operation).map(place => place.id), ['a', 'b']);
  assert.equal(operation.removed.note, 'restore me');
});

test('missing ids are harmless and cannot duplicate restored records', () => {
  const places = [{id: 'a', name: 'A'}];
  const missing = removePlace(places, 'missing');
  assert.deepEqual(missing, {places, removed: null, index: -1});
  const operation = removePlace(places, 'a');
  assert.deepEqual(restorePlace(places, operation), places);
});
