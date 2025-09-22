import React from "react";
import CommonHeader from "./common/CommonHeader";
import CommonProductCard from "./common/CommonProductCard";
import Slider from "react-slick";
import axios from "axios";

const Recommendation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  axios.get("https://dummyjson.com/products").then((res) => console.log(res));

  return (
    <section>
      <div className="container">
        <CommonHeader
          firstHalf={"Recommendations."}
          secondHalf={"Best matching products for you"}
        />
        <div className="recommendationCatalogue mt-10">
          <Slider {...settings}>
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
            <CommonProductCard />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
