import { useContext, useMemo, useState } from 'react';
import cx from 'classnames';
import { ProjectsQuery } from '../../../../graphql/generated';
import { ROUTES } from 'utils/routes';
import { useWasInView } from 'hooks/useUpdateActiveSection';
import { FILTERS, useFilters } from 'hooks/useFilters';
import { WorkSectionContext } from 'context/WorkSectionContext';
import Header from 'components/Header';
import FiltersBar from './FiltersBar';
import Project from './Project';

export type TProjectHoverEffect = {
  id: string;
  isScaledDown: boolean;
};

const Work = ({ projects }: { projects: ProjectsQuery }) => {
  const { isWorkSectionEffectActive } = useContext(WorkSectionContext);
  const animationState = useWasInView(ROUTES.work.id);

  const { filter, handleNewFilter } = useFilters();
  const filteredProjects = useMemo(
    () =>
      projects.allProjects.filter(({ projectType }) => (filter === FILTERS[0] ? projectType : projectType === filter)),
    [filter, projects]
  );

  const [projectHoverEffect, setProjectHoverEffect] = useState<TProjectHoverEffect[]>(
    projects.allProjects.map((project) => ({
      id: project.id,
      isScaledDown: false,
    }))
  );

  return (
    <>
      <div
        className={cx(
          'fixed left-0 top-0 h-full w-full bg-gradient-to-b from-slate-950 to-black transition-all duration-700',
          isWorkSectionEffectActive ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      ></div>

      <Header animationState={animationState} label="Work." />

      <FiltersBar animationState={animationState} currentFilter={filter} handleNewFilter={handleNewFilter} />

      <ul className="grid gap-16 md:grid-cols-2 md:gap-x-[clamp(3rem,6vw,6vw)] md:md:gap-y-[clamp(6rem,8vw,8vw)]">
        {filteredProjects.map((project) => (
          <Project
            filterChange={filter}
            key={project.id}
            project={project}
            isScaledDown={
              projectHoverEffect.find((item) => item.id === project.id)!
                .isScaledDown as TProjectHoverEffect['isScaledDown']
            }
            setProjectHoverEffect={setProjectHoverEffect}
          />
        ))}
      </ul>
    </>
  );
};

export default Work;
