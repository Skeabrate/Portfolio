import React, { useMemo, useState } from 'react';

type TWorkSectionEffectContext = {
  isWorkSectionEffectActive: boolean;
  setIsWorkSectionEffectActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WorkSectionEffectContext = React.createContext({} as TWorkSectionEffectContext);

function WorkSectionEffectProvider({ children }: { children: React.ReactNode }) {
  const [isWorkSectionEffectActive, setIsWorkSectionEffectActive] = useState(false);

  const value = useMemo(
    () => ({
      isWorkSectionEffectActive,
      setIsWorkSectionEffectActive,
    }),
    [isWorkSectionEffectActive]
  );

  return <WorkSectionEffectContext.Provider value={value}>{children}</WorkSectionEffectContext.Provider>;
}

export default WorkSectionEffectProvider;
