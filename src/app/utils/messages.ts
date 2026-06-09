// Error and Success Messages - Following SEO micro-copy guidelines

export const ERROR_MESSAGES = {
  email: 'Please enter a valid work email address.',
  password: 'Passwords must be at least 8 characters and include one number.',
  required: 'This field is required.',
  emailTaken: 'An account with this email already exists. Sign in or reset your password.'
};

export const SUCCESS_MESSAGES = {
  signup: 'Your account is ready. Welcome to StableDPP! Your first DPP awaits.',
  dppCreated: 'Your Digital Product Passport has been created and anchored to the blockchain. Copy your QR code link below.',
  demoBooked: 'Your demo is confirmed! Check your inbox for a calendar invite from the StableDPP team.',
  subscribed: 'You are subscribed to the StableDPP Briefing. See you in your inbox every Tuesday.'
};

export const LOADING_MESSAGES = {
  dpp: 'Anchoring your passport to the blockchain…',
  qr: 'Generating your GS1 Digital Link QR code…'
};

export const ERROR_404 = {
  headline: 'Oops — this page must have slipped through the supply chain.',
  body: 'The page you are looking for does not exist. Head back to the homepage or contact our team.',
  cta: 'Go to Homepage →'
};

export const EMPTY_STATES = {
  dashboard: 'Your DPP catalogue is empty. Create your first blockchain-verified passport to get started.',
  cta: 'Create Your First DPP →'
};

// Validation functions using exact error messages
export function validateEmail(email: string): string | null {
  if (!email) return ERROR_MESSAGES.required;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return ERROR_MESSAGES.email;
  return null;
}

export function validatePassword(password: string): string | null {
  if (!password) return ERROR_MESSAGES.required;
  if (password.length < 8 || !/\d/.test(password)) return ERROR_MESSAGES.password;
  return null;
}

export function validateRequired(value: string, fieldName?: string): string | null {
  if (!value || value.trim() === '') return ERROR_MESSAGES.required;
  return null;
}