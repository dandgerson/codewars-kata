const { assert } = require('chai');

const sieve = require('../../proposals/erathosphen-sieve');

describe('sieve', () => {
  let n;
  it('should be a function', (done) => {
    assert.typeOf(sieve, 'function');
    done();
  });

  it('should returns an array', (done) => {
    n = 30;
    assert.typeOf(sieve(n), 'Array');
    done();
  });

  it('should returns an expected array [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]', (done) => {
    n = 30;
    assert.deepEqual(sieve(n), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    done();
  });
});
