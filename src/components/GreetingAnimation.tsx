import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ptSerif } from 'utils/serifFont';

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
    }, 150);

    return () => {
      clearInterval(updateGretting);
    };
  }, [startGreetingAnimation, currentGrettings]);

  return (
    <div>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className={ptSerif}
      >
        <motion.span
          className="relative block text-6xl text-slate-300 after:absolute after:-left-8 after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:bg-slate-300"
          initial={{
            opacity: 1,
            transform: 'translateY(0)',
          }}
          animate={{
            opacity: currentGrettings === greetings.length - 1 ? 0 : 1,
            transform: currentGrettings === greetings.length - 1 ? 'translateY(-20px)' : 'translateY(0)',
          }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {greetings[currentGrettings]}
        </motion.span>
      </motion.p>
    </div>
  );
};

export default GreetingAnimation;
