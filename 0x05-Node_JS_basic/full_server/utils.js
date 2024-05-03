/* eslint-disable no-unused-vars */
const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const students = data
          .trim()
          .split('\n')
          .splice(1)
          .filter((line) => line.trim() !== ''); // Remove empty lines
        const fields = {};

        students.forEach((student) => {
          if (student) {
            const [firstName, , , field] = student.split(',');
            // check if a field entry is empty and create it
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstName);
          }
        });
        resolve(fields);
      })
      .catch((_err) => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = readDatabase;
