import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Solution } from '../../../types/solutions';

interface SolutionsListProps {
  solutions: Solution[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function SolutionsList({ solutions, activeIndex, onSelect }: SolutionsListProps) {
  return (
    <div className="space-y-2">
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        return (
          <button
            key={solution.id}
            className={`w-full text-left p-4 rounded-lg transition-all duration-300 group hover:bg-white hover:shadow-lg ${
              activeIndex === index ? 'bg-white shadow-lg' : 'bg-transparent'
            }`}
            onClick={() => onSelect(index)}
          >
            <div className="flex items-center gap-4">
              <div
                className={`transition-colors duration-300 ${
                  activeIndex === index ? 'text-[#2B3377]' : 'text-[#1F2B5F]/40'
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={`text-base font-semibold transition-colors duration-300 line-clamp-1 flex-1 ${
                  activeIndex === index ? 'text-[#2B3377]' : 'text-[#1F2B5F]/60'
                }`}
              >
                {solution.title}
              </span>
              <ArrowLeft
                className={`w-4 h-4 transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                } text-[#2B3377] flex-shrink-0`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}