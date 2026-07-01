type CustomVideoProps = {
  video: string;
};

function CustomVideo({ video }: CustomVideoProps) {
  const videoStyle = 'absolute top-0 left-0 w-full h-full object-cover';
  
  return (
    <video autoPlay loop muted playsInline className={videoStyle}>
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default CustomVideo;
