import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types/Product";

interface UseRelatedProductsProps {
  tags: string[];
  excludedProductId: number;
}

const fetchRelatedProducts = async ({
  tags,
  excludedProductId,
}: UseRelatedProductsProps): Promise<Product[]> => {
  const response = await axios.post<Product[]>(
    `http://localhost:5105/api/Product/related-by-tags?excludedProductId=${excludedProductId}`,
    tags
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch related products");
  }

  return response.data;
};

const useRelatedProducts = ({
  tags,
  excludedProductId,
}: UseRelatedProductsProps) => {
  return useQuery<Product[], Error>(
    ["relatedProducts", { tags, excludedProductId }],
    () => fetchRelatedProducts({ tags, excludedProductId }),
    {
      enabled: tags.length > 0, // Ensure the query only runs if tags are provided
    //   staleTime: 5 * 60 * 1000, // 5 minutes
    //   cacheTime: 10 * 60 * 1000, // 10 minutes
    //   retry: 2, // Retry failed requests up to 2 times
    }
  );
};

export default useRelatedProducts;
