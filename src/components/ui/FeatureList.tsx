import React, { ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-4">
          <div>{feature.icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-[#1F2B5F] mb-2">{feature.title}</h3>
            <p className="text-[#1A1F3D]/70">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}