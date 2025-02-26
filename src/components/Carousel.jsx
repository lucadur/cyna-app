import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ children, settings }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // PC
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 426, // Tablette
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 767, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
    ...settings,
  };

  return (
    <div className="w-full max-w-5xl py-8">
      <Slider {...defaultSettings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
