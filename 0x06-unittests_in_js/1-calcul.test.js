/* eslint-disable no-undef */
import { strictEqual, throws } from 'assert';
import calculateNumber from './1-calcul.js';
import { describe } from 'mocha';

describe('calculateNumber function', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return the sum of rounded numbers with one negative', () => {
      strictEqual(calculateNumber('SUM', -1.2, 3.7), 3);
    });

    it('should return the sum of rounded numbers when both are negative', () => {
      strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
    });

    it('should return the sum of rounded numbers when one is zero', () => {
      strictEqual(calculateNumber('SUM', 0, 3.7), 4);
    });

    it('should return the sum of rounded numbers when both are zero', () => {
      strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });
  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      strictEqual(calculateNumber('SUBTRACT', 3.7, 2), 2);
    });

    it('should return the difference of rounded numbers with one negative', () => {
      strictEqual(calculateNumber('SUBTRACT', -1.2, 3.7), -5);
    });

    it('should return the difference of rounded numbers when both are negative', () => {
      strictEqual(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
    });

    it('should return the difference of rounded numbers when one is zero', () => {
      strictEqual(calculateNumber('SUBTRACT', 0, 3.7), -4);
    });

    it('should return the difference of rounded numbers when both are zero', () => {
      strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return the quotient of rounded numbers', () => {
      strictEqual(calculateNumber('DIVIDE', 9.5, 2.1), 5);
    });

    it('should return the quotient of rounded numbers with one negative', () => {
      strictEqual(calculateNumber('DIVIDE', -10, 2), -5);
    });

    it('should return the quotient of rounded numbers when both are negative', () => {
      strictEqual(calculateNumber('DIVIDE', -10, -2), 5);
    });

    it('should return Error when dividing by zero', () => {
      strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });
  });
  it('should throw an error for an invalid type', () => {
    throws(() => {
      calculateNumber('INVALID_TYPE', 10, 2);
    }, Error);
  });
});
