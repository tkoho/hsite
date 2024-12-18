import React from 'react';
import { Container } from '../ui/Container';
import { Code2, Globe, Zap, Wrench, Gauge, Route } from 'lucide-react';

export function Security() {
  const features = [
    {
      icon: <Code2 className="w-16 h-16 text-[#3AAA35]" />,
      title: 'All-in-One Integration',
      description:
        'Support for every major payment method, unified under one API. Simplify your integration and reduce complexity.',
    },
    {
      icon: <Globe className="w-16 h-16 text-[#3AAA35]" />,
      title: 'Global Adaptability',
      description:
        'Localized payment methods, multi-currency support, and automatic compliance for seamless international growth.',
    },
    {
      icon: <Zap className="w-16 h-16 text-[#3AAA35]" />,
      title: 'Frictionless Experience',
      description:
        'Keep customers engaged with a seamless checkout process, no redirects, and enhanced conversion rates.',
    },
    {
      icon: <Wrench className="w-16 h-16 text-[#3AAA35]" />,
      title: 'Developer-Ready',
      description:
        'Quick integration with comprehensive SDKs, webhooks, and a sandbox environment for testing.',
    },
    {
      icon: <Gauge className="w-16 h-16 text-[#3AAA35]" />,
      title: 'Built for Scale',
      description:
        'Handle millions of transactions daily with unmatched reliability and performance, even during peak traffic.',
    },
    {
      icon: <Route className="w-16 h-16 text-[#3AAA35]" />,
      title: 'Real-Time Smart Routing',
      description:
        'Intelligent routing decisions for optimal processing paths, ensuring maximum efficiency and success rates.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#1F2B5F] via-[#2B3377] to-[#3B4393]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            KiwiPayment Unified API
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-semibold mb-8">
            Seamless. Secure. Scalable.
          </p>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Simplify payment processing with our all-in-one solution that integrates
            every major payment method into one powerful interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#2B3377]/50 backdrop-blur-sm p-6 md:p-8 rounded-xl text-center"
            >
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}