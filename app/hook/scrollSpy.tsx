import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    // default band = middle 50 % of the viewport
    const defaultOpts: IntersectionObserverInit = {
      root: null,                 // viewport
      rootMargin: '-50% 0px -50%',// top & bottom cut away 50 %
      threshold: 0,               // “visible at all” inside the band
      ...options,                 // allow caller overrides
    };

    const io = new IntersectionObserver((entries) => {
      // because rootMargin makes only ONE entry visible at a time,
      // we can pick the first intersecting one.
      const visible = entries.find(e => e.isIntersecting);
      if (visible?.target.id) {
        setActive(visible.target.id);
        // (optional) keep URL in sync so NavLink’s “active” works too
        history.replaceState(null, '', `#${visible.target.id}`);
      }
    }, defaultOpts);

    // Observe each <section> once
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect(); // clean-up on unmount or id change
  }, [ids.join('|'), JSON.stringify(options)]); // deps

  return active; // anyone can read it
}
