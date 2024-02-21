import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/images/kitchen_art_logo.png';

const Navbar = ({scrollToContact, scrollToAboutus,scrollToService}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleAboutUsClick = () => {
    // Close the drawer when "ABOUT US" is clicked
    handleNav();
    
    // Scroll to the "ABOUT US" section
    scrollToAboutus();
  };

  const handlecontactusClick = () => {
    // Close the drawer when "Contact us" is clicked
    handleNav();
    
    // Scroll to the "Contact US" section
    scrollToContact();
  };

  const handleserviceClick = () => {
    handleNav();
    scrollToService();
    console.log('Scrolling to SERVICES');
  };
  
  return (
    <div className='sticky z-50 top-0 bg-[#890809]'>
      <div className='flex justify-between sticky-top h-[100px] items-center py-4 sm:h-24 w-full mx-auto bg-[#890809] px-2 sm:py-4 text-black'>
        <img className='w-[150px] sm:w-[200px] '  src={logo} alt="" />
        
        <ul className='hidden lg:flex'>
          <li className='p-4 font-normal text-xl text-white hover:text-white hover:cursor-pointer'>
            <span>HOME</span>
          </li>
          <li onClick={scrollToAboutus} className='p-4  font-normal text-xl text-white hover:text-white'>
            <span>ABOUT US</span>
          </li>
          <li onClick={scrollToService} className='p-4  font-normal text-xl text-white hover:text-white'>
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
        
        <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <AiOutlineClose color='white'  size={30} /> : <AiOutlineMenu color='white'  size={25} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed z-50 left-0 top-0 w-[60%] h-full ease-in-out duration-500'
              : 'fixed left-full top-0 w-[60%] h-full ease-in-out duration-500'
          }
          style={{
            backgroundColor: 'rgba(137, 8, 9)',
             // Adjust opacity based on the nav variable
            left: nav ? 0 : '-100%', // Set left to 0 when open, and -100% when closed
          }}
        >
          {/* Your drawer content goes here */}
          <div>
            <h1 className='w-full text-4xl font-faustine text-white mt-8 m-4'></h1>
            <li className='p-4 font-extrabold  text-xl text-white font-faustine hover:text-black hover:cursor-pointer' onClick={handleNav}>
              <span>HOME</span>
            </li>
            <li className='p-4 font-extrabold text-xl text-white font-faustine hover:text-black hover:cursor-pointer' onClick={handleAboutUsClick}>
              <span>ABOUT US</span>
            </li>
            <li className='p-4 font-extrabold text-xl text-white font-faustine hover:text-black hover:cursor-pointer' onClick={handleserviceClick}>
              <span>SERVICES</span>
            </li>
            <li className='p-4 font-extrabold text-xl text-white font-faustine ' onClick={handleNav}>
              <span>MODULAR KITCHEN</span>
            </li>
            <li className='p-4 font-extrabold text-xl text-white font-faustine hover:text-black' onClick={handleNav}>
              <span>MODULAR FURNITURE</span>
            </li>
            <li onClick={handlecontactusClick} className='p-4 font-faustine font-extrabold text-xl text-white hover:text-black'>
              <span>CONTACT US</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
