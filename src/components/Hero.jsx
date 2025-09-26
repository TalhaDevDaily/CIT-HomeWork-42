import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from "react-router";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="slider-container hero-slider hidden lg:block">
        <Slider {...settings}>
          <div>
            <Link to={"/"}>
              <img className="w-full" src={hero} alt="Hero Background" />
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <img className="w-full" src={hero} alt="Hero Background" />
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <img className="w-full" src={hero} alt="Hero Background" />
            </Link>
          </div>
        </Slider>
      </div>

      {/* Mobile Hero Section */}
      <div className="pt-[163px] pb-[199px] bg-bg-grey">
        <div className="container">
          <div>
            <h2 className="text-sm font-medium text-body-text"></h2>
            <h1 className="text-[30px] font-semibold text-body-text text-primary"></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
