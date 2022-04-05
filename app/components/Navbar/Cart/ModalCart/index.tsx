import Image from "next/image";

import FirstProductThumbnailImage from "@images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@icons/icon-delete.svg";

const ModalCart = () => {
  return (
    <section className="w-11/12 mx-auto absolute top-40 left-0 right-0 flex flex-col justify-between gap-y-6 bg-neutral-white rounded-lg drop-shadow-2xl px-5 pb-7">
      <h4 className="w-full font-bold h-16 flex justify-start items-center border-b-[1px] border-neutral-grayishBlue">
        Cart
      </h4>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-x-4">
          <figure className="h-full grid place-items-center">
            <Image
              src={FirstProductThumbnailImage}
              alt="Cart Product Thumbnail Image"
              width={52}
              height={52}
              placeholder="blur"
              className="rounded-md"
            />
          </figure>

          <div>
            <h4 className="text-neutral-darkGrayishBlue">
              Autumn Limited Edition...
            </h4>

            <h4 className="text-neutral-darkGrayishBlue">
              $125.00 x 3 $375.00
            </h4>
          </div>
        </div>

        <button type="button" aria-label="Delete Button">
          <i aria-label="Delete Icon">
            <DeleteIcon />
          </i>
        </button>
      </div>

      <button
        type="button"
        aria-label="Checkout Button"
        className="w-full bg-primary-orange text-neutral-white rounded-lg duration-300 ease-in-out hover:bg-opacity-75 py-3.5"
      >
        Checkout
      </button>
    </section>
  );
};

export { ModalCart };
