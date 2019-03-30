const { ObjectId } = require('mongodb');
const logger = require('../Utils/Logger');
const ResourceNotFoundError = require('../Error/ResourceNotFoundError');
const CommunicationError = require('../Error/CommunicationError');
const BadRequestError = require('../Error/BadRequestError');
const _ = require('lodash');

function QuestionResolverFactory(questionCollection) {
  const treatObject = object => {
    const _id = object._id.toString();
    const createdAt = new Date(object.createdAt).toISOString();
    const updatedAt = new Date(object.updatedAt).toISOString();

    return {
      ...object,
      _id,
      createdAt,
      updatedAt,
    };
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
          questions: () => {
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
          createQuestion: (root, args, context, info) => {
            logger.trace('Entered QuestionResolver::createQuestion', { question: args });
            const dateNow = new Date();
            args.createdAt = dateNow;
            args.updatedAt = dateNow;
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
          updateQuestion: (root, args, context, info) => {
            logger.trace('Entered QuestionResolver::updateQuestion', { question: args });
            const questionId = args._id;
            delete args._id;
            if (_.isEmpty(args)) {
              logger.warn('QuestionResolver::updateQuestion no update value passed');
              throw new BadRequestError('No value to update was passed and its required.', 'QuestionResolver::updateQuestion');
            }
            const dateNow = new Date();
            args.updatedAt = dateNow;
            return questionCollection.findOneAndUpdate(
              { _id: ObjectId(questionId) },
              { $set: args },
              { returnOriginal: false }
            )
            .catch((error) => {
              logger.error('QuestionResolver::updateQuestion error trying to reach for the DB', {error: error.message});
              throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::updateQuestion');
            })
            .then((updatedDocument) => {
              if (_.isNil(updatedDocument.value))  {
                logger.warn('QuestionResolver::updateQuestion no question found with the followind id', { _id: questionId });
                throw new ResourceNotFoundError(`question of id ${ questionId }`, 'QuestionResolver::updateQuestion');
              }
              logger.debug('QuestionResolver::updateQuestion question updated');
              return treatObject(updatedDocument.value);
            })              
          },
          deleteQuestion: (root, args, context, info) => {
            const questionId = args._id;
            logger.trace('Entered QuestionResolver::deleteQuestion', { _id: questionId });
            return questionCollection.deleteOne({ _id: ObjectId(questionId) })
            .catch((error) => {
              logger.error('QuestionResolver::deleteQuestion error trying to reach for the DB', {error: error.message});
              throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::deleteQuestion');
            })
            .then((deleteInfo) => {
              if (deleteInfo.deletedCount === 0) {
                logger.warn('QuestionResolver::deleteQuestion no question found with the followind id', { _id: questionId });
                throw new ResourceNotFoundError(`question of id ${ questionId }`, 'QuestionResolver::updateQuestion');
              }
              const message = `Deleted ${deleteInfo.deletedCount} documents`;
              logger.debug(`QuestionResolver::deleteQuestion. ${message}`);
              return message;
            });
          }
        },
      };
    },
  };
}
  
module.exports = QuestionResolverFactory;