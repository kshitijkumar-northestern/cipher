import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required').max(200),
  phone: z.string().max(20).optional(),
  service: z.enum(['ai-automation', 'infrastructure', 'software-products', 'staffing', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export function validateBody(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: result.error.flatten().fieldErrors,
      });
      return;
    }
    req.body = result.data;
    next();
  };
}
