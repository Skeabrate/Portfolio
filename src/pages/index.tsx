import Head from 'next/head';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowSVG } from 'assets/SVGs';
import { ROUTES } from 'utils/routes';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Skeabrate</title>
      </Head>

      <section className="flex min-h-screen flex-col justify-center py-40">
        <header>
          <p className="mb-1 font-bold text-teal-500 dark:font-normal dark:text-teal-400 sm:mb-2 lg:mb-4">
            <TypeAnimation sequence={[1200, 'Hello, my name is']} speed={10} repeat={1} />
          </p>
          <h1 className="relative mb-1 overflow-hidden pt-2 text-4xl font-bold sm:mb-2 sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, transform: 'translateY(10px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.4, delay: 3 }}
              className="block"
            >
              Sebastian Świeczkowski.
            </motion.span>
          </h1>
          <h2 className="relative mb-5 text-xl font-bold text-slate-400 sm:text-3xl lg:mb-7 lg:text-4xl">
            <motion.span
              initial={{ opacity: 0, transform: 'translateY(10px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.4, delay: 3.1 }}
              className="block"
            >
              I create digital products for web.
            </motion.span>
          </h2>
        </header>

        <motion.p
          initial={{ opacity: 0, transform: 'translateY(10px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.4, delay: 3.2 }}
          className="mb-5 max-w-2xl leading-tight text-slate-500 lg:mb-7"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda odio earum nisi. Nemo nihil
          cupiditate soluta possimus. Totam aut maxime hic quidem animi architecto minus explicabo cupiditate facilis
          qui.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, transform: 'translateY(10px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.4, delay: 3.3 }}
        >
          <Link
            href={ROUTES.projects.href}
            className="relative flex w-fit items-end gap-3 py-1 font-bold text-teal-500 after:absolute after:bottom-0 after:left-0 after:h-px after:w-2/3 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full dark:font-normal dark:text-teal-400 dark:after:text-teal-400"
          >
            <ArrowSVG />
            Check out my projects
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
