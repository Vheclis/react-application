const mongodb = require('mongodb');
const CommunicationError = require('../../../../src/Error/CommunicationError');
const ResourceNotFoundError = require('../../../../src/Error/ResourceNotFoundError');
const { expect } = require('chai');
const MongoUtils = require('../../../../src/Utils/MongoUtils');
const QuestionFixtures = require('../../../fixtures/QuestionFixtures');
const QuestionQueryFactory = require('../../../../src/Resolvers/Querys/QuestionQuery');
const sinon = require('sinon');

describe('QuestionQuery', () => {
  let findStub;
  let findOneStub;
  let questionQuery;
  let treatObjectStub;
  let ObjectIdStub;
  beforeEach(() => {
    treatObjectStub = sinon.stub(MongoUtils, 'treatObject');
    ObjectIdStub = sinon.stub(mongodb, 'ObjectId');
    findStub = sinon.stub();
    findOneStub = sinon.stub();
    const questionCollection = {
      find: findStub,
      findOne: findOneStub,
    }
    questionQuery = QuestionQueryFactory(questionCollection).getQuery();
  });
  afterEach(() => {
    sinon.restore();
  })
  const {
    questionDefaultReturnFromMongo
  } = QuestionFixtures
  describe('question', () => {
    const _id = 'someHash1111';
    it('should get question of _id informed', () => {
      ObjectIdStub
        .withArgs(_id)
        .returns(_id);
      findOneStub
        .withArgs(_id)
        .resolves(questionDefaultReturnFromMongo);
      treatObjectStub
        .withArgs(questionDefaultReturnFromMongo)
        .returns(questionDefaultReturnFromMongo);

      questionQuery.question(null, { _id })
        .then((response) => {
          expect(response).to.eql(questionDefaultReturnFromMongo);
          sinon.assert.calledOnce(ObjectIdStub);
          sinon.assert.calledOnce(findOneStub);
          sinon.assert.calledOnce(treatObjectStub);
      });
    });
    it('should throw an error of Communication', (done) => {
      const errorMock = new Error('errorMessage');
      findOneStub
        .rejects(errorMock);

      questionQuery.question(null, { _id }, null, null)
        .catch((error) => {
          sinon.assert.calledOnce(findOneStub);
          expect(error instanceof CommunicationError).to.equal(true);
          expect(error.message).to.equal('Error trying to reach for the DB');
          done();
        });
    });
    it('should throw ResourceNotFoundError when no file returned from db', (done) => {
      findOneStub
        .resolves(null);

      questionQuery.question(null, { _id }, null, null)
        .catch((error) => {
          sinon.assert.calledOnce(findOneStub);
          expect(error instanceof ResourceNotFoundError).to.equal(true);
          done();
        });
    });
  });
  describe('questions', () => {
    it('should return all questions from database', (done) => {
      const responseMock = {
        toArray: () => Promise.resolve([
          questionDefaultReturnFromMongo,
          questionDefaultReturnFromMongo
        ])
      }
      findStub
        .returns(responseMock);
      treatObjectStub
        .withArgs(questionDefaultReturnFromMongo)
        .returns(questionDefaultReturnFromMongo);
      questionQuery.questions()
        .then((response) => {
          expect(response).to.eql([
            questionDefaultReturnFromMongo,
            questionDefaultReturnFromMongo
          ]);
          sinon.assert.calledOnce(findStub);
          sinon.assert.calledTwice(treatObjectStub);
          done();
        })
    })
    it('should throw ResourceNotFoundError when no file returned from db', (done) => {
      const responseMock = {
        toArray: () => Promise.resolve([])
      }
      findStub
        .returns(responseMock);
      treatObjectStub
        .withArgs(questionDefaultReturnFromMongo)
        .returns(questionDefaultReturnFromMongo);
      questionQuery.questions()
        .catch((error) => {
          sinon.assert.calledOnce(findStub);
          expect(error instanceof ResourceNotFoundError).to.equal(true);
          sinon.assert.notCalled(treatObjectStub);
          done();
        })
    });
    it('should throw an error of Communication', (done) => {
      const errorMock = new Error('errorMessage');
      const responseMock = {
        toArray: () => Promise.reject(errorMock)
      }
      findStub
        .returns(responseMock);

      questionQuery.questions()
        .catch((error) => {
          sinon.assert.calledOnce(findStub);
          expect(error instanceof CommunicationError).to.equal(true);
          expect(error.message).to.equal('Error trying to reach for the DB');
          done();
        });
    });
  });
});