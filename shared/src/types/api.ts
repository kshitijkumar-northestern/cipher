export interface HealthCheckResponse {
  status: 'ok' | 'error';
  timestamp: string;
  uptime: number;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  message: string;
  createdAt: string;
}

export type ServiceCategory =
  | 'ai-automation'
  | 'infrastructure'
  | 'software-products'
  | 'staffing'
  | 'other';
