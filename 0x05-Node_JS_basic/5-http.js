const http = require('http');

const port = 1245;
const fs = require('fs');
const util = require('util');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const readFileAsync = util.promisify(fs.readFile);

async function countStudents(DB_FILE) {
  try {
    const data = await readFileAsync(DB_FILE, 'utf8');
    const students = data.trim().split('\n').slice(1); // Remove the header line

    const fields = {};
    const studentsByField = {};

    students.forEach((student) => {
      if (student) {
        const [firstName, lastName, , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(`${firstName} ${lastName}`);
      }
    });

    const results = [`Number of students: ${students.length}`];
    for (const [field, names] of Object.entries(fields)) {
      results.push(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
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
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await countStudents(DB_FILE);
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
