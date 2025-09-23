import React, { useEffect, useState } from "react";
import CommonHeader from "./common/CommonHeader";
import CommonProductCard from "./common/CommonProductCard";
import Slider from "react-slick";
import axios, { Axios } from "axios";

const Recommendation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllProducts(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  console.log(allProducts);

  return (
    <section>
      <div className="container">
        <CommonHeader
          firstHalf={"Recommendations."}
          secondHalf={"Best matching products for you"}
        />

        <div className="mt-10 flex items-center gap-5 lg:gap-16 flex-wrap">
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
        </div>
        {/* <div className="recommendationCatalogue mt-10">
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
        </div> */}
      </div>
    </section>
  );
};

export default Recommendation;
