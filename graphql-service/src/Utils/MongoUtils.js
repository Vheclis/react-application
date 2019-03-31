const MongoUtils = {};

MongoUtils.treatObject = object => {
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

module.exports = MongoUtils;
