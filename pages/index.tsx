import { createContext } from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import {
  TopNavbarComponents,
  ProductDetails,
  ProductImages,
} from "@components";
import { CartProductData } from "@interfaces";

export const getStaticProps: GetStaticProps = async () => {
  const productData = require("app/data/product.json");
  const cartProductData = require("app/data/cart.json");

  return { props: { productData, cartProductData } };
};

export const ProductOrderQuantityContext = createContext<CartProductData[]>([]);

const Home: NextPage = ({
  productData,
  cartProductData,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <>
      <ProductOrderQuantityContext.Provider value={cartProductData}>
        <TopNavbarComponents />
      </ProductOrderQuantityContext.Provider>

      <main className="tablet:w-10/12 tablet:mx-auto tablet:grid tablet:grid-cols-2 tablet:place-items-center tablet:mt-20">
        <ProductImages />
        <ProductDetails productDetails={productData} />
      </main>
    </>
  );
};

export default Home;
