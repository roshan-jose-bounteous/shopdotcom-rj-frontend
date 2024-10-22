"use client";
import Typography from "@/components/common/Typography";
import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("Product Details");

  const renderContent = () => {
    switch (activeTab) {
      case "Product Details":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-albertsans text-[#9F9F9F] ">
            <Typography variant="p" text="This is the Description" />
          </div>
        );
      case "FAQ":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-albertsans text-[#9F9F9F] ">
            <Typography variant="p" text="This is the FAQ" />
          </div>
        );
      case "Reviews":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-albertsans text-[#9F9F9F] ">
            <Typography
              variant="p"
              text="Here you can read reviews from customers who purchased this product. Rated 4.5 stars on average."
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-12">
      {/* Tabs */}
      <div className="flex flex-row justify-center md:justify-evenly font-albertsans  w-full">
        <button
          className={`${
            activeTab === "Product Details"
              ? "text-black font-medium  border-b-2 border-black"
              : "text-[#9F9F9F] font-light border-b border-black border-opacity-10"
          } text-sm md:text-xl font-semibold pb-4 w-1/3`}
          onClick={() => setActiveTab("Product Details")}
        >
          Product Details
        </button>

        <button
          className={`${
            activeTab === "Reviews"
              ? "text-black font-medium  border-b-2 border-black "
              : "text-[#9F9F9F] font-light border-b border-black border-opacity-10"
          } text-sm md:text-xl font-semibold pb-4 w-1/3`}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews & Ratings
        </button>

        <button
          className={`${
            activeTab === "FAQ"
              ? "text-black font-medium  border-b-2 border-black "
              : "text-[#9F9F9F] font-light border-b border-black border-opacity-10 "
          } text-sm md:text-xl  font-semibold pb-4 w-1/3`}
          onClick={() => setActiveTab("FAQ")}
        >
          FAQs
        </button>
      </div>

      {/* Content */}
      <div className="my-4">{renderContent()}</div>
    </div>
  );
};

export default ProductDescription;
