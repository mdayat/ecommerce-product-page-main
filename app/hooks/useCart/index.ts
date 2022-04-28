import { useRouter } from "next/router";

import {
  addDoc,
  deleteDoc,
  doc,
  firestoreDatabase,
  getDocuments,
  increment,
  setCollectionRef,
  updateDoc,
} from "@utils";
import type { CartType } from "@interfaces";

const useCart = () => {
  const { reload } = useRouter();

  const addToCart = async (
    collectionName: string,
    { productId = "Id", title = "Title", price = 1, quantity = 1 }: CartType
  ) => {
    try {
      const cartProducts: CartType[] = await getDocuments(
        setCollectionRef(collectionName)
      );

      if (cartProducts.length === 0) {
        await addDoc(setCollectionRef(collectionName), {
          productId,
          title,
          price,
          quantity,
        });

        return "Product Has Been Added Successfully";
      }

      for (let i = 0, iterate = cartProducts.length; i < iterate; i++) {
        if (cartProducts[i].productId !== productId) continue;

        await updateDoc(
          doc(firestoreDatabase, collectionName, cartProducts[i].id),
          {
            quantity: increment(quantity),
          }
        );

        return "Product Has Been Updated";
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const removeFromCart = async (collectionName: string, productId: string) => {
    try {
      const cartProducts: CartType[] = await getDocuments(
        setCollectionRef(collectionName)
      );

      for (let i = 0, iterate = cartProducts.length; i < iterate; i++) {
        if (cartProducts[i].productId !== productId) continue;

        await deleteDoc(
          doc(firestoreDatabase, collectionName, cartProducts[i].id)
        );
      }

      reload();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return { addToCart, removeFromCart };
};

export { useCart };
