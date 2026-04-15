import app from './app';
import { config } from './config';
import { logger } from './utils/logger';

const { port, nodeEnv } = config;

app.listen(port, () => {
  logger.info(`Server running on port ${port} in ${nodeEnv} mode`);
});
