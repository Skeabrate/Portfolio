import React from 'react';
import Image from 'next/image';

const TextWithImage = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div className="grid gap-[clamp(2rem,4vw,4vw)] text-slate-400 md:grid-cols-2">
      <article>{children}</article>

      <picture className="group relative aspect-square h-fit w-full overflow-hidden rounded-br-2xl rounded-tl-2xl bg-teal-300 after:absolute after:bottom-0 after:right-0 after:hidden after:h-1/3 after:w-1/3 after:rounded-br-3xl after:border-b-2 after:border-r-2 after:border-teal-400 after:transition-all after:duration-300 hover:after:h-full hover:after:w-full md:pb-2.5 md:pr-2.5 md:after:block">
        <Image
          alt="Sebastian Świeczkowksi"
          src={imgSrc}
          fill
          className="aspect-square w-full object-cover group-hover:mix-blend-normal group-hover:filter-none md:mix-blend-multiply md:contrast-100 md:grayscale"
        />
      </picture>
    </div>
  );
};

export default TextWithImage;
