const express = require('express');
const fs = require('fs/promises');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
// const countStudents = require("./2-read_file");
const app = express();

const port = 1245;

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

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(DB_FILE);
    res.type('text/plain').send(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log('Server running at http://127.0.0.1/1245/');
});

module.exports = app;
