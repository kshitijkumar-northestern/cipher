import { Location, Differentiator } from '../types';

export const COMPANY_NAME = 'Cipher';
export const COMPANY_TAGLINE = 'AI & Cloud Operations Partner for Modern Enterprises';
export const COMPANY_EMAIL = 'info@yourcompany.com';
export const COMPANY_PHONE = '+1 (xxx) xxx-xxxx';

export const LOCATIONS: Location[] = [
  { country: 'United States', flag: '' },
  { country: 'Canada', flag: '' },
  { country: 'India', flag: '' },
  { country: 'Australia', flag: '' },
];

export const HERO_CONTENT = {
  title: 'AI & Cloud Operations Partner for Modern Enterprises',
  subtitle:
    'We implement, manage, and operate your workflows, cloud, data, and DevOps systems end-to-end — with continuous improvement, auto-healing, auto-scaling, and cost optimization built in.',
  cta: { label: 'Get Started', href: '/contact' },
};

export const CORE_PILLARS = [
  {
    title: 'AI Automation Operations',
    description: 'AI-powered workflows, assistants, and performance automation.',
    href: '/ai-automation',
    icon: 'brain',
  },
  {
    title: 'Infrastructure Operations',
    description:
      'Cloud, data, database, DevOps, and infrastructure operations across AWS, Azure, GCP, OCI, and Private Cloud.',
    href: '/infrastructure',
    icon: 'cloud',
  },
  {
    title: 'Software Products',
    description: 'A unified suite of business, infrastructure, and automation tools.',
    href: '/software-products',
    icon: 'layers',
  },
];

export const WHY_CHOOSE_US = [
  'Global team of experts',
  '24/7 operations',
  'AI-powered automation',
  'Multi-cloud & Private Cloud',
  'Continuous improvement',
  'Auto-healing & auto-scaling',
  'Infrastructure and service cost optimization',
  'Global delivery model',
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Service-First Delivery',
    description: 'We lead with service, not just software.',
    icon: 'handshake',
  },
  {
    title: 'AI-Powered Operations',
    description: 'Intelligent automation across every layer of your operations.',
    icon: 'cpu',
  },
  {
    title: 'Multi-Cloud & Private Cloud',
    description: 'Operate across AWS, Azure, GCP, OCI, and Private Cloud environments.',
    icon: 'cloud',
  },
  {
    title: '24/7 Global Operations',
    description: 'Round-the-clock monitoring, support, and operations.',
    icon: 'globe',
  },
  {
    title: 'Continuous Improvement',
    description: 'We never stop optimizing your systems and processes.',
    icon: 'trending-up',
  },
  {
    title: 'Auto-Healing & Auto-Scaling',
    description: 'Self-healing systems that scale with your business demands.',
    icon: 'refresh',
  },
  {
    title: 'Cost Optimization',
    description: 'AI-driven cost reduction across compute, storage, and operations.',
    icon: 'dollar-sign',
  },
  {
    title: 'AI-Based Scheduling',
    description: 'Intelligent appointment & meeting scheduling across voice, text, and web.',
    icon: 'calendar',
  },
  {
    title: 'Global Team of Experts',
    description: 'World-class talent across cloud, AI, DevOps, data, and operations.',
    icon: 'users',
  },
];

export const AI_AUTOMATION_CONTENT = {
  overview:
    'We deliver AI-powered operations that automate workflows, improve performance, and run your business processes end-to-end.',
  aiPoweredOps: [
    {
      title: 'AI Assistants',
      description:
        'Intelligent assistants that support teams, automate decisions, and reduce manual work — including AI-driven appointment & meeting scheduling across voice, text, and web.',
    },
    {
      title: 'Workflow Automation',
      description: 'End-to-end automation of business, IT, support, and operational processes.',
    },
    {
      title: 'Performance Improvement',
      description: 'Automation that enhances speed, accuracy, and throughput.',
    },
    {
      title: 'Fleet Security Scan',
      description: 'Identification of security anomalies and remediation.',
    },
    {
      title: 'Human Oversight',
      description: 'Exception handling, approvals, quality checks, and governance.',
    },
  ],
  continuousImprovement: [
    {
      title: 'Behavior Learning (ML)',
      description: 'Systems learn from patterns and outcomes.',
    },
    {
      title: 'Infrastructure & Service Cost Optimization',
      description: 'AI-driven cost reduction across compute, storage, and operations.',
    },
    {
      title: 'Auto-Healing',
      description: 'Automated detection and correction of failures.',
    },
    {
      title: 'Auto-Scaling',
      description: 'Dynamic scaling of workloads and automations.',
    },
  ],
  howItWorks: ['Assess', 'Automate', 'Operate', 'Improve', 'Scale'],
  clientOutcomes: [
    'Higher performance',
    'Reduced manual workload',
    'Faster cycle times',
    '24/7 automation',
    'Human oversight',
    'Self-healing & self-scaling automation',
    'Infrastructure and service cost optimization',
  ],
};

export const INFRASTRUCTURE_CONTENT = {
  overview:
    'We build, manage, and operate your cloud, data, database, and DevOps infrastructure across AWS, Azure, GCP, OCI, and Private Cloud.',
  cloudOps: [
    {
      title: 'Cloud Platforms',
      description: 'AWS, Azure, GCP, OCI, Private Cloud.',
    },
    {
      title: 'Infrastructure & Service Management',
      description:
        'Health monitoring, service performance, incident triage, preventive maintenance, patching, configuration, availability, capacity planning, and routine maintenance.',
    },
  ],
  dataOps: [
    { title: 'Database Management', description: 'End-to-end database administration and optimization.' },
    { title: 'Data Transformation', description: 'Transform raw data into actionable intelligence.' },
    {
      title: 'Data Lake Setup & Operations',
      description: 'ETL/ELT, data quality monitoring, storage optimization.',
    },
  ],
  devOps: [
    { title: 'CI/CD Pipeline Management', description: 'Continuous integration and continuous delivery pipelines.' },
    { title: 'Release Automation', description: 'Automated release processes for faster delivery.' },
    { title: 'Infrastructure as Code (IaC)', description: 'Manage infrastructure through version-controlled code.' },
    { title: 'Environment Management', description: 'Consistent environments across dev, staging, and production.' },
    { title: 'Observability & Logging', description: 'Full-stack observability with centralized logging.' },
  ],
  continuousImprovement: [
    'Infrastructure and service cost optimization',
    'Auto-healing infrastructure',
    'Auto-scaling infrastructure',
    'Continuous optimization cycles',
    'Performance tuning',
  ],
  clientOutcomes: [
    '24/7 uptime',
    'Faster deployments',
    'Lower costs',
    'Self-healing systems',
    'Auto-scaling environments',
    'Continuous optimization',
    'Improved reliability',
  ],
};

export const SOFTWARE_PRODUCTS_CONTENT = {
  overview: 'Our SaaS suite powers business, infrastructure, and automation operations.',
  businessSuite: {
    title: 'Business Operations Suite',
    products: [
      { name: 'CRM', description: 'Customer relationship management built for modern teams.' },
      { name: 'ITSM / Helpdesk', description: 'IT service management and helpdesk automation.' },
      { name: 'Project Management', description: 'Plan, track, and deliver projects with ease.' },
      { name: 'Knowledgebase / Self-Service Portal', description: 'Self-service support and knowledge management.' },
    ],
  },
  infraSuite: {
    title: 'Infrastructure & Monitoring Suite',
    products: [
      { name: 'Cloud Monitoring', description: 'Monitor cloud resources across all providers.' },
      { name: 'Infrastructure Monitoring', description: 'Real-time infrastructure health and performance.' },
      { name: 'Database Monitoring', description: 'Database performance and query optimization.' },
      { name: 'Cost Optimization Dashboard', description: 'Visualize and reduce infrastructure costs.' },
      { name: 'Log Monitoring', description: 'Centralized log aggregation and analysis.' },
      { name: 'Secure Backup & Recovery', description: 'Automated backup and disaster recovery.' },
    ],
  },
  aiSuite: {
    title: 'AI Automation Suite',
    products: [
      { name: 'AI Assistants Platform', description: 'Build and deploy intelligent AI assistants.' },
      { name: 'Workflow Automation Engine', description: 'Design and run automated workflows.' },
      { name: 'Performance Improvement Engine', description: 'AI-driven performance optimization.' },
      { name: 'Chatbot Engine', description: 'Conversational AI for customer and internal support.' },
      {
        name: 'AI-Based Scheduling Platform',
        description: 'Intelligent appointment & meeting scheduling via voice, text, and web.',
      },
    ],
  },
};

export const ABOUT_CONTENT = {
  whoWeAre: 'A global technology, SaaS, and operations partner.',
  mission: 'To run your operations so you can focus on your core business.',
  team: 'A global team of experts across cloud, AI, DevOps, data, automation, and operations.',
  approach: 'Service-first. Product-enabled. Operations-driven.',
};

export const SERVICE_CATEGORIES = [
  { value: 'ai-automation', label: 'AI Automation Operations' },
  { value: 'infrastructure', label: 'Infrastructure Operations' },
  { value: 'software-products', label: 'Software Products' },
  { value: 'staffing', label: 'Staffing & Teams' },
  { value: 'other', label: 'Other' },
];
