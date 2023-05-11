import { useState } from 'react';

export type TMouseEffect = 'default' | 'logo' | 'resume' | 'transitionLabel' | 'technology' | 'project';
export type TMouseText = string;

export const useMouseEffect = () => {
  const [mouseText, setMouseText] = useState<TMouseText>('');
  const [mouseEffect, setMouseEffect] = useState<TMouseEffect>('default');

  return {
    mouseText,
    setMouseText,
    mouseEffect,
    setMouseEffect,
  };
};
