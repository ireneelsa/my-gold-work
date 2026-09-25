import { useEffect } from 'react';

// Smooth scrolling only for in-page link clicks (menu, logo, "See how it works"). The page itself
// keeps native wheel/touch scrolling, so it moves at one steady speed.
export function useAnchorScroll(): void {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute('href')!;
      const target = hash === '#home' ? document.body : document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (target === document.body) window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
      else target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
      history.replaceState(null, '', hash === '#home' ? window.location.pathname : hash);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
