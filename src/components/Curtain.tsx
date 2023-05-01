import { useEffect, useState } from 'react';
import { PT_Serif } from 'next/font/google';
import { motion } from 'framer-motion';

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '400', display: 'swap' });
const greetings = ['Hello', 'Guten tag', 'やあ', 'Bonjour', 'Hola', 'Привіт', 'Cześć!'];

const Curtain = () => {
  const [currentGrettings, setCurrentGretting] = useState(0);
  const [startGreetingAnimation, setStartGreetingAnimation] = useState(false);

  useEffect(() => {
    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
    document.body.style.top = '0';
    document.body.style.left = '0';

    setTimeout(() => {
      setStartGreetingAnimation(true);
    }, 800);

    setTimeout(() => {
      document.body.style.position = 'relative';
      document.body.style.overflow = 'unset';
    }, 2800);
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
    <>
      <motion.div
        className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900"
        initial={{
          transform: 'translateY(0)',
        }}
        animate={{
          transform: 'translateY(-100%)',
        }}
        transition={{ duration: 0.5, ease: [0.3, 0, 0, 1], delay: 2.3 }}
      >
        <motion.div
          initial={{
            transform: 'scaleY(1)',
          }}
          animate={{
            transform: 'scaleY(0)',
          }}
          transition={{ duration: 0.4, delay: 2.5 }}
          className="absolute -bottom-[28vh] -left-[25%] h-[30vh] w-[150%] origin-top rounded-b-[50%] bg-slate-900 "
        ></motion.div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className={ptSerif.className}
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
      </motion.div>
    </>
  );
};

export default Curtain;
