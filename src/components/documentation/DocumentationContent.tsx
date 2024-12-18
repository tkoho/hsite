import React from 'react';
import { Container } from '../ui/Container';
import { DocumentationSection } from './DocumentationSection';
import { DOCUMENTATION_SECTIONS } from '../../utils/documentation-data';

export function DocumentationContent() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto space-y-16">
        {DOCUMENTATION_SECTIONS.map((section) => (
          <DocumentationSection
            key={section.title}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </Container>
  );
}