/**
 * @typedef {Model} QuestionModel
 * @property {function(question: Object): QuestionModel} create
 */

/**
 * @typedef {Object} QuestionObject
 * @property {String} id
 * @property {String} description
 * @property {Array} answers
 * @property {String} theme
 * @property {Number} correctAnswer
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @param {Mongoose} mongoose
 */
function QuestionModel(mongoose) {
  const questionSchema = mongoose.Schema({
    id: { type: String, required: true },
    description: { type: String, required: true },
    answers: { type: Array, required: true },
    theme: { type: String, required: true },
    correctAnswer: { type: String, required: true },
  }, {
    versionKey: false,
    timestamps: true,
  });

  questionSchema.statics.create = function create(question) {
    return new this(question);
  };

  return mongoose.model('questions', questionSchema);
}

module.exports = QuestionModel;
