import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormTextArea } from './FormTextArea';
import { FormCheckbox } from './FormCheckbox';
import { PARTNERSHIP_TYPES, REFERRAL_SOURCES, INDUSTRIES } from '../../utils/form-options';
import { EMAILJS_CONFIG, EMAIL_TEMPLATE_MAPPING } from '../../utils/email-config';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Map form fields to email template variables
    const templateParams = Object.entries(data).reduce((acc, [key, value]) => {
      const templateKey = EMAIL_TEMPLATE_MAPPING[key as keyof typeof EMAIL_TEMPLATE_MAPPING];
      if (templateKey) {
        acc[templateKey] = value;
      }
      return acc;
    }, {} as Record<string, unknown>);

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="First Name"
          name="firstName"
          type="text"
          required
        />
        <FormInput
          label="Last Name"
          name="lastName"
          type="text"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
        />
        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="Company Name"
          name="companyName"
          type="text"
          required
        />
        <FormInput
          label="Company Website (optional)"
          name="companyWebsite"
          type="url"
          placeholder="https://"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormSelect
          label="Select Partnership Type"
          name="partnershipType"
          options={PARTNERSHIP_TYPES}
          required
        />
        <FormSelect
          label="How Did You Hear About Us?"
          name="referralSource"
          options={REFERRAL_SOURCES}
          required
        />
      </div>

      <FormSelect
        label="Select Industry"
        name="industry"
        options={INDUSTRIES}
        required
      />

      <FormTextArea
        label="How Can We Help You?"
        name="message"
        required
      />

      <div className="space-y-6">
        <FormCheckbox
          label={
            <>
              I agree to the{' '}
              <a href="/terms" className="text-[#3AAA35] hover:underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-[#3AAA35] hover:underline">
                Privacy Policy
              </a>
            </>
          }
          name="agreement"
          required
        />

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-700 font-medium">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700 font-medium">
              Something went wrong. Please try again or contact us directly at support@kiwipayment.com
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-3 bg-[#3AAA35] text-white rounded-full font-semibold hover:bg-[#2D8029] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}