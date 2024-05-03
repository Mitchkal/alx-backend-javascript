class AppController {
  static getHomepage(_request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
module.exports = AppController;
