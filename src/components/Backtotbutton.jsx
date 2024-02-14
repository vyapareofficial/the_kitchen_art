import React from 'react';

const BackToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-5 left-5 z-40 p-2 rounded-full bg-[#A15757] text-white hover:bg-[] focus:outline-none focus:ring-2 focus:ring-[#A15757] flex items-center justify-center"
      style={{ width: '36px', height: '36px' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
