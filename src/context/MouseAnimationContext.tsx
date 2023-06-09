import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TEffectTypes, TMouseEffect, useMouseEffect } from 'hooks/useMouseEffect';
import { useMousePosition } from 'hooks/useMousePosition';
import { useScreenSettings } from 'hooks/useScreenSettings';

type TMouseAnimationContext = {
  setMouseEffect: React.Dispatch<React.SetStateAction<TMouseEffect>>;
};

export const MouseAnimationContext = React.createContext({} as TMouseAnimationContext);

const MouseAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const { displayMouseEffect } = useScreenSettings();
  const { mousePosition } = useMousePosition();
  const { mouseEffect, setMouseEffect } = useMouseEffect();

  const defaultOptions = {
    top: mousePosition.y,
    left: mousePosition.x,
  };

  const defaultTransitions = {
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
  };

  const variants: { [key in TEffectTypes]: object } = {
    default: {
      ...defaultOptions,
      transform: 'translate(-50%,-75%)',
      transition: {
        ...defaultTransitions,
      },
    },
    difference: {
      ...defaultOptions,
      transform: 'translate(-50%,-55%)',
      mixBlendMode: 'difference',
      transition: {
        ...defaultTransitions,
        transform: {
          duration: 0,
        },
      },
    },
    scaleDown: {
      ...defaultOptions,
      transform: 'translate(-50%,-75%) scale(0.4)',
      transition: {
        ...defaultTransitions,
      },
    },
    disappear: {
      ...defaultOptions,
      transform: 'translate(-50%,-75%) scale(0)',
      transition: {
        ...defaultTransitions,
      },
    },
  };

  return (
    <MouseAnimationContext.Provider value={{ setMouseEffect }}>
      {displayMouseEffect ? (
        <motion.div
          variants={variants}
          animate={mouseEffect.type}
          className="transition-cursor-background pointer-events-none fixed z-40 flex h-fit min-h-[0.8vw] w-fit min-w-[0.8vw] origin-center -translate-x-1/2 -translate-y-3/4 items-center justify-center rounded-full"
          style={{
            background: mouseEffect.bgColor === 'default' ? '#2dd4bf' : mouseEffect.bgColor,
          }}
        >
          <AnimatePresence initial={false}>
            <React.Fragment key={mouseEffect.key}>{mouseEffect.Component}</React.Fragment>
          </AnimatePresence>
        </motion.div>
      ) : null}

      {children}
    </MouseAnimationContext.Provider>
  );
};

export default MouseAnimationProvider;
