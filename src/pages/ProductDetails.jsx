import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import CommonHeader from "../components/common/CommonHeader";
import { BsStars } from "react-icons/bs";
import CommonProductCard from "../components/common/CommonProductCard";

const ProductDetails = () => {
  const [data, setData] = useState(
    "https://geckocustom.com/cdn/shop/files/geckocustom-pet-halloween-costume-funny-dog-costume-with-hat-dog-clothes-halloween-costumes-small-dog-cat-costume-for-girls-boys-33947456274609_600x.jpg?v=1691548205"
  );

  //   https://geckocustom.com/cdn/shop/files/geckocustom-pet-halloween-costume-funny-dog-costume-with-hat-dog-clothes-halloween-costumes-small-dog-cat-costume-for-girls-boys-33947456274609_600x.jpg?v=1691548205
  //   https://ae01.alicdn.com/kf/HTB1Py2RXQL0gK0jSZFtq6xQCXXa2.jpg
  //   https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/vi8AAOSwTodbJTfV/$_57.JPG?set_id=880000500F
  //   https://catspros.s3.amazonaws.com/wp-content/uploads/2023/05/07045823/FunnyChinesePrincessCosplayClothesForCatsHalloweenCostumeDogsXmasSuitCatClothingDogOutfitPetApparel-20-1.jpg
  //   https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/s/06/7b5caeea-f937-4bd4-bf8e-a60e0a7a30a6.jpg

  const buttonImg = [
    "https://ae01.alicdn.com/kf/HTB1Py2RXQL0gK0jSZFtq6xQCXXa2.jpg",
    "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/vi8AAOSwTodbJTfV/$_57.JPG?set_id=880000500F",
    "https://catspros.s3.amazonaws.com/wp-content/uploads/2023/05/07045823/FunnyChinesePrincessCosplayClothesForCatsHalloweenCostumeDogsXmasSuitCatClothingDogOutfitPetApparel-20-1.jpg",
    "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/s/06/7b5caeea-f937-4bd4-bf8e-a60e0a7a30a6.jpg",
  ];

  return (
    <>
      <div className="container px-6 lg:px-0">
        <div className="flex lg:justify-between flex-col lg:flex-row">
          <div>
            <div className="productGallery flex gap-6 items-center border-b border-border pb-[52px] mb-[52px]">
              <div className="flex flex-col gap-4">
                {buttonImg.map((item, i) => (
                  <button
                    onClick={function () {
                      setData(item);
                    }}
                    key={i}
                    className="w-[140px] h-[157.5px] rounded-2xl overflow-hidden"
                  >
                    <img
                      src={item}
                      className="w-full h-full object-cover object-center"
                      alt="Cat"
                    />
                  </button>
                ))}
              </div>
              <div className="w-[640px] h-[678px]">
                <img
                  src={data}
                  className="w-full h-full object-cover object-center"
                  alt="Cat in a costume"
                />
              </div>
            </div>

            <CommonHeader firstHalf={"Black Automatic Watch"} />
          </div>
          {/* -------------Product Variants and Quantities */}
          <div className="w-[460px] h-fit p-[33px] border border-border rounded-2xl">
            <div className="flex justify-between items-start">
              <div className="productReview flex items-center gap-1 h-fit">
                <FaStar className="text-[#FBBF24]" />
                <p className="font-semibold text-base text-body-text">
                  4.9 .{" "}
                  <span className="font-medium underline">142 reviews</span>
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary">$169.99</h2>
                <p className="text-sm font-medium text-body-text line-through text-end">
                  $199.99
                </p>
              </div>
            </div>

            {/* ------------- Product Size */}
            <div className="sizeBox">
              <h2 className="text-base font-semibold text-primary">
                Size: {"S"}
              </h2>
              <div className="sizeButtonBox mt-3 mb-8 flex gap-[8.5px]">
                <button className="w-[72px] h-[44px] border border-border rounded-[12px] flex justify-center items-center">
                  S
                </button>
                <button className="w-[72px] h-[44px] border border-border rounded-[12px] flex justify-center items-center">
                  M
                </button>
                <button className="w-[72px] h-[44px] border border-border rounded-[12px] flex justify-center items-center">
                  XL
                </button>
                <button className="w-[72px] h-[44px] border border-border rounded-[12px] flex justify-center items-center">
                  2XL
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="productQuantity flex justify-between">
              <div className="counter py-2 px-3 rounded-full bg-bg-grey flex gap-4 items-center">
                <button className="w-6 h-6 rounded-full border border-border bg-white flex justify-center items-center text-primary text-[18px]">
                  -
                </button>

                <h2 className="text-base font-medium text-body-text">1</h2>

                <button className="w-6 h-6 rounded-full border border-border bg-white flex justify-center items-center text-primary text-[18px]">
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="py-4 px-8 bg-primary text-white font-medium text-base rounded-full flex gap-2 items-center">
                <IoBagHandleOutline />
                Add to cart
              </button>
            </div>

            {/* Sub-Total */}
            <div className="subTotal w-full flex justify-between text-base text-body-text mt-8">
              <p className="">$169.99 x 1</p>
              <p className="">$169.99</p>
            </div>

            <div className="subTotal w-full flex justify-between text-base text-body-text mt-[10px] mb-4 border-b border-border pb-4">
              <p className="">Tax estimate</p>
              <p className="">$0</p>
            </div>

            <div className="subTotal w-full flex justify-between text-base font-semibold text-primary">
              <p className="">Total</p>
              <p className="">$169.99</p>
            </div>
          </div>
        </div>

        <div className="productDescription flex flex-col gap-10 lg:gap-[60px]">
          <div>
            <h3 className="block lg:hidden font-semibold text-xl text-primary mt-10">
              About this product
            </h3>
            <p className="w-[735px] text-body-text lg:mt-4 mt-1">
              The St. Louis Meramec Canoe Company was founded by Alfred Wickett
              in 1922. Wickett had previously worked for the Old Town Canoe Co
              from 1900 to 1914. Manufacturing of the classic wooden canoes in
              Valley Park, Missouri ceased in 1978.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-primary">
              Fabric + Care
            </h3>
            <p className="w-[735px] text-body-text lg:mt-4 mt-1">
              Material: Soft wool blend <br />
              Color: Various
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-primary">
              Sale performance
            </h3>
            <p className="w-[735px] text-body-text lg:mt-4 mt-1">
              Sales: 0 <br />
              Review Count: - <br />
              Review Average: -
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-primary">Keywords</h3>
            <div className="flex gap-2">
              <div>
                <span className="py-2 text-body-text lg:mt-4 mt-1 px-[14px] text-xs border border-border rounded-full bg-white flex items-center">
                  <BsStars />
                  men's fashion
                </span>
              </div>

              <div>
                <span className="py-2 text-body-text lg:mt-4 mt-1 px-[14px] text-xs border border-border rounded-full bg-white flex items-center">
                  <BsStars />
                  men's fashion
                </span>
              </div>

              <div>
                <span className="py-2 text-body-text lg:mt-4 mt-1 px-[14px] text-xs border border-border rounded-full bg-white flex items-center">
                  <BsStars />
                  men's fashion
                </span>
              </div>

              <div>
                <span className="py-2 text-body-text lg:mt-4 mt-1 px-[14px] text-xs border border-border rounded-full bg-white flex items-center">
                  <BsStars />
                  men's fashion
                </span>
              </div>
            </div>
          </div>
        </div>

        <CommonHeader
          firstHalf={"Recommended products"}
          extraStyling={`mt-[96px] mb-10`}
        />
        <CommonProductCard />
      </div>
    </>
  );
};

export default ProductDetails;
