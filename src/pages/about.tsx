import Head from 'next/head';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ROUTES } from 'utils/routes';

const About = () => {
  return (
    <>
      <Head>
        <title>Skeabrate - {ROUTES.about.label}</title>
      </Head>

      <section className="flex min-h-screen flex-col justify-center py-40">
        <header>
          <p className="mb-1 font-bold text-teal-500 dark:font-normal dark:text-teal-400 sm:mb-2 lg:mb-4">Hello,</p>
          <h1 className="relative mb-5 overflow-hidden pb-1 pt-1 text-4xl font-bold sm:text-6xl lg:mb-7 lg:text-7xl">
            About me.
          </h1>
        </header>
      </section>
    </>
  );
};

export default About;
