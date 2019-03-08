const { assert } = require('chai');

const solve = require('../kata/simple-remove-duplicates');

describe('Simple-remove-duplicates', () => {
  it('should be a function', (done) => {
    assert.equal(typeof solve === 'function', true);
    done();
  });
  it('should return an array', (done) => {
    assert.equal(Array.isArray(solve([])), true);
    done();
  });
  describe('should return an array with unique elements', () => {
    it('should return expected value', (done) => {
      assert.deepEqual(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
      done();
    });
    it('should return expected value', (done) => {
      assert.deepEqual(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
      done();
    });
    it('should return expected value', (done) => {
      assert.deepEqual(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
      done();
    });
    it('should return expected value', (done) => {
      assert.deepEqual(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
      done();
    });
    it('should return expected value', (done) => {
      assert.deepEqual(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);
      done();
    });
  });
});
