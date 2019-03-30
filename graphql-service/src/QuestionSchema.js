const QuestionTypeDefFactory = require('./TypeDefs/QuestionTypeDef');
const QuestionResolverFactory = require('./Resolvers/QuestionResolver');
const { serverUri , options } = require('../etc/config/config').mongo;
const { MongoClient } = require('mongodb');
const { makeExecutableSchema } = require('graphql-tools');

function getSchema() {
    return MongoClient.connect(serverUri, options)
        .then((client) => {
            const db = client.db('serverDB')
            const Question = db.collection('questions');
            const QuestionTypeDef = QuestionTypeDefFactory();
            const QuestionResolver = QuestionResolverFactory(Question);
            const typeDefs = QuestionTypeDef.getTypeDef();
            const resolvers = QuestionResolver.getResolver();
            return makeExecutableSchema({
                typeDefs,
                resolvers
            });
        });
}

module.exports = {
    getSchema
}
