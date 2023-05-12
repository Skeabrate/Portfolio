import { useState } from 'react';
import TextLoop from 'components/TextLoop';

export type TEffectTypes = 'default' | 'difference' | 'scaleDown';
export type TMouseEffect = {
  key: number;
  type: TEffectTypes;
  bgColor: string;
  Component: React.ReactNode;
};

export const defaultEffect = (): TMouseEffect => ({
  key: 0,
  type: 'default',
  bgColor: 'default',
  Component: <></>,
});

export const scaleDown = (): TMouseEffect => ({
  key: 1,
  type: 'scaleDown',
  bgColor: 'default',
  Component: <></>,
});

export const difference = (): TMouseEffect => ({
  key: 2,
  type: 'difference',
  bgColor: 'white',
  Component: <></>,
});

export const loopedText = (text: string, bgColor?: string): TMouseEffect => ({
  key: 3,
  type: 'default',
  bgColor: bgColor || 'default',
  Component: <TextLoop text={text} />,
});

export const useMouseEffect = () => {
  const [mouseEffect, setMouseEffect] = useState<TMouseEffect>(defaultEffect());

  return {
    mouseEffect,
    setMouseEffect,
  };
};
