import React from 'react';
import { useFAQState } from '../../hooks/useFAQState';
import { FAQItem } from './FAQItem';
import { FAQItem as FAQItemType } from '../../types/faq';

interface FAQListProps {
  items: FAQItemType[];
}

export function FAQList({ items }: FAQListProps) {
  const { openItems, toggleItem } = useFAQState();

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <FAQItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openItems[item.question] || false}
          onClick={() => toggleItem(item.question)}
        />
      ))}
    </div>
  );
}