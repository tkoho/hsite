import React from 'react';
import { MessageSquare, Sliders, Globe } from 'lucide-react';
import { Container } from './ui/Container';

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-12 h-12 text-[#2B3377]" />,
      title: "Connect with our experts",
      description: "Our team will understand your needs and guide you through the process."
    },
    {
      icon: <Sliders className="w-12 h-12 text-[#2B3377]" />,
      title: "Customize your solution",
      description: "We'll tailor our payment solutions to match your specific requirements."
    },
    {
      icon: <Globe className="w-12 h-12 text-[#2B3377]" />,
      title: "Start accepting payments globally",
      description: "Launch your customized payment solution and expand your business globally."
    }
  ];

  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2B5F] mb-4">How It Works</h2>
          <p className="text-xl text-[#1A1F3D]/70">Simple steps to transform your payment system</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[#2B3377]/10" />
              )}
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#1F2B5F]">{step.title}</h3>
                <p className="text-[#1A1F3D]/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;