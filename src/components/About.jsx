import React, { useEffect } from 'react';
import AboutUsImg from '../assets/images/About_us.png';

function About({ scrollToContact }) {
  useEffect(() => {
    // Run this code when the component mounts or updates
    const button = document.getElementById('rotateButtonAbout');
    if (button) {
      button.style.transition = 'transform 4s ease'; // Adjust the duration as needed
      button.style.transform = 'rotateY(360deg)'; // 360 degrees for two rotations
    }
  }, []);

  return (
    <div className="about_us py-5 mx-auto" id="about">
      <div className="max-w-[1170px] mx-auto py-5 p-3 flex flex-col-reverse md:flex-row md:flex md:place-content-around">
        <div className="about_us_img flex py-2 md:py-0 md:place-content-center md:w-[50%]">
          <img src={AboutUsImg} alt="" className="md:w-[50%]" />
        </div>
        <div className="about_us_info md:w-[50%]">
          <h5 className="my-2 text-[#25285A] text-1xl font-medium font-rubik">ABOUT US</h5>
          <h2 className="my-2 text-4xl font-normal font-dm">Welcome To The <br /> Kitchen Art</h2>
          <div className="service_tagline flex gap-5">
            <div className="sevicetagline-line w-[40px] h-[5px] mt-[18px] bg-[#BFC4BB]"></div>
            <h6 className="my-2 font-canada text-[#A15757]">We provide an essential service for you</h6>
          </div>

          <p className="my-2 font-canada">
            With 15 Years of expertise, The Kitchen Art transforms spaces into functional works of art. Our modern
            modular kitchens seamlessly blend style and practicality, showcasing a commitment to timeless design.
          </p>
          <button
            id="rotateButtonAbout"
            onClick={scrollToContact} // Add this onClick handler
            className='my-3 mb-6 border-2 hover:border-[#25285A] hover:bg-white hover:text-[#25285A] transition duration-300 bg-[#25285A] text-white px-10 py-1 rounded-lg font-canada'
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
