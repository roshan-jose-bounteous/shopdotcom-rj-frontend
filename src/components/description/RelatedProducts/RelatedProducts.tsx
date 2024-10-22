"use client";
import React, { useState, useEffect } from "react";
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
  const [loadMoreLimit, setLoadMoreLimit] = useState(2);

  const updateLoadMoreLimit = () => {
    if (window.innerWidth < 768) {
      setLoadMoreLimit(2); 
    } else if (window.innerWidth < 1024) {
      setLoadMoreLimit(3); 
    } else {
      setLoadMoreLimit(4); 
    }
  };

  useEffect(() => {
    updateLoadMoreLimit();
    window.addEventListener("resize", updateLoadMoreLimit);
    return () => window.removeEventListener("resize", updateLoadMoreLimit);
  }, []);

  if (isLoading) {
    return <Typography variant="p" text="Loading related products..." />;
  }

  if (isError || !relatedProducts || relatedProducts.length === 0) {
    return <Typography variant="p" text="No related products found." />;
  }

  const productsToShow = showAll
    ? relatedProducts
    : relatedProducts.slice(0, loadMoreLimit);

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
      <div className="flex justify-center gap-4 mt-4">
        {!showAll && relatedProducts.length > productsToShow.length && (
          <Button
            variant="SizeFilter"
            text="View More"
            className=""
            onClick={() => setShowAll(true)}
          />
        )}
        {showAll && (
          <Button
            variant="SizeFilter"
            text="View Less"
            className=""
            onClick={() => setShowAll(false)}
          />
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
