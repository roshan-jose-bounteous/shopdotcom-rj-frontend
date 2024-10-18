
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteCartItem = async (id: number) => {
  await axios.delete(`http://localhost:5105/api/cart/${id}`); 
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCartItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cartItems"]);
    },
    onError: (error) => {
      console.error("Error deleting cart item:", error);
    },
  });
};
