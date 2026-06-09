import { ValidationErrors } from '../types';

// Validation utility functions
export const validateEmail = (email: string): string => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validatePassword = (password: string): string => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (!/\d/.test(password)) return 'Password must contain at least one number';
  return '';
};

export const validateRequired = (value: string, fieldName = 'This field'): string => {
  if (!value || value.trim() === '') return `${fieldName} is required`;
  return '';
};

export const validateCheckbox = (checked: boolean, message = 'This field is required'): string => {
  if (!checked) return message;
  return '';
};

// Form-specific validation functions
export const validateBookDemoForm = (values: {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  jobTitle?: string;
  numProducts?: string;
  primaryMarket?: string;
  message?: string;
}): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  const firstNameError = validateRequired(values.firstName || '', 'First name');
  if (firstNameError) errors.firstName = firstNameError;
  
  const lastNameError = validateRequired(values.lastName || '', 'Last name');
  if (lastNameError) errors.lastName = lastNameError;
  
  const emailError = validateEmail(values.email || '');
  if (emailError) errors.email = emailError;
  
  const companyError = validateRequired(values.company || '', 'Company name');
  if (companyError) errors.company = companyError;
  
  return errors;
};

export const validateSignupForm = (values: {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  company?: string;
  country?: string;
  agreed?: boolean;
}): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  const firstNameError = validateRequired(values.firstName || '', 'First name');
  if (firstNameError) errors.firstName = firstNameError;
  
  const lastNameError = validateRequired(values.lastName || '', 'Last name');
  if (lastNameError) errors.lastName = lastNameError;
  
  const emailError = validateEmail(values.email || '');
  if (emailError) errors.email = emailError;
  
  const passwordError = validatePassword(values.password || '');
  if (passwordError) errors.password = passwordError;
  
  const companyError = validateRequired(values.company || '', 'Company name');
  if (companyError) errors.company = companyError;
  
  const countryError = validateRequired(values.country || '', 'Country');
  if (countryError) errors.country = countryError;
  
  const agreedError = validateCheckbox(values.agreed || false, 'You must agree to the terms');
  if (agreedError) errors.agreed = agreedError;
  
  return errors;
};

export const validateSigninForm = (values: {
  email?: string;
  password?: string;
}): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  const emailError = validateEmail(values.email || '');
  if (emailError) errors.email = emailError;
  
  const passwordError = validateRequired(values.password || '', 'Password');
  if (passwordError) errors.password = passwordError;
  
  return errors;
};

// Enhanced error messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  password: 'Password must be at least 8 characters with 1 number',
  terms: 'You must agree to the terms and conditions',
  network: 'Network error. Please try again.',
  generic: 'Something went wrong. Please try again.',
} as const;

// Success messages  
export const SUCCESS_MESSAGES = {
  demoBooked: 'Demo booked successfully! We will contact you within 24 hours to schedule your personalized session.',
  signup: 'Account created successfully! Welcome to StableDPP.',
  signin: 'Signed in successfully! Redirecting to your dashboard.',
  contactForm: 'Message sent successfully! We will get back to you soon.',
} as const;