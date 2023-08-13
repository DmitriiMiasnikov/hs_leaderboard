import { useEffect } from 'react';

const useCalculateVh = () => {
  const calculateVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      calculateVh();
      window.addEventListener('resize', calculateVh);
      window.addEventListener('orientationchange', calculateVh);
    }
  }, []);
};

export default useCalculateVh;