import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl font-bold text-[#1F2B5F] mb-4">{title}</h2>
      <p className="text-xl text-[#1A1F3D]/70">{subtitle}</p>
    </div>
  );
}