const { ObjectId } = require('mongodb');

function QuestionResolverFactory(questionCollection) {
  const treatObject = object => {
    object._id = object._id.toString();
    return object;
  };

  return {
    getResolver() {
      return {
        Query: {
          question: async (root, {_id}) => {
            return treatObject(await questionCollection.findOne(ObjectId(_id)));
          },
          questions: async () => {
            return (await questionCollection.find({}).toArray()).map(treatObject);
          },
        },
        Mutation: {
          createQuestion: async (root, args, context, info) => {
            const response = await questionCollection.insertOne(args)
            return treatObject(response.ops[0]);
          },
        },
      };
    },
  };
}
  
  module.exports = QuestionResolverFactory;