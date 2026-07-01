import video from '@assets/video.mp4';
import { CustomVideo } from '../../components/CustomVideo';

function Hero() {
  const containerStyle = 'relative w-full h-screen overflow-hidden';
  const headerStyle =
    'text-[25rem] font-bold text-red text-center uppercase leading-[0.75] absolute bottom-0 left-0 right-0 pb-10 w-full';

  return (
    <div className={containerStyle}>
      <CustomVideo video={video} />
      <div className={headerStyle}>Ukpik</div>
    </div>
  );
}

export default Hero;
