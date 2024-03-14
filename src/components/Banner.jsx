import React, { useEffect, useRef } from 'react';
import bannerimg from '../assets/images/bannerimg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = ({scrollToContact}) => {
  const buttonRef = useRef(null);

  useEffect(() => {

    AOS.init({duration: 2000});

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const button = buttonRef.current;
            if (button) {
              button.style.transition = 'transform 4s ease'; // Adjust the duration as needed
              button.style.transform = 'rotateY(360deg)'; // 360 degrees for two rotations
            }
            observer.disconnect(); // Disconnect the observer after the animation
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(buttonRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='bg-[#F9EBEB] relative mt-5 sm:mt-20'>
      {/* Desktop View */}
      <div className="hidden md:block container mx-auto flex items-center justify-start">
        <div className="max-w-2xl text-left p-4 md:p-2">
          <h2 className="text-xl md:text-3xl font-semibold font-faustine mb-4 md:mb-6">
            BEGIN THE JOURNEY TO YOUR DREAM KITCHEN
          </h2>
           <button
            ref={buttonRef}
            className="border-2 border-[#A15757] text-[#A15757] px-3 py-2 font-medium hover:bg-[#A15757] hover:text-white transition duration-300"
            onClick={scrollToContact}   >
            Speak To Our Expert
          </button>
        </div>
        <div className="absolute p-10 top-1/2 right-0 transform -translate-y-1/2">
          <img src={bannerimg} alt="Banner Image" className='h-[300px]' />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden container mx-auto flex flex-col items-center overflow-hidden">
        <div className="max-w-2xl text-left p-4 md:p-2" data-aos="slide-right">
          <h1 className="text-xl md:text-xl font-semibold font-faustine mb-4 md:mb-6">
            BEGIN THE JOURNEY TO YOUR DREAM KITCHEN
          </h1>
          <button
            ref={buttonRef}
            className="border-2 border-[#A15757] text-[#A15757] px-4 py-2 font-medium hover:bg-[#A15757] hover:text-white transition duration-300"
            onClick={scrollToContact}  >
            Speak To Our Expert
          </button>
        </div>
        <div className="p-10" data-aos="slide-left">
          <img src={bannerimg} alt="Banner Image" className='h-[300px]' />
        </div>
      </div>
    </div>
  );
};

export default Banner;


