const QuestionMutationFactory = require('../../../../src/Resolvers/Mutations/QuestionMutations');
const QuestionFixtures = require('../../../fixtures/QuestionFixtures');
const MongoUtils = require('../../../../src/Utils/MongoUtils');
const CommunicationError = require('../../../../src/Error/CommunicationError');
const BadRequestError = require('../../../../src/Error/BadRequestError');
const ResourceNotFoundError = require('../../../../src/Error/ResourceNotFoundError');
const { expect, assert } = require('chai');
const mongodb = require('mongodb');
const sinon = require('sinon');

describe('QuestionMutation', () => {
  let insertOneStub;
  let questionCollectionStub;
  let findOneAndUpdateStub;
  let ObjectIdStub;
  let deleteQuestionStub;
  beforeEach(() => {
    deleteQuestionStub = sinon.stub();
    insertOneStub = sinon.stub();
    ObjectIdStub = sinon.stub(mongodb, 'ObjectId');
    findOneAndUpdateStub = sinon.stub();
    const dateNow = new Date(QuestionFixtures.dateNow);
    this.clock = sinon.useFakeTimers(dateNow);
    questionCollectionStub = {
      insertOne: insertOneStub,
      findOneAndUpdate: findOneAndUpdateStub,
      deleteOne: deleteQuestionStub,
    };
    questionMutation = QuestionMutationFactory(questionCollectionStub)
      .getMutation();
  })

  afterEach(() => {
    sinon.restore();
    this.clock.restore();
  })
  const { 
    questionArgsDefault,
    questionArgsDefaultWithDate,
    questionDefaultReturnFromMongo,
  } = QuestionFixtures;
  describe('createQuestion', () => {
    it('should insert question into database', (done) => {
      const treatObjectStub = sinon.stub(MongoUtils, 'treatObject');
      insertOneStub
        .withArgs(questionArgsDefaultWithDate)
        .resolves({ ops: [questionDefaultReturnFromMongo] });
      treatObjectStub
        .withArgs(questionDefaultReturnFromMongo)
        .returns(questionDefaultReturnFromMongo);

      questionMutation.createQuestion(null, questionArgsDefault, null, null)
        .then((response) => {
          sinon.assert.calledOnce(insertOneStub);
          sinon.assert.calledOnce(treatObjectStub);
          expect(response).to.eql(questionDefaultReturnFromMongo);
          done();
        })
    });
    it('should throw an error of Communication', (done) => {
      const errorMock = new Error('errorMessage');
      const treatObjectStub = sinon.stub(MongoUtils, 'treatObject');
      insertOneStub
        .withArgs(questionArgsDefaultWithDate)
        .rejects(errorMock);

      questionMutation.createQuestion(null, questionArgsDefault, null, null)
      .catch((error) => {
        sinon.assert.calledOnce(insertOneStub);
        sinon.assert.notCalled(treatObjectStub);
        expect(error instanceof CommunicationError).to.equal(true);
        expect(error.message).to.equal('Error trying to reach for the DB');
        done();
      });
    });
  });
  describe('updateQuestion', () => {
    const {
      questionArgsToUpdate,
      questionArgsDescUpdated,
    } = QuestionFixtures;
    it('should update question on the database', (done) => {
      const treatObjectStub = sinon.stub(MongoUtils, 'treatObject');
      ObjectIdStub
        .returns(questionArgsToUpdate._id);
      findOneAndUpdateStub.resolves({ value: questionArgsDescUpdated });
      treatObjectStub
        .withArgs(questionArgsDescUpdated)
        .returns(questionArgsDescUpdated);

      questionMutation.updateQuestion(null, questionArgsToUpdate, null, null)
        .then((response) => {
          sinon.assert.calledOnce(findOneAndUpdateStub);
          sinon.assert.calledOnce(treatObjectStub);
          sinon.assert.calledOnce(ObjectIdStub);
          expect(response).to.eql(questionArgsDescUpdated);
          done();
        });
    });
    it('should throw an error of Communication', (done) => {
      const errorMock = new Error('errorMessage');
      const treatObjectStub = sinon.stub(MongoUtils, 'treatObject');
      findOneAndUpdateStub
        .rejects(errorMock);

      questionMutation.updateQuestion(null, questionArgsToUpdate, null, null)
        .catch((error) => {
          sinon.assert.calledOnce(findOneAndUpdateStub);
          sinon.assert.notCalled(treatObjectStub);
          expect(error instanceof CommunicationError).to.equal(true);
          expect(error.message).to.equal('Error trying to reach for the DB');
          done();
        });
    });
    it('Should throw BadRequestError when only _id passed', () => {
      const treatObjectStub = sinon.stub(MongoUtils, 'treatObject');
      assert.throws(
        () => questionMutation.updateQuestion(null, { _id: 'someHash' }, null, null),
        BadRequestError,
        'No value to update was passed and its required.'
      );
      
      sinon.assert.notCalled(findOneAndUpdateStub);
      sinon.assert.notCalled(treatObjectStub);
    });
    it('should throw ResourceNotFoundError when no file returned from db', (done) => {
      const questionToUpdate = QuestionFixtures.questionArgsToUpdate;
      const treatObjectStub = sinon.stub(MongoUtils, 'treatObject');
      findOneAndUpdateStub
        .resolves({ value: null });

      questionMutation.updateQuestion(null, questionToUpdate, null, null)
        .catch((error) => {
          sinon.assert.calledOnce(findOneAndUpdateStub);
          sinon.assert.notCalled(treatObjectStub);
          expect(error instanceof ResourceNotFoundError).to.equal(true);
          done();
        });
    })
  });
  describe('deleteQuestion', () => {
    it('should delete the question of _id from the DB', () => {
      const argMock = { _id: 'someHash' };
      ObjectIdStub
        .withArgs('someHash')
        .returns('someHash');

      deleteQuestionStub
        .withArgs({ _id: 'someHash' })
        .resolves({ deletedCount: 1 });
      
      expectedResponse = 'Deleted 1 documents'
      questionMutation.deleteQuestion(null, argMock, null, null)
        .then((response) => {
          sinon.assert.calledOnce(ObjectIdStub);
          sinon.assert.calledOnce(deleteQuestionStub);
          expect(response).to.eql(expectedResponse);
        })
    });
    it('should throw ResourceNotFoundError when no file returned from db', (done) => {
      deleteQuestionStub
        .resolves({ deletedCount: 0 });

      questionMutation.deleteQuestion(null, { _id: 'someHash' }, null, null)
        .catch((error) => {
          sinon.assert.calledOnce(deleteQuestionStub);
          expect(error instanceof ResourceNotFoundError).to.equal(true);
          done();
        });
    });
    it('should throw an error of Communication', (done) => {
      const errorMock = new Error('errorMessage');
      deleteQuestionStub
        .rejects(errorMock);

      questionMutation.deleteQuestion(null, { _id: 'someHash' }, null, null)
        .catch((error) => {
          sinon.assert.calledOnce(deleteQuestionStub);
          expect(error instanceof CommunicationError).to.equal(true);
          expect(error.message).to.equal('Error trying to reach for the DB');
          done();
        });
    });
  });
});