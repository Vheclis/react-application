const { ObjectId } = require('mongodb');
const logger = require('../Utils/Logger');
const ResourceNotFoundError = require('../Error/ResourceNotFoundError');
const CommunicationError = require('../Error/CommunicationError');

function QuestionResolverFactory(questionCollection) {
  const treatObject = object => {
    object._id = object._id.toString();
    return object;
  };

  return {
    getResolver() {
      return {
        Query: {
          question: (root, {_id}) => {
            logger.trace('Entered QuestionResolver::question', { _id });
            return questionCollection.findOne(ObjectId(_id))
              .catch((error) => {
                logger.error('QuestionResolver::question error trying to reach for the DB', {error: error.message});
                throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::question');
              })
              .then((questionObj) => {
                if (questionObj === null) {
                  logger.warn('QuestionResolver::question no question found with the followind id', { _id });
                  throw new ResourceNotFoundError(`question of id ${_id}`, 'QuestionResolver::question');
                }
                logger.debug('QuestionResolver::question question found');
                return treatObject(questionObj);
              });
          },
          questions: async () => {
            logger.trace('Entered QuestionResolver::questions');

            return questionCollection.find({}).toArray()
              .catch((error) => {
                logger.error('QuestionResolver::questions error trying to reach for the DB', {error: error.message});
                throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::questions');
              })
              .then((questions) => {
                const questionCount = questions.length;
                if (questionCount <= 0) {
                  logger.warn('QuestionResolver::questions no questions found');
                  throw new ResourceNotFoundError(`questions`, 'QuestionResolver::questions');
                }
                logger.debug(`QuestionResolver::question ${questionCount} questions found`);
                return questions.map(treatObject);
              });
          },
        },
        Mutation: {
          createQuestion: async (root, args, context, info) => {
            logger.trace('Entered QuestionResolver::createQuestion', { question: args })
            return questionCollection.insertOne(args)
              .catch((error) => {
                logger.error('QuestionResolver::createQuestion error trying to reach for the DB', {error: error.message});
                throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::createQuestion');
              })
              .then((response) => {
                logger.debug('QuestionResolver::createQuestion question created');
                return treatObject(response.ops[0]);
              })
          },
        },
      };
    },
  };
}
  
module.exports = QuestionResolverFactory;