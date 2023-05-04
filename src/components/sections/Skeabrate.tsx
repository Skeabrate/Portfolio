import { motion, useScroll, useTransform } from 'framer-motion';
import cx from 'classnames';
import { ROUTES } from 'utils/routes';
import { ptSerif } from 'utils/serifFont';
import ScrollButton from 'components/ScrollButton';
import { useRef } from 'react';

const Skeabrate = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elRef,
    offset: ['start 15vh', 'start -30vh'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [1, 0], ['0%', '100%']);

  return (
    <>
      <header>
        <div className="relative mb-4 overflow-hidden border-b-2 border-b-slate-300/50 pb-2 md:mb-6 md:pb-6">
          <motion.div ref={elRef} style={{ y, opacity }}>
            <motion.p
              initial={{ opacity: 0, transform: 'translateY(-10px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.4, delay: 1 }}
              className="mb-1 font-bold text-teal-500 sm:mb-2"
            >
              Hello, my name is
            </motion.p>

            <h1 className={cx(ptSerif, 'relative text-header font-bold leading-none')}>
              <motion.span
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="block"
              >
                Sebastian
                <br />
                Świeczkowski.
              </motion.span>
            </h1>
          </motion.div>
        </div>

        <h2 className="relative mb-3 text-xl font-bold text-slate-400 sm:text-3xl lg:mb-5 lg:text-4xl">
          <motion.span
            initial={{ opacity: 0, transform: 'translateY(-10px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="block"
          >
            I create digital products for web.
          </motion.span>
        </h2>
      </header>

      <motion.p
        initial={{ opacity: 0, transform: 'translateY(-10px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.4, delay: 1.3 }}
        className="mb-5 max-w-2xl text-slate-500 lg:mb-7"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda odio earum nisi. Nemo nihil
        cupiditate soluta possimus. Totam aut maxime hic quidem animi architecto minus explicabo cupiditate facilis qui.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, transform: 'translateY(-10px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        <ScrollButton label="More about me" href={ROUTES.about} />
      </motion.div>
    </>
  );
};

export default Skeabrate;
