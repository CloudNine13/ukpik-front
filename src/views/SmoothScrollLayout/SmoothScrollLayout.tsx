import { useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { useAnimation } from './hooks';

type SmoothScrollLayoutProps = {
  children: React.ReactNode;
};

export default function SmoothScrollLayout({ children }: SmoothScrollLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimation(containerRef);

  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 0.3, duration: 2, smoothWheel: true }}>
      <div ref={containerRef} className="app-container">
        {children}
      </div>
    </ReactLenis>
  );
}
