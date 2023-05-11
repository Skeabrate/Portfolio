import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ROUTES } from 'utils/routes';
import ScrollButton from 'components/ScrollButton';

const Skeabrate = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elRef,
    offset: ['start 10vh', 'start -50vh'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [1, 0], ['0%', '100%']);

  return (
    <>
      <header>
        <div className="relative mb-[clamp(1.2rem,2vw,2vw)] overflow-hidden border-b-[0.1vw] border-b-slate-700 pb-[clamp(0.6rem,2vw,2vw)]">
          <motion.div ref={elRef} style={{ y, opacity }}>
            <motion.p
              initial={{ opacity: 0, transform: 'translateY(-1vw)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mb-[clamp(0.6rem,1.2vw,1.2vw)] font-bold text-teal-400"
            >
              Hello, my name is
            </motion.p>

            <h1 className="relative text-header font-medium leading-[1.15] lg:leading-none">
              <motion.span
                initial={{ opacity: 0, transform: 'translateY(-1vw)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="block"
              >
                Sebastian
              </motion.span>
              <motion.span
                initial={{ opacity: 0, transform: 'translateY(-1vw)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="block"
              >
                Świeczkowski.
              </motion.span>
            </h1>
          </motion.div>
        </div>

        <h2 className="relative mb-[clamp(0.8rem,1.2vw,1.2vw)] text-subHeader leading-tight text-slate-400">
          <motion.span
            initial={{ opacity: 0, transform: 'translateY(-1vw)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="block"
          >
            I create digital products for web.
          </motion.span>
        </h2>
      </header>

      <motion.div
        initial={{ opacity: 0, transform: 'translateY(-1vw)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <ScrollButton label="More about me" href={ROUTES.about.label} />
      </motion.div>
    </>
  );
};

export default Skeabrate;
