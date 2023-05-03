import { RefObject, useContext, useEffect, useRef } from 'react';
import { TSection } from 'pages';
import { ScrollContext } from 'context/ScrollContext';
import { ActiveSectionContext, TRoute } from 'context/ActiveSectionContext';

export const useActiveSection = (sections: TSection[]) => {
  const { activeSection, setActiveSection } = useContext(ActiveSectionContext);
  const { scrollY } = useContext(ScrollContext);

  useEffect(() => {
    const checkIfPreviousSectionIsActive = (ref: RefObject<HTMLDivElement>) =>
      ref.current &&
      Math.floor(ref.current.getBoundingClientRect().bottom) > 0 &&
      Math.floor(ref.current.getBoundingClientRect().bottom - 400) < window.innerHeight;

    const checkIfNextSectionIsActive = (ref: RefObject<HTMLDivElement>) =>
      ref.current &&
      Math.floor(ref.current.getBoundingClientRect().top + 200) < window.innerHeight &&
      Math.floor(ref.current.getBoundingClientRect().top) > 0;

    sections.forEach((section) => {
      checkIfPreviousSectionIsActive(section.ref) && setActiveSection(section.id);
      checkIfNextSectionIsActive(section.ref) && setActiveSection(section.id);
    });
  }, [scrollY, sections, setActiveSection]);

  return { activeSection };
};

// Animate the same time that active section change
export const useAnimationInNewSection = (sectionId: TRoute) => {
  const animationStart = useRef(false);
  const { activeSection } = useContext(ActiveSectionContext);

  useEffect(() => {
    activeSection === sectionId && (animationStart.current = true);
  }, [activeSection, sectionId]);
  return animationStart.current;
};
