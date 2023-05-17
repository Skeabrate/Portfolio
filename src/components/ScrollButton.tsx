import { useContext } from 'react';
import { ArrowSVG } from 'assets/SVGs';
import { defaultEffect, scrollEffect } from 'hooks/useMouseEffect';
import { TActiveSection } from 'context/ActiveSectionContext';
import { MouseAnimationContext } from 'context/MouseAnimationContext';
import TransitionLabel from './TransitionLabel';

const ScrollButton = ({ label, href }: { label: string; href: TActiveSection['label'] }) => {
  const { setMouseEffect } = useContext(MouseAnimationContext);

  return (
    <a
      href={'#' + href}
      className="group relative flex w-fit items-end gap-[clamp(0.4rem,0.8vw,1.6rem)] pb-[0.4vw] font-bold text-teal-400"
      onMouseEnter={() => setMouseEffect(scrollEffect())}
      onMouseLeave={() => setMouseEffect(defaultEffect())}
    >
      <ArrowSVG />
      <TransitionLabel label={label} />
      <span className="absolute bottom-0 left-0 h-[0.1vw] w-2/3 origin-left bg-teal-400 transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default ScrollButton;
