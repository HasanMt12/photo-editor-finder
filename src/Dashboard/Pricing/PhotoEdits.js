import React from "react";
import PricingCard from "../../pages/components/PricingCard";
import Tabs from "../../pages/components/Tabs/Tabs";

const PhotoEdits = () => {
  return (
    <div className="">
      <div className="ml-8">
        <div className="p-8">
          <h1 className="font-semibold text-3xl text-center">
            Image Edits Pricing for Services
          </h1>
          <p className="text-[#6B6F86] mt-2 text-center">
            Below is the list of all the pricing options that we provide, choose
            your own pricing you want
          </p>
          <div className="mt-4">
            <Tabs />
          </div>
          <div className="mt-7">
            <h3 className="font-semibold text-[#090D28] text-2xl">
              Listings Plan
            </h3>
            <p className="text-[#6B6F86] font-light text-sm mt-1">
              Below is the list of all the pricing options that we provide,
              choose your own pricing you want
            </p>
          </div>
          <div className="mt-7">
            <PricingCard title={"Photo Enhancement"} price={"0.80"} />
            <PricingCard title={"Lawn Replacement"} price={"1.80"} />
            <PricingCard title={"Virtual Twilight"} price={"2.80"} />
            <PricingCard title={"Item removal"} price={"3.80"} />
            <PricingCard title={"Photo Enhancement"} price={"0.80"} />
            <PricingCard title={"Lawn Replacement"} price={"1.80"} />
            <PricingCard title={"Virtual Twilight"} price={"2.80"} />
            <PricingCard title={"Item removal"} price={"3.80"} />
            <PricingCard title={"Photo Enhancement"} price={"0.80"} />
            <PricingCard title={"Lawn Replacement"} price={"1.80"} />
            <PricingCard title={"Virtual Twilight"} price={"2.80"} />
            <PricingCard title={"Item removal"} price={"3.80"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoEdits;
