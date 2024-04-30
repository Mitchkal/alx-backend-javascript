const fs = require('fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n');

    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    students.forEach((student) => {
      const field = student[3];

      if (field !== undefined && field.trim() !== '' && field !== 'firstname') {
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
    console.log(results.join('\n'));
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
