import { useMemo, useRef } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Fira_Code } from 'next/font/google';
import cx from 'classnames';
import { useActiveSection } from 'hooks/useActiveSection';
import { request } from 'lib/request';
import { ROUTES } from 'utils/routes';
import { ProjectsDocument, ProjectsQuery } from '../../graphql/generated';
import Projects from 'components/Projects';
import About from 'components/About';
import Contact from 'components/Contact';

const firaCode = Fira_Code({ subsets: ['cyrillic'], weight: '400', display: 'swap' });

type Props = { projects: ProjectsQuery };

const Home: NextPage<Props> = ({ projects }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(
    () => [
      { id: ROUTES.about, ref: aboutRef },
      { id: ROUTES.projects, ref: projectsRef },
      { id: ROUTES.contact, ref: contactRef },
    ],
    []
  );

  useActiveSection(sections);

  return (
    <main className={cx('mx-auto max-w-6xl', firaCode.className)}>
      <section
        ref={aboutRef}
        id={ROUTES.about}
        className="flex h-screen min-h-[600px] flex-col justify-center sm:min-h-[800px]"
      >
        <About />
      </section>

      <section ref={projectsRef} id={ROUTES.projects} className="h-[100vh] pt-24">
        <Projects projects={projects} />
      </section>

      <section ref={contactRef} id={ROUTES.contact} className="h-[100vh] pt-24">
        <Contact />
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await request(ProjectsDocument);

  return {
    props: { projects },
  };
};

export default Home;
