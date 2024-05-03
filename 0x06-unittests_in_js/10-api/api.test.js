const request = require('request');
const { expect } = require('chai');

const BASE_URL = 'http://localhost:7865';

describe('API integration test', () => {
  it('checks if api GET / returns the correct response', () =>
    new Promise((done) => {
      request.get(`${BASE_URL}/`, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    }));

  describe('GET /cart/:id', () => {
    it('should return payment methods for cart when :id is a number', () =>
      new Promise((done) => {
        const cartId = 123;
        request.get(`${BASE_URL}/cart/${cartId}`, (error, response, body) => {
          expect(response.statusCode).to.be.equal(200);
          expect(body).to.be.equal(`Payment methods for cart ${cartId}`);
          done();
        });
      }));

    it('should return status code 404 when :id is NOT a number', () =>
      new Promise((done) => {
        const invalidCartId = 'abc';
        request.get(
          `${BASE_URL}/cart/${invalidCartId}`,
          (error, response, body) => {
            expect(response.statusCode).to.be.equal(404);
            expect(body).to.be.equal('Invalid cart ID');
            done();
          },
        );
      }));
    describe('GET /available_payments', () => {
      it('should return the available payment methods', () =>
        new Promise((done) => {
          request.get(
            `${BASE_URL}/available_payments`,
            (error, response, body) => {
              expect(response.statusCode).to.be.equal(200);
              const data = JSON.parse(body);
              expect(data).to.deep.equal({
                payment_methods: {
                  credit_cards: true,
                  paypal: false,
                },
              });
              done();
            },
          );
        }));
    });

    describe('POST /login', () => {
      it('should return the message Welcome :username', () =>
        new Promise((done) => {
          const userName = 'John';
          request.post(
            {
              url: `${BASE_URL}/login`,
              body: { userName },
              json: true,
            },
            (_error, response, body) => {
              expect(response.statusCode).to.be.equal(200);
              expect(body).to.be.equal(`Welcome ${userName}`);
              done();
            },
          );
        }));
    });
  });
});
