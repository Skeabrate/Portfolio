'use client';

import { useMemo, useRef } from 'react';
import { useActiveSection } from 'hooks/useActiveSection';
import { ROUTES } from 'utils/routes';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(
    () => [
      { id: ROUTES.about, ref: aboutRef },
      { id: ROUTES.skills, ref: skillsRef },
      { id: ROUTES.projects, ref: projectsRef },
      { id: ROUTES.contact, ref: contactRef },
    ],
    []
  );

  useActiveSection(sections);

  return (
    <main className="mx-auto max-w-6xl px-4 lg:px-24 " style={{ scrollPaddingTop: '200px' }}>
      <section ref={aboutRef} id={ROUTES.about} className="h-[100vh] pt-24">
        <h2>About me</h2>
      </section>

      <section ref={skillsRef} id={ROUTES.skills} className="h-[100vh] pt-24">
        <h2>Skills</h2>
      </section>

      <section ref={projectsRef} id={ROUTES.projects} className="h-[100vh] pt-24">
        <h2>Projects</h2>
      </section>

      <section ref={contactRef} id={ROUTES.contact} className="h-[100vh] pt-24">
        <h2>Contact</h2>
      </section>
    </main>
  );
}
