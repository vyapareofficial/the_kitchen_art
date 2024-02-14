import React from 'react';
import serv1 from '../assets/images/serv1.png';
import serv2 from '../assets/images/serv2.png';
import serv3 from '../assets/images/serv3.png';

export default function Services() {
  return (
    <div className='bg-[#F9EBEB] p-8 md:px-10'>
      <div className="text-center">
        <h2 className='text-[#25285A] font-medium text-3xl'>SERVICES WE DO</h2>
        <div className="flex flex-col md:flex-row md:justify-center mt-10">
          <div className="relative mb-4 md:mr-20 transform transition-transform duration-300 hover:scale-110">
            <img src={serv1} alt="Service 1" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR KITCHEN</p>
          </div>
          <div className="relative mb-4 md:mr-20 transform transition-transform duration-300 hover:scale-110">
            <img src={serv2} alt="Service 2" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR WARDROBE</p>
          </div>
          <div className="relative mb-4 transform transition-transform duration-300 hover:scale-110">
            <img src={serv3} alt="Service 3" className="w-full h-auto" />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-[#A15757] text-white rounded-b-lg p-2">MODULAR BED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
