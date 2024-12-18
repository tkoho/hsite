import React from 'react';

interface SecurityDetailCardProps {
  title: string;
  description: string;
}

export function SecurityDetailCard({ title, description }: SecurityDetailCardProps) {
  return (
    <div className="bg-[#2B3377]/50 backdrop-blur-sm p-8 rounded-xl text-center">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </div>
  );
}