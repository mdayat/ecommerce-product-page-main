import axios from "axios";

import { CartProductData } from "@interfaces";
import { useRouter } from "next/router";

const useCart = () => {
  const { reload } = useRouter();

  const addToCart = async ({
    id = 1,
    productTitle = "Title",
    productPrice = 1,
    productOrderQuantity = 1,
  }: CartProductData) => {
    try {
      await axios.post(process.env.CART_ENDPOINT!, {
        id,
        productTitle,
        productPrice,
        productOrderQuantity,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const removeFromCart = async (id: number) => {
    try {
      await axios.delete(process.env.CART_ENDPOINT!, {
        data: { id },
      });
      reload();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return { addToCart, removeFromCart };
};

export { useCart };
