import express from 'express';
import config from 'config';
import BasicLogger from 'basic-logger';
import middlewaresConfig from './config/middlewares';
import ApiRoutes from './routes';

global.log = new BasicLogger({ showTimestamp: true });
const logger = new BasicLogger({ showTimestamp: true });

const app = express();

// Wrap all the middlewares with the server
middlewaresConfig(app);

app.use('/api/v1', ApiRoutes);

try {
  const { PORT } = config.get(process.env.NODE_ENV);
  app.listen(PORT);
  logger.info(`App listening at port ${PORT}`);
} catch (e) {
  logger.error(e);
  throw e;
}
