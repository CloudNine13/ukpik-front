import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const useAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  textContainerRef: React.RefObject<HTMLDivElement | null>,
  descriptionContainerRef: React.RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
      const textLetters = textContainerRef.current?.querySelectorAll('.animate-char');
      const descriptionLetters = descriptionContainerRef.current?.querySelectorAll('.animate-char');

      const allLetters = [...(textLetters || []), ...(descriptionLetters || [])];

      if (allLetters.length > 0) {
        gsap.fromTo(
          allLetters,
          { y: '40%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.03,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 50%',
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
