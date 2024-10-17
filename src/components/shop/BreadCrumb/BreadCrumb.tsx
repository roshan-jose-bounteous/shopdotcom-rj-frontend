"use client";
import Typography from "@/components/common/Typography";
import React, { useState } from "react";
import RightBreadCrumb from "../../../../public/assets/icons/RightBreadCrumb";
import Link from "next/link";
import Filter from "../../../../public/assets/icons/Filter";
import Filters from "../Filters/Filters";

const BreadCrumb = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };
  return (
    <div className="flex flex-row gap-2 justify-between font-albertsans items-center">
      <div className="flex flex-row gap-2 font-albertsans items-center">
        <Link href="/">
          <Typography
            variant="p"
            className="text-black text-opacity-60"
            text="Home"
          />
        </Link>
        <RightBreadCrumb />
        <Link href="/shop">
          <Typography variant="p" text="Shop" />
        </Link>
      </div>
      <div>
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
    </div>
  );
};

export default BreadCrumb;
