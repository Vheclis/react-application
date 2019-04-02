const QuestionTypeDef = require('../../../src/TypeDefs/QuestionTypeDef')();
const { expect } = require('chai');

const expectedTypeDef = [`
        type Query {
          question(_id: String!): Question
          questions: [Question]
        }

        type Question {
          _id: String!
          description: String!
          answers: [String!]!
          theme: String!
          correctAnswer: String!
          createdAt: String!
          updatedAt: String!
        }

        type Mutation {
          updateQuestion(_id: String!, description: String, answers: [String],
            theme: String, correctAnswer: String): Question 
          createQuestion(description: String!, answers: [String!]!,
            theme: String!, correctAnswer: String!): Question
          deleteQuestion(_id: String!): String
        }

        schema {
          query: Query
          mutation: Mutation
        }
      `];

describe('QuestionTypeDef', () => {
  it('should return default typedef for question schema', () => {
    const typeDef = QuestionTypeDef.getTypeDef();
    expect(typeDef).to.eql(expectedTypeDef)
  })
})