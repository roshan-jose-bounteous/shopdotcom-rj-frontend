// import React from "react";
// import ProductCard from "@/components/common/ProductCard";
// import Typography from "@/components/common/Typography";
// import { useFetchProducts } from "@/utils/services/useFetchProducts";
// import { Product } from "@/types/Product";
// import SortBySelect from "../SortBySelect/SortBySelect";

// const ProductContainer: React.FC = () => {
//   const { data: products, isLoading, isError } = useFetchProducts();

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
//             thumbnail={product.thumbnail}
//             productId={product.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductContainer;

import React, { useState } from "react";
import ProductCard from "@/components/common/ProductCard";
import Typography from "@/components/common/Typography";
import { useFetchProducts } from "@/utils/services/useFetchProducts";
import { Product } from "@/types/Product";
import SortBySelect from "../SortBySelect/SortBySelect";
import Pagination from "@/components/shop/Pagination/Pagination"; // Import the Pagination component

const ProductContainer: React.FC = () => {
  const { data: products, isLoading, isError } = useFetchProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = window.innerWidth < 800 ? 10 : 9; // 10 for mobile/tabs, 9 for desktop
  const totalItems = products?.length || 0;

  // Calculate the products to display based on current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-4 pb-2 border-b border-black border-opacity-10">
        {currentProducts?.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
            productId={product.id}
          />
        ))}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductContainer;
