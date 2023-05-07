import { useEffect, useState } from 'react';

const greetings = ['Hello', 'Olá', 'Ahoj', 'Guten tag', 'こんにちは', 'Bonjour', 'Hola', 'Привіт', 'Cześć!'];

export const useGreetingAnimation = () => {
  const [currentGrettings, setCurrentGretting] = useState(0);
  const [startGreetingAnimation, setStartGreetingAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartGreetingAnimation(true);
    }, 800);
  }, []);

  useEffect(() => {
    const updateGretting = setInterval(() => {
      if (!startGreetingAnimation || currentGrettings === greetings.length - 1) {
        clearInterval(updateGretting);
        return;
      }
      setCurrentGretting((state) => state + 1);
    }, 300);

    return () => {
      clearInterval(updateGretting);
    };
  }, [startGreetingAnimation, currentGrettings]);

  return {
    greeting: greetings[currentGrettings],
    defaultGreeting: greetings[greetings.length - 1],
  };
};
