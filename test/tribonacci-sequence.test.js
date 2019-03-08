const { assert } = require('chai');

const tribonacci = require('../kata/tribonacci-sequence');

const handleIt = (text, func, result) => {
  it(text, (done) => {
    assert.equal(func().toString(), result.toString());
    done();
  });
};

describe('tribonacci-sequence', () => {
  it('should be a function', (done) => {
    assert.equal(typeof tribonacci === 'function', true);
    done();
  });
  handleIt(
    'should return expected sequence with [1, 1, 1], 10 arguments',
    tribonacci.bind(null, [1, 1, 1], 10),
    [1, 1, 1, 3, 5, 9, 17, 31, 57, 105],
  );
  handleIt(
    'should return expected sequence with [0, 0, 1], 10 arguments',
    tribonacci.bind(null, [0, 0, 1], 10),
    [0, 0, 1, 1, 2, 4, 7, 13, 24, 44],
  );
  handleIt(
    'should return expected sequence with [0, 1, 1], 10 arguments',
    tribonacci.bind(null, [0, 1, 1], 10),
    [0, 1, 1, 2, 4, 7, 13, 24, 44, 81],
  );
  handleIt(
    'should return expected sequence with [1, 0, 0], 10 arguments',
    tribonacci.bind(null, [1, 0, 0], 10),
    [1, 0, 0, 1, 1, 2, 4, 7, 13, 24],
  );
  handleIt(
    'should return expected sequence with [0, 0, 0], 10 arguments',
    tribonacci.bind(null, [0, 0, 0], 10),
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  );
  handleIt(
    'should return expected sequence with [1, 2, 3], 10 arguments',
    tribonacci.bind(null, [1, 2, 3], 10),
    [1, 2, 3, 6, 11, 20, 37, 68, 125, 230],
  );
  handleIt(
    'should return expected sequence with [3, 2, 1], 10 arguments',
    tribonacci.bind(null, [3, 2, 1], 10),
    [3, 2, 1, 6, 9, 16, 31, 56, 103, 190],
  );
  handleIt(
    'should return expected sequence with [1, 1, 1], 1 arguments',
    tribonacci.bind(null, [1, 1, 1], 1),
    [1],
  );
  handleIt(
    'should return expected sequence with [300, 200, 100], 0 arguments',
    tribonacci.bind(null, [300, 200, 100], 0),
    [],
  );
  handleIt(
    'should return expected sequence with [0.5, 0.5, 0.5], 30 arguments',
    tribonacci.bind(null, [0.5, 0.5, 0.5], 30),
    [0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5,
      52.5, 96.5, 177.5, 326.5, 600.5, 1104.5, 2031.5,
      3736.5, 6872.5, 12640.5, 23249.5, 42762.5,
      78652.5, 144664.5, 266079.5, 489396.5, 900140.5,
      1655616.5, 3045153.5, 5600910.5, 10301680.5],
  );
});
