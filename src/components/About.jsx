import React from 'react'
import AboutUsImg from '../assets/images/About_us.png'
import { Link } from 'react-router-dom';

function About() {
  return (
    
    <div className="about_us py-5 mx-auto" id="about">
         <div className="max-w-[1170px] mx-auto py-5 p-3 flex flex-col-reverse md:flex-row md:flex md:place-content-around">
            <div className="about_us_img flex py-2 md:py-0  md:place-content-center md:w-[50%] ">
                <img src={AboutUsImg} alt="" className='md:w-[50%]'/>
            </div>
            <div className="about_us_info md:w-[50%]">
                <h5 className=' my-2 text-[#25285A] text-1xl font-medium font-rubik '>ABOUT US</h5>
                <h2 className=' my-2 text-4xl font-normal font-dm'>Welcome To The <br/> Kitchen Art</h2>
                <div className="service_tagline flex gap-5">
                  <div className="sevicetagline-line w-[40px] h-[5px] mt-[18px] bg-[#BFC4BB]">

                  </div>
                <h6 className='my-2 font-canada text-[#A15757]'>We provide an essential service for you</h6>
                </div>
                
                <p className='my-2 font-canada'>With 15 Years of expertise, The Kitchen Art transforms spaces into functional works of art. Our modern modular kitchens seamlessly blend style and practicality, showcasing a commitment to timeless design.</p>
                <button className=' my-2 bg-[#25285A] text-white px-10 py-1 rounded-lg font-canada '>GET STARTED</button>
            </div>
         </div>
    </div>
  
    
  )
}

export default About