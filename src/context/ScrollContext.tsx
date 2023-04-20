'use client';

import React from 'react';
import { useScroll } from 'hooks/useScroll';

type TScrollContext = {
  scrollY: number;
};

export const ScrollContext = React.createContext({} as TScrollContext);

function ScrollProvider({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();

  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
}

export default ScrollProvider;
