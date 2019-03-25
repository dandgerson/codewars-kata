const { assert } = require('chai');

const seven = require('../kata/a-rule-of-divisibility-by-7');

describe('Seven', () => {
  it('should be a function', (done) => {
    assert.typeOf(seven, 'function');
    done();
  });
  it('should returns an array', (done) => {
    const m = 1603;
    assert.typeOf(seven(m), 'array');
    done();
  });
  describe('returns value must be expectable', () => {
    it('should returns expected value', (done) => {
      assert.deepEqual(seven(1603), [7, 2]);
      done();
    });
    it('should returns expected value', (done) => {
      assert.deepEqual(seven(371), [35, 1]);
      done();
    });
    it('should returns expected value', (done) => {
      assert.deepEqual(seven(483), [42, 1]);
      done();
    });
  });
});
