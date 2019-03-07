const { assert } = require('chai');

const dirReduc = require('../kata/direction-reduction');

describe('Direction reduce', () => {
  it('Should return expected value', (done) => {
    assert.equal(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST']);
    done();
  });
  it('Should return expected value', (done) => {
    assert.equal(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
    done();
  });
  it('Should return expected value', (done) => {
    assert.equal(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST']);
    done();
  });
});
