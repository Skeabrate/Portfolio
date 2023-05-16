import Image from 'next/image';
import React, { useContext } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { GithubSVG } from 'assets/SVGs';
import { defaultEffect, loopedTextEffect } from 'hooks/useMouseEffect';
import { MouseAnimationContext } from 'context/MouseAnimationContext';
import { TProjectHoverEffect } from '.';
import { ProjectsQuery } from '../../../../graphql/generated';

const Project = ({
  project,
  filterChange,
  isScaledDown,
  setProjectHoverEffect,
}: {
  project: ProjectsQuery['allProjects'][number];
  filterChange: string;
  isScaledDown: TProjectHoverEffect['isScaledDown'];
  setProjectHoverEffect: React.Dispatch<React.SetStateAction<TProjectHoverEffect[]>>;
}) => {
  const { setMouseEffect } = useContext(MouseAnimationContext);
  const { title, description, thumbnail, technologies, color, githubUrl, projectUrl } = project;

  const onMouseEnterProject = () => {
    setProjectHoverEffect((state) =>
      state.map((item) => (item.id !== project.id ? { ...item, isScaledDown: true } : item))
    );
    setMouseEffect(loopedTextEffect({ text: title, bgColor: color.hex }));
  };

  const onMouseLeaveProject = () => {
    setProjectHoverEffect((state) => state.map((item) => ({ id: item.id, isScaledDown: false })));
    setMouseEffect(defaultEffect());
  };

  return (
    <motion.li
      key={filterChange}
      initial={{
        opacity: 0,
        transform: 'translateY(1vw)',
      }}
      whileInView={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
      transition={{
        duration: 0.6,
        delay: 0.1,
      }}
    >
      <div
        role="link"
        tabIndex={0}
        onClick={() => window.open(projectUrl || '/', '_ blank')}
        onKeyDown={() => false}
        onMouseEnter={onMouseEnterProject}
        onMouseLeave={onMouseLeaveProject}
        className={cx(
          'group relative flex origin-center cursor-pointer flex-col duration-300',
          isScaledDown ? 'md:scale-90' : 'delay-100 md:scale-100'
        )}
      >
        <div className="relative mb-[clamp(0.6rem,1vw,1vw)] aspect-square overflow-hidden rounded-2xl bg-teal-500/60 md:rounded-[1.4vw]">
          {githubUrl ? (
            <a
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setMouseEffect(loopedTextEffect({ text: 'check code', key: 'loopedTextEffect2' }))}
              onMouseLeave={onMouseEnterProject}
              href={githubUrl}
              target="_blank"
              aria-label="check github"
              rel="noopener noreferrer"
              className="absolute left-[clamp(0.4rem,1vw,1vw)] top-[clamp(0.4rem,1vw,1vw)] z-30 rounded-xl bg-slate-800/60 p-[clamp(1rem,1.6vw,1.6vw)] md:bottom-[clamp(0.4rem,1vw,1vw)] md:left-1/2 md:top-auto md:-translate-x-1/2 md:translate-y-full md:rounded-full md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            >
              <GithubSVG isBig />
            </a>
          ) : null}

          {thumbnail ? (
            <div className="overflow-hidden rounded-2xl md:rounded-[1.4vw]">
              <Image
                alt={title}
                src={thumbnail.url}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:mix-blend-normal group-hover:filter-none md:mix-blend-multiply md:contrast-100 md:grayscale md:group-hover:scale-110"
                height="1600"
                width="1600"
              />
            </div>
          ) : null}
        </div>

        <ul className="flex items-center gap-[clamp(0.4rem,1vw,1vw)]">
          {technologies.map(({ id, icon, title }) => (
            <li key={id}>
              <Image
                alt={title}
                src={icon.url}
                height="24"
                width="24"
                className="w-[clamp(1rem,1.2vw,1.2vw)] group-hover:filter-none md:grayscale"
              />
            </li>
          ))}
        </ul>

        <h3 className="text-[clamp(1.3rem,2vw,2vw)]">{title}</h3>
        {description ? (
          <p className="text-[clamp(0.8rem,1vw,1vw)] leading-[1.3] text-slate-400">{description}</p>
        ) : null}
      </div>
    </motion.li>
  );
};

export default Project;
