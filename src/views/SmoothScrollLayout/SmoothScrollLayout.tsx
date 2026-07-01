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
      if (!logoElement) return;

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
    },
    { scope: containerRef },
  );

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div ref={containerRef} className="app-container">
        {children}
      </div>
    </ReactLenis>
  );
}
