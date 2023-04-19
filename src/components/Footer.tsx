import Link from 'next/link';
import { FacebookSVG, GithubSVG, GmailSVG, InstagramSVG } from 'assets/SVGs';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 px-4 text-center">
      <Link href="#">Skeabrate</Link>

      <ul className="flex gap-4">
        <li>
          <a aria-label="github" href="https://github.com/Skeabrate" target="_blank" rel="noopener noreferrer">
            <GithubSVG />
          </a>
        </li>
        <li>
          <a aria-label="gmail" href="mailto:sebastianswiecz458@gmail.com" target="_blank" rel="noopener noreferrer">
            <GmailSVG />
          </a>
        </li>
        <li>
          <a
            aria-label="facebook"
            href="https://www.facebook.com/sebastian.swieczkowski.9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookSVG />
          </a>
        </li>
        <li>
          <a
            aria-label="instagram"
            href="https://www.instagram.com/sebaswieca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramSVG />
          </a>
        </li>
      </ul>

      <p className="text-sm tracking-wider">
        &copy; {new Date().getFullYear()} Sebastian Świeczkowski <br /> All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
