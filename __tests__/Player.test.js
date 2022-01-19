const Player = require('../lib/Player.js');

const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

test('creates a player object', () => {
 expect.arrayContaining([expect.any(Object)]);
});

