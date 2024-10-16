// import React from "react";
// import Filter from "../../../../public/assets/icons/Filter";
// import Filters from "../Filters/Filters";
// import ProductsContainer from "../ProductsContainer/ProductsContainer";

// const PLP = () => {
//   return (
//     <div className="flex flex-row w-full items-center gap-4">
//       <div className="hidden md:block">
//         <Filters />
//       </div>
//       <div>
//         <ProductsContainer />
//       </div>
//       <div className="md:hidden">
//         <Filter />
//       </div>
//     </div>
//   );
// };

// export default PLP;

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
      <div className="w-full md:w-[40%] lg:w-[75%]">
        <ProductsContainer />   
      </div>
      <div className="md:hidden" onClick={toggleFilters}>
        <Filter />
      </div>

      {/* Mobile Filters */}
      {filtersOpen && (
        <div className="fixed bottom-0 left-0 w-full h-4/5 bg-white z-50 animate-slide-up">
          <Filters onClose={toggleFilters} />
        </div>
      )}
    </div>
  );
};

export default PLP;
