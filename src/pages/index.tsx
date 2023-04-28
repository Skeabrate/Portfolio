import { RefObject, useMemo, useRef } from 'react';
import { GetStaticProps, NextPage } from 'next';
import cx from 'classnames';
import { TRoute } from 'context/ActiveSectionContext';
import { useActiveSection } from 'hooks/useActiveSection';
import { request } from 'lib/request';
import { ROUTES } from 'utils/routes';
import { ProjectsDocument, ProjectsQuery } from '../../graphql/generated';
import Skeabrate from 'components/sections/Skeabrate';
import About from 'components/sections/About';
import Projects from 'components/sections/Projects';
import Contact from 'components/sections/Contact';

type Props = { projects: ProjectsQuery };
export type TSection = { id: TRoute; ref: RefObject<HTMLDivElement> };

const Home: NextPage<Props> = ({ projects }) => {
  const skeabrateRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections: TSection[] = useMemo(
    () => [
      { id: ROUTES.skeabrate, ref: skeabrateRef },
      { id: ROUTES.about, ref: aboutRef },
      { id: ROUTES.projects, ref: projectsRef },
      { id: ROUTES.contact, ref: contactRef },
    ],
    []
  );

  useActiveSection(sections);

  return (
    <main className={cx('mx-auto max-w-6xl')}>
      <section ref={skeabrateRef} id={ROUTES.skeabrate} className="flex min-h-screen flex-col justify-center py-40">
        <Skeabrate />
      </section>

      <section ref={aboutRef} id={ROUTES.about} className="min-h-screen pb-40">
        <About />
      </section>

      <section ref={projectsRef} id={ROUTES.projects} className="min-h-screen pb-40">
        <Projects projects={projects} />
      </section>

      <section ref={contactRef} id={ROUTES.contact} className="min-h-screen pb-40">
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
