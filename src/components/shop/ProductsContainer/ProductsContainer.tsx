// // components/ProductContainer.tsx
// import React from "react";
// import ProductCard from "@/components/common/ProductCard";
// import Typography from "@/components/common/Typography";
// import { useFetchProducts } from "@/utils/services/useFetchProducts";
// import { Product } from "@/types/Product";
// import SortBySelect from "../SortBySelect/SortBySelect";

// const ProductContainer: React.FC = () => {
//   const { data: products, isLoading, isError } = useFetchProducts();

//   console.log("products", products);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Failed to load products.</div>;
//   }

//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-row justify-between items-baseline">
//         <Typography
//           variant="h1"
//           text="Shop"
//           className="text-2xl md:text-3xl font-bold font-albertsans"
//         />
//         <SortBySelect />
//       </div>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-4">
//         {products?.map((product: Product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             price={product.price}
//             thumbnail={product.thumbnail} // Use the thumbnail as the image URL
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductContainer;

// components/ProductContainer.tsx
import React from "react";
import ProductCard from "@/components/common/ProductCard";
import Typography from "@/components/common/Typography";
import { useFetchProducts } from "@/utils/services/useFetchProducts";
import { Product } from "@/types/Product";
import SortBySelect from "../SortBySelect/SortBySelect";

const ProductContainer: React.FC = () => {
  const { data: products, isLoading, isError } = useFetchProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load products.</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-baseline">
        <Typography
          variant="h1"
          text="Shop"
          className="text-2xl md:text-3xl font-bold font-albertsans"
        />
        <SortBySelect />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {products?.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
            productId={product.id} // Pass the product ID
          />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
