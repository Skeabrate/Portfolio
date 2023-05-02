import Image from 'next/image';
import { SkillsQuery } from '../../../graphql/generated';
import { ROUTES } from 'utils/routes';
import { useAnimationWhenInView } from 'hooks/useAnimationWhenInView';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';
import SkillsSlider from 'components/SkillsSlider';

const About = ({ skills: { allSkills } }: { skills: SkillsQuery }) => {
  const { isInView } = useAnimationWhenInView(ROUTES.about);

  return (
    <>
      <Header isInView={isInView} label="About me." />

      <div className="mb-8 grid gap-6 md:mb-12 md:grid-cols-2 lg:mb-16">
        <div>
          <p className="leading-tight text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem molestias dicta assumenda a
            repellendus error, ab dignissimos perspiciatis fugiat, cupiditate harum recusandae ullam dolores cum rerum,
            dolor deleniti id sint? Quod, est, nam pariatur asperiores laborum aspernatur vero ut facilis iure veritatis
            commodi, velit expedita rem iusto ipsam eius id!
          </p>

          <ScrollButton label="Check out my projects" href={ROUTES.projects} />
        </div>

        <div className="group relative aspect-square h-fit w-fit overflow-hidden rounded-2xl">
          <Image
            alt="Sebastian Świeczkowksi"
            src="/me.jpg"
            height={650}
            width={650}
            className="aspect-square object-cover"
          />
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
