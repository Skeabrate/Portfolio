import { ROUTES } from 'utils/routes';
import { useAnimationWhenInView } from 'hooks/useAnimationWhenInView';
import Header from 'components/Header';

const Contact = () => {
  const { isInView } = useAnimationWhenInView(ROUTES.contact);

  return (
    <>
      <Header isInView={isInView} label="Hello." />
    </>
  );
};

export default Contact;
