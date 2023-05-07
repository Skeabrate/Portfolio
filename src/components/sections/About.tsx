import { motion } from 'framer-motion';
import { SkillsQuery } from '../../../graphql/generated';
import { ROUTES } from 'utils/routes';
import { delay, duration, opacity, translate } from 'utils/transitions';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';
import SkillsSlider from 'components/SkillsSlider';
import TextWithImage from 'components/TextWithImage';

const DecorationText = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-teal-400">{children}</span>
);

const About = ({ skills: { allSkills } }: { skills: SkillsQuery }) => {
  const isInNewSection = useAnimationInNewSection(ROUTES.about);

  return (
    <>
      <Header isInView={isInNewSection} label="About me." />

      <div className="mb-[clamp(2rem,8vw,8vw)]">
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
            Hi, my name is <DecorationText>Sebastian Świeczkowski</DecorationText> and I am a frontend developer. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, delectus officiis. Odio quisquam omnis
            animi, quis repellendus delectus rerum culpa expedita. My main stack is{' '}
            <DecorationText>React</DecorationText> and <DecorationText>Typescript.</DecorationText> tempore ipsum
            impedit sint atque nisi, maiores, explicabo et.
          </motion.p>

          <motion.p
            animate={{
              opacity: opacity(isInNewSection),
              transform: translate(isInNewSection),
            }}
            transition={{
              duration: duration(isInNewSection),
              delay: delay(isInNewSection, 0.1),
            }}
            className="mb-[clamp(0.6rem,2vw,2vw)]"
          >
            <DecorationText>Besides proggramming</DecorationText> I love sports and guitar! amet consectetur adipisicing
            elit. Nemo repudiandae voluptates soluta minima eligendi tenetur at voluptas temporibus itaque. Suscipit.
          </motion.p>

          <motion.div
            animate={{
              opacity: opacity(isInNewSection),
              transform: translate(isInNewSection),
            }}
            transition={{
              duration: duration(isInNewSection),
              delay: delay(isInNewSection, 0.2),
            }}
          >
            <ScrollButton label="Check out my projects" href={ROUTES.projects} />
          </motion.div>
        </TextWithImage>
      </div>

      <SkillsSlider skills={allSkills} />
    </>
  );
};

export default About;
