const logger = require('../Utils/Logger');
const ResourceNotFoundError = require('../Error/ResourceNotFoundError');
const config = require('../../etc/config/serviceConfig');

/**
 * @typedef {Object} QuestionController
 * @property {function(req: Request, res: Response)} createQuestionAction
 * @property {function(req: Request, res: Response)} updateQuestionAction
 * @property {function(req: Request, res: Response)} deleteQuestionAction
 * @property {function(req: Request, res: Response)} listAllQuestionsAction
 */

 /**
  * @typedef {Object} PaginationObject
  * @property {Number} pageNumber
  * @property {Number} pageSize
  */

/**
 * @param {PaginationObject} pagination 
 * @param {{totalCount: Number}} info 
 * @returns {pageSize: Number, pageNumber: Number, totalCount: Number}
 */
const getAttributes = (pagination, info) => ({
  pageSize: pagination.pageSize,
  pageNumber: pagination.pageNumber,
  totalCount: info.totalCount,
})

const isStringValid = (arg) => typeof arg !== 'undefined' && arg !== null && arg !== ''

/**
 * @param {{pageNumber: String, pageSize: String}} query 
 * @returns {PaginationObject}
 */
function getPagination(query) {
  let pageNumber = config.pagination.defaultPageNumber;
  let pageSize = config.pagination.defaultPageSize;
  if (isStringValid(query.pageNumber)) {
    pageNumber = parseInt(query.pageNumber, 10);
  }
  if (isStringValid(query.pageSize)) {
    pageSize = parseInt(query.pageSize, 10);
  }
  return {
    pageNumber,
    pageSize
  }
}

/**
 * @param {QuestionService} questionService
 * @returns {QuestionController}
 */
function QuestionController(questionService) {
  return {
    /**
     * @param {Request} req
     * @param {Response} res
     */
    createQuestionAction({ body }, res) {
      logger.trace('Entered QuestionController::createQuestionAction', body);
      return questionService.createQuestion(body)
        .then((questionInfo) => {
          logger.debug('QuestionController::createQuestionAction successfully created', { id: questionInfo.id });
          return res.status(201)
            .json({ message: 'Question created', responseObject: { questionId: questionInfo.id } });
        })
        .catch((error) => {
          logger.error('QuestionController::createQuestionAction error', { message: error.message });
          return res.status(500)
            .json({ message: 'Error creating question', error: error.message });
        });
    },
    /**
     * @param {Request} req
     * @param {Response} res
     */
    updateQuestionAction({ body, params }, res) {
      logger.trace('Entered QuestionController::updateQuestionAction', { body, params });
      return questionService.updateQuestion(body, params.id)
        .then(() => {
          logger.debug('QuestionController::updateQuestionAction question updated');
          return res.status(200)
            .json({ message: 'Question Updated' });
        })
        .catch((error) => {
          logger.error('QuestionController::updateQuestionAction error', { message: error.message });
          return res.status(500)
            .json({ message: 'Error updating question', error: error.message });
        });
    },
    /**
     * @param {Request} req
     * @param {Response} res
     */
    deleteQuestionAction({ params }, res) {
      logger.trace('Entered QuestionController::deleteQuestionAction', { params });
      return questionService.deleteQuestion(params.id)
      .then(() => {
        logger.debug('QuestionController::deleteQuestionAction question deleted');
        return res.status(200)
          .json({ message: 'Question Deleted' });
      })
      .catch((error) => {
        logger.error('QuestionController::deleteQuestionAction error', { message: error.message });
        return res.status(500)
          .json({ message: 'Error deleting question', error: error.message });
      });
    },
    /**
     * @param {Request} req
     * @param {Response} res
     */
    listAllQuestionsAction({ query }, res) {
      logger.trace('Entered QuestionController::listAllQuestionAction', { query });
      const pagination = getPagination(query);
      return questionService.listAllQuestions(pagination)
        .then((questionsInfo) => {
          const { questions } = questionsInfo;
          logger.debug('QuestionController::listAllQuestionsActions retrieved questions');
          return res.status(200)
            .json({
              message: 'Questons retrieved',
              responseObject: {
                questions,
                attributes: getAttributes(pagination, questionsInfo),
              },
            })
        })
        .catch((error) => {
          logger.error('QuestionController::listAllQuestionsAction error', { message: error.message });
          if (error instanceof ResourceNotFoundError) {
            return res.status(404)
              .json({ message: 'Questions not found', error: error.message });
          }
          return res.status(500)
            .json({ message: 'Error listing questions', error: error.message });
        });
    }
  };
}

module.exports = QuestionController;
