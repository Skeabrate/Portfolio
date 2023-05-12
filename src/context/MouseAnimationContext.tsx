import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TMouseColor, TMouseEffect, TMouseText, useMouseEffect } from 'hooks/useMouseEffect';
import { useMousePosition } from 'hooks/useMousePosition';

type TMouseAnimationContext = {
  setMouseText: React.Dispatch<React.SetStateAction<TMouseText>>;
  setMouseColor: React.Dispatch<React.SetStateAction<TMouseColor>>;
  setMouseEffect: React.Dispatch<React.SetStateAction<TMouseEffect>>;
};

export const MouseAnimationContext = React.createContext({} as TMouseAnimationContext);

const MouseAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const { mousePosition } = useMousePosition();
  const { mouseText, setMouseText, mouseColor, setMouseColor, mouseEffect, setMouseEffect } = useMouseEffect();

  const variants: { [key in TMouseEffect]: object } = {
    default: {
      top: mousePosition.y,
      left: mousePosition.x,
      transform: 'translate(-50%,-75%)',
    },
    difference: {
      top: mousePosition.y,
      left: mousePosition.x,
      transform: 'translate(-50%,-75%) scale(4)',
      mixBlendMode: 'difference',
      transition: {
        scale: {
          duration: 0.2,
        },
        top: {
          duration: 0.05,
        },
        left: {
          duration: 0.05,
        },
      },
    },
    project: {},
    resume: {},
    technology: {},
    scaleDown: {
      top: mousePosition.y,
      left: mousePosition.x,
      transform: 'translate(-50%,-75%) scale(0.4)',
      transition: {
        scale: {
          duration: 0.2,
        },
        top: {
          duration: 0.05,
        },
        left: {
          duration: 0.05,
        },
      },
    },
  };

  const value = useMemo(
    () => ({
      setMouseText,
      setMouseColor,
      setMouseEffect,
    }),
    [setMouseText, setMouseColor, setMouseEffect]
  );

  return (
    <MouseAnimationContext.Provider value={value}>
      <motion.div
        variants={variants}
        animate={mouseEffect}
        transition={{
          top: {
            duration: 0.05,
          },
          left: {
            duration: 0.05,
          },
        }}
        className="transition-cursor-background pointer-events-none fixed z-40 hidden h-fit min-h-[0.4vw] w-fit min-w-[0.4vw] origin-center -translate-x-1/2 -translate-y-3/4 rounded-full p-[0.5vw] lg:flex"
        style={{
          background: mouseColor === 'default' ? '#2dd4bf' : mouseColor,
        }}
      >
        {mouseText}
      </motion.div>
      {children}
    </MouseAnimationContext.Provider>
  );
};

export default MouseAnimationProvider;
