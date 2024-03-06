function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success === true) {
        // console.log('API call succesful');
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 1000);
  })
    .then((response) => {
      //console.log('Resolved:', response);
      return response;
    })
    .catch((error) => {
      //console.error('Rejected:', error.message);
      throw error;
    });
}
export default getFullResponseFromAPI;
