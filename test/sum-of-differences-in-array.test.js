const { assert } = require('chai');

const sumOfDifferences = require('../kata/sum-of-differences-in-array');

describe('sumOfDifferences', () => {
  it('should be a function', (done) => {
    assert.typeOf(sumOfDifferences, 'function');
    done();
  });
  it('should return a number', (done) => {
    assert.typeOf(sumOfDifferences([1, 2, 10]), 'number');
    done();
  });
  describe('should returns expected result', () => {
    it('should returns expected value', (done) => {
      assert.equal(sumOfDifferences([1, 2, 10]), 9);
      done();
    });
    it('should returns expected value', (done) => {
      assert.equal(sumOfDifferences([-3, -2, -1]), 2);
      done();
    });
    it('should returns expected value', (done) => {
      assert.equal(sumOfDifferences([9, -9, -14]), 23);
      done();
    });
    it('should returns expected value', (done) => {
      assert.equal(sumOfDifferences([4, 2, -10, 3, 0, 9, 4, -10, -9, 0, 2, 0, 5, 3]), 19);
      done();
    });
  });
});
