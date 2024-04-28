"use client"
import Testimonial from "./Testimonial";
import Slider from "react-slick";

import  Testimonials  from "./Constants"; // Assuming Testimonials is a named export
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay: false,
    speed: 500,
    arrows: true,
  
  };


  return (
    <div className="p-2">
      
      <Slider {...settings} className="z-[100px]">
        {Testimonials.map((item,index) => (
          <div key={index}>
                  <Testimonial
            name={item.Name}
            position={item.Position}
            description={item.Description}
            picture={item.Pic}
          />
          </div>
       
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
