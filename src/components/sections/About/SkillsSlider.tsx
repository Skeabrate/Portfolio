import Image from 'next/image';
import { useMemo, useRef } from 'react';
import cx from 'classnames';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { ROUTES } from 'utils/routes';
import { useAnimateWhenInView } from 'hooks/useAnimateWhenInView';
import { SkillsQuery } from '../../../../graphql/generated';

function SkillsSlider({ skills }: { skills: SkillsQuery['allSkills'] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { isInView } = useAnimateWhenInView(sliderRef, ROUTES.about.label);

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
        <li key={id} className="flex w-14 items-center justify-center p-3 sm:w-[9vw] sm:p-[2vw]">
          <Image
            src={icon.url}
            height={64}
            width={64}
            alt={title}
            className={cx(
              'h-full w-full object-contain transition-all duration-1000',
              isInView ? 'filter-none' : 'grayscale'
            )}
          />
        </li>
      )),
    [skills, isInView]
  );

  return (
    <>
      <h3 className="relative mb-[clamp(0.6rem,2vw,2vw)] overflow-hidden text-subHeader">
        <span
          className={cx(
            'absolute bottom-0 left-0 top-0 block text-teal-400 transition-all duration-500',
            isInView ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          )}
        >
          Technologies I used in my projects:
        </span>
        <span
          className={cx(
            'relative block text-slate-400 transition-all duration-500',
            isInView ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          )}
        >
          Technologies I used in my projects:
        </span>
      </h3>

      <div ref={sliderRef} className="relative overflow-hidden">
        <span className="absolute right-0 top-0 h-[0.1vw] w-full bg-slate-700" />
        <span
          className={cx(
            isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0',
            'absolute right-0 top-0 h-[0.1vw] w-full origin-center bg-teal-400 transition-all duration-700'
          )}
        />

        <motion.div className="flex flex-nowrap" style={{ x }}>
          <ul className="flex">{children}</ul>
          <ul className="flex">{children}</ul>
        </motion.div>

        <span className="absolute bottom-0 right-0 h-[0.1vw] w-full bg-slate-700" />
        <span
          className={cx(
            isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0',
            'absolute bottom-0 right-0 h-[0.1vw] w-full origin-center bg-teal-400 transition-all duration-700'
          )}
        />
      </div>
    </>
  );
}

export default SkillsSlider;
