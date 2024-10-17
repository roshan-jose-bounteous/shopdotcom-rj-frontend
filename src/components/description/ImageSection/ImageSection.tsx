"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/types/Product";

interface ImageSectionProps {
  images: ProductImage[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.imageurl || "");

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center lg:justify-start items-start gap-3 md:gap-5 w-fit">
      <div className="flex flex-row max-w-full md:flex-col gap-3 md:gap-4">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.imageurl}
            width={444}
            height={296}
            alt={img.alt}
            className={`w-32 md:w-40 h-28 md:h-32 rounded-md object-cover cursor-pointer border-2 ${
              selectedImage === img.imageurl
                ? "border-black"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(img.imageurl)}
          />
        ))}
      </div>

      <div className="flex justify-center md:justify-center bg-[#F0EEED] rounded-md h-64 md:h-96 w-full max-w-lg">
        <Image
          src={selectedImage}
          width={444}
          height={296}
          alt="Selected Product"
          className=" h-full md:w-[530px] md:h-[415px] object-contain   md:object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageSection;
