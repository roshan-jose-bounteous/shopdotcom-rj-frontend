// "use client";
// import React from "react";
// import { useFetchCartItemsByUserId } from "@/utils/services/useFetchCartItemsByUserId"; // Adjust the import path
// import { CartItemWithProduct } from "@/types/CartItemWithProduct"; // Adjust the import path

// const CartContainer = () => {
//   const {
//     data: cartItems,
//     isLoading,
//     isError,
//     error,
//   } = useFetchCartItemsByUserId();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading cart items: </div>;
//   }

//   return (
//     <div className="cart-container">
//       {cartItems && cartItems.length > 0 ? (
//         cartItems.map((item: CartItemWithProduct) => (
//           <div key={item.cartItem.id} className="cart-item">
//             <h3>{item.product.name}</h3>
//             <p>Quantity: {item.cartItem.quantity}</p>
//             <p>Size: {item.cartItem.size}</p>
//             <p>Price: ${item.product.price.toFixed(2)}</p>
//             <img
//               src={item.product.thumbnail}
//               alt={item.product.name}
//               className="product-thumbnail"
//             />
//           </div>
//         ))
//       ) : (
//         <p>No items in the cart.</p>
//       )}
//     </div>
//   );
// };

// export default CartContainer;

// components/CartContainer.tsx
// "use client";
// import React, { useState } from "react";
// import { useFetchCartItemsByUserId } from "@/utils/services/useFetchCartItemsByUserId"; // Adjust the import path
// import { CartItemWithProduct } from "@/types/CartItemWithProduct"; // Adjust the import path
// import CartProductCard from "@/components/cart/CartProductCard/CartProductCard"; // Adjust the import path
// import PriceSummary from "../cart/PriceSummary/PriceSummary"; // Adjust the import path

// const CartContainer = () => {
//   const {
//     data: cartItems,
//     isLoading,
//     isError,
//     error,
//   } = useFetchCartItemsByUserId();

//   const [discount] = useState(113); // Example discount value
//   const [deliveryFee] = useState(15); // Example delivery fee value

//   const calculateSubtotal = () => {
//     return cartItems.reduce(
//       (acc: any, item: any) =>
//         acc + item.product.price * item.cartItem.quantity,
//       0
//     );
//   };

//   const handleQuantityChange = (id: number, newQuantity: number) => {
//     // Logic to update quantity in your state or backend
//     console.log(`Updated ${id} to quantity ${newQuantity}`);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading cart items:</div>;
//   }

//   const subtotal = calculateSubtotal();

//   return (
//     <div className="flex flex-col lg:flex-row gap-4 justify-between my-4">
//       <div className="w-full lg:w-3/5  border border-black border-opacity-10 rounded-2xl">
//         {cartItems && cartItems.length > 0 ? (
//           cartItems.map((item: CartItemWithProduct) => (
//             <CartProductCard
//               key={item.cartItem.id}
//               item={item}
//               onQuantityChange={handleQuantityChange}
//             />
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </div>
//       <div className="w-full lg:w-2/5 border border-black border-opacity-10 rounded-2xl">
//         <PriceSummary
//           subtotal={subtotal}
//           discount={discount}
//           deliveryFee={deliveryFee}
//         />
//       </div>
//     </div>
//   );
// };

// export default CartContainer;

"use client";
import React, { useState } from "react";
import { useFetchCartItemsByUserId } from "@/utils/services/useFetchCartItemsByUserId"; // Adjust the import path
import { CartItemWithProduct } from "@/types/CartItemWithProduct"; // Adjust the import path
import CartProductCard from "@/components/cart/CartProductCard/CartProductCard"; // Adjust the import path
import PriceSummary from "../cart/PriceSummary/PriceSummary"; // Adjust the import path
import { ScrollArea } from "@/components/ui/scroll-area"; // Adjust the import path
import Checkout from "../cart/Checkout/Checkout";

const CartContainer = () => {
  const { data: cartItems, isLoading, isError } = useFetchCartItemsByUserId();

  const [discount] = useState(113); // Example discount value
  const [deliveryFee] = useState(15); // Example delivery fee value

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc: any, item: any) =>
        acc + item.product.price * item.cartItem.quantity,
      0
    );
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    // Logic to update quantity in your state or backend
    console.log(`Updated ${id} to quantity ${newQuantity}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading cart items:</div>;
  }

  const subtotal = calculateSubtotal();

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
