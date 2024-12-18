export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_kiwiPayment',  // Your EmailJS service ID
  TEMPLATE_ID: 'template_lmxjow6',    // Your EmailJS template ID 
  PUBLIC_KEY: 'fX8GIrt7YfbY9Pwsx'    // Your EmailJS public key
} as const;

// Map form field names to email template variables
export const EMAIL_TEMPLATE_MAPPING = {
  firstName: 'from_name',
  lastName: 'last_name', 
  email: 'from_email',
  phone: 'phone',
  companyName: 'company',
  companyWebsite: 'website',
  partnershipType: 'partnership_type',
  referralSource: 'referral_source',
  industry: 'industry',
  message: 'message'
} as const;