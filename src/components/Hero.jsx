import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from "react-router";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="slider-container hero-slider">
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
    </>
  );
};

export default Hero;
