module.exports = function(val1, val2){
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

const { test } = require('jest');
const randomNumber = require('../lib/random.js');



test('get random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});