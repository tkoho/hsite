import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

const FEATURES = [
  'Unified API including all payment methods without any redirects to external providers.',
  'Tokenization and Smart Contracts To Eliminate Chargebacks and Secure Transactions',
  'Unlimited Crypto Transactions Including SOL, ETH and Top 30 Tokens',
  'Industry Leading Fraud Detection, Security and AI Protection',
  '80%-90% Credit Card Acceptance Rate',
] as const;

export function HeroContent() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
        Global Payment Processing for High Risk Industries
      </h1>
      <div className="flex flex-col gap-4">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="inline-flex font-bold items-center px-4 py-2 rounded-full bg-[#3AAA35]/10 text-[#3AAA35] text-sm lg:text-base"
          >
            <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Link to="/contact">
        <Button variant="secondary" size="lg" className="group w-full lg:w-auto mt-6">
          <span>Talk To Our Team</span>
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
}