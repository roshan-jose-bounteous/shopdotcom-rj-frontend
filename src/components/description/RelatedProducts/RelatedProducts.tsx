"use client";
import React, { useState } from "react";
import useRelatedProducts from "@/utils/services/useRelatedProducts"; 
import ProductCard from "@/components/common/ProductCard"; 
import { Product } from "@/types/Product";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";

interface RelatedProductsProps {
  tags: string[];
  excludedProductId: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  tags,
  excludedProductId,
}) => {
  const {
    data: relatedProducts,
    isLoading,
    isError,
  } = useRelatedProducts({
    tags,
    excludedProductId,
  });

  const [showAll, setShowAll] = useState(false);
  const loadMoreLimit = {
    phone: 2,
    tablet: 3,
    desktop: 4,
  };

  if (isLoading) {
    return <Typography variant="p" text="Loading related products..." />;
  }

  if (isError || !relatedProducts || relatedProducts.length === 0) {
    return <Typography variant="p" text="No related products found." />;
  }

  const productsToShow = showAll
    ? relatedProducts
    : relatedProducts.slice(
        0,
        Math.max(
          loadMoreLimit.phone,
          loadMoreLimit.tablet,
          loadMoreLimit.desktop
        )
      );

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-5">
      <Typography
        variant="h1"
        text="YOU MIGHT ALSO LIKE"
        className="font-semibold font-bungee text-3xl px-20"
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productsToShow.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
            productId={product.id} 
          />
        ))}
      </div>
      {!showAll && relatedProducts.length > productsToShow.length && (
        <Button
          variant="SizeFilter"
          text="Load More Products"
          className=""
          onClick={() => setShowAll(true)}
        />
      )}
    </div>
  );
};

export default RelatedProducts;
