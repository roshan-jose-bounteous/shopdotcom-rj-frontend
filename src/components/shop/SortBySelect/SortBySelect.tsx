"use client";

import React from "react";
import useFilterStore from "@/store/filterStore";
import Typography from "@/components/common/Typography";

const SortBySelect: React.FC = () => {
  const { selectedSort, setSelectedSort } = useFilterStore();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedSort(selectedValue);
  };

  return (
    <div className="flex flex-row items-center gap-2 font-albertsans">
      <Typography
        variant="p"
        text="Sort by:"
        className="text-black text-opacity-60"
      />
      <div className="relative">
        <select
          value={selectedSort || "most-popular"}
          onChange={handleSortChange}
          className="text-black font-semibold bg-transparent border-none focus:outline-none"
        >
          <option value="most-popular">Most Popular</option>
          <option value="price-high-to-low">Price: High to Low</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="alphabetical">Alphabetical Order</option>
        </select>
      </div>
    </div>
  );
};

export default SortBySelect;
