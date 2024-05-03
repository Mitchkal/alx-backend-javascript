const request = require('request');
const { expect } = require('chai');

const BASE_URL = 'http://localhost:7865';

describe('API Tests', () => {
  describe('Index page', () => {
    it('should return status 200', (done) => {
      request.get(BASE_URL, (response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the message "Welcome to the payment system"', (done) => {
      request.get(BASE_URL, (body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
