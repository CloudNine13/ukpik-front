import video from '@assets/video.mp4';
import { CustomVideo } from '../../components/CustomVideo';

type HeroProps = {
  className?: string;
};

function Hero({ className = 'relative h-full' }: HeroProps) {
  const containerStyle = `w-full overflow-hidden bg-black ${className}`;
  const headerStyle =
    'text-[25rem] font-bold text-red text-center uppercase leading-[0.75] absolute bottom-0 left-0 right-0 pb-10 w-full select-none z-10';

  return (
    <div className={containerStyle} data-cursor-type="text" data-cursor-text="Scroll">
      <CustomVideo video={video} />
      <div className={headerStyle}>Ukpik</div>
    </div>
  );
}

export default Hero;
