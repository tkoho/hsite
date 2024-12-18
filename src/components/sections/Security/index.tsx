import React from 'react';
import { Container } from '../../ui/Container';
import { SecurityHeader } from './SecurityHeader';
import { SecurityFeatureList } from './SecurityFeatureList';
import { SecurityDetails } from './SecurityDetails';

export function Security() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1F2B5F] via-[#2B3377] to-[#3B4393]">
      <Container>
        <SecurityHeader />
        <SecurityFeatureList />
        <SecurityDetails />
      </Container>
    </section>
  );
}