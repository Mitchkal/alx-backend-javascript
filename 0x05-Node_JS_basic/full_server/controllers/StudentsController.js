const readDatabase = require('../utils');

const path = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static async getAllStudents(_request, res) {
    try {
      const database = await readDatabase(path);
      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      const response = ['This is the list of our students'];
      fields.forEach((field) => {
        const studentsInField = database[field].length;
        const studentList = database[field].join(', ');
        response.push(
          `Number of students in ${field}: ${studentsInField}. List: ${studentList}`,
        );
      });
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!major || (major !== 'CS' && major !== 'SWE')) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const database = await readDatabase(path);
      const students = database[major] || [];
      const studentList = students.join(', ');
      res.status(200).send(`List: ${studentList}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
module.exports = StudentsController;
