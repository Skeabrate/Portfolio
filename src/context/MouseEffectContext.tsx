import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TMouseEffect, TMouseText, useMouseEffect } from 'hooks/useMouseEffect';
import { TMousePosition, useMousePosition } from 'hooks/useMousePosition';

type TMouseAnimationContext = {
  mousePosition: TMousePosition;
  mouseText: TMouseText;
  setMouseText: React.Dispatch<React.SetStateAction<TMouseText>>;
  mouseEffect: TMouseEffect;
  setMouseEffect: React.Dispatch<React.SetStateAction<TMouseEffect>>;
};

export const MouseAnimationContext = React.createContext({} as TMouseAnimationContext);

const MouseAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const { mousePosition } = useMousePosition();
  const { mouseText, setMouseText, mouseEffect, setMouseEffect } = useMouseEffect();

  const variants: { [key in TMouseEffect]: object } = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    logo: {},
    project: {},
    resume: {},
    technology: {},
    transitionLabel: {},
  };

  const value = useMemo(
    () => ({
      mousePosition,
      mouseText,
      setMouseText,
      mouseEffect,
      setMouseEffect,
    }),
    [mousePosition, mouseText, setMouseText, mouseEffect, setMouseEffect]
  );

  return (
    <MouseAnimationContext.Provider value={value}>
      <motion.div
        variants={variants}
        animate={mouseEffect}
        transition={{
          duration: 0.05,
        }}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[clamp(1rem,1vw,1vw)] w-[clamp(1rem,1vw,1vw)] rounded-full bg-teal-400 lg:block"
      ></motion.div>
      {children}
    </MouseAnimationContext.Provider>
  );
};

export default MouseAnimationProvider;
