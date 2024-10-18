// src/utils/services/useAddOrder.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const addOrder = async (orderData: any) => {
  const response = await axios.post(
    "http://localhost:5105/api/order/Order/AddToOrders",
    orderData
  );
  return response.data;
};

export const useAddOrder = () => {
  return useMutation({
    mutationFn: addOrder,
    onError: (error) => {
      console.error("Error adding order:", error);
    },
  });
};
