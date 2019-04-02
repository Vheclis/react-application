const mongodb = require('mongodb');
const logger = require('../../Utils/Logger');
const MongoUtils = require('../../Utils/MongoUtils');
const ResourceNotFoundError = require('../../Error/ResourceNotFoundError');
const CommunicationError = require('../../Error/CommunicationError');

function QuestionQueryFactory(questionCollection) {
  return {
    getQuery() {
      return {
        question: (root, { _id }) => {
          logger.trace('Entered QuestionResolver::question', { _id });
          return questionCollection.findOne(mongodb.ObjectId(_id))
            .catch((error) => {
              logger.error('QuestionResolver::question error trying to reach for the DB', { error: error.message });
              throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::question');
            })
            .then((questionObj) => {
              if (questionObj === null) {
                logger.warn('QuestionResolver::question no question found with the followind id', { _id });
                throw new ResourceNotFoundError(`question of id ${_id}`, 'QuestionResolver::question');
              }
              logger.debug('QuestionResolver::question question found');
              return MongoUtils.treatObject(questionObj);
            });
        },
        questions: () => {
          logger.trace('Entered QuestionResolver::questions');

          return questionCollection.find({}).toArray()
            .catch((error) => {
              logger.error('QuestionResolver::questions error trying to reach for the DB', { error: error.message });
              throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::questions');
            })
            .then((questions) => {
              const questionCount = questions.length;
              if (questionCount <= 0) {
                logger.warn('QuestionResolver::questions no questions found');
                throw new ResourceNotFoundError(`questions`, 'QuestionResolver::questions');
              }
              logger.debug(`QuestionResolver::question ${questionCount} questions found`);
              return questions.map(MongoUtils.treatObject);
            });
        },
      };
    },
  };
}

module.exports = QuestionQueryFactory;