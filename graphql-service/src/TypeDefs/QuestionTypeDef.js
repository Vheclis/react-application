function QuestionTypeDefFactory() {
  return {
    getTypeDef() {
      return [`
        type Query {
          question(_id: String): Question
          questions: [Question]
        }

        type Question {
          _id: String
          description: String
          answers: [String]
          theme: String
          correctAnswer: String
        }

        type Mutation {
          createQuestion(description: String, answers: [String],
            theme: String, correctAnswer: String): Question
        }

        schema {
          query: Query
          mutation: Mutation
        }
      `]}
  }
}

module.exports = QuestionTypeDefFactory;