import { ROUTES } from 'utils/routes';
import { useAnimationWhenInView } from 'hooks/useAnimationWhenInView';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';
import Image from 'next/image';

const About = () => {
  const { isInView } = useAnimationWhenInView(ROUTES.about);

  return (
    <>
      <Header isInView={isInView} label="About me." />

      <div className="grid grid-cols-2 gap-6">
        <p className="leading-tight text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem molestias dicta assumenda a
          repellendus error, ab dignissimos perspiciatis fugiat, cupiditate harum recusandae ullam dolores cum rerum,
          dolor deleniti id sint? Quod, est, nam pariatur asperiores laborum aspernatur vero ut facilis iure veritatis
          commodi, velit expedita rem iusto ipsam eius id!
        </p>

        <div className="h-fit w-fit overflow-hidden rounded-full object-contain">
          <Image alt="Sebastian Świeczkowksi" src="/me.jpg" height={250} width={250} />
        </div>
      </div>

      <div>
        <h3>Technologies I used in my projects:</h3>

        <ul></ul>
      </div>

      <ScrollButton label="Check out my projects" href={ROUTES.projects} />
    </>
  );
};

export default About;
