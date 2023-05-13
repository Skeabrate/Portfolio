import { Roboto_Mono } from 'next/font/google';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { useTime } from 'hooks/useTime';

const monoFont = Roboto_Mono({ subsets: ['latin'], weight: '500', display: 'swap' });

const FooterMouseEffect = () => {
  const { time } = useTime();

  return (
    <motion.div
      initial={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      animate={{
        opacity: 1,
        width: 'clamp(6rem,5vw,5vw)',
        height: 'clamp(2rem,2.2vw,8rem)',
      }}
      exit={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      transition={{
        duration: 0.2,
      }}
      className="flex items-center justify-center"
    >
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cx(monoFont.className, 'text-[clamp(0.8rem,0.6vw,0.6vw)] tracking-wide text-white')}
      >
        {time}
      </motion.span>
    </motion.div>
  );
};

export default FooterMouseEffect;
