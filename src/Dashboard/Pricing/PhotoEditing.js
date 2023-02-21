import React from "react";

import PricingCard from "../../pages/components/PricingCard";
import Tabs from "../../pages/components/Tabs/Tabs";

const PhotoEditing = () => {
  const commonServices = [
    "Single Raw Edit",
    "Color correction",
    "Lens corrections",
    "Lens corrections",
    "Blemish removal",
    "Chromatic Abberation",
    "Brightness and Contrast adjustment",
  ];
  const basicEditInfo = {
    title: "Basic",
    price: "0.80",
    thumbnail: "https://via.placeholder.com/150x150",
    serviceList: [...commonServices],
  };
  const basicPlusEditInfo = {
    title: "Basic Plus",
    price: "1.80",
    thumbnail: "https://via.placeholder.com/150x150",
    serviceList: [
      ...commonServices,
      "Exteriros Sky replacements",
      "Lawn Enhancement",
    ],
  };

  const standardEditInfo = {
    title: "Standard",
    price: "2.80",
    thumbnail: "https://via.placeholder.com/150x150",
    serviceList: [
      ...basicPlusEditInfo.serviceList,
      "Interiors sky replacements",
      "Window replacement",
      "Hard flash shadows removal",
    ],
  };

  const advanceEditInfo = {
    title: "Advance",
    price: "2.80",
    thumbnail: "https://via.placeholder.com/150x150",
    serviceList: [
      ...standardEditInfo.serviceList,
      "Reflections removal",
      "TV and fires replacement",
      "Interiors sky replacements",
      "Window replacement",
      "Hard flash shadows removal",
    ],
  };
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
            <PricingCard pricingDetails={basicEditInfo} />
            <PricingCard pricingDetails={basicPlusEditInfo} />
            <PricingCard pricingDetails={standardEditInfo} />
            <PricingCard pricingDetails={advanceEditInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoEditing;
