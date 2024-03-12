import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./33-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
