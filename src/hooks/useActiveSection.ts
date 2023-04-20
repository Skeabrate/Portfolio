import { RefObject, useContext, useEffect, useState } from 'react';
import { ScrollContext } from 'context/ScrollContext';

export const useActiveSection = (sections: { id: string; ref: RefObject<HTMLDivElement> }[]) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const { scrollY } = useContext(ScrollContext);

  useEffect(() => {
    const checkIfItsActive = (ref: RefObject<HTMLDivElement>) =>
      ref.current &&
      Math.floor(ref.current.getBoundingClientRect().bottom) > 0 &&
      Math.floor(ref.current.getBoundingClientRect().bottom - 20) < window.innerHeight;

    sections.forEach((section) => checkIfItsActive(section.ref) && setActiveSection(section.id));
  }, [scrollY, sections]);

  return { activeSection };
};
