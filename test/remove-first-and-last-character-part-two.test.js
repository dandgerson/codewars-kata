const { assert } = require('chai');

const removeChars = require('../kata/remove-first-and-last-character-part-two');

describe('removeChars', () => {
  it('should be a function', (done) => {
    assert.typeOf(removeChars, 'function');
    done();
  });
  it('should returns null if input is empty string', (done) => {
    const input = '';
    assert.isNull(removeChars(input));
    done();
  });
  it('should returns null if input is not contain colon separated', (done) => {
    const input = '1';
    assert.isNull(removeChars(input));
    done();
  });
  it('should returns null if input is contain spaces', (done) => {
    const input = '1, 2';
    assert.isNull(removeChars(input));
    done();
  });
  it('should returns stringify array without first and last elements', (done) => {
    const input = '1,2,3';
    assert.equal(removeChars(input), '2');
    done();
  });
  it('should returns stringify array without first and last elements', (done) => {
    const input = '1,,22,331c2,11,a';
    assert.equal(removeChars(input), ' 22 331c2 11');
    done();
  });
  it('should returns stringify array without first and last elements', (done) => {
    const input = 'ac3b,,,,,b,cba,,';
    assert.equal(removeChars(input), '    b cba ');
    done();
  });
  it('should returns stringify array without first and last elements', (done) => {
    const input = 'aaa,11,,b,a1a1,b';
    assert.equal(removeChars(input), '11  b a1a1');
    done();
  });
  it('should returns stringify array without first and last elements', (done) => {
    const input = '1bac3a,,,,c,,,c,';
    assert.equal(removeChars(input), '   c   c');
    done();
  });
});
