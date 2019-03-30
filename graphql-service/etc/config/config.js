const config = {};

config.log = {
    level: 'trace',
  };

config.mongo = {
    serverUri: 'mongodb://localhost:27017/questions',
    options: { useNewUrlParser: true },
}

module.exports = config;