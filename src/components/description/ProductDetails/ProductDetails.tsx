"use client";
import React, { useState } from "react";
import { Product } from "@/types/Product";
import Typography from "@/components/common/Typography";
import WhiteTick from "../../../../public/assets/icons/WhiteTick";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import useClientAuthStore from "@/store/clientAuthStore";
import axios from "axios";
import { useAddToCart } from "@/utils/services/useAddToCart";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const router = useRouter();
  const { jwtToken } = useClientAuthStore((state) => state);
  const addToCartMutation = useAddToCart();

  const handleColorButtonClick = (color: string) => {
    setActiveColor(color);
  };

  const handleAddToCart = async () => {
    console.log("Hi", jwtToken);
    if (!jwtToken) {
      router.push("/login");
      return;
    }
    try {
      await addToCartMutation.mutateAsync({
        jwtToken,
        productId: product.id,
        quantity,
        size: activeSize || undefined,
      });
      console.log("Product added to cart successfully");
    } catch (error) {
      console.error("Failed to add product to cart", error);
    }

    console.log("Add to cart logic for logged-in user");
  };
  const handleSizeButtonClick = (size: string) => {
    setActiveSize(size);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 pb-4 border-b border-black border-opacity-10">
        <Typography
          variant="h2"
          text={product.name}
          className="font-bungee text-3xl font-bold"
        />
        <Typography
          variant="p"
          className="text-black text-2xl font-bold font-albertsans"
          text={`$${product.price.toFixed(2)}`}
        />
        <Typography
          variant="p"
          className="text-black text-opacity-60 font-albertsans"
          text={product.description}
        />
      </div>

      {/* Color Selection */}
      <div className="flex flex-col gap-3 pb-6 border-b border-black border-opacity-10">
        <Typography
          variant="p"
          className="text-black text-opacity-60 font-albertsans"
          text="Select colors"
        />
        <div className="flex flex-row gap-2 ">
          {["#4F4631", "#314F4A", "#31344F"].map((color) => (
            <button
              key={color}
              onClick={() => handleColorButtonClick(color)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                activeColor === color ? "bg-opacity-80" : "bg-opacity-60"
              }`}
              style={{ backgroundColor: color }}
            >
              {activeColor === color && (
                <span>
                  <WhiteTick />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 pb-6 border-b border-black border-opacity-10">
        <Typography
          variant="p"
          className="text-black text-opacity-60 font-albertsans"
          text="Choose Size"
        />
        <div className="flex flex-row gap-2">
          {product.sizes.map((size) => (
            <div key={size}>
              <Button
                variant="SizeFilter"
                className={`${
                  activeSize === size ? "bg-black text-white" : ""
                }`}
                onClick={() => handleSizeButtonClick(size)}
                text={size}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 font-albertsans">
        <div className="flex bg-[#f0f0f0] rounded-3xl text-sm text-black text-opacity-60 ">
          <div
            onClick={handleDecrement}
            className="px-4 py-3 text-lg font-bold text-black cursor-pointer"
          >
            <Typography variant="p" className="" text="-" />
          </div>
          <div className="px-4 py-3 text-lg">
            <Typography variant="p" className="" text={quantity} />
          </div>
          <div
            onClick={handleIncrement}
            className="px-4 py-3 text-lg font-bold text-black cursor-pointer"
          >
            <Typography variant="p" className="" text="+" />
          </div>
        </div>
        <Button
          variant="AddToCart"
          className="flex-1 px-4 py-3 font-bold"
          text="Add to Cart"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
