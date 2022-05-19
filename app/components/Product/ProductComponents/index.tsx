import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { getDocuments, setCollectionRef } from "@utils/firebase";
import type { ProductTypes } from "@types";

const ProductDetails = dynamic<ProductTypes>(
  () =>
    import("@components/Product/ProductDetails").then(
      ({ ProductDetails }) => ProductDetails
    ),
  { loading: () => <p>LOADING...</p> }
);

const ProductComponents = () => {
  const [productDetails, setProductDetails] = useState<ProductTypes>();

  useEffect(() => {
    (async () => {
      try {
        const result = await getDocuments(setCollectionRef("products"));
        setProductDetails(result[0]);
      } catch (error: any) {
        throw new Error(error);
      }
    })();
  }, []);

  return productDetails && <ProductDetails details={productDetails.details} />;
};

export { ProductComponents };
