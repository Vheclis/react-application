const logger = require('../Utils/Logger');
/**
 * @typedef {Object} QuestionService
 * @property {function(questionInfo: Object): Promise<Object>} createQuestion
 */

/**
 *
 * @param {QuestionRepository} questionRepository
 * @param {IdRepository} idRepository
 * @returns {QuestionService}
 */
function QuestionService(questionRepository, idRepository) {
  return {
    /**
     * @param {QuestionObject} questionInfo
     * @returns {Promise<Object>}
     */
    async createQuestion(questionInfo) {
      logger.trace('Entered QuestionService::createQuestion', questionInfo);
      questionInfo.id = await idRepository.getId('question', questionInfo);
      return questionRepository.createQuestion(questionInfo)
        .then((savedDoc) => {
          logger.debug('QuestionService::createQuestion saved question');
          return savedDoc;
        });
    },
  };
}

module.exports = QuestionService;
