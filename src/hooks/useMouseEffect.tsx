import { useState } from 'react';
import ContactMouseEffect from 'components/MouseEffects/ContactMouseEffect';
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

export const scaleDownEffect = (): TMouseEffect => ({
  key: 'scaleDown',
  type: 'scaleDown',
  bgColor: 'default',
  Component: <></>,
});

export const differenceEffect = (): TMouseEffect => ({
  key: 'difference',
  type: 'difference',
  bgColor: 'white',
  Component: <></>,
});

export const loopedTextEffect = ({
  text,
  bgColor,
  key,
}: {
  text: string;
  bgColor?: string;
  key?: string;
}): TMouseEffect => ({
  key: key || 'loopedText',
  type: 'default',
  bgColor: bgColor || 'default',
  Component: <TextLoop text={text} />,
});

export const contactEffect = (): TMouseEffect => ({
  key: 'contact',
  type: 'default',
  bgColor: 'default',
  Component: <ContactMouseEffect />,
});

export const disappearEffect = (): TMouseEffect => ({
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
