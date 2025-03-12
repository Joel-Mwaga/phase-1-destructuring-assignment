const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, , v] = colors;

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const [, , , , , indg] = colors;

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;

module.exports = {
  moo,
  bessie,
  blackAndWhite,
  indg,
  red,
  r,
  muppetName,
  song2,
  song4,
  nestedJob,
  nestedPartner
};

const { expect } = require('chai');


describe('Destructuring Assignment Tests', () => {
  it('moo is defined', () => {
    expect(moo).to.exist;
    expect(moo).to.equal('cow');
  });

  it('bessie is defined', () => {
    expect(bessie).to.exist;
    expect(bessie).to.equal('cow');
  });

  it('blackAndWhite is defined', () => {
    expect(blackAndWhite).to.exist;
    expect(blackAndWhite).to.equal('cow');
  });

  it('red is defined', () => {
    expect(red).to.exist;
    expect(red).to.equal('red');
  });

  it('r is defined', () => {
    expect(r).to.exist;
    expect(r).to.equal('red');
  });

  it('indg is defined', () => {
    expect(indg).to.exist;
    expect(indg).to.equal('indigo');
  });

  it('muppetName is defined', () => {
    expect(muppetName).to.exist;
    expect(muppetName).to.equal('Miss Piggy');
  });

  it('song2 is defined', () => {
    expect(song2).to.exist;
    expect(song2).to.equal('Moving Right Along');
  });
});