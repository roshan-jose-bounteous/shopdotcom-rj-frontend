// components/description/ProductSection/ProductSection.tsx
"use client";
import React from "react";
import ImageSection from "@/components/description/ImageSection/ImageSection";
import ProductDetails from "@/components/description/ProductDetails/ProductDetails";
import { Product } from "@/types/Product"; // Import the Product type

interface ProductSectionProps {
  product: Product; // Use Product type for the product prop
}

const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row  gap-6 w-full">
      <ImageSection images={product?.images || []} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductSection;
