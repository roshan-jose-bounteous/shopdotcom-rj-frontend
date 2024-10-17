// // components/BreadCrumbs.tsx
// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// interface BreadCrumbsProps {
//   productName: string;
// }

// const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ productName }) => {
//   const router = useRouter();

//   const handleShopClick = () => {
//     router.push("/shop");
//   };

//   return (
//     <div className="text-sm font-medium text-gray-600">
//       <span>Home</span> &gt;{" "}
//       <span className="cursor-pointer text-blue-500" onClick={handleShopClick}>
//         Shop
//       </span>{" "}
//       &gt; <span>{productName}</span>
//     </div>
//   );
// };

// export default BreadCrumbs;

// components/BreadCrumbs.tsx
"use client";
import Typography from "@/components/common/Typography";
import React from "react";
import RightBreadCrumb from "../../../../public/assets/icons/RightBreadCrumb";
import Link from "next/link";

interface BreadCrumbsProps {
  productName: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ productName }) => {
  return (
    <div className="flex flex-row gap-2 justify-between font-albertsans items-center">
      <div className="flex flex-row gap-2 font-albertsans items-center">
        <Link href="/">
          <Typography
            variant="p"
            className="text-black text-opacity-60"
            text="Home"
          />
        </Link>
        <RightBreadCrumb />
        <Link href="/shop">
          <Typography
            variant="p"
            className="text-black text-opacity-60"
            text="Shop"
          />
        </Link>
        <RightBreadCrumb />
        <Typography
          variant="p"
          className="text-black"
          text={productName}
        />
      </div>
    </div>
  );
};

export default BreadCrumbs;
