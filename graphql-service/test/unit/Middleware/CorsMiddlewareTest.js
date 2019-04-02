const CorsMiddleare = require('../../../src/Middleware/CorsMiddleware');
const sinon = require('sinon');
const { expect } = require('chai');

describe('CorsMiddleware', () => {
  it('should return response with right headers', () => {
    const setHeader = sinon.stub();
    const nextStub = sinon.stub();
    const reqStub = null;

    setHeader
      .withArgs('Access-Control-Allow-Origin', '*');
    setHeader
      .withArgs('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
    setHeader
      .withArgs(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type, authorization, authorization-issuer, cache-control'
      );
    setHeader
      .withArgs('Access-Control-Allow-Credentials', true);

    CorsMiddleare(reqStub, { setHeader }, nextStub);

    sinon.assert.calledOnce(nextStub);
    sinon.assert.callCount(setHeader, 4);
  });
});
