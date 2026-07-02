import { CustomVideo } from '../CustomVideo';

type SectionProps = {
  className?: string;
  video: string;
};

function Section({ className = 'relative h-full', video }: SectionProps) {
  const containerStyle = `w-full overflow-hidden bg-black ${className}`;
  return (
    <div className={containerStyle}>
      <CustomVideo video={video} />
    </div>
  );
}

export default Section;
