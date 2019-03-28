const express = require('express');
const { QuestionController } = require('../Provider/ControllerDependencyInjection');
const router = express.Router();

router.post('/questions', QuestionController.createQuestionAction);

module.exports = router;
