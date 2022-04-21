import { useEffect, useState } from "react";

import { preventKeyboardScroll, preventScroll } from "@utils";

import CloseIcon from "@icons/icon-close.svg";
import MinusIcon from "@icons/icon-minus.svg";
import PlusIcon from "@icons/icon-plus.svg";

interface ProductDetailsProps {
  productDetails: {
    id?: number;
    company?: string;
    product?: string;
    productTitle?: string;
    productDescription?: string;
    price?: number;
    discount?: {
      originalPrice?: number;
      discountPrice?: number;
      discountPrecentage?: number;
    };
  };
}

const ProductDetails = ({ productDetails }: ProductDetailsProps) => {
  const [addToCartStatus, setAddToCartStatus] = useState<
    "ERROR" | "SUCCEED" | "DEFAULT"
  >("DEFAULT");
  const [incrementNumber, setIncrementNumber] = useState(0);

  const { company, productTitle, productDescription, discount } =
    productDetails;

  const handleClickAddToCartButton = () => {
    if (typeof window === "undefined") return;
    if (incrementNumber === 0) return setAddToCartStatus("ERROR");

    setAddToCartStatus("SUCCEED");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (addToCartStatus === "SUCCEED") {
      window.scrollTo(0, 0);
      window.addEventListener("keydown", preventKeyboardScroll);
      window.addEventListener("wheel", preventScroll, {
        passive: false,
      });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("keydown", preventKeyboardScroll);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [addToCartStatus]);

  return (
    <section className="w-11/12 mx-auto flex flex-col justify-between mt-6 tablet:w-9/12 tablet:place-self-center tablet:gap-y-4 tablet:mt-0 laptop:gap-y-6">
      <div className="flex flex-col justify-between items-start gap-y-2 laptop:gap-y-3">
        <h2 className="font-kumbhSans font-bold uppercase text-primary-orange text-xs desktop:text-sm">
          {company}
        </h2>

        <h1 className="font-kumbhSans font-bold text-2xl laptop:text-3xl desktop:text-4xl">
          {productTitle}
        </h1>
      </div>

      <p className="font-kumbhSans text-neutral-darkGrayishBlue text-sm mt-4 tablet:mt-0 desktop:text-base">
        {productDescription}
      </p>

      <div className="flex justify-between items-center gap-y-1.5 mt-6 tablet:flex-col tablet:items-start tablet:mt-0">
        <div className="flex justify-start items-center gap-x-4">
          <p className="font-kumbhSans font-bold desktop:text-lg">
            ${discount?.discountPrice}.00
          </p>

          <p className="bg-primary-paleOrange text-primary-orange font-bold rounded-md px-1 text-[10px] desktop:text-xs">
            {discount?.discountPrecentage}%
          </p>
        </div>

        <p className="text-neutral-grayishBlue font-bold line-through text-xs">
          {discount?.originalPrice}.00
        </p>
      </div>

      {addToCartStatus === "SUCCEED" && (
        <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center bg-neutral-black bg-opacity-50 z-10">
          <div className="relative h-40 w-60 bg-neutral-white drop-shadow-2xl rounded-lg flex">
            <button
              type="button"
              aria-label="Close Success Add To Cart PopUp"
              onClick={() => setAddToCartStatus("DEFAULT")}
              className="absolute -right-2 -top-2 bg-neutral-lightGrayishBlue p-1 rounded-full"
            >
              <i role="img" aria-label="Close Icon">
                <CloseIcon className="w-4 h-4 fill-primary-orange" />
              </i>
            </button>

            <span
              role="alert"
              className="block basis-full self-center font-kumbhSans font-bold italic text-primary-orange text-center"
            >
              Product Has Been Added Successfully
            </span>
          </div>
        </div>
      )}

      {addToCartStatus === "ERROR" && (
        <span
          role="alert"
          className="font-kumbhSans font-bold italic text-error text-xs mt-4 tablet::mt-0"
        >
          *Please Add The Number Of Items Before Adding To The List
        </span>
      )}

      <div className="flex flex-col justify-between items-center gap-y-4 mt-4 tablet:flex-row tablet:gap-x-2.5 tablet:mt-0 laptop:gap-x-3 desktop:gap-x-4 desktop:mt-2">
        <div className="bg-neutral-lightGrayishBlue w-full rounded-lg flex justify-between items-center py-2.5 px-4 tablet:basis-2/5 tablet:px-2 desktop:py-3">
          <button
            type="button"
            aria-label="Minus Button"
            className="group h-full"
            onClick={() =>
              setIncrementNumber((previousNumber): number => {
                if (previousNumber === 0) return 0;
                return previousNumber - 1;
              })
            }
          >
            <i role="img" aria-label="Minus Icon">
              <MinusIcon className="fill-primary-orange group-hover:opacity-70 transition-all duration-300" />
            </i>
          </button>

          <span className="font-kumbhSans font-bold">{incrementNumber}</span>

          <button
            type="button"
            aria-label="Plus Button"
            className="group h-full"
            onClick={() => setIncrementNumber(incrementNumber + 1)}
          >
            <i role="img" aria-label="Plus Icon">
              <PlusIcon className="fill-primary-orange group-hover:opacity-70 transition-all duration-300" />
            </i>
          </button>
        </div>

        <button
          type="button"
          className="w-full btn-orange tablet:basis-3/5 tablet:text-sm desktop:text-base"
          onClick={() => handleClickAddToCartButton()}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export { ProductDetails };
