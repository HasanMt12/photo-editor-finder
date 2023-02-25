import React from "react";
import PricingCard from "../../pages/components/PricingCard";
import Tabs from "../../pages/components/Tabs/Tabs";

const PhotoEdits = () => {
  const photoEditsData = [
    {
      title: "Major object removal",
      price: "1.80",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
    {
      title: "Photo enhancement",
      price: "0.80",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
    {
      title: "Lawn Replacement",
      price: "1.00",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
    {
      title: "Virtual Twilight",
      price: "1.50",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
    {
      title: "Virtual Twilight",
      price: "1.80",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
    {
      title: "Declutter",
      price: "1.80",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
    {
      title: "Window replacement",
      price: "1.80",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
    {
      title: "miner object removal",
      price: "1.80",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
    {
      title: "Twilight",
      price: "1.80",
      thumbnail: "https://via.placeholder.com/150x150",
      serviceDesc: [
        "Below is the list of all the pricing options that we provide, choose your own pricing.",
        "Below is the list of all the pricing options that we provide,",
      ],
    },
  ];
  return (
    <div className="bg-[#F5F5F5]">
      
      <div className="bg-white ml-12 mt-4 w-[95%] mx-auto">
        
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
            {photoEditsData.map((data) => (
              <PricingCard pricingDetails={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoEdits;
