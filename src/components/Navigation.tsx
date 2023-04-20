'use client';

import { useContext } from 'react';
import cx from 'classnames';
import { ROUTES } from 'utils/routes';
import { ScrollContext } from 'context/ScrollContext';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import ThemeButton from './ThemeButton';

const Navigation = () => {
  const { activeSection } = useContext(ActiveSectionContext);
  const { scrollY } = useContext(ScrollContext);

  return (
    <nav
      className={cx(
        'nav-transition fixed left-0 top-0 flex w-full items-center justify-between px-4 backdrop-blur-sm lg:px-12',
        scrollY > 30 ? 'h-16 shadow-md' : 'h-24 bg-transparent'
      )}
    >
      <a href="#">Skeabrate</a>

      <ul className="flex items-center gap-6">
        <li>
          <a
            className={cx(
              'bg-gradient-to-r from-black to-black bg-no-repeat transition-[background-size] duration-300 dark:from-white dark:to-white',
              ROUTES.about === activeSection
                ? 'bg-[length:100%_1px] bg-left-bottom'
                : 'bg-[length:0px_1px] bg-right-bottom'
            )}
            href={'#' + ROUTES.about}
          >
            {ROUTES.about}
          </a>
        </li>
        <li>
          <a
            className={cx(
              'bg-gradient-to-r from-black to-black bg-no-repeat transition-[background-size] duration-300 dark:from-white dark:to-white',
              ROUTES.skills === activeSection
                ? 'bg-[length:100%_1px] bg-left-bottom'
                : 'bg-[length:0px_1px] bg-right-bottom'
            )}
            href={'#' + ROUTES.skills}
          >
            {ROUTES.skills}
          </a>
        </li>
        <li>
          <a
            className={cx(
              'bg-gradient-to-r from-black to-black bg-no-repeat transition-[background-size] duration-300 dark:from-white dark:to-white',
              ROUTES.projects === activeSection
                ? 'bg-[length:100%_1px] bg-left-bottom'
                : 'bg-[length:0px_1px] bg-right-bottom'
            )}
            href={'#' + ROUTES.projects}
          >
            {ROUTES.projects}
          </a>
        </li>
        <li>
          <a
            className={cx(
              'bg-gradient-to-r from-black to-black bg-no-repeat transition-[background-size] duration-300 dark:from-white dark:to-white',
              ROUTES.contact === activeSection
                ? 'bg-[length:100%_1px] bg-left-bottom'
                : 'bg-[length:0px_1px] bg-right-bottom'
            )}
            href={'#' + ROUTES.contact}
          >
            {ROUTES.contact}
          </a>
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
