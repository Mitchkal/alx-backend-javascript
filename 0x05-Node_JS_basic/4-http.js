const { createServer } = require('node:http');

const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
