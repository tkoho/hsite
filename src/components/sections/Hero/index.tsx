import React from 'react';
import { Container } from '../../ui/Container';
import { HeroContent } from './HeroContent';
import { HeroVideo } from './HeroVideo';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#1F2B5F] via-[#2B3377] to-[#3B4393] min-h-screen">
      <Container className="pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <div className="order-first lg:order-last">
            <HeroVideo />
          </div>
        </div>
      </Container>
    </div>
  );
}