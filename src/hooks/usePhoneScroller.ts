import { useEffect, useState } from 'react';

// The step spacers scroll up underneath the pinned block. A step is current once its top edge has
// reached the pinned block's bottom edge, which splits the pinned stretch evenly across the steps.
export function usePhoneScroller(
  stepRefs: React.RefObject<HTMLElement | null>[],
  pinnedRef: React.RefObject<HTMLElement | null>,
): number {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const pinned = pinnedRef.current;
      if (pinned) {
        const edge = pinned.getBoundingClientRect().bottom + 1;
        let current = 1;
        stepRefs.forEach((ref, index) => {
          const element = ref.current;
          if (element && element.getBoundingClientRect().top <= edge) current = index + 1;
        });
        setCurrentStep((step) => (step === current ? step : current));
      }
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
  }, [stepRefs, pinnedRef]);

  return currentStep;
}
