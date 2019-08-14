/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(char) {
  this.createdAt = char.createdAt;
  this.name = char.name;
  this.dimensions = char.dimensions;
}
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attrs) {
  CharacterStats.call(this, attrs);
  this.team = attrs.team;
  this.weapons = attrs.weapons;
  this.language = attrs.language;
}
Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}

// Hero 

function Hero(heroAttrs) {
  Humanoid.call(this, heroAttrs);
  this.defeatedVillian = heroAttrs.defeatedVillian;
}

Hero.prototype = Object.create(GameObject.prototype);
Hero.prototype = Object.create(CharacterStats.prototype);
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.isHere = function () {
  return `${this.name}, our hero, is here!`;
}

Hero.prototype.struckBack = function () {
  return `${this.name} uses ${this.weapons}, ${villian.name} moved, but was struck in the arm.`;
}

Hero.prototype.injured = function () {
  return `${this.name} used ${this.weapons} against ${villian.name}, health has fallen to ${this.defeatedVillian}, ${this.name} defeated ${villian.name}.`;
};

// Villian 

function Villian(villianAttrs) {
  Humanoid.call(this, villianAttrs);
  this.damageHealth = villianAttrs.damageHealth;
}

Villian.prototype = Object.create(GameObject.prototype);
Villian.prototype = Object.create(CharacterStats.prototype);
Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.appeared = function () {
  return `${this.name} appeared!`;
}

Villian.prototype.attacked = function () {
  return `${this.name} attacked ${hero.name} with ${this.weapons}, but ${hero.name} blocked the attack.`;
}

Villian.prototype.fallen = function () {
  return `${this.name} struck ${hero.name} with ${this.weapons}, health has fallen to ${this.damageHealth}.`;
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 6,
    },
    healthPoints: 15,
    defeatedVillian: (15 - 15),
    name: 'Dean',
    team: 'The Round Table',
    weapons: [
      'Knife',
      'Bow&Arrow'
    ],
    language: 'Common Tongue',
  });

  const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 6,
      height: 9,
    },
    healthPoints: 15,
    damageHealth: (15 - 10),
    name: 'Lucifer',
    team: 'The Evil Ones',
    weapons: [
      'Magic',
      'Sword'
    ],
    language: 'Latin',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(villian.appeared());
  console.log(hero.isHere());
  console.log(villian.attacked());
  console.log(hero.struckBack());
  console.log(villian.fallen());
  console.log(hero.injured());
  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!