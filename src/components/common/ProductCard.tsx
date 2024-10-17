import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useProductStore from "@/store/useProductStore";

interface ProductCardProps {
  name: string;
  price: number;
  thumbnail: string;
  productId: number; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  thumbnail,
  productId, 
}) => {
  const router = useRouter();
  const setSelectedProductId = useProductStore(
    (state) => state.setSelectedProductId
  );

  const handleClick = () => {
    setSelectedProductId(productId); 
    router.push("/description"); 
  };

  return (
    <div
      className="flex flex-col gap-1 font-albertsans"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Image
        src={thumbnail}
        alt={name}
        width={444}
        height={296}
        className="object-cover rounded-2xl h-40 md:h-48 lg:h-72 w-full"
      />
      <div className="flex items-center">
        <h3 className="text-base md:text-lg font-semibold truncate w-full">
          {name}
        </h3>
      </div>
      <div className="flex items-center">
        <span className="text-lg md:text-xl font-bold">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
