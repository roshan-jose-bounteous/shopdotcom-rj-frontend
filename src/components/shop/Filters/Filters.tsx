"use client";
import Typography from "@/components/common/Typography";
import React from "react";
import Filter from "../../../../public/assets/icons/Filter";
import CloseIcon from "../../../../public/assets/icons/CloseIcon";
import RightBreadCrumb from "../../../../public/assets/icons/RightBreadCrumb";
import Button from "@/components/common/Button";
import useFilterStore from "@/store/filterStore";

interface FiltersProps {
  onClose?: () => void;
}

const Filters: React.FC<FiltersProps> = ({ onClose }) => {
  const {
    selectedTag,
    selectedSize,
    setSelectedTag,
    setSelectedSize,
    clearFilters,
  } = useFilterStore();

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col justify-start border border-black border-opacity-10 rounded-b-none rounded-t-3xl md:rounded-3xl py-2 px-4 ">
      <div className="flex flex-row py-3 justify-between border-b border-black border-opacity-10 font-albertsans">
        <Typography variant="p" text="Filters" className="font-bold text-xl" />
        <div className="hidden md:block">
          <Filter />
        </div>
        <div className="block md:hidden" onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className="flex flex-col py-3 border-b border-black border-opacity-10 gap-3 ">
        {["T-Shirts", "Shirts", "Shorts", "Hoodies", "Jeans"].map((tag) => (
          <div
            key={tag}
            className="flex flex-row items-center justify-between font-albertsans cursor-pointer"
            onClick={() => handleTagClick(tag)}
          >
            <Typography
              variant="p"
              text={tag}
              className={`${
                selectedTag === tag
                  ? "text-black font-semibold"
                  : "text-black text-opacity-60"
              }`}
            />
            <RightBreadCrumb />
          </div>
        ))}
      </div>
      <div className="flex flex-col font-albertsans pt-2 pb-5 border-b border-black border-opacity-10 ">
        <Typography
          variant="p"
          text="Size"
          className="font-bold text-xl py-2"
        />

        <div className="flex flex-wrap max-w-fit py-1 gap-3 md:gap-1 pr-0 lg:pr-6">
          {[
            "XX-Small",
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
            "3X-Large",
            "4X-Large",
          ].map((size) => (
            <Button
              key={size}
              variant="SizeFilter"
              className={`${
                selectedSize === size
                  ? "bg-black text-white text-opacity-100"
                  : ""
              }`}
              text={size}
              onClick={() => handleSizeClick(size)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col py-3 gap-3 ">
        <Typography
          variant="p"
          text="Dress Style"
          className="font-bold text-xl font-albertsans"
        />

        {["Casual", "Formal", "Party", "Gym"].map((style) => (
          <div
            key={style}
            className="flex flex-row items-center justify-between font-albertsans cursor-pointer"
            onClick={() => handleTagClick(style)}
          >
            <Typography
              variant="p"
              text={style}
              className={`${
                selectedTag === style
                  ? "text-black font-semibold"
                  : "text-black text-opacity-60"
              }`}
            />
            <RightBreadCrumb />
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center py-3">
        <Button
          variant="ClearFilter"
          className="w-full"
          text="Clear Filter"
          onClick={() => clearFilters()}
        />
      </div>
    </div>
  );
};

export default Filters;
