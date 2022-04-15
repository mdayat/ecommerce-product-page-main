import MinusIcon from "@icons/icon-minus.svg";
import PlusIcon from "@icons/icon-plus.svg";

const ProductDetails = () => {
  return (
    <section className="place-self-center w-9/12 h-4/5 mx-auto flex flex-col justify-between">
      <div className="flex flex-col justify-between items-start gap-y-4">
        <h2 className="font-bold uppercase text-primary-orange text-sm">
          Sneaker Company
        </h2>

        <h1 className="font-bold text-4xl">Fall Limited Edition Sneakers</h1>
      </div>

      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      <div className="flex flex-col justify-between gap-y-1.5">
        <div className="flex justify-start items-center gap-x-4">
          <h4 className="font-bold text-xl">$125.00</h4>

          <h4 className="bg-primary-paleOrange text-primary-orange font-bold rounded-md px-1 text-sm">
            50%
          </h4>
        </div>

        <h4 className="text-neutral-grayishBlue font-bold line-through text-xs">
          $250.00
        </h4>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        <div className="col-span-1 bg-neutral-lightGrayishBlue rounded-lg flex justify-between items-center gap-x-6 px-4">
          <button
            type="button"
            aria-label="Minus Button"
            className="group h-full"
          >
            <i aria-label="Minus Icon">
              <MinusIcon className="fill-primary-orange group-hover:opacity-70 duration-300 ease-in-out" />
            </i>
          </button>

          <span>0</span>

          <button
            type="button"
            aria-label="Plus Button"
            className="group h-full"
          >
            <i aria-label="Plus Icon">
              <PlusIcon className="fill-primary-orange group-hover:opacity-70 duration-300 ease-in-out" />
            </i>
          </button>
        </div>

        <button
          type="button"
          className="col-span-2 bg-primary-orange rounded-lg text-neutral-white hover:opacity-75 hover:shadow-3xl hover:shadow-primary-orange duration-300 ease-in-out py-3"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export { ProductDetails };
