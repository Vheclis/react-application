const mongodb = require('mongodb');
const logger = require('../../Utils/Logger');
const MongoUtils = require('../../Utils/MongoUtils');
const ResourceNotFoundError = require('../../Error/ResourceNotFoundError');
const CommunicationError = require('../../Error/CommunicationError');
const BadRequestError = require('../../Error/BadRequestError');
const _ = require('lodash');

function QuestionMutationFactory(questionCollection) {
  return {
    getMutation() {
      return {
        createQuestion: (root, args, context, info) => {
          logger.trace('Entered QuestionResolver::createQuestion', { question: args });
          const dateNow = new Date();
          args.createdAt = dateNow;
          args.updatedAt = dateNow;
          return questionCollection.insertOne(args)
            .catch((error) => {
              logger.error('QuestionResolver::createQuestion error trying to reach for the DB', { error: error.message });
              throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::createQuestion');
            })
            .then((response) => {
              logger.debug('QuestionResolver::createQuestion question created');
              return MongoUtils.treatObject(response.ops[0]);
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
            { _id: mongodb.ObjectId(questionId) },
            { $set: args },
            { returnOriginal: false }
          )
            .catch((error) => {
              logger.error('QuestionResolver::updateQuestion error trying to reach for the DB', { error: error.message });
              throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::updateQuestion');
            })
            .then((updatedDocument) => {
              if (_.isNil(updatedDocument.value)) {
                logger.warn('QuestionResolver::updateQuestion no question found with the followind id', { _id: questionId });
                throw new ResourceNotFoundError(`question of id ${questionId}`, 'QuestionResolver::updateQuestion');
              }
              logger.debug('QuestionResolver::updateQuestion question updated');
              return MongoUtils.treatObject(updatedDocument.value);
            })
        },
        deleteQuestion: (root, args, context, info) => {
          const questionId = args._id;
          logger.trace('Entered QuestionResolver::deleteQuestion', { _id: questionId });
          return questionCollection.deleteOne({ _id: mongodb.ObjectId(questionId) })
            .catch((error) => {
              logger.error('QuestionResolver::deleteQuestion error trying to reach for the DB', { error: error.message });
              throw new CommunicationError('Error trying to reach for the DB', 'QuestionResolver::deleteQuestion');
            })
            .then((deleteInfo) => {
              if (deleteInfo.deletedCount === 0) {
                logger.warn('QuestionResolver::deleteQuestion no question found with the followind id', { _id: questionId });
                throw new ResourceNotFoundError(`question of id ${questionId}`, 'QuestionResolver::updateQuestion');
              }
              const message = `Deleted ${deleteInfo.deletedCount} documents`;
              logger.debug(`QuestionResolver::deleteQuestion. ${message}`);
              return message;
            });
        }
      };
    },
  };
}

module.exports = QuestionMutationFactory;