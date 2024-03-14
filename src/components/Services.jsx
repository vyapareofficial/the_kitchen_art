import React from 'react';
import serv1 from '../assets/images/serv1.png';
import serv2 from '../assets/images/serv2.png';
import serv3 from '../assets/images/serv3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <div className='bg-[#F9EBEB] p-10 sm:p-8 md:px-10 overflow-hidden' id="Service">
      <div className="text-center">
        <h2 className='text-[#25285A] font-medium text-3xl'data-aos="slide-down">SERVICES WE DO</h2>
        <div className="flex flex-col gap-3 md:flex-row md:justify-center mt-10" data-aos="slide-up">
          <div className="relative mb-4 md:mr-20 transform transition-transform duration-300">
            <img src={serv1} alt="Service 1" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR KITCHEN</p>
          </div>
          <div className="relative mb-4 md:mr-20 transform transition-transform duration-300">
            <img src={serv2} alt="Service 2" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR WARDROBE</p>
          </div>
          <div className="relative mb-4 transform transition-transform duration-300">
            <img src={serv3} alt="Service 3" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR BED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
