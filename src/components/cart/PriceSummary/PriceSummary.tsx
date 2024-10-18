// components/PriceSummary.tsx
"use client";
import Typography from "@/components/common/Typography";
import React from "react";

interface PriceSummaryProps {
  subtotal: number;
  discount: number;
  deliveryFee: number;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({
  subtotal,
  discount,
  deliveryFee,
}) => {
  const total = subtotal + deliveryFee - discount;

  return (
    <div className="flex flex-col p-4 gap-4 ">
      <Typography
        variant="p"
        className="text-2xl font-albertsans font-bold mb-4"
        text="Order Summary"
      />
      <div className="flex flex-row justify-between">
        <Typography
          variant="p"
          className="font-albertsans text-black text-opacity-60"
          text="Subtotal "
        />
        <Typography
          variant="p"
          className="font-albertsans font-semibold "
          text={`$${subtotal.toFixed(2)}`}
        />
      </div>
      <div className="flex flex-row justify-between">
        <Typography
          variant="p"
          className="font-albertsans text-black text-opacity-60"
          text="Discount"
        />
        <Typography
          variant="p"
          className="font-albertsans font-semibold text-red-600 "
          text={`-$${discount.toFixed(2)}`}
        />
      </div>
      <div className="flex flex-row justify-between border-b border-black border-opacity-10 pb-4">
        <Typography
          variant="p"
          className="font-albertsans text-black text-opacity-60"
          text="Delivery Fee"
        />
        <Typography
          variant="p"
          className="font-albertsans font-semibold "
          text={`$${deliveryFee.toFixed(2)}`}
        />
      </div>
      <div className="flex flex-row justify-between mt-2">
        <Typography
          variant="p"
          className="font-albertsans text-black text-opacity-60"
          text="Total"
        />
        <Typography
          variant="p"
          className="font-albertsans font-bold text-xl "
          text={`$${total.toFixed(2)}`}
        />
      </div>
    </div>
  );
};

export default PriceSummary;
