// Type definitions for the application

export interface FormField {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  company: string;
  country?: string;
  jobTitle?: string;
  numProducts?: string;
  primaryMarket?: string;
  message?: string;
  agreed?: boolean;
}

export interface BookDemoForm extends FormField {
  jobTitle?: string;
  numProducts?: string;
  primaryMarket?: string;
  message?: string;
}

export interface SignupForm extends FormField {
  password?: string;
  country?: string;
  agreed?: boolean;
}

export interface SigninForm {
  email?: string;
  password?: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Step {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProductCategory {
  type: string | null;
  title: string;
  desc: string;
  tags: readonly string[];
  cta: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
}

export type ProductType = 'shirt' | 'jeans';
export type Country = typeof import('../constants').COUNTRIES[number];
export type TrustedBrand = typeof import('../constants').TRUSTED_BRANDS[number];