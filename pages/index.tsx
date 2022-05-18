import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import { TopNavbarComponents } from "@components/Navbar/TopNavbar/TopNavbarComponents";
import { getDocuments, setCollectionRef } from "@utils";
import type { ProductTypes } from "@types";

const ProductDetails = dynamic<ProductTypes>(
  () =>
    import("@components/Product/ProductDetails").then(
      ({ ProductDetails }) => ProductDetails
    ),
  { loading: () => <p>LOADING...</p> }
);

const Home: NextPage = () => {
  const [productDetails, setProductDetails] = useState<ProductTypes>();

  useEffect(() => {
    (async () => {
      const result = await getDocuments(setCollectionRef("products"));
      setProductDetails(result[0]);
    })();
  }, []);

  return (
    <>
      <TopNavbarComponents />

      <main className="w-11/12 mx-auto tablet:w-10/12 tablet:min-h-screen tablet:grid tablet:grid-cols-2 tablet:place-items-center laptop:w-9/12 desktop:w-8/12">
        <section className="col-span-1"></section>

        {productDetails && <ProductDetails details={productDetails.details} />}
      </main>
    </>
  );
};

export default Home;
