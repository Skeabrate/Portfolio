import { useState } from 'react';
import IconEffect from 'components/MouseEffects/IconEffect';
import TextLoop from 'components/MouseEffects/TextLoop';

export type TEffectTypes = 'default' | 'difference' | 'scaleDown' | 'disappear';
export type TMouseEffect = {
  key: string;
  type: TEffectTypes;
  bgColor: string;
  Component: React.ReactNode;
};

export const defaultEffect = (): TMouseEffect => ({
  key: 'default',
  type: 'default',
  bgColor: 'default',
  Component: <></>,
});

export const scaleDown = (): TMouseEffect => ({
  key: 'scaleDown',
  type: 'scaleDown',
  bgColor: 'default',
  Component: <></>,
});

export const difference = (): TMouseEffect => ({
  key: 'difference',
  type: 'difference',
  bgColor: 'white',
  Component: <></>,
});

export const loopedText = ({ text, bgColor, key }: { text: string; bgColor?: string; key?: string }): TMouseEffect => ({
  key: key || 'loopedText',
  type: 'default',
  bgColor: bgColor || 'default',
  Component: <TextLoop text={text} />,
});

export const iconEffect = (icon: React.ReactNode, bgColor?: string): TMouseEffect => ({
  key: 'iconEffect',
  type: 'default',
  bgColor: bgColor || 'default',
  Component: <IconEffect icon={icon} />,
});

export const disappear = (): TMouseEffect => ({
  key: 'disappear',
  type: 'disappear',
  bgColor: 'default',
  Component: <></>,
});

export const useMouseEffect = () => {
  const [mouseEffect, setMouseEffect] = useState<TMouseEffect>(defaultEffect());

  return {
    mouseEffect,
    setMouseEffect,
  };
};
