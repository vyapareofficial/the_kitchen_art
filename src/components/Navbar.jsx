import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/images/kitchen_art_logo.png';

const Navbar = ({scrollToContact}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between h-[100px] items-center py-4 sm:h-24 w-full mx-auto bg-[#890809] px-2 sm:py-4 text-black'>
      <img className='w-[150px] sm:w-[200px] '  src={logo} alt="" />
      
      <ul className='hidden md:flex'>
        <li className='p-4 font-normal text-xl text-white hover:text-white hover:cursor-pointer'>
          <span>HOME</span>
        </li>
        <li className='p-4  font-normal text-xl text-white hover:text-white'>
          <span>ABOUT US</span>
        </li>
        <li className='p-4  font-normal text-xl text-white hover:text-white'>
          <span>SERVICES</span>
        </li>
        <li className='p-4  font-normal text-xl text-white hover:text-white'>
          <span>MODULAR KITCHEN </span>
        </li>
        <li className='p-4  font-normal text-xl text-white hover:text-white'>
          <span>MODULAR FURNITURE</span>
        </li>
        <li onClick={scrollToContact}  className='p-4  font-normal text-xl text-white hover:text-white'>
          <span>CONTACT US</span>
        </li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose color='white' size={20} /> : <AiOutlineMenu color='white' size={20} />}
      </div>
      
      <ul className={nav ? 'fixed z-50 left-0 top-0 w-[60%] h-full bg-[#890809] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[white] m-4'></h1>
        <li className='p-4 font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={handleNav}>
          <span>HOME</span>
        </li>
        <li className='p-4 font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={handleNav}>
          <span>ABOUT US</span>
        </li>
        <li className='p-4 font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={handleNav}>
          <span>SERVICES</span>
        </li>
        <li className='p-4  font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F]' onClick={handleNav}>
          <span>MODULAR KITCHEN</span>
        </li>
        <li className='p-4  font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F]' onClick={handleNav}>
          <span>MODULAR FURNITURE</span>
        </li>
        <li className='p-4  font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F]' onClick={handleNav}>
          <span>CONTACT US</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
