const TransitionLabel = ({ label }: { label: React.ReactNode }) => {
  return (
    <span className="relative block w-full overflow-hidden leading-[1.15]">
      <span className="fill-child absolute bottom-0 block -translate-y-full text-teal-400 opacity-0 transition-[transform_opacity] duration-300 group-hover:-translate-y-0 group-hover:opacity-100">
        {label}
      </span>
      <span className="relative block opacity-100 transition-[transform_opacity] duration-300 group-hover:translate-y-full group-hover:opacity-0">
        {label}
      </span>
    </span>
  );
};

export default TransitionLabel;
