/* eslint-disable no-undef */
const assert = require('assert');
const calculateNumber = require('./1-calcul');
// const { describe } = require('mocha');

describe('calculateNumber function', () => {
  describe('sUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return the sum of rounded numbers with one negative', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, 3.7), 3);
    });

    it('should return the sum of rounded numbers when both are negative', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
    });

    it('should return the sum of rounded numbers when one is zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 3.7), 4);
    });

    it('should return the sum of rounded numbers when both are zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });
  describe('sUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 2), 2);
    });

    it('should return the difference of rounded numbers with one negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, 3.7), -5);
    });

    it('should return the difference of rounded numbers when both are negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
    });

    it('should return the difference of rounded numbers when one is zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 3.7), -4);
    });

    it('should return the difference of rounded numbers when both are zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('dIVIDE', () => {
    it('should return the quotient of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.5, 2.1), 5);
    });

    it('should return the quotient of rounded numbers with one negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -10, 2), -5);
    });

    it('should return the quotient of rounded numbers when both are negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -10, -2), 5);
    });

    it('should return Error when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });
  });
  it('should throw an error for an invalid type', () => {
    assert.throws(() => {
      calculateNumber('INVALID_TYPE', 10, 2);
    }, Error);
  });
});
