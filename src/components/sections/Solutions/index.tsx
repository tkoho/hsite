import React, { useRef } from 'react';
import { Container } from '../../ui/Container';
import { SolutionsList } from './SolutionsList';
import { SolutionDisplay } from './SolutionDisplay';
import { useSolutionsState } from '../../../hooks/useSolutionsState';
import { SOLUTIONS_DATA } from '../../../utils/solutions-data';

export function Solutions() {
  const { activeIndex, setActiveIndex } = useSolutionsState();
  const activeSolution = SOLUTIONS_DATA[activeIndex];
  const solutionDisplayRef = useRef<HTMLDivElement>(null);

  const handleSolutionChange = (index: number) => {
    setActiveIndex(index);
    // Only scroll on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        solutionDisplayRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 100);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F6FA]" id="solutions">
      <Container>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2B5F]">
            Why Choose KiwiPayment?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="order-2 md:order-1" ref={solutionDisplayRef}>
            <SolutionDisplay solution={activeSolution} />
          </div>
          <div className="order-1 md:order-2">
            <SolutionsList
              solutions={SOLUTIONS_DATA}
              activeIndex={activeIndex}
              onSelect={handleSolutionChange}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}