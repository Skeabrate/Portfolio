import cx from 'classnames';

const ResumeButton = ({ resumeSrc, scrollY = 0 }: { resumeSrc: string | undefined; scrollY?: number }) => {
  return (
    <a
      href={resumeSrc}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        'flex h-[clamp(3rem,2.8vw,2.8vw)] items-center justify-center rounded-full border-[0.1vw] border-teal-400 text-teal-400 transition-all duration-300',
        scrollY > 10 ? 'w-[clamp(3rem,2.8vw,2.8vw)] opacity-0' : 'w-[clamp(8rem,8vw,8vw)] opacity-100'
      )}
    >
      Resume
    </a>
  );
};

export default ResumeButton;
