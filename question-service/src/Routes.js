const QuestionRoutes = require('./Routes/QuestionRoutes');

module.exports = {
  registryRoutes(app) {
    app.get('/', (req, res) => {
      res.status(200).json('Question system is on');
    });
    app.use(QuestionRoutes);
  },
};
