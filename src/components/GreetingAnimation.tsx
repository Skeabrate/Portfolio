import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const greetings = ['Hello', 'Guten tag', 'やあ', 'Bonjour', 'Hola', 'Привіт', 'Cześć!'];

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
    }, 250);

    return () => {
      clearInterval(updateGretting);
    };
  }, [startGreetingAnimation, currentGrettings]);

  return (
    <motion.h2
      initial={{
        opacity: 0,
        transform: 'translateY(20px)',
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
      transition={{ duration: 0.4 }}
      className="w-[110%] leading-none"
    >
      {greetings[currentGrettings]}
    </motion.h2>
  );
};

export default GreetingAnimation;
