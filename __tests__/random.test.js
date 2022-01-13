const { TestWatcher } = require('jest');
const checkIfEqual = require('../lib/random.js');

test('checks if 0 is equal to 10', () => {
  expect(checkIfEqual(10,10)).toBe(true);
});