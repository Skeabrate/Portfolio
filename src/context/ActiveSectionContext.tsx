import React, { useState } from 'react';
import { ROUTES } from 'utils/routes';

type TRouteKey = keyof typeof ROUTES;
export type TRoute = (typeof ROUTES)[TRouteKey];

type TActiveSectionContext = {
  activeSection: TRoute;
  setActiveSection: React.Dispatch<React.SetStateAction<TRoute>>;
};

export const ActiveSectionContext = React.createContext({} as TActiveSectionContext);

function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<TRoute>(ROUTES.skeabrate);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionProvider;
