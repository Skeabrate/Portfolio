import React, { useMemo, useState } from 'react';

type TWorkSectionContext = {
  isWorkSectionEffectActive: boolean;
  setIsWorkSectionEffectActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WorkSectionContext = React.createContext({} as TWorkSectionContext);

function WorkSectionProvider({ children }: { children: React.ReactNode }) {
  const [isWorkSectionEffectActive, setIsWorkSectionEffectActive] = useState(false);

  const value = useMemo(
    () => ({
      isWorkSectionEffectActive,
      setIsWorkSectionEffectActive,
    }),
    [isWorkSectionEffectActive]
  );

  return <WorkSectionContext.Provider value={value}>{children}</WorkSectionContext.Provider>;
}

export default WorkSectionProvider;
