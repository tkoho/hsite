import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { Button } from './Button';

export function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1F2B5F]/5 via-[#2B3377]/5 to-[#3B4393]/5">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2B5F] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#1A1F3D]/70 mb-8 max-w-2xl mx-auto">
            Talk to our team about your requirements and learn how we can help transform your payment processing.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="group">
              <span>Talk To Our Team</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}