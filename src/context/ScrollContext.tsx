'use client';

import React from 'react';
import { useScroll } from 'hooks/useScroll';

type TScrollContext = {
  isOnTop: boolean;
  hideNav: boolean;
};

export const ScrollContext = React.createContext({} as TScrollContext);

function ScrollProvider({ children }: { children: React.ReactNode }) {
  const { isOnTop, hideNav } = useScroll();

  return <ScrollContext.Provider value={{ isOnTop, hideNav }}>{children}</ScrollContext.Provider>;
}

export default ScrollProvider;
