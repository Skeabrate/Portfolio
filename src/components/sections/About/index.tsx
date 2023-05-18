import Image from 'next/image';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ROUTES } from 'utils/routes';
import { delay, duration, opacity, translate } from 'utils/transitions';
import { defaultEffect, disappearEffect } from 'hooks/useMouseEffect';
import { useWasInView } from 'hooks/useUpdateActiveSection';
import { MouseAnimationContext } from 'context/MouseAnimationContext';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';
import SkillsSlider from 'components/sections/About/SkillsSlider';
import { SkillsQuery } from '../../../../graphql/generated';

const DecorationText = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-teal-400">{children}</span>
);

const About = ({ skills: { allSkills } }: { skills: SkillsQuery }) => {
  const { setMouseEffect } = useContext(MouseAnimationContext);
  const animationState = useWasInView(ROUTES.about.id);

  return (
    <>
      <Header animationState={animationState} label="About me." />

      <div className="mb-[clamp(2rem,8vw,12rem)] grid gap-[clamp(2rem,4vw,8rem)] text-slate-400 md:grid-cols-2">
        <article>
          <motion.p
            animate={{
              opacity: opacity(animationState),
              transform: translate(animationState),
            }}
            transition={{
              duration: duration(animationState),
              delay: delay(animationState),
            }}
            className="mb-[clamp(0.8rem,2vw,4rem)] lg:mt-[clamp(0.8rem,4vw,4rem)]"
          >
            Hi! My name is <DecorationText> Sebastian Świeczkowski.</DecorationText> I am a final-year Computer Science
            student and right now I am finishing my engineering thesis, which is focused on the process of web
            application development with use of Next.js. All my time is dedicated to programming, specifically to
            building websites and applications within the React ecosystem. I have completed multiple freelance projects
            for various business clients and currently I am seeking employment as a frontend developer.
          </motion.p>

          <motion.p
            animate={{
              opacity: opacity(animationState),
              transform: translate(animationState),
            }}
            transition={{
              duration: duration(animationState),
              delay: delay(animationState, 0.1),
            }}
            className="mb-[clamp(0.8rem,2vw,4rem)]"
          >
            <DecorationText>Apart from programming,</DecorationText> my big passion is martial arts. I started training
            when I was 5 years old and since then I have reached first DAN (which is equivalent to a black belt) in
            Aikido, as well as in Karate. I also love playing fingerstyle guitar and strength training at the gym.
          </motion.p>

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
            <ScrollButton label="Check out my work" href={ROUTES.work.label} />
          </motion.div>
        </article>

        <motion.picture
          animate={{
            opacity: opacity(animationState),
            transform: translate(animationState),
          }}
          transition={{
            duration: duration(animationState),
            delay: delay(animationState),
          }}
          onMouseEnter={() => setMouseEffect(disappearEffect())}
          onMouseLeave={() => setMouseEffect(defaultEffect())}
          className="group relative aspect-square h-fit w-full after:absolute after:bottom-0 after:right-0 after:hidden after:h-1/3 after:w-1/3 after:rounded-br-[2vw] after:border-b-[0.1vw] after:border-r-[0.1vw] after:border-teal-500 after:transition-all after:duration-500 hover:after:h-full hover:after:w-full md:pb-[0.8vw] md:pr-[0.8vw] md:after:block"
        >
          <div className="overflow-hidden rounded-2xl bg-teal-500/80 md:rounded-bl-none md:rounded-br-[1.4vw] md:rounded-tl-[1.4vw] md:rounded-tr-none">
            <div className="overflow-hidden rounded-2xl md:rounded-bl-none md:rounded-br-[1.4vw] md:rounded-tl-[1.4vw] md:rounded-tr-none">
              <Image
                alt="Sebastian Świeczkowksi"
                src="/me.jpg"
                width={1600}
                height={1600}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:mix-blend-normal group-hover:filter-none md:mix-blend-multiply md:contrast-100 md:grayscale"
              />
            </div>
          </div>
        </motion.picture>
      </div>

      <SkillsSlider skills={allSkills} />
    </>
  );
};

export default About;
