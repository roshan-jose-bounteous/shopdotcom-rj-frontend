import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useMutation } from "@tanstack/react-query";

interface AddToCartParams {
  jwtToken: string;
  productId: number;
  quantity: number;
  size?: string;
}

interface JwtPayload {
  sub: string;
}

export const useAddToCart = () => {
  return useMutation(
    async ({ jwtToken, productId, quantity, size }: AddToCartParams) => {
      const decodedToken = jwtDecode<JwtPayload>(jwtToken);
      const userId = decodedToken.sub;

      console.log("values: ", userId, productId, quantity, size);

      try {
        const response = await axios.post(
          "http://localhost:5105/api/Cart/add",
          {
            user_id: userId,
            product_id: productId,
            quantity: quantity,
            size: size,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
      }
    }
  );
};
