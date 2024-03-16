import React from 'react'
import InteriorLogo from '../assets/images/kitchen_art_logo.png';
import InstagramLogo from'../assets/images/instagram.png';
import FbLogo from'../assets/images/Facebook.png';
import WhatsappLogo from'../assets/images/Whatsapp.png';


const Footer = ({scrollToAboutus,scrollToService,scrollToModularkitchen,scrollToContact}) => {
  return (
   <div className="footer bg-[#890809]">

    <div className="max-w-[1170px] mx-auto py-5 p-3 md:flex md:justify-around">

    <div className="footerlogos ml-3 ">
        <div className="interior-logo mt-2">
        <img src={InteriorLogo} alt="My Image" className='w-[120px]' />
        </div>
        <p class="md:text-center text-white py-2 font-canada">Social Networks</p>
        <div className="social-icon-box flex md:justify-center gap-2">
        <a target='blank' href="https://www.instagram.com/thekitchenart.18/?igsh=MTRwanlwdml3cjE5bg%3D%3D"><img src={InstagramLogo} alt="My Image" className='w-[25px] h-[25px]'/></a>
        <a target='blank' href="https://www.facebook.com/thekitchenart.18"><img src={FbLogo} alt="My Image" className='w-[25px] h-[25px]' /></a>


        </div>

    </div>

    <div className="linksbox text-white mt-2  ml-3">
        <p  onClick={scrollToAboutus} className='block  py-2 font-canada hover:cursor-pointer'>About Us</p>
        <p onClick={scrollToService} className='block  py-2 font-canada hover:cursor-pointer'>Our Services</p>
        <p onClick={scrollToModularkitchen} className='block  py-2 font-canada hover:cursor-pointer'>Modular Kitchen</p>
        {/* <p className='block  py-2 font-canada'>Testimonials</p> */}
        <p onClick={scrollToContact} className='block  py-2 font-canada hover:cursor-pointer'>Contact Us</p>

    </div>

    <div className="contactinfo mt-2  ml-3">
        <h2 class="text-[#F8CB89] text-[30px]">CONTACT US</h2>

        <div className="address text-white py-1">
          <h6 className='font-canada'>Address :</h6>
          <p className='font-canada'>16/123, Unnat Nagar, Part 3, M.G. Road, Goregaon (W),<br></br> Near Gajanan Maharaj Mandir, Mumbai 400062.</p>
        </div>

        <div className="phone text-white py-1">
        <h6 className='font-canada'>Phone :</h6>
          <p className='font-canada'>+91 9819953650</p>
          <p className='font-canada'>+91 9967208838</p>

        </div>

        <div className="email text-white py-1">
        <h6 className='font-canada'>Email Id :</h6>
          <p className='font-canada'>thekitchenart2018@gmail.com </p>

        </div>


    </div>

    </div>

   </div>
  )
}

export default Footer