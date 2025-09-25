import React, { useState } from "react";
import CommonHeader from "./common/CommonHeader";
import Slider from "react-slick";

const BestSellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  const [allProducts, setAllProducts] = useState([]);

  return (
    <section className="py-[88px] recommendationCatalogue">
      <div className="container">
        <CommonHeader
          firstHalf={"Best Sellers."}
          secondHalf={"Best selling of the month"}
          extraStyling={"mb-10"}
        />

        <Slider {...settings}>
          {/* {allProducts.map((singleProduct) => (
            <CommonProductCard
              key={singleProduct.id}
              productImg={singleProduct.thumbnail}
              productTitle={singleProduct.title}
              productPrice={singleProduct.price}
              productCategory={singleProduct.category}
              priceBeforeDiscount={singleProduct.discountPercentage}
              productRating={singleProduct.rating}
              inStock={singleProduct.stock}
            />
          ))} */}
        </Slider>
      </div>
    </section>
  );
};

export default BestSellers;
