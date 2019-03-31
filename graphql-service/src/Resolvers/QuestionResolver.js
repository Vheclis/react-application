const QuestionQueryFactory = require('./Querys/QuestionQuery');
const QuestionMutationFactory = require('./Mutations/QuestionMutations');

function QuestionResolverFactory(questionCollection) {
  const QuestionQuerys = QuestionQueryFactory(questionCollection);
  const QuestionMutations = QuestionMutationFactory(questionCollection);
  return {
    getResolver() {
      return {
        Query: QuestionQuerys.getQuery(),
        Mutation: QuestionMutations.getMutation(),
      };
    },
  };
}
  
module.exports = QuestionResolverFactory;