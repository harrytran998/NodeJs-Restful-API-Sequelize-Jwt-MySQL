const express = require('express');
const routes = require('../routers');

const app = express();

app.use('/api/v1', routes);

const server = app.listen(process.env.PORT || 3000, () => {
  // logger.info(`Server started at ${process.env.PORT || 3000}`);
  // logger.info('Press Ctrl-C to exit');
});

module.exports = server;
