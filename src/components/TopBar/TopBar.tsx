import { AnimatedLogo } from '../AnimatedLogo';
import { HoverText } from '../HoverText';

type TopBarProps = {
  hasLogo?: boolean;
};

function TopBar({ hasLogo = false }: TopBarProps) {
  const companyEmail = import.meta.env.VITE_CONTACT_EMAIL || '';

  const textStyle = 'text-3xl tracking-tighter font-text select-none pointer-events-auto';
  const containerStyle =
    'bg-transparent px-8 py-4 z-50 fixed top-0 left-0 right-0 flex justify-between items-center pointer-events-none';

  return (
    <div className={containerStyle}>
      <div data-cursor-type="hidden">
        <HoverText className={textStyle} href={`mailto:${companyEmail}`}>
          CONTACTS
        </HoverText>
      </div>
      {hasLogo && (
        <div className="pointer-events-auto p-5" data-cursor-type="hidden">
          <AnimatedLogo />
        </div>
      )}
      <div data-cursor-type="hidden">
        <HoverText className={textStyle}>MENU</HoverText>
      </div>
    </div>
  );
}

export default TopBar;
