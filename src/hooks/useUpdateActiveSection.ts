import { TSection } from 'pages';
import { RefObject, useContext, useEffect } from 'react';
import { ActiveSectionContext, TActiveSection } from 'context/ActiveSectionContext';
import { ScrollContext } from 'context/ScrollContext';

export const useUpdateActiveSection = (sections: TSection[]) => {
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

    sections.forEach(({ id, label, ref }) => {
      checkIfPreviousSectionIsActive(ref) &&
        setActiveSection({
          id,
          label,
        });
      checkIfNextSectionIsActive(ref) &&
        setActiveSection({
          id,
          label,
        });
    });
  }, [scrollY, sections, setActiveSection]);

  return { activeSection };
};

export const useWasInView = (sectionId: TActiveSection['id']) => {
  const { activeSection } = useContext(ActiveSectionContext);
  return activeSection.id >= sectionId;
};
