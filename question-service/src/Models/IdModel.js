/**
 * @typedef {Model} IdModel
 */


/**
 * @param {Mongoose} mongoose
 */
function IdModel(mongoose) {
  const idSchema = mongoose.Schema({
    lastId: Number,
    type: String,
  }, {
    versionKey: false,
    timestamps: true,
  });

  return mongoose.model('ids', idSchema);
}

module.exports = IdModel;
