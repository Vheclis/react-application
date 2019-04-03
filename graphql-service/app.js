const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const http = require('http');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const QuestionSchema = require('./src/QuestionSchema');
const logger = require('./src/Utils/Logger');
const corsMiddleware = require('./src/Middleware/CorsMiddleware');

function serverSetup(port, schema) {
  const app = express();

  app.use(corsMiddleware);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  function logErrors(err, req, res, next) {
    logger.error(err);
    next(err);
  }
  app.use(logErrors);

  function errorHandler(err, req, res, next) {
    res.status(err.status).json({ error: err });
    next(err);
  }
  app.use(errorHandler);

  app.use('/graphql',
    cors(),
    bodyParser.json(),
    graphqlExpress({
      schema,
      formatError(error) {
        let operation;
        let code = 400;
        if (error.originalError && error.originalError.errorLocation) {
          operation = error.originalError.errorLocation;
        }
        if (error.originalError && error.originalError.code) {
          code = error.originalError.code;
        }
        logger.error('Error trying to proccess request!!', { error: error.message });
        return {
          message: error.message,
          code,
          locations: error.locations || undefined,
          APIErrorLocation: operation,
          path: error.path || undefined
        }
      },
    }),
  );


  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }))
  app.set('port', port);

  return app;
}

let app;

QuestionSchema.getSchema()
  .then((schema) => {
    const port = process.env.PORT || 8081;
    app = serverSetup(port, schema);

    const server = http.createServer(app);

    server.listen(port, () => {
      logger.info(`Graphql Service is up on port: ${port}`);
    });
  });


module.exports = app;
