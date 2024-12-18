import React from 'react';
import { PricingHeader } from '../components/pricing/PricingHeader';
import { PricingFeatures } from '../components/pricing/PricingFeatures';
import { PricingTables } from '../components/pricing/PricingTables';
import { ContactCTA } from '../components/ui/ContactCTA';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] pt-32 pb-24">
      <PricingHeader />
      <PricingFeatures />
      <PricingTables />
      <ContactCTA />
    </div>
  );
}