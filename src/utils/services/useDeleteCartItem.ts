// // src/utils/services/useDeleteCartItem.ts
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// export const useDeleteCartItem = () => {
//   const queryClient = useQueryClient();

//   return useMutation(
//     async (id: number) => {
//       // Send a DELETE request to the backend to delete the cart item
//       await axios.delete(`/api/cart/${id}`);
//     },
//     {
//       onSuccess: () => {
//         // Invalidate the cart items query to refresh the cart data
//         queryClient.invalidateQueries(["cartItems"]);
//       },
//     }
//   );
// };

// src/utils/services/useDeleteCartItem.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteCartItem = async (id: number) => {
  await axios.delete(`http://localhost:5105/api/cart/${id}`); // Adjust the API endpoint if necessary
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCartItem, {
    onSuccess: () => {
      // Invalidate and refetch the cart items query to update the UI
      queryClient.invalidateQueries(["cartItems"]);
    },
    onError: (error) => {
      console.error("Error deleting cart item:", error);
    },
  });
};
