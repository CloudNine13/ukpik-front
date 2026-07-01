import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

type SmoothScrollLayoutProps = {
  children: React.ReactNode;
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SmoothScrollLayout({ children }: SmoothScrollLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(
    () => {
      const logoElement = containerRef.current?.querySelector('.scroll-animated-logo');

      if (logoElement) {
        gsap.to(logoElement, {
          rotation: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });

        gsap.to(logoElement, {
          scale: 0.75,
          transformOrigin: 'center',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=800',
            scrub: true,
          },
        });
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        snap: {
          snapTo: (value) => {
            const sections = containerRef.current?.querySelectorAll('.snap-section');
            if (!sections || sections.length === 0) return value;

            const totalSections = sections.length;
            const step = 1 / (totalSections - 1);
            return Math.round(value / step) * step;
          },
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: 'power2.inOut',
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 0.2, duration: 2, smoothWheel: true }}>
      <div ref={containerRef} className="app-container">
        {children}
      </div>
    </ReactLenis>
  );
}
