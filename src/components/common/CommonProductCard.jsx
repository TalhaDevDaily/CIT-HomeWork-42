import React from "react";
import { FaStar } from "react-icons/fa";

const CommonProductCard = ({
  extraStyling,
  productImg,
  productTitle,
  productPrice,
  productCategory,
  priceBeforeDiscount,
  productRating,
  inStock,
}) => {
  return (
    <div className={`w-[309px] h-[448px] ${extraStyling}`}>
      <div className="w-full h-[347px] rounded-2xl bg-gray-100">
        <img src={productImg} alt="Product Image" />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-primary">{productTitle}</h2>
        <h2 className="text-base font-semibold text-primary">
          ${productPrice}
        </h2>
      </div>
      <div className="flex items-center justify-between mb-[15px] mt-5">
        <p className="text-[14px] text-body-text">{productCategory}</p>
        <p className="text-[14px] text-body-text line-through">
          ${((100 + priceBeforeDiscount) / 100) * productPrice}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <FaStar className="text-[#FBBF24] text-xl" />
        <p className="text-[14px] text-body-text">
          {productRating} <span>({inStock})</span>
        </p>
      </div>
    </div>
  );
};

export default CommonProductCard;
