import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#content"
      className="fixed left-[1vw] top-[1vw] z-40 -translate-x-[calc(105vw)] rounded-[0.5vw] bg-teal-400 px-[2vw] py-[1vw] font-medium text-white transition-transform duration-500 focus:translate-x-0"
    >
      Skip to Contet
    </a>
  );
};

export default SkipToContent;
