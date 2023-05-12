import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TEffectTypes, TMouseEffect, useMouseEffect } from 'hooks/useMouseEffect';
import { useMousePosition } from 'hooks/useMousePosition';

type TMouseAnimationContext = {
  setMouseEffect: React.Dispatch<React.SetStateAction<TMouseEffect>>;
};

export const MouseAnimationContext = React.createContext({} as TMouseAnimationContext);

const MouseAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const { mousePosition } = useMousePosition();
  const { mouseEffect, setMouseEffect } = useMouseEffect();

  const defaultOptions = {
    top: mousePosition.y,
    left: mousePosition.x,
  };

  const variants: { [key in TEffectTypes]: object } = {
    default: {
      ...defaultOptions,
      transform: 'translate(-50%,-75%)',
      transition: {
        width: {
          duration: 0.2,
        },
        height: {
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
    difference: {
      ...defaultOptions,
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
    disappear: {
      ...defaultOptions,
      transform: 'translate(-50%,-75%) scale(0)',
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
    scaleDown: {
      ...defaultOptions,
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

  return (
    <MouseAnimationContext.Provider value={{ setMouseEffect }}>
      <motion.div
        variants={variants}
        animate={mouseEffect.type}
        className="transition-cursor-background pointer-events-none fixed z-40 hidden h-fit min-h-[1vw] w-fit min-w-[1vw] origin-center -translate-x-1/2 -translate-y-3/4 items-center justify-center rounded-full lg:flex"
        style={{
          background: mouseEffect.bgColor === 'default' ? '#2dd4bf' : mouseEffect.bgColor,
        }}
      >
        <AnimatePresence initial={false}>
          <React.Fragment key={mouseEffect.key}>{mouseEffect.Component}</React.Fragment>
        </AnimatePresence>
      </motion.div>
      {children}
    </MouseAnimationContext.Provider>
  );
};

export default MouseAnimationProvider;
