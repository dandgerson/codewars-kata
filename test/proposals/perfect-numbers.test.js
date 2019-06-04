const { assert } = require('chai');

const getPerfect = require('../../proposals/perfect-numbers');

describe('getPerfect', () => {
  let n = 3;

  it('should be a function', (done) => {
    assert.typeOf(getPerfect, 'function');
    done();
  });

  it('should returns an array ', (done) => {
    assert.typeOf(getPerfect(n), 'Array');
    done();
  });

  it('should returns array of perfect numbers with length n', (done) => {
    assert.equal(getPerfect(n).length, 3);
    done();
  });

  it('should returns expected array [6] of perfect numbers with length n == 1', (done) => {
    n = 1;
    assert.deepEqual(getPerfect(n), [6]);
    done();
  });
  it('should returns expected array [6, 28] of perfect numbers with length n == 2', (done) => {
    n = 2;
    assert.deepEqual(getPerfect(n), [6, 28]);
    done();
  });
  it('should returns expected array [6, 28, 496] of perfect numbers with length n == 3', (done) => {
    n = 3;
    assert.deepEqual(getPerfect(n), [6, 28, 496]);
    done();
  });
  it('should returns expected array [6, 28, 496, 8128] of perfect numbers with length n == 4', (done) => {
    n = 4;
    assert.deepEqual(getPerfect(n), [6, 28, 496, 8128]);
    done();
  });
  it('should returns expected array [6, 28, 496, 8128, 33550336] of perfect numbers with length n == 5', (done) => {
    n = 5;
    assert.deepEqual(getPerfect(n), [6, 28, 496, 8128, 33550336]);
    done();
  });
});
