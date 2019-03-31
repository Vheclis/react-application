const config = {};

config.log = {
    level: 'trace',
  };

config.mongo = {
    serverUri: 'mongodb://question-database/serverDB',
    options: { useNewUrlParser: true },
    collectionNames: ['questions'],
}

module.exports = config;