import React from "react";
import { Link } from "react-router-dom";

const PricingCard = ({ title, price }) => {
  return (
    <div className="px-8 border py-4 flex bg-[#F4F7FC]">
      <div className="w-[220px] h-24">
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1676476752258-6ce9df0a4820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="ml-12 grid grid-cols-4 gap-6 items-start">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-xs mt-3">
            Below is the list of all the pricing options that we provide, choose
            your own pricing.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Turnaround time</h2>
          <h2 className="text-lg  mt-2">24HRS</h2>
          <p className="text-xs mt-2">Free Turnaround</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Pricing</h2>
          <h4 className="text-lg  mt-2">${price}</h4>
          <p className="text-xs mt-2">Per Edited Image</p>
        </div>
        <div className="flex items-center h-full">
          <Link to="/" className="underline text-blue-500">
            view details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
