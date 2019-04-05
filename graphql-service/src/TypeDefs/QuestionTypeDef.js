function QuestionTypeDefFactory() {
  return {
    getTypeDef() {
      return [`
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
      `]}
  }
}

module.exports = QuestionTypeDefFactory;