import React from 'react';
import { Solution } from '../../../types/solutions';
import { SolutionIcon } from './SolutionIcon';
import { SolutionContent } from './SolutionContent';

interface SolutionDisplayProps {
  solution: Solution;
}

export function SolutionDisplay({ solution }: SolutionDisplayProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg md:h-[600px] h-auto flex flex-col overflow-y-auto">
      <SolutionIcon icon={solution.icon} />
      <SolutionContent
        title={solution.title}
        main={solution.description.main}
        details={solution.description.details}
      />
    </div>
  );
}