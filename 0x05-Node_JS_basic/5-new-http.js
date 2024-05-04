const fs = require('fs');
const util = require('util');
const http = require('node:http');

const port = 1245;

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const readFileAsync = util.promisify(fs.readFile);

async function countStudents(path) {
  try {
    const data = await readFileAsync(path, 'utf-8');
    if (data === '') {
      throw new Error('Cannot load the database');
    }

    const students = data.trim().split('\n').slice(1);

    const fields = {};

    students.forEach((student) => {
      if (student) {
        const [firstName, , , field] = student.split(', ');

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });
    const results = ['This is the list of our students'];
    results.push(`Number of students: ${students.length}`);

    for (const [field, names] of Object.entries(fields)) {
      results.push(
        `Number of students in ${field}: ${names.length}.List: ${names.join(
          ', ',
        )}`,
      );
    }
    return results.join('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
  } else if (req.url === '/students') {
    try {
      const data = await countStudents(DB_FILE);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
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
