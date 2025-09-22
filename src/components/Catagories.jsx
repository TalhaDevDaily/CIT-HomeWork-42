import React from "react";
import CommonHeader from "./common/CommonHeader";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";

const Catagories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="catagories my-[88px]">
      <div className="container">
        <CommonHeader
          firstHalf={"Start exploring."}
          secondHalf={"Good things are waiting for you"}
        />
        <Slider {...settings}>
          <div className="singleCatagorySlide">
            <div className="flex justify-between items-center">
              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    For Men's
                  </h2>
                  <p className="text-[14px] text-body-text">Starting at $24</p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>

              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    For Women's
                  </h2>
                  <p className="text-[14px] text-body-text">Starting at $19</p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>

              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    Accessories
                  </h2>
                  <p className="text-[14px] text-body-text">
                    Explore accessories
                  </p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="singleCatagorySlide">
            <div className="flex justify-between items-center">
              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    For Men's
                  </h2>
                  <p className="text-[14px] text-body-text">Starting at $24</p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>

              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    For Women's
                  </h2>
                  <p className="text-[14px] text-body-text">Starting at $19</p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>

              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    Accessories
                  </h2>
                  <p className="text-[14px] text-body-text">
                    Explore accessories
                  </p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="singleCatagorySlide">
            <div className="flex justify-between items-center">
              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    For Men's
                  </h2>
                  <p className="text-[14px] text-body-text">Starting at $24</p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>

              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    For Women's
                  </h2>
                  <p className="text-[14px] text-body-text">Starting at $19</p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>

              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    Accessories
                  </h2>
                  <p className="text-[14px] text-body-text">
                    Explore accessories
                  </p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="singleCatagorySlide">
            <div className="flex justify-between items-center">
              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    For Men's
                  </h2>
                  <p className="text-[14px] text-body-text">Starting at $24</p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>

              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    For Women's
                  </h2>
                  <p className="text-[14px] text-body-text">Starting at $19</p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>

              {/* Single Catagory */}
              <div className="w-[418px] p-10 border border-border rounded-2xl flex items-center justify-between mt-[40px]">
                <div className="">
                  <h2 className="text-[24px] font-semibold text-primary">
                    Accessories
                  </h2>
                  <p className="text-[14px] text-body-text">
                    Explore accessories
                  </p>
                </div>
                <Link
                  to={"#"}
                  className="h-[36px] border-l-3 border-border pl-[12px] uppercase flex gap-[8px] items-center"
                >
                  Shop now
                  <FaArrowRightLong className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Catagories;
