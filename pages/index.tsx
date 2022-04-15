import type { NextPage } from "next";

import {
  NavbarCart,
  TopNavbar,
  ProductDetails,
  ProductImages,
} from "@components";

const Home: NextPage = () => {
  return (
    <>
      <TopNavbar>
        <NavbarCart />
      </TopNavbar>

      <main className="w-10/12 mx-auto grid grid-cols-2 mt-20">
        <ProductImages />
        <ProductDetails />
      </main>
    </>
  );
};

export default Home;
