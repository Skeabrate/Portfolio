import { ROUTES } from 'utils/routes';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import Header from 'components/Header';

const Contact = () => {
  const isInNewSection = useAnimationInNewSection(ROUTES.contact);

  return (
    <>
      <Header isInView={isInNewSection} label="Hello." />
    </>
  );
};

export default Contact;
