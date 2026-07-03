import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const useAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  innerRef: React.RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
      if (!innerRef.current || !containerRef.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      tl.fromTo(innerRef.current, { yPercent: -50 }, { yPercent: 0, ease: 'none' }, 0);

      const topElements = containerRef.current.querySelectorAll('.footer-anim-top');
      if (topElements.length > 0) {
        tl.fromTo(topElements, { y: -40, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0);
      }

      const bottomElements = containerRef.current.querySelectorAll('.footer-anim-bottom');
      if (bottomElements.length > 0) {
        tl.fromTo(bottomElements, { y: 40, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0);
      }
    },
    { scope: containerRef },
  );
};

export default useAnimation;
