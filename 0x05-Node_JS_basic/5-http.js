const http = require('http');

// const countStudents = require('./3-read_file_async');

const port = 1245;

const fs = require('fs/promises');

const countStudents = (path) => new Promise((resolve) => {
  fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).map((line) => line.split(','));
      const fields = {};

      students.forEach((student) => {
        const field = student[3];

        if (
          field !== undefined
            && field.trim() !== ''
            && field !== 'firstname'
        ) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        }
      });

      const totalStudents = students.length;
      const results = [`Number of students: ${totalStudents}`];

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          results.push(
            `Number of students in ${field}: ${
              fields[field].length
            }. List: ${fields[field].join(', ')}`,
          );
        }
      }
      resolve(results.join('\n'));
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
});

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await countStudents('database.csv');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(port, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
