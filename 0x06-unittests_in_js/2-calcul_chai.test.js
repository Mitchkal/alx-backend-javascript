/* eslint-disable no-undef */

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return the sum of rounded numbers with one negative', () => {
      expect(calculateNumber('SUM', -1.2, 3.7)).to.equal(3);
    });

    it('should return the sum of rounded numbers when both are negative', () => {
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    });

    it('should return the sum of rounded numbers when one is zero', () => {
      expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);
    });

    it('should return the sum of rounded numbers when both are zero', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });
  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 2)).to.equal(2);
    });

    it('should return the difference of rounded numbers with one negative', () => {
      expect(calculateNumber('SUBTRACT', -1.2, 3.7)).to.equal(-5);
    });

    it('should return the difference of rounded numbers when both are negative', () => {
      expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
    });

    it('should return the difference of rounded numbers when one is zero', () => {
      expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4);
    });

    it('should return the difference of rounded numbers when both are zero', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return the quotient of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 9.5, 2.1)).to.equal(5);
    });

    it('should return the quotient of rounded numbers with one negative', () => {
      expect(calculateNumber('DIVIDE', -10, 2)).to.equal(-5);
    });

    it('should return the quotient of rounded numbers when both are negative', () => {
      expect(calculateNumber('DIVIDE', -10, -2)).to.equal(5);
    });

    it('should return Error when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
  });
  it('should throw an error for an invalid type', () => {
    expect(() => {
      calculateNumber('INVALID_TYPE', 10, 2);
    }).to.throw('Invalid type');
  });
});
