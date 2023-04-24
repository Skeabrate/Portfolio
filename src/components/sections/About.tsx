import { ROUTES } from 'utils/routes';
import { useAnimationWhenInView } from 'hooks/useAnimationWhenInView';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';

const About = () => {
  const { isInView } = useAnimationWhenInView(ROUTES.about);

  return (
    <>
      <Header isInView={isInView} label="About me." />

      <ScrollButton label="Check out my projects" href={ROUTES.projects} />
    </>
  );
};

export default About;
