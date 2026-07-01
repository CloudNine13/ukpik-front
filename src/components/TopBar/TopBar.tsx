import { AnimatedLogo } from '../AnimatedLogo';

function TopBar() {
  const textStyle = 'text-3xl tracking-tighter font-text px-8';
  const containerStyle = 'bg-transparent px-20 py-4 z-10 fixed top-0 left-0 right-0 flex justify-between items-center';
  
  return (
    <div className={containerStyle}>
      <div className={textStyle}>CONTACTS</div>
      <AnimatedLogo />
      <div className={textStyle}>MENU</div>
    </div>
  );
}

export default TopBar;
