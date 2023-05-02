import { ArrowSVG } from 'assets/SVGs';
import { TRoute } from 'context/ActiveSectionContext';
import TransitionLabel from './TransitionLabel';

const ScrollButton = ({ label, href }: { label: string; href: TRoute }) => {
  return (
    <a className="group relative flex w-fit items-end gap-3 py-1 font-bold text-teal-500" href={'#' + href}>
      <ArrowSVG />
      <TransitionLabel label={label} />
      <span className="absolute bottom-0 left-0 h-px w-2/3 origin-left bg-teal-500 transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default ScrollButton;
