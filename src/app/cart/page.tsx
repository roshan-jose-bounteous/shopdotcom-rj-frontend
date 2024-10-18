import BreadCrumbs from "@/components/cart/BreadCrumbs/BreadCrumbs";
import CartSection from "@/components/cart/CartSection/CartSection";
import React from "react";

const page = () => {
  return (
    <div className=" mx-4 md:mx-6 lg:mx-28 my-3 md:my-4 lg:my-6 ">
      <BreadCrumbs />
      <CartSection />
    </div>
  );
};

export default page;
