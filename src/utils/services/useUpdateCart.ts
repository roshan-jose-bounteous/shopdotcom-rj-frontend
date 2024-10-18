// // src/utils/services/useUpdateCart.ts
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import { CartItem } from "@/types/CartItem"; // Adjust the import path according to your project structure

// const updateCartItem = async ({
//   id,
//   quantity,
// }: {
//   id: number;
//   quantity: number;
// }) => {
//   console.log("function called for idL ", id, "and Quantity: ", quantity);
//   const response = await axios.put(
//     `http://localhost:5105/api/Cart/${id}`,
//     quantity
//   );
//   console.log("Response after updation: ", response);
//   return response.data;
// };

// export const useUpdateCart = () => {
//   const queryClient = useQueryClient();

//   return useMutation(updateCartItem, {
//     onSuccess: () => {
//       // Invalidate queries to refetch the updated cart data
//       queryClient.invalidateQueries(["cartItems"]);
//     },
//     onError: (error) => {
//       console.error("Error updating cart:", error);
//     },
//   });
// };

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CartItem } from "@/types/CartItem"; // Adjust the import path according to your project structure

const updateCartItem = async ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) => {
  console.log("function called for id: ", id, "and Quantity: ", quantity);
  const response = await axios.put(
    `http://localhost:5105/api/Cart/${id}`, // Send the id in the URL
    null, // No body content needed since quantity is a query parameter
    {
      params: {
        quantity, // Set quantity as a query parameter
      },
    }
  );
  console.log("Response after updation: ", response);
  return response.data;
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation(updateCartItem, {
    onSuccess: () => {
      // Invalidate queries to refetch the updated cart data
      queryClient.invalidateQueries(["cartItems"]);
    },
    onError: (error) => {
      console.error("Error updating cart:", error);
    },
  });
};
