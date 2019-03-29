const config = {};

config.log = {
  level: 'trace',
};

config.mongo = {
  serverUri: 'mongodb://question-database/serverDB',
  options: { useNewUrlParser: true },
};

config.pagination = {
  defaultPageSize: 20,
  defaultPageNumber: 1,
}

module.exports = config;
