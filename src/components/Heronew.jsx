import React from 'react';
import Slider from "react-slick";
import Img1 from "../assets/images/Hero1.png";
import Img2 from "../assets/images/Hero2.png";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Heronew() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="flex-row">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Your Text Here</h2>
          <p className="text-gray-500">Any additional text or content can go here</p>
        </div>
        <div>
          <img src={Img1} alt="Hero 1" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex-row">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Your Text Here</h2>
          <p className="text-gray-500">Any additional text or content can go here</p>
        </div>
        <div>
          <img src={Img2} alt="Hero 2" className="w-full h-auto" />
        </div>
      </div>
    </Slider>
  );
}
