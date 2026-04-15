import { CorsOptions } from 'cors';
import { config } from './index';

export const corsOptions: CorsOptions = {
  origin: config.nodeEnv === 'production'
    ? config.clientUrl
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
