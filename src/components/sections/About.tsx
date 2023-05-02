import Image from 'next/image';
import { SkillsQuery } from '../../../graphql/generated';
import { ROUTES } from 'utils/routes';
import { ptSerif } from 'utils/serifFont';
import { useAnimationWhenInView } from 'hooks/useAnimationWhenInView';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';
import SkillsSlider from 'components/SkillsSlider';

const DecorationText = ({ children }: { children: React.ReactNode }) => (
  <span className={ptSerif + ' font-bold text-teal-500'}>{children}</span>
);

const About = ({ skills: { allSkills } }: { skills: SkillsQuery }) => {
  const { isInView } = useAnimationWhenInView(ROUTES.about);

  return (
    <>
      <Header isInView={isInView} label="About me." />

      <div className="mb-8 grid gap-8 md:mb-12 md:grid-cols-2 md:gap-10 lg:mb-16">
        <div>
          <p className="mb-4 text-slate-500 md:my-4">
            Hi, my name is <DecorationText>Sebastian Świeczkowski</DecorationText> and I am a frontend developer. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, delectus officiis. Odio quisquam omnis
            animi, quis repellendus delectus rerum culpa expedita. My main stack is{' '}
            <DecorationText>React</DecorationText> and <DecorationText>Typescript.</DecorationText> tempore ipsum
            impedit sint atque nisi, maiores, explicabo et.
          </p>

          <p className="mb-8 text-slate-500">
            <DecorationText>Besides proggramming</DecorationText> I love sports and guitar! amet consectetur adipisicing
            elit. Nemo repudiandae voluptates soluta minima eligendi tenetur at voluptas temporibus itaque. Suscipit.
          </p>

          <ScrollButton label="Check out my projects" href={ROUTES.projects} />
        </div>

        <div className="group relative aspect-square h-fit w-fit after:absolute after:bottom-0 after:right-0 after:hidden after:h-1/3 after:w-1/3 after:rounded-br-3xl after:border-b-4 after:border-r-4 after:border-teal-500 after:transition-all after:duration-300 hover:after:h-full hover:after:w-full md:pb-[10px] md:pr-[10px] md:after:block">
          <div className="overflow-hidden rounded-br-2xl rounded-tl-2xl bg-teal-400">
            <Image
              alt="Sebastian Świeczkowksi"
              src="/me.jpg"
              height={650}
              width={650}
              className="aspect-square object-cover mix-blend-multiply contrast-100 grayscale group-hover:mix-blend-normal group-hover:filter-none"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-xl font-bold text-slate-400 sm:text-3xl lg:mb-7 lg:text-4xl">
          Technologies I used in my projects:
        </h3>
        <SkillsSlider skills={allSkills} />
      </div>
    </>
  );
};

export default About;
