import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import {
  TopNavbarComponents,
  ProductDetails,
  ProductImages,
} from "@components";

export const getStaticProps: GetStaticProps = async () => {
  const productData = require("app/data/product.json");
  return { props: { productData } };
};

const Home: NextPage = ({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <TopNavbarComponents />

      <main className="tablet:w-10/12 tablet:mx-auto tablet:grid tablet:grid-cols-2 tablet:place-items-center tablet:mt-20">
        <ProductImages />
        <ProductDetails productDetails={productData} />
      </main>
    </>
  );
};

export default Home;
