import Typography from "@/components/common/Typography";
import React from "react";
import RightBreadCrumb from "../../../../public/assets/icons/RightBreadCrumb";
import Link from "next/link";

const BreadCrumb = () => {
  return (
    <div className="flex flex-row gap-2 font-albertsans items-center">
      <Link href="/">
        <Typography variant="p" className="text-black text-opacity-60" text="Home" />
      </Link>
      <RightBreadCrumb />
      <Link href="/shop">
        <Typography variant="p" text="Shop" />
      </Link>
    </div>
  );
};

export default BreadCrumb;
