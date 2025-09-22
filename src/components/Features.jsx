import React from "react";
import { CiGlobe } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Fill } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";

const Features = () => {
  return (
    <section className="mt-[52px] mb-[32px]">
      <div className="container">
        <div className="border border-border py-6 px-10 rounded-2xl flex justify-between">
          {/* Single Feature */}
          <div className="w-[303px] border-r-3 border-border flex gap-4 items-center">
            <LiaShippingFastSolid className="text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-primary">
                Free shipping
              </h2>
              <p className="text-[14px] text-body-text">
                On orders over $50.00
              </p>
            </div>
          </div>

          {/* Single Feature */}
          <div className="w-[303px] border-r-3 border-border flex gap-4 items-center">
            <TbExchange className="text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-primary">
                Very easy to return
              </h2>
              <p className="text-[14px] text-body-text">Just phone number</p>
            </div>
          </div>

          {/* Single Feature */}
          <div className="w-[303px] border-r-3 border-border flex gap-4 items-center">
            <CiGlobe className="text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-primary">
                Worldwide delivery
              </h2>
              <p className="text-[14px] text-body-text">
                Fast delivery worldwide
              </p>
            </div>
          </div>

          {/* Single Feature */}
          <div className="w-[303px] flex gap-4 items-center">
            <RiRefund2Fill className="text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-primary">
                Refunds policy
              </h2>
              <p className="text-[14px] text-body-text">
                60 days return for any reason
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
