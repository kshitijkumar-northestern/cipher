import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { corsOptions } from './config/cors';
import { apiLimiter } from './api/middleware/rateLimiter';
import { errorHandler } from './api/middleware/errorHandler';
import apiRoutes from './api/routes';

const app = express();

// Security
app.use(helmet());
app.use(cors(corsOptions));

// Parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined'));

// Rate limiting
app.use('/api', apiLimiter);

// Routes
app.use('/api', apiRoutes);

// Error handling
app.use(errorHandler);

export default app;
