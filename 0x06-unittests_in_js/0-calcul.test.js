/* eslint-disable no-undef */
const assert = require('assert');
const { describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber function', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of rounded numbers with one negative', () => {
    assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
  });

  it('should return the sum of rounded numbers when both are negative', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should return the sum of rounded numbers when one is zero', () => {
    assert.strictEqual(calculateNumber(0, 3.7), 4);
  });

  it('should return the sum of rounded numbers when both are zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
