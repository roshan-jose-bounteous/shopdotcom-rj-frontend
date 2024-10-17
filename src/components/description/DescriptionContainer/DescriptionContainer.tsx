"use client";
import React, { useEffect } from "react";
import useProductStore from "@/store/useProductStore";
import { useFetchProductById } from "@/utils/services/useFetchProductById";
import BreadCrumbs from "@/components/description/BreadCrumbs/BreadCrumbs";
import ProductSection from "@/components/description/ProductSection/ProductSection";
import useClientAuthStore from "@/store/clientAuthStore";
interface DescriptionContainerProps {
  token: string | null;
}

const DescriptionContainer: React.FC<DescriptionContainerProps> = ({
  token,
}) => {
  const { selectedProductId, setSelectedProductId } = useProductStore();
  useClientAuthStore.getState().setJwtToken(token);

  const {
    data: product,
    isLoading,
    isError,
  } = useFetchProductById(selectedProductId);

  useEffect(() => {
    if (!selectedProductId) {
    }
  }, [selectedProductId]);

  if (!selectedProductId) {
    return <div>No product selected.</div>;
  }

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (isError) {
    return <div>Failed to load product details.</div>;
  }

  return (
    <div className="mx-4 md:mx-6 lg:mx-28 my-3 md:my-4 lg:my-6">
      <div className="flex flex-col gap-4">
        <BreadCrumbs productName={product?.name || "Product"} />
        <ProductSection product={product} />
      </div>
    </div>
  );
};

export default DescriptionContainer;
