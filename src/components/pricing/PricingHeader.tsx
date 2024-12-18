import React from 'react';
import { Container } from '../ui/Container';

export function PricingHeader() {
  return (
    <Container className="mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2B5F] mb-6">
          Our Transparent Fee Structure
        </h1>
        <p className="text-xl text-[#1A1F3D]/70">
          At KiwiPayment, we believe in complete transparency and cost-effectiveness. Our pricing is designed to provide value while eliminating unnecessary costs and surprises.
        </p>
      </div>
    </Container>
  );
}