import { ROUTES } from 'utils/routes';
import { motion } from 'framer-motion';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import GreetingAnimation from 'components/GreetingAnimation';
import TransitionLabel from 'components/TransitionLabel';
import { GmailSVG } from 'assets/SVGs';
import { ContactQuery, ResumeQuery } from '../../../graphql/generated';
import Header from 'components/Header';
import TextWithImage from 'components/TextWithImage';

const Contact = ({ contact, resume }: { contact: ContactQuery['contact']; resume: ResumeQuery['resume'] }) => {
  const isInNewSection = useAnimationInNewSection(ROUTES.contact);

  return (
    <>
      <Header isInView={isInNewSection} label={isInNewSection ? <GreetingAnimation /> : null} />

      <TextWithImage imgSrc="/me.jpg">
        <motion.p
          animate={{
            opacity: isInNewSection ? 1 : 0,
            transform: isInNewSection ? 'translateY(0)' : 'translateY(20px)',
          }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="mb-[clamp(0.6rem,2vw,2vw)] lg:my-[clamp(0.6rem,2vw,2vw)]"
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
          className="group mb-[clamp(1rem,2vw,2vw)] flex w-fit items-center gap-[clamp(0.6rem,1vw,1vw)]"
          href="mailto:sebastianswiecz458@gmail.com"
        >
          <GmailSVG />
          <TransitionLabel label="sebastianswiecz458@gmail.com" />
        </motion.a>

        <a
          href={resume?.resumeSrc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[clamp(3rem,4vw,4vw)] w-[clamp(8rem,12vw,12vw)] items-center justify-center rounded-full border border-teal-400 text-teal-400 transition-all duration-300"
        >
          Resume
        </a>
      </TextWithImage>
    </>
  );
};

export default Contact;
