import React from 'react';
import { Container } from '../ui/Container';
import { CreditCard, Shield, TrendingUp, Wallet } from 'lucide-react';

export function PricingFeatures() {
  const features = [
    {
      icon: <CreditCard className="w-12 h-12 text-[#3AAA35]" />,
      title: 'No Hidden Fees',
      description: [
        "Problem: Many PSP's offer 'low fees', but fail to mention hidden toxic fees. For example, a provider may offer low credit card fees, but fail to mention cross-border and currency conversion fees, statement or reporting fees, volume threshold penalties, or excessive chargeback fees.",
        "All of our fees are clearly outlined, upfront, and all inclusive. You won't encounter unexpected charges for setup, processing, or additional features.",
        "Our unified fee model consolidates payment processing costs, ensuring you know exactly what you're paying for.",
      ],
    },
    {
      icon: <Shield className="w-12 h-12 text-[#3AAA35]" />,
      title: 'Savings on Chargebacks',
      description: [
        'Our competitors solutions are not tailored to meet the needs of high risk industry, resulting in acceptance rates as low as 50-60% for credit card transactions.',
        'Advanced Chargeback Prevention: Our high risk tailored algorithms increase acceptance rates disputes by up to 90%, saving you money and time.',
        'Our fees match our value. By minimizing chargebacks, you significantly reduce revenue loss and associated administrative costs, significantly improving your bottom line and outperforming any reduction in fees our competitors can offer.',
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#3AAA35]" />,
      title: 'Volume-Based Discounts',
      description: [
        'Scale with Savings: As your transaction volume grows, enjoy reduced processing fees through volume-based pricing tiers.',
      ],
    },
    {
      icon: <Wallet className="w-12 h-12 text-[#3AAA35]" />,
      title: 'Flexible Settlement Options',
      description: [
        'No Extra Costs for Crypto Settlements: We offer cost-efficient crypto-to-stablecoin or fiat conversions with competitive rates.',
        'International Settlements: Transparent conversion fees for multi-currency settlements ensure fairness and cost efficiency.',
      ],
    },
  ];

  return (
    <Container className="mb-24">
      <div className="grid md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold text-[#1F2B5F] mb-4">
              {feature.title}
            </h3>
            <div className="space-y-4">
              {feature.description.map((desc, i) => (
                <p key={i} className="text-[#1A1F3D]/70">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
