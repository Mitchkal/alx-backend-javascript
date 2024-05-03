const request = require('request');
const { expect } = require('chai');

const BASE_URL = 'http://localhost:7865';

describe('API integration test', () => {
  it('checks if api GET / returns the correct response', (done) => {
    request.get(`${BASE_URL}/`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  describe('GET /cart/:id', () => {
    it('should return payment methods for cart when :id is a number', (done) => {
      const cartId = 123;
      request.get(`${BASE_URL}/cart/${cartId}`, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Payment methods for cart ${cartId}`);
        done();
      });
    });

    it('should return status code 404 when :id is NOT a number', (done) => {
      const invalidCartId = 'abc';
      request.get(
        `${BASE_URL}/cart/${invalidCartId}`,
        (error, response, body) => {
          expect(response.statusCode).to.be.equal(404);
          expect(body).to.be.equal('Invalid cart ID');
          done();
        },
      );
    });
  });
});
