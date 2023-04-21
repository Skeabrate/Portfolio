'use client';

import { useMemo, useRef } from 'react';
import { useActiveSection } from 'hooks/useActiveSection';
import { ROUTES } from 'utils/routes';

export default function Home() {
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
    <main className="mx-auto max-w-6xl px-4 sm:px-10 lg:px-24 " style={{ scrollPaddingTop: '200px' }}>
      <section ref={aboutRef} id={ROUTES.about} className="flex min-h-screen flex-col justify-center">
        <p className="mb-2 font-bold text-teal-500 transition-colors dark:text-teal-400 md:mb-4">Hello, my name is</p>
        <h1 className="mb-2 text-4xl font-bold md:text-6xl">Sebastian Świeczkowski.</h1>
        <h2 className="text-xl text-slate-500 md:text-3xl">I create digital products for the internet.</h2>
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
