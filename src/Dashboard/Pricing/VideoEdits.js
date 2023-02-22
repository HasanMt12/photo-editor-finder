import React from "react";
import PricingCard from "../../pages/components/PricingCard";
import Tabs from "../../pages/components/Tabs/Tabs";

const VideoEdits = () => {
  const unbrandingProccess = {
    title: "UNBRANDING PROCESSING",
    price: "50.80",
    thumbnail: "https://via.placeholder.com/150x150",
    serviceList: ["Single Raw Edit", "Color correction", "Lens corrections"],
  };
  const brandingProccess = {
    title: "Branding PROCESSING",
    price: "65.80",
    thumbnail: "https://via.placeholder.com/150x150",
    serviceList: [
      ...unbrandingProccess.serviceList,
      "Blemish removal",
      "Blemish removal",
      "Brightness and Contrast adjustment",
      "Exteriros Sky replacements",
    ],
  };
  return (
    <div className="bg-[#F5F5F5]">
      
      
      <div className="bg-white ml-12 mt-4 w-[95%] mx-auto h-full">
        
        <div className="p-8">
          <h1 className="font-semibold text-3xl text-center">
            Video Edits Pricing for Services
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
            <PricingCard pricingDetails={unbrandingProccess} />
            <PricingCard pricingDetails={brandingProccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEdits;
