import Image from 'next/image';
import { motion } from 'framer-motion';
import { SkillsQuery } from '../../../graphql/generated';
import { ROUTES } from 'utils/routes';
import { ptSerif } from 'utils/serifFont';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';
import SkillsSlider from 'components/SkillsSlider';

const DecorationText = ({ children }: { children: React.ReactNode }) => (
  <span className={ptSerif + ' font-bold text-teal-500'}>{children}</span>
);

const About = ({ skills: { allSkills } }: { skills: SkillsQuery }) => {
  const isInNewSection = useAnimationInNewSection(ROUTES.about);

  return (
    <>
      <Header isInView={isInNewSection} label="About me." />

      <div className="mb-8 grid gap-8 md:mb-12 md:grid-cols-2 md:gap-10 lg:mb-16">
        <div>
          <motion.p
            animate={{
              opacity: isInNewSection ? 1 : 0,
              transform: isInNewSection ? 'translateY(0)' : 'translateY(20px)',
            }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
            className="mb-4 text-slate-500 md:my-4"
          >
            Hi, my name is <DecorationText>Sebastian Świeczkowski</DecorationText> and I am a frontend developer. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, delectus officiis. Odio quisquam omnis
            animi, quis repellendus delectus rerum culpa expedita. My main stack is{' '}
            <DecorationText>React</DecorationText> and <DecorationText>Typescript.</DecorationText> tempore ipsum
            impedit sint atque nisi, maiores, explicabo et.
          </motion.p>

          <motion.p
            animate={{
              opacity: isInNewSection ? 1 : 0,
              transform: isInNewSection ? 'translateY(0)' : 'translateY(20px)',
            }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
            className="mb-8 text-slate-500"
          >
            <DecorationText>Besides proggramming</DecorationText> I love sports and guitar! amet consectetur adipisicing
            elit. Nemo repudiandae voluptates soluta minima eligendi tenetur at voluptas temporibus itaque. Suscipit.
          </motion.p>

          <motion.div
            animate={{
              opacity: isInNewSection ? 1 : 0,
              transform: isInNewSection ? 'translateY(0)' : 'translateY(20px)',
            }}
            transition={{
              duration: 0.4,
              delay: 0.4,
            }}
          >
            <ScrollButton label="Check out my projects" href={ROUTES.projects} />
          </motion.div>
        </div>

        <motion.div
          animate={{
            opacity: isInNewSection ? 1 : 0,
            transform: isInNewSection ? 'translateY(0)' : 'translateY(20px)',
          }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="group relative aspect-square h-fit w-fit after:absolute after:bottom-0 after:right-0 after:hidden after:h-1/3 after:w-1/3 after:rounded-br-3xl after:border-b-4 after:border-r-4 after:border-teal-500 after:transition-all after:duration-300 hover:after:h-full hover:after:w-full md:pb-2.5 md:pr-2.5 md:after:block"
        >
          <div className="overflow-hidden rounded-br-2xl rounded-tl-2xl bg-teal-300">
            <Image
              alt="Sebastian Świeczkowksi"
              src="/me.jpg"
              height={650}
              width={650}
              className="aspect-square object-cover group-hover:mix-blend-normal group-hover:filter-none md:mix-blend-multiply md:contrast-100 md:grayscale"
            />
          </div>
        </motion.div>
      </div>

      <SkillsSlider skills={allSkills} />
    </>
  );
};

export default About;
