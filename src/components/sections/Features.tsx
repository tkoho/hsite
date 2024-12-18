import React from 'react';
import { Shield, TrendingUp, Globe, Bitcoin, Brain, Code2, Scale, LineChart } from 'lucide-react';
import { Container } from '../ui/Container';
import { FeatureCard } from '../ui/FeatureCard';
import { SectionHeader } from '../ui/SectionHeader';

export function Features() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-[#2B3377]" />,
      title: "90% Chargeback Reduction",
      description: "Smart contracts and advanced fraud prevention dramatically reduce operational losses."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#2B3377]" />,
      title: "85-90% Approval Rate",
      description: "Industry-leading success rates for credit card transactions in high-risk sectors."
    },
    {
      icon: <Globe className="w-12 h-12 text-[#2B3377]" />,
      title: "Global Payment Methods",
      description: "Support for UPI, PIX, PayID and other regional payment solutions."
    },
    {
      icon: <Bitcoin className="w-12 h-12 text-[#2B3377]" />,
      title: "Unlimited Crypto Volume",
      description: "No caps on cryptocurrency transactions with USDT settlement options."
    },
    {
      icon: <Brain className="w-12 h-12 text-[#2B3377]" />,
      title: "AI-Powered Security",
      description: "Real-time fraud detection reducing losses by up to 50%."
    },
    {
      icon: <Code2 className="w-12 h-12 text-[#2B3377]" />,
      title: "Developer-First API",
      description: "50% faster deployment with unified API for all payment methods."
    },
    {
      icon: <Scale className="w-12 h-12 text-[#2B3377]" />,
      title: "Enterprise Scalability",
      description: "Robust infrastructure handling high-volume transactions 24/7."
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#2B3377]" />,
      title: "25% Higher Conversion",
      description: "Customized payment flows and localized experiences boost sales."
    }
  ];

  return (
    <section className="py-24 bg-[#F5F6FA]">
      <Container>
        <SectionHeader
          title="Why Choose KiwiPayment?"
          subtitle="Industry-leading features powered by Banksy technology"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}