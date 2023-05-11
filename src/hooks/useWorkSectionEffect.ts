import { useContext, useEffect } from 'react';
import { ROUTES } from 'utils/routes';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import { WorkSectionEffectContext } from 'context/WorkSectionEffectContext';
import { useAnimateWhenInView } from './useAnimateWhenInView';

export const useWorkSectionEffect = (ref: React.RefObject<HTMLDivElement>) => {
  const { activeSection } = useContext(ActiveSectionContext);
  const { setIsWorkSectionEffectActive } = useContext(WorkSectionEffectContext);
  const { isInView: animateWhenWorkSectionIsInView } = useAnimateWhenInView(ref, 1 / 2);

  useEffect(() => {
    setIsWorkSectionEffectActive(animateWhenWorkSectionIsInView && activeSection.label === ROUTES.work.label);
  }, [animateWhenWorkSectionIsInView, setIsWorkSectionEffectActive, activeSection]);
};
