import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
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
import { useAnimateWhenInView } from 'hooks/useAnimateWhenInView';
import { defaultEffect, skillsSliderEffect } from 'hooks/useMouseEffect';
import { MouseAnimationContext } from 'context/MouseAnimationContext';
import { SkillsQuery } from '../../../../graphql/generated';

const SliderItems = ({
  skills,
  setCurrentSkill,
  isInView,
}: {
  skills: SkillsQuery['allSkills'];
  setCurrentSkill: React.Dispatch<React.SetStateAction<string>>;
  isInView: boolean;
}) => {
  return (
    <ul className="flex">
      {skills.map(({ id, title, icon }) => (
        <li
          key={id}
          onMouseEnter={() => setCurrentSkill(title)}
          className="flex w-14 items-center justify-center p-3 sm:w-[9vw] sm:p-[2vw]"
        >
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
      ))}
    </ul>
  );
};

function SkillsSlider({ skills }: { skills: SkillsQuery['allSkills'] }) {
  const [currentSkill, setCurrentSkill] = useState('');
  const [speedVelocity, setSpeedVelocity] = useState(0);

  const { setMouseEffect } = useContext(MouseAnimationContext);

  const sliderRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  const { isInView } = useAnimateWhenInView(sliderRef);

  const { scrollY } = useScroll();
  const baseX = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 500,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(
    baseX,
    (v) => `${wrap(0, -1 * (childrenRef?.current ? childrenRef?.current?.getBoundingClientRect().width : 100), v)}px`
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * speedVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    setSpeedVelocity(window.innerWidth * 0.07 < 100 ? 100 : window.innerWidth * 0.07);
  }, []);

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

        <motion.div
          onMouseOver={() => isInView && setMouseEffect(skillsSliderEffect(currentSkill))}
          onMouseLeave={() => setMouseEffect(defaultEffect())}
          className="flex flex-nowrap"
          style={{ x }}
        >
          <div ref={childrenRef}>
            <SliderItems isInView={isInView} skills={skills} setCurrentSkill={setCurrentSkill} />
          </div>
          <SliderItems isInView={isInView} skills={skills} setCurrentSkill={setCurrentSkill} />
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
