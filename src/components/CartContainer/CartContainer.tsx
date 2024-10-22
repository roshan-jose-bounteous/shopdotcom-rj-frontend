"use client";
import React, { useState } from "react";
import { useFetchCartItemsByUserId } from "@/utils/services/useFetchCartItemsByUserId";
import { CartItemWithProduct } from "@/types/CartItemWithProduct";
import CartProductCard from "@/components/cart/CartProductCard/CartProductCard";
import PriceSummary from "../cart/PriceSummary/PriceSummary";
import { ScrollArea } from "@/components/ui/scroll-area";
import Checkout from "../cart/Checkout/Checkout";

const CartContainer = () => {
  const { data: cartItems, isLoading, isError } = useFetchCartItemsByUserId();

  const [deliveryFee] = useState(15);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc: any, item: any) =>
        acc + item.product.price * item.cartItem.quantity,
      0
    );
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    console.log(`Updated ${id} to quantity ${newQuantity}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading cart items:</div>;
  }

  const subtotal = calculateSubtotal();
  const discount = subtotal * 0.1;  
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between my-4">
        <div className="w-full lg:w-3/5 border border-black border-opacity-10 rounded-2xl">
          <ScrollArea className="h-80 lg:h-64 overflow-hidden">
            <div className="space-y-4">
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((item: CartItemWithProduct) => (
                  <CartProductCard
                    key={item.cartItem.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                  />
                ))
              ) : (
                <p>No items in the cart.</p>
              )}
            </div>
          </ScrollArea>
        </div>
        <div className="w-full lg:w-2/5 border border-black border-opacity-10 rounded-2xl">
          <PriceSummary
            subtotal={subtotal}
            discount={discount}
            deliveryFee={deliveryFee}
          />
        </div>
      </div>
      <Checkout cartItems={cartItems} />
    </div>
  );
};

export default CartContainer;
