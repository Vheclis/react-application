const logger = require('../Utils/Logger');
const CommunicationError = require('../Error/CommunicationError');

/**
 * @typedef {Object} QuestionRepository
 * @property {function(questionInfo: Object): Promise<Object>} createQuestion
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
  };
}

module.exports = QuestionRepository;
