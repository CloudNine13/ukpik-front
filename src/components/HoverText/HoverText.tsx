interface HoverTextProps {
  children: string;
  className?: string;
  onClick?: () => void;
}

function HoverText({ children, className, onClick }: HoverTextProps) {
  const characters = children.split('');

  const containerStyle = 'group relative inline-flex flex-col cursor-pointer pb-1';
  const transitionStyle =
    'transition-transform duration-[275ms] ease-[cubic-bezier(0.19,1,0.22,1)]';
  const hoverTranslateStyle = 'group-hover:-translate-y-[110%] inline-block';
  const hoverTranslateBackStyle =
    'group-hover:translate-y-0 absolute left-0 top-0 inline-block translate-y-[110%]';
  const underlineStyle =
    'absolute bottom-0 left-0 w-full h-[2px] bg-current origin-left scale-x-0 group-hover:scale-x-100';

  return (
    <span className={`${containerStyle} ${className || ''}`} onClick={onClick}>
      <span className="sr-only">{children}</span>
      <span className="flex overflow-hidden pb-1" aria-hidden="true">
        {characters.map((char, index) => {
          const delay = `${index * 0.01}s`;

          return (
            <span key={index} className="relative inline-flex">
              <span
                className={`${transitionStyle} ${hoverTranslateStyle}`}
                style={{ transitionDelay: delay }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
              <span
                className={`${transitionStyle} ${hoverTranslateBackStyle}`}
                style={{ transitionDelay: delay }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            </span>
          );
        })}
      </span>
      <span className={`${underlineStyle} ${transitionStyle}`} />
    </span>
  );
}

export default HoverText;
