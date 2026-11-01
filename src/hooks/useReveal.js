import { useEffect } from 'react';

// Fades in every `.reveal` element when it scrolls into view.
export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () =>
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => observer.observe(el));

    observe();
    // Catch elements rendered later (e.g. after filtering services)
    const mutations = new MutationObserver(observe);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
}
