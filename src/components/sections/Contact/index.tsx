import { useContext } from 'react';
import { motion } from 'framer-motion';
import { GmailSVG } from 'assets/SVGs';
import { ROUTES } from 'utils/routes';
import { delay, duration, opacity, translate } from 'utils/transitions';
import { contactEffect, defaultEffect } from 'hooks/useMouseEffect';
import { useWasInView } from 'hooks/useUpdateActiveSection';
import { MouseAnimationContext } from 'context/MouseAnimationContext';
import ResumeButton from 'components/ResumeButton';
import TransitionLabel from 'components/TransitionLabel';
import Greeting, { defaultGreering } from 'components/sections/Contact/Greeting';
import { ContactQuery, ResumeQuery } from '../../../../graphql/generated';

const Contact = ({ contact, resume }: { contact: ContactQuery['contact']; resume: ResumeQuery['resume'] }) => {
  const { setMouseEffect } = useContext(MouseAnimationContext);
  const animationState = useWasInView(ROUTES.contact.id);

  return (
    <>
      <header>
        <h2 className="mb-[clamp(1.2rem,4vw,8rem)] border-b-[0.1vw] border-b-slate-700 pb-[clamp(0.8rem,2vw,5rem)] text-header font-medium leading-none tracking-tight">
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
        className="mb-[clamp(0.8rem,2vw,4rem)] text-slate-400"
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
        onMouseEnter={() => setMouseEffect(contactEffect())}
        onMouseLeave={() => setMouseEffect(defaultEffect())}
        className="group mb-[clamp(1.2rem,2vw,4.6rem)] flex w-fit items-center gap-[clamp(0.6rem,1vw,2.6rem)] text-slate-400"
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
