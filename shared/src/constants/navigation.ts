import { NavItem } from '../types';

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'AI Automation Operations', href: '/ai-automation' },
      { label: 'Infrastructure Operations', href: '/infrastructure' },
      { label: 'Software Products', href: '/software-products' },
    ],
  },
  { label: 'Staffing & Teams', href: '/staffing' },
  { label: 'About', href: '/about' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Resources', href: '/resources' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV = {
  services: [
    { label: 'AI Automation Operations', href: '/ai-automation' },
    { label: 'Infrastructure Operations', href: '/infrastructure' },
    { label: 'Software Products', href: '/software-products' },
    { label: 'Staffing & Teams', href: '/staffing' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Careers', href: '/careers' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],
  products: [
    { label: 'CRM', href: '/software-products#crm' },
    { label: 'ITSM / Helpdesk', href: '/software-products#itsm' },
    { label: 'Cloud Monitoring', href: '/software-products#monitoring' },
    { label: 'AI Assistants Platform', href: '/software-products#ai-assistants' },
  ],
};
