import { useEffect, useState } from 'react';

export type TMousePosition = {
  x: number;
  y: number;
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<TMousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return { mousePosition };
};
