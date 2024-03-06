function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Mock API response';
      resolve(data);
    }, 1000);
  });
}
export default getResponseFromAPI;
