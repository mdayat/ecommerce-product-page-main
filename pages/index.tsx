import type { NextPage } from "next";

import {
  TopNavbarComponents,
  ProductDetails,
  ProductImages,
} from "@components";

const Home: NextPage = () => {
  return (
    <>
      <TopNavbarComponents />

      <main className="tablet:w-10/12 tablet:mx-auto tablet:grid tablet:grid-cols-2 tablet:place-items-center tablet:mt-20">
        <ProductImages />
        <ProductDetails />
      </main>
    </>
  );
};

export default Home;
