import { useState } from 'react';

export function useSolutionsState() {
  const [activeIndex, setActiveIndex] = useState(0);
  return { activeIndex, setActiveIndex };
}