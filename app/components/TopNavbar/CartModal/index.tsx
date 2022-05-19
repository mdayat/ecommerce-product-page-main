import Image from "next/image";

import type { CartModalType } from "@components/TopNavbar/TopNavbarComponents";

import FirstProductThumbnailImage from "@images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@icons/icon-delete.svg";

const CartModal = ({ cartProducts }: CartModalType) => {
  return (
    <section className="bg-neutral-white absolute animate-popup flex flex-col justify-between z-10 rounded-lg drop-shadow-2xl gap-y-6 top-16 left-0 right-0 mx-3 px-5 pb-7 tablet:top-20 tablet:left-[60%] laptop:left-[62.5%] desktop:left-[72.5%]">
      <h4 className="font-kumbhSans font-bold flex justify-start items-center border-b-[1px] border-neutral-grayishBlue py-4">
        Cart
      </h4>

      {cartProducts.length !== 0 &&
        cartProducts.map(({ id, price, quantity, title }) => (
          <div key={id} className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-x-3">
              <figure className="w-[38px] h-full desktop:w-[42px]">
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
                  <span className="text-neutral-black font-kumbhSans font-bold text-sm desktop:text-base">
                    ${price! * quantity!}.00
                  </span>
                </h4>
              </div>
            </div>

            <button type="button" aria-label="Delete Button">
              <i role="img" aria-label="Delete Icon">
                <DeleteIcon />
              </i>
            </button>
          </div>
        ))}

      {cartProducts.length === 0 && (
        <span role="alert" className="font-kumbhSans text-center text-sm py-6">
          Your cart is empty
        </span>
      )}

      {cartProducts.length !== 0 && (
        <button
          type="button"
          aria-label="Checkout Button"
          className="btn-orange py-2.5 text-sm desktop:text-base"
        >
          Checkout
        </button>
      )}
    </section>
  );
};

export { CartModal };
