import React from "react";
import Slider from "react-slick";
import Img1 from "../assets/images/modular_kitchenbg.png";
import Img2 from "../assets/images/wardrobe_bg.png";
import Img3 from "../assets/images/beds_bg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Herosection = () => {
    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div style={{ overflow: "hidden", maxHeight: "85vh" }}>
            <Slider {...settings}>
                <div className="relative">
                    <img src={Img1} alt="" />
                    <div className="absolute top-5 left-3 md:top-20 md:left-10">
                        <h5 className="text-[16px] md:text-[3rem] font-roboto font-bold">MODULAR</h5>
                        <h5 className="text-[16px] md:text-[3rem] font-roboto font-bold" style={{color: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black'}}>KITCHENS</h5>
                        <p className="hidden sm:block">Transform your space with The Kitchen <br></br> Art's modular charm, effortless style,<br></br> seamless functionality.</p>
                        <button class="text-sm bg-white text-black border border-gray-300 px-2 md:px-10 py-1 my-3 rounded-md hover:bg-[#25285A] hover:text-white transition-colors duration-300">View More</button>
                    </div>
                </div>

                <div className="relative">
                    <img src={Img2} alt="" />
                    <div className="absolute top-5 left-3 md:top-20 md:left-10">
                        <h5 className="text-[16px] md:text-[3rem] font-roboto font-bold">MODULAR</h5>
                        <h5 className="text-[16px] md:text-[3rem] font-roboto font-bold" style={{color: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black'}}>WARDROBE</h5>
                        <p className="hidden sm:block">Revamp your storage with our chic  <br></br> Modular Wardrobes – style and <br></br>organization in perfect harmony.</p>
                        <button class="text-sm bg-white text-black border border-gray-300 px-2 md:px-10 py-1 my-3 rounded-md hover:bg-[#25285A] hover:text-white transition-colors duration-300">View More</button>
                    </div>
                </div>
                <div className="relative">
                    <img src={Img3} alt="" />
                    <div className="absolute top-5 left-3 md:top-20 md:left-10">
                        <h5 className="text-[16px] md:text-[3rem] font-roboto font-bold">MODULAR</h5>
                        <h5 className="text-[16px] md:text-[3rem] font-roboto font-bold" style={{color: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black'}}>BEDS</h5>
                        <p className="hidden sm:block">Revamp your storage with our chic  <br></br> Modular Wardrobes – style and  <br></br>organization in perfect harmony.</p>
                        <button class="text-sm bg-white text-black border border-gray-300 px-2 md:px-10 py-1 my-3 rounded-md hover:bg-[#25285A] hover:text-white transition-colors duration-300">View More</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Herosection;
