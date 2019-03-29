const logger = require('../Utils/Logger');
/**
 * @typedef {Object} QuestionService
 * @property {function(questionInfo: Object): Promise<Object>} createQuestion
 * @property {function(updatedQuestionInfo, questionId): Promise<Void>} updateQuestion
 * @property {function(questionId: String): Promise<Void>} deleteQuestion
 */

function treatUpdatedQuestionInfo(updatedQuestionInfo) {
  if (updatedQuestionInfo.hasOwnProperty('id')) {
    delete updatedQuestionInfo.id;
  }
  return updatedQuestionInfo;
}

/**
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
    /**
     * @param {QuestionObject} updatedQuestionInfo 
     * @param {String} questionId 
     * @returns {Promise<Void>}
     */
    updateQuestion(updatedQuestionInfo, questionId) {
      logger.trace('Entered QuestionService::updateQuestion', { data: updatedQuestionInfo, id: questionId });
      const treatedUpdatedQuestionInfo = treatUpdatedQuestionInfo(updatedQuestionInfo);
      return questionRepository.updateQuestion(treatedUpdatedQuestionInfo, questionId);
    },
    /**
     * @param {String} questionId 
     * @returns {Promise<Void>}
     */
    deleteQuestion(questionId) {
      logger.trace('Entered QuestionService::deleteQuestion', { id: questionId });
      return questionRepository.deleteQuestion(questionId);
    }
  };
}

module.exports = QuestionService;
