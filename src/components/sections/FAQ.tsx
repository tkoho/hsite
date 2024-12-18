import React from 'react';
import { Container } from '../ui/Container';
import { FAQCategories } from '../faq/FAQCategories';
import { SectionHeader } from '../ui/SectionHeader';

export function FAQ() {
  return (
    <section className="py-24 bg-white" id="faqs">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our payment solutions"
            centered
          />
          <FAQCategories />
        </div>
      </Container>
    </section>
  );
}