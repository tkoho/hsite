import React from 'react';
import { Container } from '../ui/Container';

export function PricingTables() {
  const serviceTypes = [
    { type: 'Credit Card Processing', description: '7.5% to 6.25% fees, T+2 to T+3 settlement' },
    { type: 'Crypto Processing', description: '5% fees, USDT settlement' },
    { type: 'APMs', description: 'Regional pricing at request.' },
    { type: 'Chargebacks Limited', description: 'Limited risk due to verification mechanisms' },
    { type: 'Compliance', description: 'Advanced protocols for industry AML/KYC regions' },
  ];

  const volumePricing = [
    { volume: '$0 – $10M', creditCardFee: '7.5%', cryptoFee: '5%' },
    { volume: '$10M – $20M', creditCardFee: '6.75%', cryptoFee: '4.75%' },
    { volume: '$20M – $30M', creditCardFee: '6.5%', cryptoFee: '4.5%' },
    { volume: '$30M+', creditCardFee: '6.25%', cryptoFee: '4.25%' },
  ];

  return (
    <Container>
      <div className="space-y-12">
        {/* Service Types Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-2 bg-[#3AAA35] text-white font-semibold">
            <div className="p-4">Type</div>
            <div className="p-4">Description</div>
          </div>
          {serviceTypes.map((service, index) => (
            <div key={index} className="grid grid-cols-2 border-b last:border-b-0">
              <div className="p-4 font-medium text-[#1F2B5F]">{service.type}</div>
              <div className="p-4 text-[#1A1F3D]/70">{service.description}</div>
            </div>
          ))}
        </div>

        {/* Volume-based Pricing Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <h2 className="text-2xl font-bold text-center text-[#1F2B5F] py-6">
            Pricing Strategy
          </h2>
          <div className="grid grid-cols-3 bg-[#3AAA35] text-white font-semibold">
            <div className="p-4">Monthly Flow</div>
            <div className="p-4">Credit Card Fee</div>
            <div className="p-4">Crypto Fee</div>
          </div>
          {volumePricing.map((tier, index) => (
            <div key={index} className="grid grid-cols-3 border-b last:border-b-0">
              <div className="p-4 font-medium text-[#1F2B5F]">{tier.volume}</div>
              <div className="p-4 text-[#1A1F3D]/70">{tier.creditCardFee}</div>
              <div className="p-4 text-[#1A1F3D]/70">{tier.cryptoFee}</div>
            </div>
          ))}
          <div className="p-4 text-[#1A1F3D]/70 italic text-sm">
            Additional Point: On-demand or automated settlement options, tailored according to regional requirements and transaction volumes.
          </div>
        </div>
      </div>
    </Container>
  );
}