const logger = require('../Utils/Logger');
/**
 * @typedef {Object} QuestionController
 * @property {function(req: Request, res: Response)} createQuestionAction
 */

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
    updateQuestionAction({ body, params }, res) {
      logger.trace('Entered QuestionController::updateQuestionAction', {body, params});
      return questionService.updateQuestion(body, params.id)
        .then(() => {
          logger.debug('QuestionController::updateQuestionAction question updated');
          return res.status(200)
            .json({ message: 'Question Updated' });
        });
    }
  };
}

module.exports = QuestionController;
