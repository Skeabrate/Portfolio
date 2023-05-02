import { useRef } from 'react';
import Image from 'next/image';
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

type ParallaxProps = {
  children: React.ReactNode;
  baseVelocity: number;
};

function ParallaxSlider({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
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

  return (
    <div className="mb-5 overflow-hidden border-b-2 border-t-2 border-slate-300/50 lg:mb-7">
      <motion.div className="flex flex-nowrap" style={{ x }}>
        <ul className="flex">{children}</ul>
        <ul className="flex">{children}</ul>
      </motion.div>
    </div>
  );
}

const SkillsSlider = ({ skills }: { skills: SkillsQuery['allSkills'] }) => {
  return (
    <ParallaxSlider baseVelocity={8}>
      {skills.map(({ id, title, icon }) => (
        <li key={id} className="flex w-28 items-center justify-center p-2">
          <Image src={icon.url} height={64} width={64} alt={title} className="grayscale" />
        </li>
      ))}
    </ParallaxSlider>
  );
};

export default SkillsSlider;
