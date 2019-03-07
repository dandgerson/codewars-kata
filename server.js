/* eslint-disable no-console */
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello, Mocha!');
});

exports.listen = (port) => {
  console.log(`Listening on: ${port}`);
  server.listen(port);
};

exports.close = () => server.close();
