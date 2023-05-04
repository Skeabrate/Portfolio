import { ROUTES } from 'utils/routes';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { ptSerif } from 'utils/serifFont';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import GreetingAnimation from 'components/GreetingAnimation';
import TransitionLabel from 'components/TransitionLabel';
import { GmailSVG } from 'assets/SVGs';
import { ContactQuery, ResumeQuery } from '../../../graphql/generated';

const Contact = ({ contact, resume }: { contact: ContactQuery['contact']; resume: ResumeQuery['resume'] }) => {
  const isInNewSection = useAnimationInNewSection(ROUTES.contact);

  return (
    <>
      <header
        className={cx(
          ptSerif,
          'relative mb-6 overflow-hidden border-b-2 border-b-slate-300/50 pb-2 pt-2 text-header font-bold leading-none md:mb-8 md:pb-6'
        )}
      >
        {isInNewSection ? <GreetingAnimation /> : null}
      </header>

      <motion.p
        animate={{
          opacity: isInNewSection ? 1 : 0,
          transform: isInNewSection ? 'translateY(0)' : 'translateY(20px)',
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="mb-5 max-w-2xl text-slate-500"
      >
        {contact?.text}
      </motion.p>

      <motion.a
        animate={{
          opacity: isInNewSection ? 1 : 0,
          transform: isInNewSection ? 'translateY(0)' : 'translateY(20px)',
        }}
        transition={{
          duration: 0.4,
          delay: 0.3,
        }}
        className="group mb-5 flex items-center gap-3 text-slate-500"
        href="mailto:sebastianswiecz458@gmail.com"
      >
        <GmailSVG />
        <TransitionLabel label="sebastianswiecz458@gmail.com" />
      </motion.a>

      <a
        href={resume?.resumeSrc.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(
          ptSerif,
          'flex h-10 w-32 items-center justify-center rounded-full border-2 border-teal-500 font-bold text-teal-500 transition-all duration-300'
        )}
      >
        Resume
      </a>
    </>
  );
};

export default Contact;
