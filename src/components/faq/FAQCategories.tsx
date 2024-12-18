import React from 'react';
import { FAQ_CATEGORIES } from '../../utils/faq-data';
import { FAQCategory } from './FAQCategory';

export function FAQCategories() {
  return (
    <div className="space-y-12">
      {FAQ_CATEGORIES.map((category) => (
        <FAQCategory
          key={category.title}
          title={category.title}
          items={category.items}
        />
      ))}
    </div>
  );
}