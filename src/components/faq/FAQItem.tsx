import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-[#2B3377]/10">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-[#1F2B5F]">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#3AAA35] transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-[#1A1F3D]/70 whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
}