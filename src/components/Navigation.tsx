'use client';

import { useContext } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { ScrollContext } from 'context/ScrollContext';
import ThemeButton from './ThemeButton';

const Navigation = () => {
  const { isOnTop, hideNav } = useContext(ScrollContext);

  return (
    <nav
      className={cx(
        'nav-transition fixed left-0 top-0 flex w-full items-center justify-center',
        hideNav ? '-translate-y-full' : 'translate-y-0',
        isOnTop
          ? 'h-24 bg-zinc-100 dark:bg-zinc-900'
          : 'h-16 bg-zinc-100/80 shadow backdrop-blur-sm dark:bg-zinc-900/80'
      )}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
        <Link href="#">Skeabrate</Link>

        <ul className="flex gap-6">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>

        <ul className="flex gap-6">
          <li>Lang</li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
