import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types/Product";

const fetchProductById = async (id: number) => {
  const response = await axios.get<Product>(
    `http://localhost:5105/api/Product/${id}`
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch product");
  }

  return response.data;
};

export const useFetchProductById = (id: number | null) => {
  return useQuery(["product", id], () => fetchProductById(id as number), {
    enabled: !!id,
    refetchOnWindowFocus: true,
  });
};
