const logger = require('../Utils/Logger');
const CommunicationError = require('../Error/CommunicationError');

/**
 * @typedef {Object} QuestionRepository
 * @property {function(questionInfo: Object): Promise<Object>} createQuestion
 * @property {function(updatedQuestionInfo: Object, questionId: String): Promise<Void>} updateQuestion
 * @property {function(questionId: String): Promise<Void>} deleteQuestion
 * @property {function(pagination: PaginationObject): Promise<{totalCount: Number, questions: Array}>} listAllQuestions
 */

/**
 * @param {QuestionModel} questionModel
 * @constructor
 */
function QuestionRepository(questionModel) {
  return {
    /**
     * @param {Object} questionInfo
     * @returns {Promise<Object>}
     */
    createQuestion(questionInfo) {
      logger.trace('Entered QuestionRepository::createQuestion', questionInfo);
      try {
        const questionDoc = questionModel.create(questionInfo);
        return questionDoc.save()
          .then((savedDoc) => {
            logger.debug('QuestionRepository::createQuestion saved successfully');
            return savedDoc;
          });
      } catch (error) {
        logger.error('QuestionRepository::createQuestion error trying to save question doc.', error);
        throw new CommunicationError(`Error trying to save question doc. Error: ${error}`);
      }
    },
    /**
     * @param {QuestionObject} updatedQuestionInfo 
     * @param {String} questionId 
     * @returns {Promise<Void>}
     */
    updateQuestion(updatedQuestionInfo, questionId) {
      logger.trace('Entered QuestionRepository::updateQuestion', { data: updatedQuestionInfo, id: questionId });
      return questionModel.updateOne({ id: questionId }, { $set: updatedQuestionInfo })
        .then(() => {
          logger.debug('QuestionRepository::updateQuestion question updated');
        })
        .catch((error) => {
          logger.error('QuestionRepository::updateQuestion error trying to update question doc.', error);
          throw new CommunicationError(`Error trying to update question doc. Error: ${error}`);
        });
    },
    /**
     * @param {String} questionId 
     * @returns {Promise<Void>}
     */
    deleteQuestion(questionId) {
      logger.trace('Entered QuestionRepository::deleteQuestion', { id: questionId });
      return questionModel.deleteOne({ id: questionId })
        .then(() => {
          logger.debug('QuestionRepository::deleteQuestion question deleted');
        })
        .catch((error) => {
          logger.error('QuestionRepository::deleteQuestion error trying to delete question doc.', error);
          throw new CommunicationError(`Error trying to delete question doc. Error: ${error}`);
        });
    },
    /**
     * @param {PaginationObject} pagination
     * @returns {Promise<{totalCount: Number, questions: Array}>}
     */
    async listAllQuestions(pagination) {
      logger.trace('Entered QuestionRepository::listAllQuestions');
      const { pageNumber, pageSize } = pagination;
      const totalCount = await questionModel.countDocuments({});
      return questionModel.find({})
        .sort({ createdAt: -1 })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .then((questions) => {
          logger.debug('QuestionRepository::listAllQuestion questions found');
          return { totalCount, questions };
        })
        .catch((error) => {
          logger.error('QuestionRepository::listAllQuestions error trying to list questions doc.', error);
          throw new CommunicationError(`Error trying to list questions doc. Error: ${error}`);
        });
    }
  };
}

module.exports = QuestionRepository;
