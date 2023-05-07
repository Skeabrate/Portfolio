import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TextWithImage = ({
  children,
  imgSrc,
  isInNewSection,
}: {
  children: React.ReactNode;
  imgSrc: string;
  isInNewSection: boolean;
}) => {
  return (
    <div className="grid gap-[clamp(2rem,4vw,4vw)] text-slate-400 md:grid-cols-2">
      <article>{children}</article>

      <motion.picture
        animate={{
          opacity: isInNewSection ? 1 : 0,
          transform: isInNewSection ? 'translateY(0)' : 'translateY(20px)',
        }}
        transition={{
          duration: isInNewSection ? 0.4 : 0.1,
          delay: isInNewSection ? 0.3 : 0,
        }}
        className="group relative aspect-square h-fit w-full after:absolute after:bottom-0 after:right-0 after:hidden after:h-1/3 after:w-1/3 after:rounded-br-[2vw] after:border-b-[0.1vw] after:border-r-[0.1vw] after:border-teal-500 after:transition-all after:duration-300 hover:after:h-full hover:after:w-full md:pb-[0.8vw] md:pr-[0.8vw] md:after:block"
      >
        <div className="overflow-hidden rounded-2xl bg-teal-300 md:rounded-bl-none md:rounded-br-[1.4vw] md:rounded-tl-[1.4vw] md:rounded-tr-none">
          <Image
            alt="Sebastian Świeczkowksi"
            src={imgSrc}
            width={1600}
            height={1600}
            className="aspect-square w-full object-cover group-hover:mix-blend-normal group-hover:filter-none md:mix-blend-multiply md:contrast-100 md:grayscale"
          />
        </div>
      </motion.picture>
    </div>
  );
};

export default TextWithImage;
