

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CartItem } from "@/types/CartItem";

const updateCartItem = async ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) => {
  console.log("function called for id: ", id, "and Quantity: ", quantity);
  const response = await axios.put(
    `http://localhost:5105/api/Cart/${id}`, 
    null, 
    {
      params: {
        quantity, 
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
      queryClient.invalidateQueries(["cartItems"]);
    },
    onError: (error) => {
      console.error("Error updating cart:", error);
    },
  });
};
