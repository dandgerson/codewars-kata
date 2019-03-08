const { assert } = require('chai');

const abbreviate = require('../kata/word-a10n');

describe('Abbreviate kata', () => {
  it('should be a function', (done) => {
    assert.equal(typeof abbreviate === 'function', true);
    done();
  });
  it('should return a string', (done) => {
    assert.equal(
      typeof abbreviate('string') === 'string',
      true,
    );
    done();
  });
  it('should return abbreviated string with first and last char and integer between', (done) => {
    assert.equal(abbreviate('internationalization'), 'i18n');
    done();
  });
  describe('should work with words length > 3', () => {
    it('should return string as is', (done) => {
      assert.equal(abbreviate('Fun'), 'Fun');
      done();
    });
    it('should return abbreviation', (done) => {
      assert.equal(abbreviate('send'), 's2d');
      done();
    });
  });
  describe('should work with strings contains several words separate with non-word char wich remain in place', () => {
    it('should return processed words separated by space', (done) => {
      assert.equal(abbreviate('send letter'), 's2d l4r');
      done();
    });
    it('should return processed words separated by dash', (done) => {
      assert.equal(abbreviate('Send--letter hello+world!'), 'S2d--l4r h3o+w3d!');
      done();
    });
    it('should return processed words separated by dash and ends with "?"', (done) => {
      assert.equal(abbreviate('send-letter?'), 's2d-l4r?');
      done();
    });
    it('all non-word character remain in place', (done) => {
      assert.equal(abbreviate('elephant-rides are really fun!'), 'e6t-r3s are r4y fun!');
      done();
    });
    it('all non-word character remain in place', (done) => {
      assert.equal(abbreviate('*** elephant--rides are really+fun!'), '*** e6t--r3s are r4y+fun!');
      done();
    });
  });
});
