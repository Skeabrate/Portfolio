import { useMemo, useRef } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { SkillsQuery } from '../../graphql/generated';
import { ptSerif } from 'utils/serifFont';
import { useAnimateWhenInView } from 'hooks/useAnimateWhenInView';

function SkillsSlider({ skills }: { skills: SkillsQuery['allSkills'] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { isInView } = useAnimateWhenInView(sliderRef);

  const baseX = useMotionValue(0);
  const baseVelocity = 10;
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 500,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -194.5, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const children = useMemo(
    () =>
      skills.map(({ id, title, icon }) => (
        <li key={id} className="flex w-12 items-center justify-center p-2 sm:w-28">
          <Image
            src={icon.url}
            height={64}
            width={64}
            alt={title}
            className={cx('transition-all duration-1000', isInView ? 'filter-none' : 'grayscale')}
          />
        </li>
      )),
    [skills, isInView]
  );

  return (
    <>
      <h3 className="relative mb-5 overflow-hidden text-xl font-bold sm:text-3xl lg:mb-7 lg:text-4xl">
        <span
          className={cx(
            ptSerif,
            'absolute bottom-0 left-0 top-0 block text-teal-500 transition-all duration-500 sm:leading-10 lg:leading-[2.9rem]',
            isInView ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          )}
        >
          Technologies I used in my projects:
        </span>
        <span
          className={cx(
            'relative block text-slate-400 transition-all duration-500 sm:leading-10 lg:leading-[2.9rem]',
            isInView ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          )}
        >
          Technologies I used in my projects:
        </span>
      </h3>

      <div ref={sliderRef} className="relative mb-5 overflow-hidden py-1 lg:mb-7">
        <span
          className={cx(
            isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0',
            'absolute -top-0 right-0 h-px w-full origin-center bg-teal-500 transition-all duration-700'
          )}
        />
        <span className="absolute right-0 top-0.5 h-0.5 w-full bg-slate-300/50" />
        <motion.div className="flex flex-nowrap" style={{ x }}>
          <ul className="flex">{children}</ul>
          <ul className="flex">{children}</ul>
        </motion.div>
        <span className="absolute bottom-0.5 right-0 h-0.5 w-full bg-slate-300/50" />
        <span
          className={cx(
            isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0',
            'absolute bottom-0 right-0 h-px w-full origin-center bg-teal-500 transition-all duration-700'
          )}
        />
      </div>
    </>
  );
}

export default SkillsSlider;
