function QuestionTypeDefFactory() {
  return {
    getTypeDef() {
      return [`
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
      `]}
  }
}

module.exports = QuestionTypeDefFactory;