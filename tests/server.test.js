/* eslint-disable no-console */
const http = require('http');
const { assert } = require('chai');

const server = require('../server');

describe('HTTP Server Test', () => {
  // The function passed to before() is called before running the test cases.
  before(() => server.listen(3000));

  // The function passed to after() is called after running the test cases.
  after(() => server.close());
});

describe('/', () => {
  it('should return 200', (done) => {
    http.get('http://localhost:3000', (response) => {
      assert.equal(response.statusCode, 200);
      done();
    });
  });

  it('should be Hello, Mocha!', (done) => {
    http.get('http://localhost:3000', (response) => {
      // Assert the status code
      assert.equal(response.statusCode, 200);

      let body = '';
      response.on('data', (content) => {
        body += content;
      });
      response.on('end', () => {
        // Let's wait until we read the response, and then assert the body
        // is 'Hello, Mocha!'.
        assert.equal(body, 'Hello, Mocha!');
        done();
      });
    });
  });
});

process.on('uncaughtException', (err) => {
  console.log(err);
});
