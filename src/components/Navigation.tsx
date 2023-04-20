'use client';

import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from 'context/ScrollContext';
import ThemeButton from './ThemeButton';

const Navigation = () => {
  const { scrollY } = useContext(ScrollContext);

  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    if (!navRef.current) return;

    // hide nav on scroll down and show nav on scroll up
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop.current) {
      navRef.current.style.transform = 'translateY(-100%)';
    } else {
      navRef.current.style.transform = 'translateY(0)';
    }
    lastScrollTop.current = st <= 0 ? 0 : st;

    // increase nav height if reaches top of the screen
    if (scrollY > 30) {
      navRef.current.style.height = '64px';
      navRef.current.style.boxShadow = '0 10px 20px -10px rgba(19, 26, 37, 0.7)';
    } else {
      navRef.current.style.height = '96px';
      navRef.current.style.background = 'transparent';
      navRef.current.style.boxShadow = '';
    }
  }, [scrollY]);

  return (
    <nav
      ref={navRef}
      className="nav-transition fixed left-0 top-0 flex w-full items-center justify-between px-4 backdrop-blur-sm lg:px-12"
    >
      <a href="#">Skeabrate</a>

      <ul className="flex items-center gap-6">
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

      <ul className="flex items-center gap-6">
        <li>Lang</li>
        <li>
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
