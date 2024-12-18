import React from 'react';
import { Shield, CreditCard, Settings } from 'lucide-react';
import { Container } from './ui/Container';

const features = [
  {
    icon: <Shield className="w-12 h-12 text-[#2B3377]" />,
    title: "Low Fees & Protection",
    description: "Industry-leading rates with built-in chargeback protection for your peace of mind."
  },
  {
    icon: <CreditCard className="w-12 h-12 text-[#2B3377]" />,
    title: "Multiple Payment Options",
    description: "Accept payments via Visa, Mastercard, cryptocurrencies, and more."
  },
  {
    icon: <Settings className="w-12 h-12 text-[#2B3377]" />,
    title: "Customizable Solutions",
    description: "Tailored payment solutions that scale with your business needs."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#F5F6FA]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2B5F] mb-4">Lower Fees and Chargeback Protection</h2>
          <p className="text-xl text-[#1A1F3D]/70">Our system offers lower fees, with no third-party redirects</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-[#1F2B5F]">{feature.title}</h3>
              <p className="text-[#1A1F3D]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;