import CartContainer from "@/components/CartContainer/CartContainer";
import Typography from "@/components/common/Typography";
import React from "react";

const CartSection = () => {
  return (
    <div className="flex flex-col justify-start my-6">
      <Typography
        variant="p"
        className="font-bungee text-3xl font-bold"
        text="YOUR CART"
      />
      <CartContainer />
    </div>
  );
};

export default CartSection;
