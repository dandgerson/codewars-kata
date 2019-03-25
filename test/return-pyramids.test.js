const { assert } = require('chai');

const pyramid = require('../kata/return-pyramids');

describe('Pyramid', () => {
  it('should be a function', (done) => {
    assert.typeOf(pyramid, 'function');
    done();
  });
  it('should returns a string', (done) => {
    const n = 5;
    assert.typeOf(pyramid(n), 'string');
    done();
  });
  describe('String should be expected as ASCII pyramid', () => {
    it('should returns expected pyramid', (done) => {
      assert.equal(pyramid(1), '/\\\n');
      done();
    });
    it('should returns expected pyramid', (done) => {
      assert.equal(pyramid(2), ' /\\\n/__\\\n');
      done();
    });
    it('should returns expected pyramid', (done) => {
      assert.equal(pyramid(4), '   /\\\n  /  \\\n /    \\\n/______\\\n');
      done();
    });
    it('should returns expected pyramid', (done) => {
      assert.equal(pyramid(6), '     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n');
      done();
    });
    it('should returns expected pyramid', (done) => {
      assert.equal(pyramid(10), '         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n');
      done();
    });
  });
});
