const renderLetters = (text: string | number) => {
  return String(text)
    .split('')
    .map((char, index) => (
      <span
        key={index}
        className={`animate-char inline-block will-change-transform ${char === ' ' ? 'w-[0.3em]' : ''}`}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
};

export default renderLetters;
