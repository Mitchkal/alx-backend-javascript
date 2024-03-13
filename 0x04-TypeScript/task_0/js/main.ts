interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Tom",
  lastName: "Scholes",
  age: 15,
  location: "Italy",
};

const student2: Student = {
  firstName: "Jerry",
  lastName: "Springer",
  age: 17,
  location: "Michigan",
};

const studentsList: Student[] = [student1, student2];

const renderTable = (students: Student[]) => {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
};
renderTable(studentsList);
