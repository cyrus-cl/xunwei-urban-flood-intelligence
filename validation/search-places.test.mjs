import test from 'node:test';
import assert from 'node:assert/strict';
import {searchPlaces} from '../web/search-places.js';

const roads = [{name: '中山路', lon: 121.55, lat: 29.87}];

test('search returns explicit local states', () => {
  assert.equal(searchPlaces({query: '', roads}).status, 'idle');
  assert.equal(searchPlaces({query: '中山', roads}).results[0].name, '中山路');
  assert.equal(searchPlaces({query: '121.50, 29.86', roads}).status, 'ready');
  assert.equal(searchPlaces({query: '不存在地点', roads}).status, 'empty');
});

test('search bounds results and rejects impossible coordinates', () => {
  const many = Array.from({length: 12}, (_, index) => ({name: `道路${index}`, lon: 121.5, lat: 29.8}));
  assert.equal(searchPlaces({query: '道路', roads: many, limit: 5}).results.length, 5);
  assert.equal(searchPlaces({query: '221.5, 29.8', roads}).status, 'empty');
});
