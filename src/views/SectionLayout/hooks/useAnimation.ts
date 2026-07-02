import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const useAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  innerRef: React.RefObject<HTMLDivElement | null>,
  textContainerRef: React.RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      });

      tl.fromTo(
        innerRef.current,
        { width: '50%' },
        { width: '100%', ease: 'none', duration: 0.225 },
        0.1,
      );

      tl.fromTo(
        innerRef.current,
        { height: '65%' },
        { height: '100%', ease: 'none', duration: 0.075 },
        0.25,
      );

      const letters = textContainerRef.current?.querySelectorAll('.animate-char');

      if (letters && letters.length > 0) {
        gsap.fromTo(
          letters,
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.03,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'top 10%',
              toggleActions: 'play reverse play reverse',
            },
          },
        );
      }
    },
    { scope: containerRef },
  );
};

export default useAnimation;