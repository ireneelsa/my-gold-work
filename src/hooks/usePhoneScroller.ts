import { useEffect, useState } from 'react';

export function usePhoneScroller(stepRefs: React.RefObject<HTMLElement | null>[]): number {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const mid = window.innerHeight / 2;
      let closestStep = 1;
      let closestDistance = Number.POSITIVE_INFINITY;
      stepRefs.forEach((ref, index) => {
        const element = ref.current;
        if (!element) return;
        const bounds = element.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height / 2 - mid);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestStep = index + 1;
        }
      });
      setCurrentStep((step) => (step === closestStep ? step : closestStep));
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [stepRefs]);

  return currentStep;
}
