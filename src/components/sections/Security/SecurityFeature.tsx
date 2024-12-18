import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SecurityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SecurityFeature({ icon, title, description }: SecurityFeatureProps) {
  return (
    <div className="bg-[#2B3377]/50 backdrop-blur-sm p-8 rounded-xl text-center">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}