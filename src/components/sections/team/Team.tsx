import React from 'react';
import { Container } from '../../ui/Container';
import { TeamHeader } from './TeamHeader';
import { TeamGrid } from './TeamGrid';

export function Team() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1F2B5F] via-[#2B3377] to-[#3B4393]">
      <Container>
        <TeamHeader />
        <TeamGrid />
      </Container>
    </section>
  );
}