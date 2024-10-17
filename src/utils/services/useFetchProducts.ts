import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useFilterStore from "@/store/filterStore";
import { Product } from "@/types/Product"; // Adjust the import based on your folder structure

const fetchProducts = async (
  tags: string | null,
  sizes: string | null,
  sort: string | null
) => {
  const params = new URLSearchParams();

  if (tags) params.append("tags", tags);
  if (sizes) params.append("sizes", sizes);
  if (sort) params.append("sort", sort); // Include sort parameter

  const response = await axios.get<Product[]>(
    `http://localhost:5105/api/Product/filter?${params.toString()}`
  );

  console.log("response: ", response);
  if (response.status !== 200) {
    throw new Error("Failed to fetch products");
  }

  return response.data;
};

// Modify to fetch all products if no filters are selected
export const useFetchProducts = () => {
  const { selectedTag, selectedSize, selectedSort } = useFilterStore(); // Add selectedSort

  return useQuery(
    ["products", selectedTag, selectedSize, selectedSort], // Include selectedSort in the query key
    () =>
      fetchProducts(
        selectedTag || null,
        selectedSize || null,
        selectedSort || null
      ), // Pass selectedSort to fetchProducts
    {
      enabled: true, // Always enabled to fetch products
      refetchOnWindowFocus: false,
      staleTime: 2000, // Optional: define stale time to avoid frequent refetching
    }
  );
};
