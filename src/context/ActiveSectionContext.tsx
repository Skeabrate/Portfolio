'use client';

import React, { useState } from 'react';

type TActiveSectionContext = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

export const ActiveSectionContext = React.createContext({} as TActiveSectionContext);

function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionProvider;
