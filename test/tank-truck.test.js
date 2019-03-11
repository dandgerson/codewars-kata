const { assert } = require('chai');

const tankvol = require('../kata/tank-truck');

describe('Tank Truck function', () => {
  it('should be a function', (done) => {
    assert.equal(typeof tankvol === 'function', true);
    done();
  });
  describe('Should returns expected value', () => {
    it('should return expected Volume', (done) => {
      assert.equal(tankvol(5, 7, 3848), 2940);
      done();
    });
    it('should return expected Volume', (done) => {
      assert.equal(tankvol(2, 7, 3848), 907);
      done();
    });
  });
});
