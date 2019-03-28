const mongoose = require('mongoose');

const QuestionServiceFactory = require('../Service/QuestionService');
const QuestionRepositoryFactory = require('../Repository/QuestionRepository');
const IdRepositoryFactory = require('../Repository/IdRepository');

const QuestionModel = require('../Models/QuestionModel')(mongoose);
const IdModel = require('../Models/IdModel')(mongoose);


const QuestionRepository = QuestionRepositoryFactory(QuestionModel);
const IdRepository = IdRepositoryFactory(IdModel);

const QuestionService = QuestionServiceFactory(QuestionRepository, IdRepository);

module.exports = {
  QuestionService,
};
