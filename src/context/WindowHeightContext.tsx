import React, { useMemo } from 'react';
import { useWindowHeight } from 'hooks/useWindowHeight';

type WindowHeightContextType = {
  windowHeight: number;
};

export const WindowHeightContext = React.createContext({} as WindowHeightContextType);

export default function WindowHeightProvider({ children }: { children: React.ReactNode }) {
  const { windowHeight } = useWindowHeight();

  const value = useMemo(
    () => ({
      windowHeight,
    }),
    [windowHeight]
  );

  return <WindowHeightContext.Provider value={value}>{children}</WindowHeightContext.Provider>;
}
