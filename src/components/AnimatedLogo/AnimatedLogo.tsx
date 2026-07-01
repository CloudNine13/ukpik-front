import ukpikLogo from '@assets/ukpik_logo.jpg';

function AnimatedLogo() {
  const logoStyle = 'scroll-animated-logo block';
  
  return <img src={ukpikLogo} alt="AnimatedLogo" className={logoStyle} />;
}

export default AnimatedLogo;
