const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const BASE_URL = 'http://localhost:7865';

  it(' checks if api GET / returns the correct response', (done) => {
    request.get(`${BASE_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
