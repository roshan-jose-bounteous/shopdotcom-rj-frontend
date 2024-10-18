import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore"; // Adjust the import path as necessary
import axios from "axios";

const fetchCartItemsByUserId = async (userId: string) => {
  const response = await axios.get(
    `http://localhost:5105/api/cart/user/${userId}`
  ); 
  return response.data;
};

export const useFetchCartItemsByUserId = () => {
  const { userId } = useAuthStore.getState();

  return useQuery({
    queryKey: ["cartItems", userId],
    queryFn: () => fetchCartItemsByUserId(userId!),
    enabled: !!userId, 
  });
};
