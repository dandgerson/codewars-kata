const { assert } = require('chai');

const chainer = require('../kata/unary-function-chainer');

describe('Chainer', () => {
  it('should be a function', (done) => {
    assert.equal(typeof chainer === 'function', true);
    done();
  });
  it('should return a function', (done) => {
    assert.equal(typeof chainer() === 'function', true);
    done();
  });
  describe('should return expected value', () => {
    const f1 = int => int * 2;
    const f2 = int => int + 2;
    const f3 = int => int ** 2;

    const f4 = str => str.split('').concat().reverse().join('')
      .split(' ');
    const f5 = str => str.concat().reverse();
    const f6 = str => str.join('_');

    it('should return expected integer', (done) => {
      assert.equal(chainer([f1, f2, f3])(0), 4);
      done();
    });
    it('should return expected integer', (done) => {
      assert.equal(chainer([f1, f2, f3])(2), 36);
      done();
    });
    it('should return expected integer', (done) => {
      assert.equal(chainer([f3, f2, f1])(2), 12);
      done();
    });
    it('should return expected string', (done) => {
      assert.equal(chainer([f4, f5, f6])('lorem ipsum'), 'merol_muspi');
      done();
    });
  });
});
