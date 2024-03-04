export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const department of Object.keys(report.allEmployees)) {
        yield* report.allEmployees[department];
      }
    },
  };
}
