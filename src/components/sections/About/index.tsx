import Image from 'next/image';
import { motion } from 'framer-motion';
import { SkillsQuery } from '../../../../graphql/generated';
import { ROUTES } from 'utils/routes';
import { delay, duration, opacity, translate } from 'utils/transitions';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import SkillsSlider from 'components/sections/About/SkillsSlider';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';

const DecorationText = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-teal-400">{children}</span>
);

const About = ({ skills: { allSkills } }: { skills: SkillsQuery }) => {
  const isInNewSection = useAnimationInNewSection(ROUTES.about);

  return (
    <>
      <Header isInView={isInNewSection} label="About me." />

      <div className="mb-[clamp(2rem,8vw,8vw)] grid gap-[clamp(2rem,4vw,4vw)] text-slate-400 md:grid-cols-2">
        <article>
          <motion.p
            animate={{
              opacity: opacity(isInNewSection),
              transform: translate(isInNewSection),
            }}
            transition={{
              duration: duration(isInNewSection),
              delay: delay(isInNewSection),
            }}
            className="mb-[clamp(0.6rem,2vw,2vw)] lg:mt-[clamp(0.6rem,4vw,4vw)]"
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
            <ScrollButton label="Check out my work" href={ROUTES.work} />
          </motion.div>
        </article>

        <motion.picture
          animate={{
            opacity: opacity(isInNewSection),
            transform: translate(isInNewSection),
          }}
          transition={{
            duration: duration(isInNewSection),
            delay: delay(isInNewSection),
          }}
          className="group relative aspect-square h-fit w-full after:absolute after:bottom-0 after:right-0 after:hidden after:h-1/3 after:w-1/3 after:rounded-br-[2vw] after:border-b-[0.1vw] after:border-r-[0.1vw] after:border-teal-500 after:transition-all after:duration-300 hover:after:h-full hover:after:w-full md:pb-[0.8vw] md:pr-[0.8vw] md:after:block"
        >
          <div className="overflow-hidden rounded-2xl bg-teal-300 md:rounded-bl-none md:rounded-br-[1.4vw] md:rounded-tl-[1.4vw] md:rounded-tr-none">
            <Image
              alt="Sebastian Świeczkowksi"
              src="/me.jpg"
              width={1600}
              height={1600}
              className="aspect-square w-full object-cover group-hover:mix-blend-normal group-hover:filter-none md:mix-blend-multiply md:contrast-100 md:grayscale"
            />
          </div>
        </motion.picture>
      </div>

      <SkillsSlider skills={allSkills} />
    </>
  );
};

export default About;
