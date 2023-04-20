'use client';

import { useContext } from 'react';
import cx from 'classnames';
import { ScrollContext } from 'context/ScrollContext';
import ThemeButton from './ThemeButton';

const Navigation = () => {
  const { isOnTop, hideNav } = useContext(ScrollContext);

  return (
    <nav
      className={cx(
        'nav-transition fixed left-0 top-0 flex w-full items-center justify-between px-4 lg:px-12',
        hideNav ? '-translate-y-full' : 'translate-y-0',
        isOnTop ? 'h-24 bg-transparent' : 'h-16 bg-slate-100/80 shadow backdrop-blur-sm dark:bg-slate-800/80'
      )}
    >
      <a href="#">Skeabrate</a>

      <ul className="flex gap-6">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <ul className="flex gap-6">
        <li>Lang</li>
        <li>
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
