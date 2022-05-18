import { useEffect, useRef, useState } from "react";

import { useAccessibility } from "@hooks/useAccessibility";
import type { ProductTypes } from "@types";

import CartIcon from "@icons/icon-cart.svg";
import CloseIcon from "@icons/icon-close.svg";
import MinusIcon from "@icons/icon-minus.svg";
import PlusIcon from "@icons/icon-plus.svg";

const ProductDetails = ({
  details: { brand, title, description, originalPrice, discountPrice },
}: ProductTypes) => {
  const [count, setCount] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const { handleDisabled } = useAccessibility();

  useEffect(() => {
    if (
      count !== 0 &&
      btnRef.current.disabled === false &&
      btnRef.current.ariaDisabled === "false"
    )
      return;

    if (count !== 0) {
      handleDisabled(btnRef.current, false, "false");
      btnRef.current.classList.remove("btn-orange-disabled");
      btnRef.current.classList.add("btn-orange");
      return;
    }

    handleDisabled(btnRef.current, true, "true");

    btnRef.current.classList.contains("btn-orange") &&
      btnRef.current.classList.remove("btn-orange");

    !btnRef.current.classList.contains("btn-orange-disabled") &&
      btnRef.current.classList.add("btn-orange-disabled");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <section className="col-span-1 flex flex-col justify-between gap-y-2">
        <h2 className="text-primary-orange font-kumbhSans font-bold uppercase text-xs tablet:text-sm">
          {brand}
        </h2>

        <h3 className="font-kumbhSans font-bold text-2xl tablet:text-3xl tablet:mt-2 desktop:text-4xl">
          {title}
        </h3>

        <p className="text-neutral-darkGrayishBlue font-kumbhSans text-sm tablet:text-base mt-2 mb-4 tablet:mt-5 tablet:mb-3.5">
          {description}.
        </p>

        <div className="flex justify-between items-center tablet:flex-col tablet:justify-start tablet:items-start tablet:gap-y-1">
          <div className="flex justify-between items-center gap-x-2">
            <h4 className="font-kumbhSans font-bold text-base tablet:text-lg">
              ${discountPrice}.00
            </h4>

            <h4 className="text-primary-orange bg-primary-paleOrange font-kumbhSans font-bold text-xs py-0.5 px-1 rounded-md">
              {(discountPrice / originalPrice) * 100}%
            </h4>
          </div>

          <h4 className="text-neutral-darkGrayishBlue font-kumbhSans font-bold line-through text-opacity-50 text-xs">
            ${originalPrice}.00
          </h4>
        </div>

        <div className="flex flex-col gap-y-4 tablet:flex-row mt-3 tablet:gap-x-4 tablet:mt-6">
          <div className="bg-neutral-lightGrayishBlue flex justify-between items-center rounded-md tablet:basis-2/5">
            <button
              type="button"
              aria-label="Decrement Number Button"
              className="py-2.5 pl-3"
              onClick={() =>
                setCount((prevCount) => {
                  if (prevCount === 0) return 0;
                  return prevCount - 1;
                })
              }
            >
              <MinusIcon className="fill-primary-orange scale-[.85] hover:opacity-75 transition-all duration-300" />
            </button>

            <span className="font-kumbhSans font-bold text-xs">{count}</span>

            <button
              type="button"
              aria-label="Increment Number Button"
              className="py-2.5 pr-3"
              onClick={() => setCount(count + 1)}
            >
              <PlusIcon className="fill-primary-orange scale-[.85] hover:opacity-75 transition-all duration-300" />
            </button>
          </div>

          <button
            type="button"
            className="btn-orange-disabled flex justify-center items-center py-2.5 gap-x-2 text-xs tablet:basis-3/5"
            ref={btnRef}
            onClick={() => setIsModalOpened(true)}
          >
            <CartIcon className="fill-neutral-white pointer-events-none scale-[.65]" />
            Add To Cart
          </button>
        </div>
      </section>

      {isModalOpened && (
        <section className="animate-fadein absolute left-0 top-0 right-0 bottom-0 bg-neutral-black bg-opacity-70 z-10 flex">
          <div
            aria-modal="true"
            className="relative bg-neutral-white rounded-lg w-10/12 h-40 tablet:w-72 m-auto flex"
          >
            <button
              type="button"
              aria-label="Modal Close Button"
              className="absolute top-0 right-0 m-2"
              onClick={() => setIsModalOpened(false)}
            >
              <i role="img" aria-label="Close Icon">
                <CloseIcon className="w-4 h-4 fill-primary-orange hover:opacity-70 transition-all duration-300" />
              </i>
            </button>

            <span className="block basis-full self-center font-kumbhSans font-bold italic text-primary-orange text-center">
              Successfully Added
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export { ProductDetails };
