import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('formats future seconds', () => {
  assert.equal(api.relativeTimeLabel(5000, 0), 'in 5 seconds');
});
test('formats past minutes', () => {
  assert.equal(api.relativeTimeLabel(0, 120000), '2 minutes ago');
});
test('formats minute boundary', () => {
  assert.equal(api.relativeTimeLabel(60000, 0), 'in 1 minute');
});
test('uses approximate months', () => {
  assert.equal(api.relativeTimeLabel(2592000000, 0), 'in 1 month');
});
test('supports short style', () => {
  assert.equal(api.relativeTimeLabel(0, 3600000, 'short'), '1h ago');
});
test('rejects invalid style', () => {
  assert.throws(() => api.relativeTimeLabel(0, 0, 'medium'), RangeError);
});
