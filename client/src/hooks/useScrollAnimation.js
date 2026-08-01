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
      rootMargin: '100px 0px 100px 0px',
      threshold: 0.01
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
      elements.forEach((el) => {
        observer.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
          el.classList.add('is-visible');
        }
      });
    };

    // Initial observation
    observeElements();

    // Re-scan after short delays to catch async renders
    const timer1 = setTimeout(observeElements, 200);
    const timer2 = setTimeout(observeElements, 800);

    // MutationObserver to automatically catch new DOM elements
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}
