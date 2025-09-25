import React, { useEffect, useState } from "react";
import CommonHeader from "./common/CommonHeader";
import Slider from "react-slick";
import axios from "axios";
import CommonProductCard from "./common/CommonProductCard";

const BestSellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 8000,
  };

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?skip=10")
      .then((res) => setAllProducts(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-[88px] recommendationCatalogue">
      <div className="container">
        <CommonHeader
          firstHalf={"Best Sellers."}
          secondHalf={"Best selling of the month"}
          extraStyling={"mb-10"}
        />

        <Slider {...settings}>
          {allProducts.map((singleProduct) => (
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
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestSellers;
