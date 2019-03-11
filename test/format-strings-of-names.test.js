const { assert } = require('chai');

const list = require('../kata/format-string-of-names');

describe('Format string of names', () => {
  it('should be a function', (done) => {
    assert.typeOf(list, 'function');
    done();
  });
  describe('should returns expected values', () => {
    it('should return expected string', (done) => {
      assert.equal(list([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' }]), 'Must work with many names');
      done();
    });
    it('should return expected string', (done) => {
      assert.equal(list([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' }]), 'Bart, Lisa & Maggie');
      done();
    });
  });
});
