const { assert } = require('chai');

const divisibleBy = require('../kata/divisibleBy');

describe('divisibleBy', () => {
  it('should be a function', (done) => {
    assert.typeOf(divisibleBy, 'function');
    done();
  });
  describe('should returns expected value', () => {
    it('should return array of divisors', (done) => {
      assert.deepEqual(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
      done();
    });
    it('should return array of divisors', (done) => {
      assert.deepEqual(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
      done();
    });
  });
});
