import { RefObject, useMemo, useRef } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { TRoute } from 'context/ActiveSectionContext';
import { useActiveSection } from 'hooks/useActiveSection';
import { request } from 'lib/request';
import { ROUTES } from 'utils/routes';
import {
  ContactDocument,
  ContactQuery,
  ProjectsDocument,
  ProjectsQuery,
  ResumeDocument,
  ResumeQuery,
  SkillsDocument,
  SkillsQuery,
} from '../../graphql/generated';
import Navigation from 'components/Navigation';
import Skeabrate from 'components/sections/Skeabrate';
import About from 'components/sections/About';
import Projects from 'components/sections/Projects';
import Contact from 'components/sections/Contact';

type Props = { projects: ProjectsQuery; skills: SkillsQuery; resume: ResumeQuery; contact: ContactQuery };
export type TSection = { id: TRoute; ref: RefObject<HTMLDivElement> };

const Home: NextPage<Props> = ({ projects, skills, resume, contact }) => {
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
    <>
      <Navigation resume={resume.resume} />

      <main>
        <section
          ref={skeabrateRef}
          id={ROUTES.skeabrate}
          className="mx-auto flex min-h-screen w-fit flex-col justify-center py-sectionMobile pt-24 sm:py-sectionTablet md:py-sectionDesktop"
        >
          <Skeabrate />
        </section>

        <section
          ref={aboutRef}
          id={ROUTES.about}
          className="mx-auto max-w-4xl pb-sectionMobile sm:pb-sectionTablet md:pb-sectionDesktop"
        >
          <About skills={skills} />
        </section>

        <section
          ref={projectsRef}
          id={ROUTES.projects}
          className="mx-auto max-w-6xl pb-sectionMobile sm:pb-sectionTablet md:pb-sectionDesktop"
        >
          <Projects projects={projects} />
        </section>

        <section
          ref={contactRef}
          id={ROUTES.contact}
          className="mx-auto max-w-2xl pb-sectionMobile sm:pb-sectionTablet md:pb-sectionDesktop"
        >
          <Contact contact={contact.contact} resume={resume.resume} />
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await request(ProjectsDocument);
  const skills = await request(SkillsDocument);
  const resume = await request(ResumeDocument);
  const contact = await request(ContactDocument);

  return {
    props: { projects, skills, resume, contact },
  };
};

export default Home;
