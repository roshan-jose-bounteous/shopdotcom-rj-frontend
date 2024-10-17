import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useFilterStore from "@/store/filterStore";
import { Product } from "@/types/Product";

const fetchProducts = async (
  tags: string | null,
  sizes: string | null,
  sort: string | null
) => {
  const params = new URLSearchParams();

  if (tags) params.append("tags", tags);
  if (sizes) params.append("sizes", sizes);
  if (sort) params.append("sort", sort);

  const response = await axios.get<Product[]>(
    `http://localhost:5105/api/Product/filter?${params.toString()}`
  );

  console.log("response: ", response);
  if (response.status !== 200) {
    throw new Error("Failed to fetch products");
  }

  return response.data;
};

export const useFetchProducts = () => {
  const { selectedTag, selectedSize, selectedSort } = useFilterStore();

  return useQuery(
    ["products", selectedTag, selectedSize, selectedSort],
    () =>
      fetchProducts(
        selectedTag || null,
        selectedSize || null,
        selectedSort || null
      ),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      staleTime: 2000,
    }
  );
};
