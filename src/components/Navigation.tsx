import Link from 'next/link';
import ThemeButton from './ThemeButton';

const Navigation = () => {
  return (
    <nav className="mx-auto flex max-w-5xl justify-between px-4 py-8">
      <ul className="flex gap-6">
        <li>
          <Link href="#">Skeabrate</Link>
        </li>
        <li>
          <Link href="#about">About Me</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
      </ul>

      <ul className="flex gap-6">
        <li>Lang</li>
        <li>
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
