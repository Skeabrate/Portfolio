import { motion } from 'framer-motion';
import { GmailSVG } from 'assets/SVGs';
import { ROUTES } from 'utils/routes';
import { delay, opacity, translate, duration } from 'utils/transitions';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import { ContactQuery, ResumeQuery } from '../../../graphql/generated';
import TransitionLabel from 'components/TransitionLabel';
import GreetingAnimation from 'components/GreetingAnimation';
import Header from 'components/Header';
import TextWithImage from 'components/TextWithImage';

const Contact = ({ contact, resume }: { contact: ContactQuery['contact']; resume: ResumeQuery['resume'] }) => {
  const isInNewSection = useAnimationInNewSection(ROUTES.contact);

  return (
    <>
      <Header isInView={isInNewSection} label={<GreetingAnimation />} />

      <TextWithImage imgSrc="/me.jpg" isInNewSection={isInNewSection}>
        <motion.p
          animate={{
            opacity: opacity(isInNewSection),
            transform: translate(isInNewSection),
          }}
          transition={{
            duration: duration(isInNewSection),
            delay: delay(isInNewSection),
          }}
          className="mb-[clamp(0.6rem,2vw,2vw)] lg:my-[clamp(0.6rem,2vw,2vw)]"
        >
          {contact?.text}
        </motion.p>

        <motion.a
          animate={{
            opacity: opacity(isInNewSection),
            transform: translate(isInNewSection),
          }}
          transition={{
            duration: duration(isInNewSection),
            delay: delay(isInNewSection, 0.1),
          }}
          className="group mb-[clamp(1rem,2vw,2vw)] flex w-fit items-center gap-[clamp(0.6rem,1vw,1vw)]"
          href="mailto:sebastianswiecz458@gmail.com"
        >
          <GmailSVG />
          <TransitionLabel label="sebastianswiecz458@gmail.com" />
        </motion.a>

        <motion.a
          animate={{
            opacity: opacity(isInNewSection),
            transform: translate(isInNewSection),
          }}
          transition={{
            duration: duration(isInNewSection),
            delay: delay(isInNewSection, 0.2),
          }}
          href={resume?.resumeSrc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[clamp(3rem,4vw,4vw)] w-[clamp(8rem,12vw,12vw)] items-center justify-center rounded-full border-[0.1vw] border-teal-400 text-teal-400 transition-all duration-300"
        >
          Resume
        </motion.a>
      </TextWithImage>
    </>
  );
};

export default Contact;
