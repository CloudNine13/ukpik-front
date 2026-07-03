import { useRef } from 'react';
import { HoverText } from '../HoverText';
import { useAnimation } from './hooks';

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const companyEmail = import.meta.env.VITE_CONTACT_EMAIL || '';
  const companySocialLabel = import.meta.env.VITE_SOCIAL_LABEL || '';
  const companySocialLink = import.meta.env.VITE_SOCIAL_LINK || '';
  const creditsLink = import.meta.env.VITE_CREDITS_LINK || '';

  useAnimation(containerRef, innerRef);

  const topContainerStyle = 'flex flex-row items-center justify-center gap-175 pt-15 relative z-20';
  const bottomContainerStyle =
    'flex flex-row items-center justify-between px-20 pb-5 relative z-20';
  const buttonWrapperStyle = 'flex flex-col items-center justify-center gap-3 footer-anim-top';
  const contactLabelStyle =
    'uppercase tracking-tighter text-5xl footer-anim-top select-none';
  const titleHeaderStyle =
    'text-[35rem] font-bold text-black text-center uppercase w-full select-none z-10 leading-120 pointer-events-none';
  const contactLinkStyle = 'text-2xl uppercase';
  const infoStyle = 'text-xl uppercase select-none';

  return (
    <div
      ref={containerRef}
      className={`${className} overflow-hidden relative`}
      data-cursor-type="hidden"
    >
      <div ref={innerRef} className="w-full flex flex-col h-full">
        <div className={topContainerStyle}>
          <div className={buttonWrapperStyle}>
            <div className={contactLabelStyle}>Contacts</div>
            <HoverText className={contactLinkStyle} href={`mailto:${companyEmail}`}>
              {companyEmail}
            </HoverText>
          </div>
          <div className={buttonWrapperStyle}>
            <div className={contactLabelStyle}>Follow</div>
            <HoverText className={contactLinkStyle} href={companySocialLink} target="_blank">
              {companySocialLabel}
            </HoverText>
          </div>
        </div>
        <div className={titleHeaderStyle}>UKPIK</div>
        <div className={bottomContainerStyle}>
          <div className={buttonWrapperStyle}>
            <HoverText className={infoStyle}>Policy</HoverText>
          </div>
          <div className={buttonWrapperStyle}>
            <HoverText className={infoStyle} href={creditsLink} target="_blank">
              Credits
            </HoverText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
