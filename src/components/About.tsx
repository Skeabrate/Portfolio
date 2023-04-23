import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <>
      <p className="mb-2 font-bold text-teal-500 transition-colors dark:text-teal-400 md:mb-4">
        <TypeAnimation sequence={[1200, 'Hello, my name is']} speed={10} repeat={1} />
      </p>
      <h1 className="relative mb-2 overflow-hidden pt-1 text-4xl font-bold md:pt-2 md:text-6xl">
        <motion.span
          initial={{ opacity: 0, transform: 'translateY(10px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.4, delay: 3 }}
          className="block"
        >
          Sebastian Świeczkowski.
        </motion.span>
      </h1>
      <h2 className="relative text-xl text-slate-500 md:text-3xl">
        <motion.span
          initial={{ opacity: 0, transform: 'translateY(10px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.4, delay: 3.1 }}
          className="block"
        >
          I create digital products for the internet.
        </motion.span>
      </h2>
    </>
  );
};

export default About;
