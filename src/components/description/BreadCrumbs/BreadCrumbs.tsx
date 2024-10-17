"use client";
import Typography from "@/components/common/Typography";
import React from "react";
import RightBreadCrumb from "../../../../public/assets/icons/RightBreadCrumb";
import Link from "next/link";

interface BreadCrumbsProps {
  productName: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ productName }) => {
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
          <Typography
            variant="p"
            className="text-black text-opacity-60"
            text="Shop"
          />
        </Link>
        <RightBreadCrumb />
        <Typography variant="p" className="text-black" text={productName} />
      </div>
    </div>
  );
};

export default BreadCrumbs;
