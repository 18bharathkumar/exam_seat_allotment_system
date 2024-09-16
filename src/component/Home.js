import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clgvideo from '../img/clg-video.mp4'

export default function SimpleSlider() {
  const clg_detailes = [
    "this is about cmrit college",
    "ajey is gay",
    "thimmu",
    "something else"
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    pauseOnHover: true
  };

  return (
    <>
      <div className="w-full bg-gray-600 ">
        <div className="w-9/10 ml-7 mr-7 h-8">
          <Slider {...settings}>
            {clg_detailes.map((d, index) => (
              <div key={index} className="flex justify-center items-center text-white h-8">
                <h1 className="mt-1 text-center">{d}</h1>
              </div>
            ))}
          </Slider>
        </div>
        </div>
        <video autoPlay  muted loop className="w-full  ">
       <source src={Clgvideo} type="video/mp4" />
       Your browser does not support the video tag.
       </video>

      
    </>
  );
}
