// src/components/ScrollToTop.js
//
// React Router doesn't reset scroll on navigation. This restores the natural
// "new page starts at the top" behavior — and, when a link includes a hash
// (e.g. /#projects), scrolls to that section instead.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
