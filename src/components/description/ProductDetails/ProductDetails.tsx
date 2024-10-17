// "use client";
// import React, { useState } from "react";
// import { Product } from "@/types/Product";
// import Typography from "@/components/common/Typography";
// import WhiteTick from "../../../../public/assets/icons/WhiteTick";
// import Button from "@/components/common/Button";

// interface ProductDetailsProps {
//   product: Product;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
//   const [activeColorButton, setActiveColorButton] = useState<number | null>(
//     null
//   );
//   const [quantity, setQuantity] = useState<number>(1);

//   const handleColorButtonClick = (index: number) => {
//     setActiveColorButton(index);
//   };

//   const handleIncrement = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <div className="flex flex-col gap-3 pb-4 border-b border-black border-opacity-10">
//         <Typography
//           variant="h2"
//           text={product.name}
//           className="font-bungee text-3xl font-bold"
//         />
//         <Typography
//           variant="p"
//           className="text-black text-2xl font-bold font-albertsans"
//           text={`$${product.price.toFixed(2)}`}
//         />
//         <Typography
//           variant="p"
//           className="text-black text-opacity-60 font-albertsans"
//           text={product.description}
//         />
//       </div>

//       {/* Color Selection */}
//       <div className="flex flex-col gap-3 pb-6 border-b border-black border-opacity-10">
//         <Typography
//           variant="p"
//           className="text-black text-opacity-60 font-albertsans"
//           text="Select colors"
//         />
//         <div className="flex flex-row gap-2 ">
//           {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
//             <button
//               key={index}
//               onClick={() => handleColorButtonClick(index)}
//               className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
//                 activeColorButton === index ? "bg-opacity-80" : "bg-opacity-60"
//               }`}
//               style={{ backgroundColor: color }}
//             >
//               {activeColorButton === index && (
//                 <span>
//                   <WhiteTick />
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Size Selection */}
//       <div className="flex flex-col gap-3 pb-6 border-b border-black border-opacity-10">
//         <Typography
//           variant="p"
//           className="text-black text-opacity-60 font-albertsans"
//           text="Choose Size"
//         />
//         <div className="flex flex-row gap-2">
//           {product.sizes.map((size, index) => (
//             <div key={index}>
//               <Button variant="SizeFilter" className="" text={size} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Quantity and Add to Cart Section */}
//       <div className="flex items-center gap-4 font-albertsans">
//         <div className="flex  bg-[#f0f0f0] rounded-3xl text-sm text-black text-opacity-60 ">
//           <div
//             onClick={handleDecrement}
//             className="px-4 py-3 text-lg font-bold text-black"
//           >
//             <Typography variant="p" className="" text="-" />
//           </div>
//           <div className="px-4 py-3 text-lg">
//             <Typography variant="p" className="" text={quantity} />
//           </div>
//           <div
//             onClick={handleIncrement}
//             className="px-4 py-3 text-lg font-bold text-black"
//           >
//             <Typography variant="p" className="" text="+" />
//           </div>
//         </div>
//         <Button
//           variant="AddToCart"
//           className="flex-1 px-4 py-3 font-bold "
//           text="Add to Cart"
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

"use client";
import React, { useState } from "react";
import { Product } from "@/types/Product";
import Typography from "@/components/common/Typography";
import WhiteTick from "../../../../public/assets/icons/WhiteTick";
import Button from "@/components/common/Button";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [activeColor, setActiveColor] = useState<string | null>(null); // Store the active color as a string
  const [activeSize, setActiveSize] = useState<string | null>(null); // Store the active size as a string
  const [quantity, setQuantity] = useState<number>(1);

  const handleColorButtonClick = (color: string) => {
    setActiveColor(color); // Set the active color
  };

  const handleSizeButtonClick = (size: string) => {
    setActiveSize(size); // Set the active size
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 pb-4 border-b border-black border-opacity-10">
        <Typography
          variant="h2"
          text={product.name}
          className="font-bungee text-3xl font-bold"
        />
        <Typography
          variant="p"
          className="text-black text-2xl font-bold font-albertsans"
          text={`$${product.price.toFixed(2)}`}
        />
        <Typography
          variant="p"
          className="text-black text-opacity-60 font-albertsans"
          text={product.description}
        />
      </div>

      {/* Color Selection */}
      <div className="flex flex-col gap-3 pb-6 border-b border-black border-opacity-10">
        <Typography
          variant="p"
          className="text-black text-opacity-60 font-albertsans"
          text="Select colors"
        />
        <div className="flex flex-row gap-2 ">
          {["#4F4631", "#314F4A", "#31344F"].map((color) => (
            <button
              key={color}
              onClick={() => handleColorButtonClick(color)} // Pass color string
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                activeColor === color ? "bg-opacity-80" : "bg-opacity-60"
              }`}
              style={{ backgroundColor: color }}
            >
              {activeColor === color && (
                <span>
                  <WhiteTick />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="flex flex-col gap-3 pb-6 border-b border-black border-opacity-10">
        <Typography
          variant="p"
          className="text-black text-opacity-60 font-albertsans"
          text="Choose Size"
        />
        <div className="flex flex-row gap-2">
          {product.sizes.map((size) => (
            <div key={size}>
              <Button
                variant="SizeFilter"
                className={`${
                  activeSize === size ? "bg-black text-white" : ""
                }`} // Optional: Change style when selected
                onClick={() => handleSizeButtonClick(size)} // Pass size string
                text={size}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart Section */}
      <div className="flex items-center gap-4 font-albertsans">
        <div className="flex bg-[#f0f0f0] rounded-3xl text-sm text-black text-opacity-60 ">
          <div
            onClick={handleDecrement}
            className="px-4 py-3 text-lg font-bold text-black"
          >
            <Typography variant="p" className="" text="-" />
          </div>
          <div className="px-4 py-3 text-lg">
            <Typography variant="p" className="" text={quantity} />
          </div>
          <div
            onClick={handleIncrement}
            className="px-4 py-3 text-lg font-bold text-black"
          >
            <Typography variant="p" className="" text="+" />
          </div>
        </div>
        <Button
          variant="AddToCart"
          className="flex-1 px-4 py-3 font-bold"
          text="Add to Cart"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
