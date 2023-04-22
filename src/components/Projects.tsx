import Image from 'next/image';
import { StructuredText } from 'react-datocms';
import { request } from 'lib/request';
import { ProjectsDocument } from '../../graphql/generated';

async function getProjects() {
  const res = await request(ProjectsDocument);
  if (!res) throw new Error('failed to fetch data');
  return res;
}

const Projects = async () => {
  const { allProjects } = await getProjects();

  return allProjects.map(({ id, title, githubUrl, projectUrl, screenshots, description, technologies }) => (
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
  ));
};

export default Projects;
