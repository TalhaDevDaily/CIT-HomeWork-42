import React, { useEffect, useState } from "react";
import CommonHeader from "./common/CommonHeader";
import Slider from "react-slick";
import axios from "axios";
import CommonProductCard from "./common/CommonProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

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
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <div className="container px-6 lg:px-0">
        <CommonHeader
          firstHalf={"Best Sellers."}
          secondHalf={"Best selling of the month"}
          extraStyling={"mb-10"}
        />

        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // time between slides (ms)
            disableOnInteraction: false, // keep autoplay after user swipes
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            639: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            767: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1023: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
        >
          {allProducts.map((singleProduct) => (
            <SwiperSlide key={singleProduct.id}>
              <CommonProductCard
                productImg={singleProduct.thumbnail}
                productTitle={singleProduct.title}
                productPrice={singleProduct.price}
                productCategory={singleProduct.category}
                priceBeforeDiscount={singleProduct.discountPercentage}
                productRating={singleProduct.rating}
                inStock={singleProduct.stock}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Slider {...settings}>
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
        </Slider> */}
      </div>
    </section>
  );
};

export default BestSellers;
