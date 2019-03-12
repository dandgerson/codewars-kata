const { assert } = require('chai');

const parseData = require('../kata/format-string-of-names');

describe('Format string of names', () => {
  it('should be a function', (done) => {
    assert.typeOf(parseData, 'function');
    done();
  });
  describe('should returns expected values', () => {
    it('should return expected string', (done) => {
      assert.equal(parseData([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge');
      done();
    });
    it('should return expected string', (done) => {
      assert.equal(parseData([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' }]), 'Bart, Lisa & Maggie');
      done();
    });
    it('should return expected string', (done) => {
      assert.equal(parseData([
        { name: 'Lisa' },
        { name: 'Maggie' }]), 'Lisa & Maggie');
      done();
    });
    it('should return expected string', (done) => {
      assert.equal(parseData([
        { name: 'Maggie' }]), 'Maggie');
      done();
    });
    it('should return expected string', (done) => {
      assert.equal(parseData([]), '');
      done();
    });
  });
});
