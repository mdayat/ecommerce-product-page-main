import { createContext, useEffect, useState } from "react";
import type { NextPage } from "next";

import { TopNavbarComponents } from "@components/TopNavbar/TopNavbarComponents";
import { ProductComponents } from "@components/Product/ProductComponents";
import { getDocuments, setCollectionRef } from "@utils/firebase";
import type { CartTypes } from "@types";

export const CartProductsContext = createContext<CartTypes[]>([]);

const Home: NextPage = () => {
  const [cartProducts, setCartProducts] = useState<CartTypes[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getDocuments(setCollectionRef("cart"));
        setCartProducts(result);
      } catch (error: any) {
        throw new Error(error);
      }
    })();
  }, []);

  return (
    <>
      <CartProductsContext.Provider value={cartProducts}>
        <TopNavbarComponents />
      </CartProductsContext.Provider>

      <main className="w-11/12 min-h-[calc(100vh-64px)] mx-auto tablet:w-10/12 tablet:min-h-[calc(100vh-96px)] tablet:grid tablet:grid-cols-2 tablet:place-items-center laptop:w-9/12 desktop:w-8/12">
        <section className="col-span-1"></section>

        <ProductComponents />
      </main>
    </>
  );
};

export default Home;
