import { createContext, StrictMode, useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { TopNavbarComponents, ProductDetails, Carousel } from "@components";
import { CartProductData } from "@interfaces";
import { useBreakpoint } from "@hooks";

import CloseIcon from "@icons/icon-close.svg";

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
  const [isMainImageClicked, setIsMainImageClicked] = useState(false);

  const { breakpoint } = useBreakpoint();

  if (breakpoint.size === "MOBILE")
    isMainImageClicked && setIsMainImageClicked(false);

  return (
    <>
      <ProductOrderQuantityContext.Provider value={cartProductData}>
        <StrictMode>
          <TopNavbarComponents />
        </StrictMode>
      </ProductOrderQuantityContext.Provider>

      <main className="tablet:w-10/12 tablet:mx-auto tablet:grid tablet:grid-cols-2 tablet:place-items-center tablet:mt-20">
        {breakpoint.size === "MOBILE" && (
          <StrictMode>
            <Carousel carouselOptions="CAROUSEL WITH BUTTONS" />
          </StrictMode>
        )}

        <section>
          {breakpoint.size === "DESKTOP" && (
            <>
              <Carousel
                carouselOptions="CAROUSEL WITH THUMBS"
                setIsMainImageClicked={setIsMainImageClicked}
              />

              {isMainImageClicked && (
                <section className="absolute z-10 w-screen h-screen top-0 left-0 bottom-0 grid place-items-center bg-neutral-black bg-opacity-75">
                  <div className="flex flex-col justify-between items-center">
                    <button
                      type="button"
                      aria-label="Close Lightbox Button"
                      className="self-end mb-2"
                      onClick={() => setIsMainImageClicked(false)}
                    >
                      <i role="img" aria-label="Close Icon">
                        <CloseIcon className="aspect-square fill-neutral-white hover:fill-primary-orange transition-all duration-300 tablet:w-4 laptop:w-[18px] desktop:w-5" />
                      </i>
                    </button>

                    <Carousel carouselOptions="CAROUSEL WITH THUMBS AND BUTTONS" />
                  </div>
                </section>
              )}
            </>
          )}
        </section>

        <StrictMode>
          <ProductDetails productDetails={productData} />
        </StrictMode>
      </main>
    </>
  );
};

export default Home;
