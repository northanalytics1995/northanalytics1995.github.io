import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;