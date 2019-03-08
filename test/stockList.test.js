const { assert } = require('chai');

const stockList = require('../kata/stockList');

describe('stockList', () => {
  it('#1 should return string with sum of categories', (done) => {
    const b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
    const c = ['A', 'B'];
    const res = '(A : 200) - (B : 1140)';
    assert.equal(stockList(b, c), res);
    done();
  });

  it('#2 should return string with sum of categories', (done) => {
    const b = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
    const c = ['A', 'B', 'C', 'W'];
    const res = '(A : 0) - (B : 114) - (C : 70) - (W : 0)';
    assert.equal(stockList(b, c), res);
    done();
  });
});
