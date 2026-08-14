import { useEffect, useRef } from 'react';

/**
 * Custom hook to add scroll-reveal animations to elements
 * within a container. Uses IntersectionObserver for performance.
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    const selectors = [
      '.scroll-reveal',
      '.scroll-reveal-left',
      '.scroll-reveal-right',
      '.scroll-reveal-scale',
      '.stagger-children',
    ];

    const elements = ref.current?.querySelectorAll(selectors.join(', '));
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
