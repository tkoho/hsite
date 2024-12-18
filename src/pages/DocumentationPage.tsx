import React from 'react';
import { DocumentationHeader } from '../components/documentation/DocumentationHeader';
import { DocumentationContent } from '../components/documentation/DocumentationContent';
import { ContactCTA } from '../components/ui/ContactCTA';

export function DocumentationPage() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] pt-32 pb-24">
      <DocumentationHeader />
      <DocumentationContent />
      <ContactCTA />
    </div>
  );
}