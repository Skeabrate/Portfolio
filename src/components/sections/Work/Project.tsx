import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { ProjectsQuery } from '../../../../graphql/generated';
import { TIsHovered } from '.';

const Project = ({
  project,
  isScaledDown,
  setIsHovered,
}: {
  project: ProjectsQuery['allProjects'][number];
  isScaledDown: TIsHovered['isScaledDown'];
  setIsHovered: React.Dispatch<React.SetStateAction<TIsHovered[]>>;
}) => {
  const { title, description, thumbnail, technologies, color, githubUrl, projectUrl, gif } = project;

  return (
    <li
      onMouseEnter={() =>
        setIsHovered((state) => state.map((item) => (item.id !== project.id ? { ...item, isScaledDown: true } : item)))
      }
      onMouseLeave={() => setIsHovered((state) => state.map((item) => ({ id: item.id, isScaledDown: false })))}
      className={cx(
        'group flex origin-center cursor-pointer flex-col duration-300',
        isScaledDown ? 'scale-90' : 'scale-100 delay-100'
      )}
    >
      <a href={projectUrl || '/'}>
        <div className="mb-[clamp(1rem,1vw,1vw)] aspect-square overflow-hidden rounded-2xl bg-teal-300 md:rounded-[1.4vw]">
          {thumbnail ? (
            <Image
              alt={title}
              src={thumbnail.url}
              className={cx(
                gif ? 'group-hover:hidden' : '',
                'aspect-square w-full object-cover transition-transform group-hover:mix-blend-normal group-hover:filter-none md:mix-blend-multiply md:contrast-100 md:grayscale'
              )}
              height="1600"
              width="1600"
            />
          ) : null}
          {gif ? (
            <Image
              alt={title}
              src={gif.url}
              className={cx(
                'hidden aspect-square w-full object-cover transition-transform group-hover:block group-hover:mix-blend-normal group-hover:filter-none md:mix-blend-multiply md:contrast-100 md:grayscale'
              )}
              height="1600"
              width="1600"
            />
          ) : null}
        </div>
      </a>

      <ul className="flex items-center gap-[clamp(0.4rem,1vw,1vw)]">
        {technologies.map(({ id, icon, title }) => (
          <li key={id}>
            <Image
              alt={title}
              src={icon.url}
              height="24"
              width="24"
              className="w-[clamp(1.4rem,1.6vw,1.6vw)] group-hover:filter-none md:grayscale"
            />
          </li>
        ))}
      </ul>

      <h3 className="text-subHeader">{title}</h3>
      {description ? <p className="leading-[1.3] text-slate-400">{description}</p> : null}
    </li>
  );
};

export default Project;
