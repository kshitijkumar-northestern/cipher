import { Router } from 'express';
import healthRoutes from './health.routes';
import contactRoutes from './contact.routes';

const router = Router();

router.use('/health', healthRoutes);
router.use('/contact', contactRoutes);

export default router;
