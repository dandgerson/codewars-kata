const { assert } = require('chai');

const asteriscIt = require('../kata/asterisk-it');

describe('Asterisk It', () => {
  it('should be a function', (done) => {
    assert.typeOf(asteriscIt, 'function');
    done();
  });
  describe('should returns expected value', () => {
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt(2222), '2*2*2*2');
      done();
    });
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt(1111), '1111');
      done();
    });
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt(9999), '9999');
      done();
    });
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt('0000'), '0*0*0*0');
      done();
    });
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt([1, 4, 64, 68, 67, 23, 1]), '14*6*4*6*8*67231');
      done();
    });
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt([-1, 4, 64, 68, 67, 23, 1]), '-14*6*4*6*8*67231');
      done();
    });
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt(5312708), '531270*8');
      done();
    });
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt(9682135), '96*8*2135');
      done();
    });
    it('should parse assume of the template', (done) => {
      assert.equal(asteriscIt(-9682135), '-96*8*2135');
      done();
    });
  });
});
