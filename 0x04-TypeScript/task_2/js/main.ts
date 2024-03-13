interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary == "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
// defines the employee interface
interface Employee {
  workDirectorTasks?(): string;
  workTeacherTasks?(): string;
}

// type predicate function to check if an employee is a director
function isDirector(employee: Employee): employee is Director {
  return !!employee.workDirectorTasks;
}

function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

// function to teach class based on subject

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

teachClass("Math");
teachClass("History");
