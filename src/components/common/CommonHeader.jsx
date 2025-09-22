import React from "react";

const CommonHeader = ({ firstHalf, secondHalf }) => {
  return (
    <>
      <h1 className="text-primary text-[36px] font-semibold">
        {firstHalf}
        <span className="text-[rgba(75,85,99,0.8)]"> {secondHalf}</span>
      </h1>
    </>
  );
};

export default CommonHeader;
