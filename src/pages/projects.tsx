import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { StructuredText } from 'react-datocms';
import { request } from 'lib/request';
import { ProjectsDocument, ProjectsQuery } from '../../graphql/generated';
import { ROUTES } from 'utils/routes';

type Props = { projects: ProjectsQuery };

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Skeabrate - {ROUTES.projects.label}</title>
      </Head>

      <section className="flex min-h-screen flex-col justify-center py-40">
        <header>
          <p className="mb-1 font-bold text-teal-500 dark:font-normal dark:text-teal-400 sm:mb-2 lg:mb-4">
            Check out my
          </p>
          <h1 className="relative mb-5 overflow-hidden pb-1 pt-1 text-4xl font-bold sm:text-6xl lg:mb-7 lg:text-7xl">
            Projects.
          </h1>
        </header>

        {projects.allProjects.map(
          ({ id, title, githubUrl, projectUrl, screenshots, projectType, description, technologies }) => (
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
          )
        )}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await request(ProjectsDocument);

  return {
    props: { projects },
  };
};

export default Projects;
