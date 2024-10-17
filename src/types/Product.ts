// types/Product.ts
export interface ProductImage {
  alt: string;
  imageurl: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  details: string;
  images: ProductImage[];
  tags: string[];
  sizes: string[];
  createdAt: string;
}
