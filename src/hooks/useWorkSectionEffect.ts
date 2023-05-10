import { useContext, useEffect } from 'react';
import { ROUTES } from 'utils/routes';
import { WorkSectionContext } from 'context/WorkSectionContext';
import { useAnimateWhenInView } from './useAnimateWhenInView';

export const useWorkSectionEffect = (ref: React.RefObject<HTMLDivElement>) => {
  const { setIsWorkSectionEffectActive } = useContext(WorkSectionContext);
  const { isInView: animateWhenWorkSectionIsInView } = useAnimateWhenInView(ref, ROUTES.work.label, 1 / 2);

  useEffect(() => {
    setIsWorkSectionEffectActive(animateWhenWorkSectionIsInView);
  }, [animateWhenWorkSectionIsInView, setIsWorkSectionEffectActive]);
};
