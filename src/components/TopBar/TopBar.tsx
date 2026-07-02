import { AnimatedLogo } from '../AnimatedLogo';
import { HoverText } from '../HoverText';

function TopBar() {
  const companyEmail = import.meta.env.VITE_CONTACT_EMAIL || '';
  const textStyle = 'text-3xl tracking-tighter font-text select-none';
  const containerStyle =
    'bg-transparent px-8 py-4 z-50 fixed top-0 left-0 right-0 flex justify-between items-center';

  return (
    <div className={containerStyle}>
      <HoverText
        className={textStyle}
        onClick={() =>
          (window.location.href =
            `mailto:${companyEmail}?subject=` + encodeURIComponent('Project inquiry'))
        }
      >
        CONTACTS
      </HoverText>
      <AnimatedLogo />
      <HoverText className={textStyle}>MENU</HoverText>
    </div>
  );
}

export default TopBar;
