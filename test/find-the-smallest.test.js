const { assert } = require('chai');

const smallest = require('../kata/find-the-smallest');

describe('Find the Smallest', () => {
  it('should be a function', (done) => {
    assert.typeOf(smallest, 'function');
    done();
  });
  it('should returns an array', (done) => {
    assert.isArray(smallest(261235), 'function should return an array');
    done();
  });
  describe('Should return array with smallest value', () => {
    it('should returns expected value', (done) => {
      assert.deepEqual(smallest(261235), [126235, 2, 0]);
      done();
    });
    it('should returns expected value', (done) => {
      assert.deepEqual(smallest(209917), [29917, 0, 1]);
      done();
    });
    it('should returns expected value', (done) => {
      assert.deepEqual(smallest(285365), [238565, 3, 1]);
      done();
    });
    it('should returns expected value', (done) => {
      assert.deepEqual(smallest(269045), [26945, 3, 0]);
      done();
    });
    it('should returns expected value', (done) => {
      assert.deepEqual(smallest(296837), [239687, 4, 1]);
      done();
    });
  });
});
