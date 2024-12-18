import React from 'react';

interface SolutionContentProps {
  title: string;
  main: string;
  details: string | string[];
}

export function SolutionContent({ title, main, details }: SolutionContentProps) {
  return (
    <div className="flex-1 flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold text-[#1F2B5F] mb-4">{title}</h3>
      <p className="text-base md:text-lg text-[#1A1F3D]/90 mb-4">{main}</p>
      {Array.isArray(details) ? (
        <ul className="space-y-2 text-sm md:text-base text-[#1A1F3D]/70 leading-relaxed list-disc pl-5">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm md:text-base text-[#1A1F3D]/70 leading-relaxed">
          {details}
        </p>
      )}
    </div>
  );
}