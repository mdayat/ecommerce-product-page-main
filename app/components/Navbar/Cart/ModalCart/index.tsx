import { useContext } from "react";
import Image from "next/image";

import { CartQuantityContext } from "@pages/index";
import { useCart } from "@hooks";

import FirstProductThumbnailImage from "@images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@icons/icon-delete.svg";

const ModalCart = () => {
  const cartProducts = useContext(CartQuantityContext);

  const { removeFromCart } = useCart();

  return (
    <section className="absolute z-10 animate-popup top-16 left-0 right-0 flex flex-col justify-between gap-y-6 bg-neutral-white rounded-lg drop-shadow-2xl m-2 px-5 pb-7 tablet:top-20 tablet:left-[60%] tablet:right-10 laptop:left-[62.5%] desktop:left-[70%]">
      <h4 className="w-full font-bold h-16 flex justify-start items-center border-b-[1px] border-neutral-grayishBlue">
        Cart
      </h4>

      {cartProducts.length !== 0 ? (
        cartProducts.map(({ productId, title, price, quantity }) => (
          <div key={productId} className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-x-4">
              <figure className="w-[38px] h-[38px] desktop:w-[42px] desktop:h-[42px]">
                <Image
                  src={FirstProductThumbnailImage}
                  alt="Cart Product Thumbnail Image"
                  layout="responsive"
                  placeholder="blur"
                  className="rounded-md"
                />
              </figure>

              <div className="flex flex-col justify-between">
                <h4 className="text-neutral-darkGrayishBlue font-kumbhSans text-sm desktop:text-base">
                  {title}
                </h4>

                <h4 className="text-neutral-darkGrayishBlue font-kumbhSans text-sm desktop:text-base">
                  ${price}.00 x {quantity}&nbsp;
                  <span className="font-kumbhSans font-bold text-neutral-veryVarkBlue text-sm desktop:text-base">
                    ${price! * quantity!}.00
                  </span>
                </h4>
              </div>
            </div>

            <button
              type="button"
              aria-label="Delete Button"
              onClick={() => removeFromCart("cart", productId)}
            >
              <i role="img" aria-label="Delete Icon">
                <DeleteIcon />
              </i>
            </button>
          </div>
        ))
      ) : (
        <span role="alert" className="font-kumbhSans text-center text-sm py-6">
          Your cart is empty
        </span>
      )}

      {cartProducts.length !== 0 && (
        <button
          type="button"
          aria-label="Checkout Button"
          className="w-full btn-orange text-sm desktop:text-base"
        >
          Checkout
        </button>
      )}
    </section>
  );
};

export { ModalCart };
