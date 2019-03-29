const logger = require('../Utils/Logger');
const CommunicationError = require('../Error/CommunicationError');

/**
 * @typedef {Object} QuestionRepository
 * @property {function(questionInfo: Object): Promise<Object>} createQuestion
 * @property {function(updatedQuestionInfo, questionId): Promise<Void>} updateQuestion
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
          logger.error('QuestionRepository::updateQuestion error trying to save question doc.', error);
          throw new CommunicationError(`Error trying to save question doc. Error: ${error}`);
        });
    }
  };
}

module.exports = QuestionRepository;
