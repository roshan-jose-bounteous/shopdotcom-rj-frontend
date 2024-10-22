"use client";
import React from "react";
import ImageSection from "@/components/description/ImageSection/ImageSection";
import ProductDetails from "@/components/description/ProductDetails/ProductDetails";
import { Product } from "@/types/Product";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import ProductDescription from "../ProductDescription/ProductDescription";

interface ProductSectionProps {
  product: Product;
}

const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  gap-6 w-full">
        <ImageSection images={product?.images || []} />
        <ProductDetails product={product} />
      </div>
      <ProductDescription />

      <RelatedProducts tags={product.tags} excludedProductId={product.id} />
    </div>
  );
};

export default ProductSection;
