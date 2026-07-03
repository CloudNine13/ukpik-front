import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const [cursorData, setCursorData] = useState({ type: 'default', text: '' });
  const [isInsideViewport, setIsInsideViewport] = useState(true);

  const [hasMoved, setHasMoved] = useState(false);
  const hasMovedRef = useRef(false);

  const currentState = useRef({ type: 'default', text: '' });

  useEffect(() => {
    if (!cursorWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(cursorWrapperRef.current, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(cursorWrapperRef.current, 'x', {
        duration: 0.6,
        ease: 'power3.out',
      });
      const yTo = gsap.quickTo(cursorWrapperRef.current, 'y', {
        duration: 0.6,
        ease: 'power3.out',
      });

      const moveCursor = (e: MouseEvent) => {
        if (!hasMovedRef.current) {
          hasMovedRef.current = true;
          setHasMoved(true);
        }

        xTo(e.clientX);
        yTo(e.clientY);

        const target = e.target as HTMLElement;
        const hoverTarget = target.closest('[data-cursor-type]');

        let newType = 'default';
        let newText = '';

        if (hoverTarget) {
          newType = hoverTarget.getAttribute('data-cursor-type') || 'text';
          newText = hoverTarget.getAttribute('data-cursor-text') || '';
        }

        if (newType !== currentState.current.type || newText !== currentState.current.text) {
          currentState.current = { type: newType, text: newText };
          setCursorData({ type: newType, text: newText });
        }
      };

      const onMouseLeave = () => setIsInsideViewport(false);
      const onMouseEnter = () => setIsInsideViewport(true);

      window.addEventListener('mousemove', moveCursor, { passive: true });
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseenter', onMouseEnter);
    }, cursorWrapperRef);

    return () => ctx.revert();
  }, []);

  const isText = cursorData.type === 'text';
  const isHidden = cursorData.type === 'hidden';

  const showTooltip = isText && isInsideViewport && hasMoved;
  const showLens = !isHidden && isInsideViewport && hasMoved;

  return (
    <>
      <svg className="absolute w-0 h-0 invisible pointer-events-none">
        <defs>
          <filter id="cursor-distortion">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="80"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div
        ref={cursorWrapperRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-opacity duration-300 ${hasMoved ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          className={`absolute w-24 h-24 rounded-full transition-opacity duration-500 ${showLens ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backdropFilter: 'url(#cursor-distortion)',
            WebkitBackdropFilter: 'url(#cursor-distortion)',
            maskImage: 'radial-gradient(circle, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 80%)',
          }}
        />
        <div
          className={`
            relative z-10 flex items-center justify-center px-1 py-[0.1rem]
            bg-red transition-all duration-300 ease-out origin-center whitespace-nowrap
            ${showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          `}
        >
          <span
            className={`text-black text-xs font-bold uppercase tracking-widest transition-opacity duration-200 ${showTooltip ? 'opacity-100 delay-100' : 'opacity-0'}`}
          >
            {cursorData.text}
          </span>
        </div>
      </div>
    </>
  );
};

export default Cursor;
