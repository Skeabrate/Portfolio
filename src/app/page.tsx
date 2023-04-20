'use client';

import { useMemo, useRef } from 'react';
import ActiveSectionLink from 'components/ActiveSectionLink';
import { useActiveSection } from 'hooks/useActiveSection';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(
    () => [
      { id: 'About me.', ref: aboutRef },
      { id: 'Skills.', ref: skillsRef },
      { id: 'Projects.', ref: projectsRef },
      { id: 'Contact.', ref: contactRef },
    ],
    []
  );

  const { activeSection } = useActiveSection(sections);

  return (
    <main className="mx-auto max-w-6xl px-4 lg:px-24 " style={{ scrollPaddingTop: '200px' }}>
      <ActiveSectionLink activeSection={activeSection} />

      <section ref={aboutRef} id="about" className="h-[100vh] pt-24">
        <h2>About me</h2>
      </section>

      <section ref={skillsRef} id="skills" className="h-[100vh] pt-24">
        <h2>Skills</h2>
      </section>

      <section ref={projectsRef} id="projects" className="h-[100vh] pt-24">
        <h2>Projects</h2>
      </section>

      <section ref={contactRef} id="contact" className="h-[100vh] pt-24">
        <h2>Contact</h2>
      </section>
    </main>
  );
}
