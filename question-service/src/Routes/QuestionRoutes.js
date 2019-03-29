const express = require('express');
const { QuestionController } = require('../Provider/ControllerDependencyInjection');
const router = express.Router();

router.post('/questions', QuestionController.createQuestionAction);
router.put('/questions/:id', QuestionController.updateQuestionAction);
router.delete('/questions/:id', QuestionController.deleteQuestionAction);

module.exports = router;
