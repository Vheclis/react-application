const QuestionFixtures = {};

QuestionFixtures.dateNow = '1996-10-15T00:05:32.000Z';

QuestionFixtures.questionArgsDefault = {
  description: 'testDescription',
  answers: ['one', 'two'],
  theme: 'testTheme',
  correctAnswer: '0'
}

QuestionFixtures.questionArgsDefaultWithDate = {
  description: 'testDescription',
  answers: ['one', 'two'],
  theme: 'testTheme',
  correctAnswer: '0',
  createdAt: new Date(QuestionFixtures.dateNow),
  updatedAt: new Date(QuestionFixtures.dateNow),
}

QuestionFixtures.questionArgsToUpdate = {
  _id: 'someHash',
  description: 'testDescriptionUpdated',
  answers: ['one', 'two'],
  theme: 'testTheme',
  correctAnswer: '0',
  createdAt: new Date('2000-10-15T00:05:32.000Z'),
  updatedAt: new Date('2000-10-15T00:05:32.000Z'),
}

QuestionFixtures.questionArgsToUpdateWithoutId = {
  description: 'testDescriptionUpdated',
  answers: ['one', 'two'],
  theme: 'testTheme',
  correctAnswer: '0',
  createdAt: new Date('2000-10-15T00:05:32.000Z'),
  updatedAt: new Date('2000-10-15T00:05:32.000Z'),
}

QuestionFixtures.questionArgsDescUpdated = {
  _id: 'someHash',
  description: 'testDescriptionUpdated',
  answers: ['one', 'two'],
  theme: 'testTheme',
  correctAnswer: '0',
  createdAt: new Date('2000-10-15T00:05:32.000Z'),
  updatedAt: new Date(QuestionFixtures.dateNow),
}

QuestionFixtures.questionDefaultReturnFromMongo = {
  _id: 'someHash',
  description: 'testDescription',
  answers: ['one', 'two'],
  theme: 'testTheme',
  correctAnswer: '0',
  createdAt: QuestionFixtures.dateNow,
  updatedAt: QuestionFixtures.dateNow,
}

module.exports = QuestionFixtures;
