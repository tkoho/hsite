import React from 'react';

interface DocumentationSectionProps {
  title: string;
  content: string | string[];
}

export function DocumentationSection({ title, content }: DocumentationSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#1F2B5F] mb-6">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-disc pl-6 space-y-4 text-[#1A1F3D]/70">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-[#1A1F3D]/70 leading-relaxed">{content}</p>
      )}
    </section>
  );
}