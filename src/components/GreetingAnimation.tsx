import { useEffect, useState } from 'react';

export const greetings = ['Hello', 'Olá', 'Ahoj', 'Guten tag', 'こんにちは', 'Bonjour', 'Hola', 'Привіт', 'Cześć!'];

const GreetingAnimation = () => {
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

  return <h2 className="w-[110%] leading-none">{greetings[currentGrettings]}</h2>;
};

export default GreetingAnimation;
