import { RefObject, useMemo, useRef } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { TRoute } from 'context/ActiveSectionContext';
import { useActiveSection } from 'hooks/useActiveSection';
import { request } from 'lib/request';
import { ROUTES } from 'utils/routes';
import { ProjectsDocument, ProjectsQuery, SkillsDocument, SkillsQuery } from '../../graphql/generated';
import Skeabrate from 'components/sections/Skeabrate';
import About from 'components/sections/About';
import Projects from 'components/sections/Projects';
import Contact from 'components/sections/Contact';

type Props = { projects: ProjectsQuery; skills: SkillsQuery };
export type TSection = { id: TRoute; ref: RefObject<HTMLDivElement> };

const Home: NextPage<Props> = ({ projects, skills }) => {
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
    <main>
      <section
        ref={skeabrateRef}
        id={ROUTES.skeabrate}
        className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center py-40 2xl:max-w-4xl"
      >
        <Skeabrate />
      </section>

      <section ref={aboutRef} id={ROUTES.about} className="mx-auto min-h-screen max-w-4xl pb-20 sm:pb-40">
        <About skills={skills} />
      </section>

      <section ref={projectsRef} id={ROUTES.projects} className="mx-auto min-h-screen max-w-6xl pb-20 sm:pb-40">
        <Projects projects={projects} />
      </section>

      <section ref={contactRef} id={ROUTES.contact} className="mx-auto min-h-screen max-w-2xl pb-20 sm:pb-40">
        <Contact />
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await request(ProjectsDocument);
  const skills = await request(SkillsDocument);

  return {
    props: { projects, skills },
  };
};

export default Home;
