const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function countStudents(path) {
  try {
    const data = await readFileAsync(path, 'utf8');
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

    console.log(`Number of students: ${students.length}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }

    return students.length;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
