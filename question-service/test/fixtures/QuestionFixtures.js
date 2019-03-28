const QuestionFixtures = {};

QuestionFixtures.requestBodyWithoutId = {
  description: 'Descrição do exercício',
  answers: ['one', 'two', 'three'],
  theme: 'Portuguese',
  correctAnswer: 0,
};

QuestionFixtures.questionWithIdInteger = {
  id: 12345,
  description: 'Descrição do exercício',
  answers: ['one', 'two', 'three'],
  theme: 'Portuguese',
  correctAnswer: 0,
};

QuestionFixtures.questionWithIdAsString = {
  id: '12345',
  description: 'Descrição do exercício',
  answers: ['one', 'two', 'three'],
  theme: 'Portuguese',
  correctAnswer: 0,
};

module.exports = QuestionFixtures;
