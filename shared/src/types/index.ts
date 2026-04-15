export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  items?: string[];
}

export interface ServiceSection {
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface PageContent {
  hero: HeroContent;
  sections: ServiceSection[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface SuiteProduct {
  name: string;
  description: string;
}

export interface Suite {
  title: string;
  description: string;
  products: SuiteProduct[];
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Location {
  country: string;
  flag: string;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: string;
}
