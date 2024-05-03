const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and display result', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.callCount).to.be.equal(1);
    expect(calculateNumberSpy.firstCall.args).to.deep.equal(['SUM', 100, 20]);
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.returned(120)).to.be.true;

    calculateNumberSpy.restore();
  });
});
