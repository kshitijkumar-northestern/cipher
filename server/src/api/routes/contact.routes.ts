import { Router } from 'express';
import { submitContact } from '../controllers/contact.controller';
import { validateBody, contactSchema } from '../middleware/validator';
import { contactLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/', contactLimiter, validateBody(contactSchema), submitContact);

export default router;
