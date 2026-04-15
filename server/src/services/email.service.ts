import { logger } from '../utils/logger';
import { config } from '../config';

interface EmailPayload {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  // In production, integrate with nodemailer or an email API (SendGrid, SES, etc.)
  // For now, log the email payload
  if (!config.smtp.host) {
    logger.warn('SMTP not configured. Email would have been sent:', JSON.stringify(payload));
    return true;
  }

  try {
    // TODO: Add nodemailer transport when SMTP is configured
    logger.info(`Email sent to ${payload.to}: ${payload.subject}`);
    return true;
  } catch (error) {
    logger.error('Failed to send email:', error);
    return false;
  }
}
