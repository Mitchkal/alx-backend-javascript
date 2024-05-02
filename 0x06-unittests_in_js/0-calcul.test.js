/* eslint-disable no-undef */
import { strictEqual } from 'assert';
import calculateNumber from './0-calcul.js';
import { describe } from 'mocha';

describe('calculateNumber function', () => {
  it('should return the sum of rounded numbers', () => {
    strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of rounded numbers with one negative', () => {
    strictEqual(calculateNumber(-1.2, 3.7), 3);
  });

  it('should return the sum of rounded numbers when both are negative', () => {
    strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should return the sum of rounded numbers when one is zero', () => {
    strictEqual(calculateNumber(0, 3.7), 4);
  });

  it('should return the sum of rounded numbers when both are zero', () => {
    strictEqual(calculateNumber(0, 0), 0);
  });
});
