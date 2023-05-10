import React, { useState } from 'react';
import { ROUTES } from 'utils/routes';

type TRouteKey = keyof typeof ROUTES;
type TRoute = (typeof ROUTES)[TRouteKey];

export type TActiveSection = {
  id: TRoute['id'];
  label: TRoute['label'];
};

type TActiveSectionContext = {
  activeSection: TActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<TActiveSection>>;
};

export const ActiveSectionContext = React.createContext({} as TActiveSectionContext);

function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<TActiveSection>({
    id: ROUTES.skeabrate.id,
    label: ROUTES.skeabrate.label,
  });

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionProvider;
