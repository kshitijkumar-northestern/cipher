import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from '../../services/email.service';
import { config } from '../../config';
import { logger } from '../../utils/logger';

export async function submitContact(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, company, phone, service, message } = req.body;
    const id = uuidv4();

    logger.info(`New contact submission: ${id} from ${name} (${email})`);

    await sendEmail({
      to: config.contactEmail,
      subject: `New Contact Form Submission - ${service}`,
      body: `
Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone || 'N/A'}
Service: ${service}
Message: ${message}
      `.trim(),
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us. We will get back to you shortly.',
      data: { id },
    });
  } catch (error) {
    logger.error('Contact submission failed:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form. Please try again later.',
    });
  }
}
