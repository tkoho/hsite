import React from 'react';
import { FAQList } from './FAQList';
import { FAQItem as FAQItemType } from '../../types/faq';

interface FAQCategoryProps {
  title: string;
  items: FAQItemType[];
}

export function FAQCategory({ title, items }: FAQCategoryProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1F2B5F] mb-6">{title}</h2>
      <FAQList items={items} />
    </div>
  );
}