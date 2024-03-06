function signupUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      resolve({ firstName, lastName });
    } else {
      reject(new Error('Both first name and last name required.'));
    }
  });
}
export default signupUser;
