import { useCallback, useEffect, useState } from 'react';
import { useThrottleFunc } from './useThrottleFunc';

export const useScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useThrottleFunc(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return { isVisible, scrollTop };
};
