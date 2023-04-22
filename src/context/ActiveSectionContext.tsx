'use client';

import React, { useState } from 'react';
import { ROUTES } from 'utils/routes';

type TActiveSectionContext = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

export const ActiveSectionContext = React.createContext({} as TActiveSectionContext);

function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState(ROUTES.about);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionProvider;
