// import React from 'react';
// import islandlay from '../assets/images/islandlay.png';

// export default function Kitchenlayouts() {
//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <h1 className="text-4xl font-bold">MODULAR KITCHEN</h1>
//       <h2 className="text-2xl font-semibold">Introducing Our Kitchen Layouts</h2>
//       <div className="flex items-center">
//         <div className="mr-4 border-r-2 border-solid border-black pr-4">
//           <img src={islandlay} alt="Island Kitchen" className="w-24 h-24" />
//         </div>
//         <div>
//           <p>Island Kitchen</p>
//           <p>L Shape Kitchen</p>
//           <p>U - Shape Kitchen</p>
//           <p>Parallel Kitchen</p>
//           <p>Straight line Kitchen vertically</p>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react'
import { useState } from 'react';
import islandlay from '../assets/images/islandlay.png';
import Lshape from '../assets/images/Lshape.jpg';
import Ushape from '../assets/images/Ushape.jpg';
import Parallelshape from '../assets/images/Parallelshape.jpg';
import Straightshape from '../assets/images/Straightshape.jpg';

export default function Kitchenlayouts() {

  const [selectedLayout, setSelectedLayout] = useState('Island'); 
  
  const handleLayoutClick = (layout) => {
    setSelectedLayout(layout);
  };
  

  return (
    <div className='mt-5 sm:mt-36'>
        <h1 className='text-center  font-rubik text-xl'> MODULAR KITCHEN</h1>
        <h1 className='text-center font-dm_serif_text text-3xl'> Introducing Our Kitchen Layouts</h1>
    <div className="about_us py-5  mx-auto  " id="about">
         <div className="max-w-full mx-auto py-5 p-3 flex flex-col-reverse md:flex-row md:flex md:place-content-around">
            <div className="about_us_info flex   md:place-content-center sm:w-[30%]  ">
            <div className="flex items-center ">
            <div className="ml-4 border-l-4 border-solid border-[#890809] pl-4">
  <p
    className={`text-xl text-[#25285A] font-roboto font-normal mb-3 sm:mb-6 cursor-pointer ${selectedLayout === 'Island' ? 'font-extrabold text-[#A15757]  border-b-2 border-[#A15757] transition-all duration-400' : ''}`}
    onClick={() => handleLayoutClick('Island')}
  >
    Island Kitchen
  </p>
  <p
    className={`text-xl text-[#25285A] font-roboto font-normal  mb-3 sm:mb-6 cursor-pointer ${selectedLayout === 'LShape' ? 'font-extrabold text-[#A15757]  border-b-2 border-[#A15757] transition-all duration-400' : ''}`}
    onClick={() => handleLayoutClick('LShape')}
  >
    L Shape Kitchen
  </p>
  <p
    className={`text-xl text-[#25285A] font-roboto font-normal  mb-3 sm:mb-6 cursor-pointer ${selectedLayout === 'UShape' ? 'font-extrabold text-[#A15757]  border-b-2 border-[#A15757] transition-all duration-400' : ''}`}
    onClick={() => handleLayoutClick('UShape')}
  >
    U - Shape Kitchen
  </p>
  <p
    className={`text-xl text-[#25285A] font-roboto font-normal  mb-3 sm:mb-6 cursor-pointer ${selectedLayout === 'Parallel' ? 'font-extrabold text-[#A15757]  border-b-2 border-[#A15757] transition-all duration-400' : ''}`}
    onClick={() => handleLayoutClick('Parallel')}
  >
    Parallel Kitchen
  </p>
  <p
    className={`text-xl text-[#25285A] font-roboto font-normal  mb-3 sm:mb-6 cursor-pointer ${selectedLayout === 'StraightLine' ?  ' font-extrabold text-[#A15757]  border-b-2 border-[#A15757] transition-all duration-400' : ''}`}
    onClick={() => handleLayoutClick('StraightLine')}
  >
    Straight line Kitchen vertically
  </p>
</div>

            </div>
            </div>
            <div className="about_us_img flex   md:place-content-center mb sm:w-[70%]  mb-4 relative">
            <img
  src={
    selectedLayout === 'LShape' ? Lshape :
    selectedLayout === 'UShape' ? Ushape :
    selectedLayout === 'Parallel' ? Parallelshape :
    selectedLayout === 'StraightLine' ?  Straightshape  :
    islandlay
  }
  alt=""
  className='sm:h-[500px] w-full'
/>

<div className="absolute bottom-0 left-0 mb-2 ml-2 flex items-center">
    <p className=" text-xl sm:text-2xl p-1 text-white font-roboto  font-bold mr-2">{selectedLayout} Kitchen</p>
    <div className="w-6 h-1 bg-white"></div>
</div>

          </div>
         </div>
    </div>
    </div>
  )
}
