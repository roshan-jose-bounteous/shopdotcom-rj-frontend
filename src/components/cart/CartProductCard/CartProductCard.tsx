
"use client";
import React, { useState } from "react";
import { CartItemWithProduct } from "@/types/CartItemWithProduct";
import Image from "next/image";
import Typography from "@/components/common/Typography";
import RedDelete from "../../../../public/assets/icons/RedDelete";
import { useUpdateCart } from "@/utils/services/useUpdateCart";
import { useDeleteCartItem } from "@/utils/services/useDeleteCartItem"; 
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

interface CartProductCardProps {
  item: CartItemWithProduct;
  onQuantityChange: (id: number, newQuantity: number) => void;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
  item,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(item.cartItem.quantity);
  const updateCartMutation = useUpdateCart(); 
  const deleteCartItemMutation = useDeleteCartItem(); 

  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(item.cartItem.id, newQuantity);
    updateCartMutation.mutate({ id: item.cartItem.id, quantity: newQuantity });
  };

  const handleIncrement = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      handleQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        handleQuantityChange(newQuantity);
        return newQuantity;
      }
      return prev;
    });
  };

  const handleDelete = () => {
    deleteCartItemMutation.mutate(item.cartItem.id);
  };

  return (
    <div className="flex justify-between gap-4 items-center cart-item my-3 mx-4 pb-4 border-b border-opacity-10 border-black">
      <div className="flex flex-start gap-4">
        <Image
          src={item.product.thumbnail}
          alt={item.product.name}
          width={444}
          height={296}
          className="object-cover rounded-lg h-24 w-24 "
        />
        <div className="flex flex-col gap-1 justify-between">
          <Typography
            variant="p"
            className="text-lg font-semibold font-albertsans"
            text={item.product.name}
          />
          <div className="flex flex-row gap-1">
            <Typography
              variant="p"
              className="text-sm font-albertsans"
              text="Size: "
            />
            <Typography
              variant="p"
              className="text-sm font-albertsans text-black text-opacity-60"
              text={item.cartItem.size}
            />
          </div>
          <Typography
            variant="p"
            className="text-lg font-semibold font-albertsans"
            text={`$${item.product.price.toFixed(2)}`}
          />
        </div>
      </div>
      <div className="flex flex-col items-end gap-6">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="cursor-pointer">
              <RedDelete />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this item from the cart? This
                action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded">
                Cancel
              </button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className="flex bg-[#f0f0f0] rounded-3xl text-sm text-black text-opacity-60">
          <div
            onClick={handleDecrement}
            className="px-3 py-1 text-lg font-bold text-black cursor-pointer"
          >
            <Typography variant="p" text="-" />
          </div>
          <div className="px-3 py-1 text-lg">
            <Typography variant="p" text={quantity} />
          </div>
          <div
            onClick={handleIncrement}
            className="px-3 py-1 text-lg font-bold text-black cursor-pointer"
          >
            <Typography variant="p" text="+" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
