import BreadCrumb from "@/components/shop/BreadCrumb/BreadCrumb";
import PLP from "@/components/shop/PLP/PLP";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" mx-4 md:mx-6 lg:mx-28 my-3 md:my-4 lg:my-6 ">
      <BreadCrumb />
      <PLP />
    </div>
  );
};

export default page;
