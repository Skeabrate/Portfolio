import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { RefObject, useMemo, useRef } from 'react';
import { request } from 'lib/request';
import { ROUTES } from 'utils/routes';
import { useUpdateActiveSection } from 'hooks/useUpdateActiveSection';
import { useWorkSectionEffect } from 'hooks/useWorkSectionEffect';
import { TActiveSection } from 'context/ActiveSectionContext';
import Navigation from 'components/Navigation';
import About from 'components/sections/About';
import Contact from 'components/sections/Contact';
import Hero from 'components/sections/Hero';
import Work from 'components/sections/Work';
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

type Props = { projects: ProjectsQuery; skills: SkillsQuery; resume: ResumeQuery; contact: ContactQuery };
export type TSection = TActiveSection & { ref: RefObject<HTMLDivElement> };

const Home: NextPage<Props> = ({ projects, skills, resume, contact }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections: TSection[] = useMemo(
    () => [
      { id: ROUTES.hero.id, label: ROUTES.hero.label, ref: heroRef },
      { id: ROUTES.about.id, label: ROUTES.about.label, ref: aboutRef },
      { id: ROUTES.work.id, label: ROUTES.work.label, ref: workRef },
      { id: ROUTES.contact.id, label: ROUTES.contact.label, ref: contactRef },
    ],
    []
  );

  useUpdateActiveSection(sections);
  useWorkSectionEffect(workRef);

  return (
    <>
      <Head>
        <title>Sebastian Świeczkowski</title>
      </Head>

      <Navigation resume={resume.resume} />

      <main>
        <section
          ref={heroRef}
          id={ROUTES.hero.label}
          className="mx-auto flex h-screen min-h-[50vw] flex-col justify-center py-sectionMobile sm:py-sectionTablet md:py-sectionDesktop"
        >
          <Hero />
        </section>

        <section
          ref={aboutRef}
          id={ROUTES.about.label}
          className="mx-auto pb-sectionMobile sm:pb-sectionTablet md:pb-sectionDesktop"
        >
          <About skills={skills} />
        </section>

        <section
          ref={workRef}
          id={ROUTES.work.label}
          className="mx-auto pb-sectionMobile sm:pb-sectionTablet md:pb-sectionDesktop"
        >
          <Work projects={projects} />
        </section>

        <section
          ref={contactRef}
          id={ROUTES.contact.label}
          className="mx-auto pb-sectionMobile sm:max-w-[70vw] sm:pb-sectionTablet md:pb-sectionDesktop lg:max-w-[50vw]"
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
