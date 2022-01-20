const Player = require('../lib/Player.js');

const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

test('creates a player object', () => {
 expect.arrayContaining([expect.any(Object)]);
});

test("gets player's stats as an object", () => {
 const player = new Player('Dave');

 expect(player.getStats()).toHaveProperty('potions');
 expect(player.getStats()).toHaveProperty('health');
 expect(player.getStats()).toHaveProperty('strength');
 expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {
 const player = new Player('Dave');

 expect(player.getInventory()).toEqual(expect.any(Array));

 player.inventory = [];

 expect(player.getInventory()).toEqual(false);
});

test("gets player's health value", () => {
 const player = new Player('Dave');

 expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));

});

Player.prototype.getHealth = function() {
 return `${this.name}'s health is now ${this.health}!`;
};

test('checks if player is alive or not', () => {
 const player = new Player('Dave');

 expect(player.isAlive()).toBeTruthy();

 player.health = 0;

 expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
 const player = new Player('Dave');
 const oldHealth = player.health;

 player.reduceHealth(5);

 expect(player.health).toBe(oldHealth - 5);

 player.reduceHealth(99999);

 expect(player.health).toBe(0);
});

Player.prototype.reduceHealth = function(health) {
 this.health -= health;

 if (this.health < 0) {
  this.health = 0;
 }
};
