import { ArrowSVG } from 'assets/SVGs';
import { TActiveSection } from 'context/ActiveSectionContext';
import TransitionLabel from './TransitionLabel';

const ScrollButton = ({ label, href }: { label: string; href: TActiveSection['label'] }) => {
  return (
    <a
      className="group relative flex w-fit items-end gap-[clamp(0.4rem,0.8vw,1.2rem)] pb-[0.4vw] font-bold text-teal-400"
      href={'#' + href}
    >
      <ArrowSVG />
      <TransitionLabel label={label} />
      <span className="absolute bottom-0 left-0 h-[0.1vw] w-2/3 origin-left bg-teal-400 transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default ScrollButton;
