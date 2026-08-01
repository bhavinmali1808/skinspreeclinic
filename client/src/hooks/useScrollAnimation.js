import { useEffect } from 'react';

export default function useScrollAnimation() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '50px 0px 50px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');

    elements.forEach((el) => {
      observer.observe(el);
      // Fallback: Make elements visible immediately if already in or near viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        el.classList.add('is-visible');
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
