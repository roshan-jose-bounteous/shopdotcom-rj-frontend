"use client";
import Typography from "@/components/common/Typography";
import React, { useState } from "react";
import RightBreadCrumb from "../../../../public/assets/icons/RightBreadCrumb";
import Link from "next/link";

const BreadCrumbs = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };
  return (
    <div className="flex flex-row gap-2 justify-between font-albertsans items-center">
      <div className="flex flex-row gap-2 font-albertsans items-center">
        <Link href="/shop">
          <Typography
            variant="p"
            className="text-black text-opacity-60"
            text="Home"
          />
        </Link>
        <RightBreadCrumb />
        <Link href="/description">
          <Typography
            variant="p"
            className="text-black text-opacity-60"
            text="Product"
          />
        </Link>
        <RightBreadCrumb />
        <Link href="/cart">
          <Typography variant="p" text="cart" />
        </Link>
      </div>
    </div>
  );
};

export default BreadCrumbs;
