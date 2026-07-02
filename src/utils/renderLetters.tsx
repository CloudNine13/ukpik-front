const renderLetters = (text: string | number) => {
  return String(text)
    .split('')
    .map((char, index) => (
      <span key={index} className="animate-char inline-block will-change-transform">
        {char}
      </span>
    ));
};

export default renderLetters;
