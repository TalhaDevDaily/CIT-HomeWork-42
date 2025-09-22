import React from "react";
import productImg from "../../assets/images/product-image.png";
import { FaStar } from "react-icons/fa";

const CommonProductCard = ({ extraStyling }) => {
  return (
    <div className={`w-[309px] h-[448px] ${extraStyling}`}>
      <div className="w-full h-[347px] rounded-2xl">
        <img src={productImg} alt="Product Image" />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-primary">
          Black Automatic Watch
        </h2>
        <h2 className="text-base font-semibold text-primary">$169.99</h2>
      </div>
      <div className="flex items-center justify-between mb-[15px] mt-5">
        <p className="text-[14px] text-body-text">Accessories</p>
        <p className="text-[14px] text-body-text line-through">$199.99</p>
      </div>
      <div className="flex items-center gap-1">
        <FaStar className="text-[#FBBF24] text-xl" />
        <p className="text-[14px] text-body-text">
          4.9 <span>(98)</span>
        </p>
      </div>
    </div>
  );
};

export default CommonProductCard;
