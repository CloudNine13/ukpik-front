import { useRef } from 'react';
import { CustomVideo } from '../CustomVideo';
import { renderLetters } from '@utils';
import { useAnimation } from './hooks';

type SectionProps = {
  className?: string;
  video: string;
  text?: string;
  description?: string;
};

function Section({ className = 'relative h-full', video, text, description }: SectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const descriptionContainerRef = useRef<HTMLDivElement>(null);

  useAnimation(containerRef, textContainerRef, descriptionContainerRef);

  const containerStyle = `w-full overflow-hidden bg-black ${className}`;
  const textStyle =
    'absolute inset-0 z-10 flex items-top justify-center uppercase pointer-events-none text-header text-8xl pt-[12%] overflow-hidden';
  const descriptionStyle =
    'absolute inset-0 z-10 flex items-end justify-center uppercase pointer-events-none text-header text-4xl pb-[12%] overflow-hidden';

  return (
    <div ref={containerRef} className={containerStyle}>
      {text && (
        <div ref={textContainerRef} className={textStyle}>
          {renderLetters(text)}
        </div>
      )}
      {description && (
        <div ref={descriptionContainerRef} className={descriptionStyle}>
          {renderLetters(description)}
        </div>
      )}
      <CustomVideo video={video} />
    </div>
  );
}

export default Section;
