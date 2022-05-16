import { createContext, StrictMode, useEffect, useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { TopNavbar, Carousel, ProductDetails } from "@components";
import { useWindowSize } from "@hooks";
import { setCollectionRef, getDocuments } from "@utils";
import type { CartType, ProductType } from "@interfaces";

import CloseIcon from "@icons/icon-close.svg";

export const getStaticProps: GetStaticProps = async () => {
  const products: ProductType[] = await getDocuments(
    setCollectionRef("products")
  );

  return { props: { products } };
};

export const CartQuantityContext = createContext<CartType[]>([]);

const Home: NextPage = ({
  products,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const [cartData, setCartData] = useState<CartType[]>([]);
  const [isMainImageClicked, setIsMainImageClicked] = useState(false);

  const { width } = useWindowSize();

  if (width < 768) isMainImageClicked && setIsMainImageClicked(false);

  useEffect(() => {
    async function getCart() {
      try {
        const result = await getDocuments(setCollectionRef("cart"));

        if (result.length === 0) return;

        setCartData(result);
      } catch (error: any) {
        throw new Error(error);
      }
    }

    getCart();
  }, []);

  return (
    <>
      <CartQuantityContext.Provider value={cartData}>
        <StrictMode>
          <TopNavbar />
        </StrictMode>
      </CartQuantityContext.Provider>

      <main className="tablet:w-10/12 tablet:mx-auto tablet:grid tablet:grid-cols-2 tablet:place-items-center tablet:mt-20">
        {width < 768 && (
          <StrictMode>
            <Carousel carouselOptions="CAROUSEL WITH BUTTONS" />
          </StrictMode>
        )}

        <section>
          {width >= 768 && (
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
          {products.map(({ id, details }: ProductType) => (
            <ProductDetails key={id} id={id} details={details} />
          ))}
        </StrictMode>
      </main>
    </>
  );
};

export default Home;
