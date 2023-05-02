import { motion } from 'framer-motion';
import { ROUTES } from 'utils/routes';
import { ptSerif } from 'utils/serifFont';
import ScrollButton from 'components/ScrollButton';

const Skeabrate = () => {
  return (
    <>
      <header>
        <div>
          <motion.p
            initial={{ opacity: 0, transform: 'translateY(-10px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.4, delay: 1 }}
            className="mb-1 font-bold text-teal-500 sm:mb-2"
          >
            Hello, my name is
          </motion.p>

          <h1
            className={
              ptSerif +
              ' relative mb-4 border-b-2 border-b-slate-300/50 pb-2 text-header font-bold leading-none md:mb-6 md:pb-4'
            }
          >
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
        className="mb-5 max-w-2xl leading-tight text-slate-500 lg:mb-7"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda odio earum nisi. Nemo nihil
        cupiditate soluta possimus. Totam aut maxime hic quidem animi architecto minus explicabo cupiditate facilis qui.
      </motion.p>

      <ScrollButton label="More about me" href={ROUTES.about} />
    </>
  );
};

export default Skeabrate;
