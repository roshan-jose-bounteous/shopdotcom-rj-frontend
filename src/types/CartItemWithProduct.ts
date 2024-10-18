import { CartItem } from "./CartItem";
import { Product } from "./Product";

export interface CartItemWithProduct {
  cartItem: CartItem;
  product: Product;
}
