import { useContext, useEffect, useState } from 'react';
import { ActiveSectionContext, TRoute } from 'context/ActiveSectionContext';

export const useAnimationWhenInView = (sectionId: TRoute) => {
  const [isInView, setIsInView] = useState(false);
  const { activeSection } = useContext(ActiveSectionContext);

  useEffect(() => {
    setIsInView(activeSection === sectionId);
  }, [activeSection, sectionId]);

  return { isInView };
};
