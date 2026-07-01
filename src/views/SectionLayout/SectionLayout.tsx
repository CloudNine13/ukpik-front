import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SectionLayoutProps = {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  sectionIndex: string | number;
  sectionName: string;
};

export default function SectionLayout({
  children,
  bgColor = 'bg-black',
  textColor = 'text-red',
  sectionIndex,
  sectionName,
}: SectionLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        innerRef.current,
        { scale: 0.5 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        },
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
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
    },
    { scope: containerRef },
  );

  const sectionLayoutStyle = `relative w-full box-border flex items-center justify-center overflow-hidden h-[100vh] z-10 snap-section ${bgColor}`;
  const backgroundTextStyle =
    'absolute inset-0 pointer-events-none z-0 flex items-center justify-center';
  const sectionIndexStyle = `absolute left-[7%] top-[30%] text-2xl tracking-tighter opacity-80 flex overflow-hidden ${textColor}`;
  const sectionNameStyle = `absolute top-[7%] text-3xl tracking-tighter uppercase flex overflow-hidden ${textColor}`;
  const innerContainerStyle = 'w-full h-full origin-center z-10';

  const renderLetters = (text: string | number) => {
    return String(text)
      .split('')
      .map((char, index) => (
        <span key={index} className="animate-char inline-block will-change-transform">
          {char}
        </span>
      ));
  };

  return (
    <div ref={containerRef} className={sectionLayoutStyle}>
      <div ref={textContainerRef} className={backgroundTextStyle}>
        <div className={sectionIndexStyle}>{renderLetters(sectionIndex)}</div>
        <div className={sectionNameStyle}>{renderLetters(sectionName)}</div>
      </div>
      <div ref={innerRef} className={innerContainerStyle}>
        {children}
      </div>
    </div>
  );
}
