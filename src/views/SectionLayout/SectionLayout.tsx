import { useRef } from 'react';
import { renderLetters } from '@utils';
import { useAnimation } from './hooks';

type SectionLayoutProps = {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  sectionIndex?: string | number;
  sectionName?: string;
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

  useAnimation(containerRef, innerRef, textContainerRef);

  const sectionLayoutStyle = `relative w-full box-border flex items-center justify-center overflow-hidden h-[100vh] z-10 snap-section ${bgColor}`;
  const backgroundTextStyle =
    'absolute inset-0 pointer-events-none z-0 flex items-center justify-center';
  const sectionIndexStyle = `absolute left-[3%] top-[30%] text-2xl tracking-tighter flex overflow-hidden ${textColor}`;
  const sectionNameStyle = `absolute top-[10%] text-3xl tracking-tighter uppercase flex overflow-hidden ${textColor}`;
  const innerContainerStyle = 'w-full h-full origin-center z-10 flex justify-center items-center';

  return (
    <div
      ref={containerRef}
      className={sectionLayoutStyle}
      data-cursor-type="text"
      data-cursor-text="View"
    >
      {sectionIndex && sectionName && (
        <div ref={textContainerRef} className={backgroundTextStyle}>
          <div className={sectionIndexStyle}>{renderLetters(sectionIndex)}</div>
          <div className={sectionNameStyle}>{renderLetters(sectionName)}</div>
        </div>
      )}
      <div ref={innerRef} className={innerContainerStyle}>
        {children}
      </div>
    </div>
  );
}
