import React from 'react';
import { Container } from '../ui/Container';

export function DocumentationHeader() {
  return (
    <Container className="mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2B5F] mb-6">
          Welcome to KiwiPayment SDK
        </h1>
      </div>
    </Container>
  );
}
