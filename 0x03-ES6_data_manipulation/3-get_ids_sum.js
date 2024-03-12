export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    const sum = array.reduce((acc, student) => acc + student.id, 0);
    return sum;
  }
  return 0;
}
