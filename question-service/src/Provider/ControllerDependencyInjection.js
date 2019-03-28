const QuestionControllerFactory = require('../Controller/QuestionController');
const { QuestionService } = require('./ProvidersDepencyInjection');

const QuestionController = QuestionControllerFactory(QuestionService);

module.exports = {
  QuestionController,
};
