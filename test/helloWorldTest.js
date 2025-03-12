const assert = require('assert');

describe('Destructuring Assignment Tests', () => {
  it('moo is defined', () => {
    const { moo } = require('../index.js');
    assert.strictEqual(moo, 'cow');
  });

  it('bessie is defined', () => {
    const { bessie } = require('../index.js');
    assert.strictEqual(bessie, 'cow');
  });

  it('blackAndWhite is defined', () => {
    const { blackAndWhite } = require('../index.js');
    assert.strictEqual(blackAndWhite, 'cow');
  });

  it('red is defined', () => {
    const { red } = require('../index.js');
    assert.strictEqual(red, 'red');
  });

  it('r is defined', () => {
    const { r } = require('../index.js');
    assert.strictEqual(r, 'red');
  });

  it('indg is defined', () => {
    const { indg } = require('../index.js');
    assert.strictEqual(indg, 'indigo');
  });

  it('muppetName is defined', () => {
    const { muppetName } = require('../index.js');
    assert.strictEqual(muppetName, 'Miss Piggy');
  });

  it('song2 is defined', () => {
    const { song2 } = require('../index.js');
    assert.strictEqual(song2, 'Moving Right Along');
  });
});
