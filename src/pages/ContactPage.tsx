import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactHeader } from '../components/contact/ContactHeader';
import { Container } from '../components/ui/Container';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F2B5F] via-[#2B3377] to-[#3B4393] py-32">
      <Container className="max-w-3xl">
        <ContactHeader />
        <ContactForm />
      </Container>
    </div>
  );
}