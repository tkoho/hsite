import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionIconProps {
  icon: LucideIcon;
}

export function SolutionIcon({ icon: Icon }: SolutionIconProps) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2B3377]/10">
        <Icon className="w-10 h-10 text-[#2B3377]" />
      </div>
    </div>
  );
}