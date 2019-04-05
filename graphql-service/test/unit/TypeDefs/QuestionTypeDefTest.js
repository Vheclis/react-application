const QuestionTypeDef = require('../../../src/TypeDefs/QuestionTypeDef')();
const { expect } = require('chai');

const expectedTypeDef = [`
        type Query {
          question(_id: ID!): Question
          questions: [Question]
        }

        type DeletionInformation {
          deletedCount: Int
          _id: ID
        }

        type Question {
          _id: ID!
          description: String!
          answers: [String!]!
          theme: String!
          correctAnswer: String!
          createdAt: String!
          updatedAt: String!
        }

        type Mutation {
          updateQuestion(_id: ID!, description: String, answers: [String],
            theme: String, correctAnswer: String): Question 
          createQuestion(description: String!, answers: [String!]!,
            theme: String!, correctAnswer: String!): Question
          deleteQuestion(_id: ID!): DeletionInformation
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