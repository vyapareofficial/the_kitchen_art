import React from 'react';
import serv1 from '../assets/images/serv1.png';
import serv2 from '../assets/images/serv2.png';
import serv3 from '../assets/images/serv3.png';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Services() {

  useEffect(() => {
    const initAOS = () => {
      AOS.init({ duration: 2000 });
    };
  
    // Delay initialization to make sure images are loaded
    const delay = setTimeout(initAOS, 500);
  
    return () => clearTimeout(delay); // Cleanup on component unmount
  }, []);
  
  return (
    <div  className='bg-[#F9EBEB] p-10 sm:p-8 md:px-10 overflow-hidden' id="service" >
      <div className="text-center">
        <h2 data-aos='zoom-in' className='text-[#25285A] font-medium text-3xl'>SERVICES WE DO</h2>
        <div className="flex flex-col gap-3 md:flex-row md:justify-center mt-10">
          <div data-aos='fade-left' className="relative mb-4 md:mr-20 transform transition-transform duration-300 hover:scale-110">
            <img src={serv1} alt="Service 1" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR KITCHEN</p>
          </div>
          <div data-aos='slide-up' className="relative mb-4 md:mr-20 transform transition-transform duration-300 hover:scale-110">
            <img src={serv2} alt="Service 2" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR WARDROBE</p>
          </div>
          <div data-aos='fade-right' className="relative mb-4 transform transition-transform duration-300 hover:scale-110">
            <img src={serv3} alt="Service 3" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR BED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
