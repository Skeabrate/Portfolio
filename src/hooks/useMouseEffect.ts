import { useState } from 'react';

export type TMouseText = React.ReactNode;
export type TMouseColor = 'default' | string;
export type TMouseEffect = 'default' | 'difference' | 'resume' | 'scaleDown' | 'technology' | 'project';

export const useMouseEffect = () => {
  const [mouseText, setMouseText] = useState<TMouseText>('');
  const [mouseColor, setMouseColor] = useState<TMouseColor>('default');
  const [mouseEffect, setMouseEffect] = useState<TMouseEffect>('default');

  return {
    mouseText,
    setMouseText,
    mouseColor,
    setMouseColor,
    mouseEffect,
    setMouseEffect,
  };
};
