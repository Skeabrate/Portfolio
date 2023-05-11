import { motion } from 'framer-motion';
import { GmailSVG } from 'assets/SVGs';
import { ROUTES } from 'utils/routes';
import { delay, duration, opacity, translate } from 'utils/transitions';
import { useWasInView } from 'hooks/useUpdateActiveSection';
import ResumeButton from 'components/ResumeButton';
import TransitionLabel from 'components/TransitionLabel';
import Greeting, { defaultGreering } from 'components/sections/Contact/Greeting';
import { ContactQuery, ResumeQuery } from '../../../../graphql/generated';

const Contact = ({ contact, resume }: { contact: ContactQuery['contact']; resume: ResumeQuery['resume'] }) => {
  const animationState = useWasInView(ROUTES.contact.id);

  return (
    <>
      <header>
        <h2 className="mb-[clamp(0.6rem,4vw,4vw)] border-b-[0.1vw] border-b-slate-700 pb-[clamp(0.6rem,2vw,2vw)] text-header font-medium leading-none tracking-tight">
          <motion.span
            animate={{ opacity: opacity(animationState), transform: translate(animationState) }}
            transition={{ duration: duration(animationState) }}
            className="block"
          >
            {animationState ? <Greeting /> : defaultGreering}
          </motion.span>
        </h2>
      </header>

      <motion.p
        animate={{
          opacity: opacity(animationState),
          transform: translate(animationState),
        }}
        transition={{
          duration: duration(animationState),
          delay: delay(animationState),
        }}
        className="mb-[clamp(0.6rem,2vw,2vw)] text-slate-400 lg:my-[clamp(0.6rem,2vw,2vw)]"
      >
        {contact?.text}
      </motion.p>

      <motion.a
        animate={{
          opacity: opacity(animationState),
          transform: translate(animationState),
        }}
        transition={{
          duration: duration(animationState),
          delay: delay(animationState, 0.1),
        }}
        className="group mb-[clamp(1rem,2vw,2vw)] flex w-fit items-center gap-[clamp(0.6rem,1vw,1vw)] text-slate-400"
        href="mailto:sebastianswiecz458@gmail.com"
      >
        <GmailSVG />
        <TransitionLabel label="sebastianswiecz458@gmail.com" />
      </motion.a>

      <motion.div
        animate={{
          opacity: opacity(animationState),
          transform: translate(animationState),
        }}
        transition={{
          duration: duration(animationState),
          delay: delay(animationState, 0.2),
        }}
      >
        <ResumeButton resumeSrc={resume?.resumeSrc.url} />
      </motion.div>
    </>
  );
};

export default Contact;
