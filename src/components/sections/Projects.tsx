import { useMemo, useState } from 'react';
import Image from 'next/image';
import { StructuredText } from 'react-datocms';
import { ProjectsQuery } from '../../../graphql/generated';
import { ROUTES } from 'utils/routes';
import { useAnimationInNewSection } from 'hooks/useActiveSection';
import Header from 'components/Header';
import ScrollButton from 'components/ScrollButton';

const FILTERS = ['All', 'Commercial', 'Personal'];

const Projects = ({ projects }: { projects: ProjectsQuery }) => {
  const [filter, setFilter] = useState(FILTERS[0]);
  const filteredProjects = useMemo(
    () =>
      projects.allProjects.filter(({ projectType }) => (filter === FILTERS[0] ? projectType : projectType === filter)),
    [filter, projects]
  );

  const isInNewSection = useAnimationInNewSection(ROUTES.projects);

  return (
    <>
      <Header isInView={isInNewSection} label="Projects." />

      <ul>
        {FILTERS.map((filter) => (
          <li key={filter}>
            <button onClick={() => setFilter(filter)}>{filter}</button>
          </li>
        ))}
      </ul>

      {filteredProjects.map(({ id, title, githubUrl, projectUrl, screenshots, description, technologies }) => (
        <article key={id}>
          <h3>{title}</h3>
          <p>Github URL: {githubUrl}</p>
          <p>Project URL: {projectUrl}</p>

          <div>
            {screenshots.map(({ id, url }) => (
              <Image key={id} alt={title} src={url} height="100" width="100" />
            ))}
          </div>
          {description ? <StructuredText data={description.value as null} /> : null}

          {technologies.map(({ id, icon, title }) => (
            <div key={id}>
              <Image alt={title} src={icon.url} height="24" width="24" />
              <p>{title}</p>
            </div>
          ))}
        </article>
      ))}

      <ScrollButton label="Contact me!" href={ROUTES.contact} />
    </>
  );
};

export default Projects;
