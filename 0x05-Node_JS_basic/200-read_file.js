const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf-8");
    const lines = data.trim().split("\n");
    const students = lines.map((line) => line.split(","));
    const fields = {};

    students.forEach((student) => {
      const field = student[3];
      if (field && field.trim() !== "") {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }
    });
    let totalStudents = 0;
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        totalStudents += fields[field].length;
        console.log(
          `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(", ")}`
        );
      }
    }
    console.log(`Number of students: ${totalStudents}`);
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}
module.exports = countStudents;
