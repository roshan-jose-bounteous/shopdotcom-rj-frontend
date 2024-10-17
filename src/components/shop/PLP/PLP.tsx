"use client";

import React, { useState } from "react";
import Filter from "../../../../public/assets/icons/Filter";
import Filters from "../Filters/Filters";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

const PLP = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  return (
    <div className="flex flex-row w-full justify-between md:justify-start gap-4 py-4">
      <div className="hidden md:block  w-full md:w-[35%] lg:w-[21%]">
        <Filters />
      </div>
      <div className="w-full md:w-[60%] lg:w-[78%]">
        <ProductsContainer />
      </div>
    </div>
  );
};

export default PLP;
