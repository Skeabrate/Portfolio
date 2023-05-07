import { useEffect, useState } from 'react';

const GREETINGS = ['Hello', 'Olá', 'Ahoj', 'Guten tag', 'こんにちは', 'Bonjour', 'Hola', 'Привіт', 'Cześć!'];
export const defaultGreering = GREETINGS[GREETINGS.length - 1];

const Greeting = () => {
  const [currentGretting, setCurrentGretting] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 800);
  }, []);

  useEffect(() => {
    const updateGretting = setInterval(() => {
      if (!startAnimation || currentGretting === GREETINGS.length - 1) {
        clearInterval(updateGretting);
        return;
      }
      setCurrentGretting((state) => state + 1);
    }, 300);

    return () => {
      clearInterval(updateGretting);
    };
  }, [startAnimation, currentGretting]);

  return <>{GREETINGS[currentGretting]}</>;
};

export default Greeting;
