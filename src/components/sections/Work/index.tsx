import { useMemo, useState } from 'react';
import { ProjectsQuery } from '../../../../graphql/generated';
import { ROUTES } from 'utils/routes';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import { FILTERS, useFilters } from 'hooks/useFilters';
import Header from 'components/Header';
import FiltersBar from './FiltersBar';
import Project from './Project';

export type TIsHovered = {
  id: string;
  isScaledDown: boolean;
};

const Work = ({ projects }: { projects: ProjectsQuery }) => {
  const { filter, handleNewFilter } = useFilters();
  const filteredProjects = useMemo(
    () =>
      projects.allProjects.filter(({ projectType }) => (filter === FILTERS[0] ? projectType : projectType === filter)),
    [filter, projects]
  );

  const [isHovered, setIsHovered] = useState<TIsHovered[]>(
    projects.allProjects.map((project) => ({
      id: project.id,
      isScaledDown: false,
    }))
  );

  const isInNewSection = useAnimationInNewSection(ROUTES.work);

  return (
    <>
      <Header isInView={isInNewSection} label="Work." />

      <FiltersBar isInView={isInNewSection} currentFilter={filter} handleNewFilter={handleNewFilter} />

      <ul className="grid gap-16 md:grid-cols-2 md:gap-x-[clamp(3rem,6vw,6vw)] md:md:gap-y-[clamp(6rem,8vw,8vw)]">
        {filteredProjects.map((project) => (
          <Project
            key={project.id}
            project={project}
            isScaledDown={isHovered.find((item) => item.id === project.id)!.isScaledDown as TIsHovered['isScaledDown']}
            setIsHovered={setIsHovered}
          />
        ))}
      </ul>
    </>
  );
};

export default Work;
