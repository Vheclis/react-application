const MongoUtils = require('../../../src/Utils/MongoUtils');
const { expect } = require('chai');
const QuestionFixtures = require('../../fixtures/QuestionFixtures');

describe('MongoUtils', () => {
  describe('treatObject', () => {
    const { questionNotTreated, questionTreated } = QuestionFixtures;
    it('receives an objects and treates its info returing it changed', () => {
      const response = MongoUtils.treatObject(questionNotTreated);
      expect(response).to.eql(questionTreated);
    });
  })
});
