const express = require("express");
const fs = require("fs/promises");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await readFileAsync(path, "utf8");
    const students = data.trim().split("\n").slice(1); // Remove the header line

    const fields = {};
    const studentsByField = {};

    students.forEach((student) => {
      if (student) {
        const [firstName, lastName, , field] = student.split(",");
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

    const results = ["This is the list of our students"];
    results.push(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      results.push(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ", "
        )}`
      );
    }

    return results.join("\n");
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

app.get("/", (req, res) => {
  res.type("text/plain").send("Hello Holberton School!");
});

app.get("/students", async (req, res) => {
  const dbFilePath = process.argv.length > 2 ? process.argv[2] : "";

  try {
    const data = await countStudents(dbFilePath);
    res.status(200).type("text/plain").send(data).end();
  } catch (error) {
    res.status(500).send("Internal Server Error").end();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

module.exports = app;
