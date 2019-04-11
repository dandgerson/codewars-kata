const { assert } = require('chai');

const objectSearchAndReplace = require('../kata/object-search-and-replace');

describe('objectSearchAndReplace', () => {
  const data = {
    foo: 'dynamic',
    bar: {
      baz: ['dynamic'],
    },
    dynamic: true,
  };
  const replace = 'static';
  it('should be a function', (done) => {
    assert.typeOf(objectSearchAndReplace, 'function');
    done();
  });
  it('it should just return whatever was passed in', (done) => {
    assert.equal(objectSearchAndReplace(data, replace), data);
    done();
  });
  it('it should replace all the cases', (done) => {
    objectSearchAndReplace(data, replace);
    assert.deepEqual([data.foo, data.bar.baz[0]], ['static', 'static']);
    done();
  });
});
