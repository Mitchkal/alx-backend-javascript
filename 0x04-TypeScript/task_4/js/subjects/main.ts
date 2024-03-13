import { Subjects } from "./Cpp";
export const cpp = new Subjects.Cpp();

import { Subjects as SubjectsJava } from "./Java";
export const java = new SubjectsJava.Java();

import { Subjects as SubjectsReact } from "./React";
export const react = new SubjectsReact.React();

const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingc: 10,
};

// for cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.Requirements());
console.log(cpp.getAvailableTeacher());

// for Java

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.Requirements());
console.log(java.getAvailableTeacher());

// for React

console.log("React");
react.setTeacher(cTeacher);
console.log(react.Requirements());
console.log(react.getAvailableTeacher());
