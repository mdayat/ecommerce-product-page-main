import MinusIcon from "@icons/icon-minus.svg";
import PlusIcon from "@icons/icon-plus.svg";

const ProductDetails = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col justify-between mt-6 tablet:w-9/12 tablet:place-self-center tablet:gap-y-4 tablet:mt-0 laptop:gap-y-6">
      <div className="flex flex-col justify-between items-start gap-y-2 laptop:gap-y-3">
        <h2 className="font-kumbhSans font-bold uppercase text-primary-orange text-xs desktop:text-sm">
          Sneaker Company
        </h2>

        <h1 className="font-kumbhSans font-bold text-2xl laptop:text-3xl desktop:text-4xl">
          Fall Limited Edition Sneakers
        </h1>
      </div>

      <p className="font-kumbhSans text-neutral-darkGrayishBlue text-sm mt-4 tablet:mt-0 desktop:text-base">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      <div className="flex justify-between items-center gap-y-1.5 mt-6 tablet:flex-col tablet:items-start tablet:mt-0">
        <div className="flex justify-start items-center gap-x-4">
          <p className="font-kumbhSans font-bold desktop:text-lg">$125.00</p>

          <p className="bg-primary-paleOrange text-primary-orange font-bold rounded-md px-1 text-[10px] desktop:text-xs">
            50%
          </p>
        </div>

        <p className="text-neutral-grayishBlue font-bold line-through text-xs">
          $250.00
        </p>
      </div>

      <div className="flex flex-col justify-between items-center gap-y-4 mt-4 tablet:flex-row tablet:gap-x-2.5 tablet:mt-0 laptop:gap-x-3 desktop:gap-x-4 desktop:mt-2">
        <div className="bg-neutral-lightGrayishBlue w-full rounded-lg flex justify-between items-center py-2.5 px-4 tablet:basis-2/5 tablet:px-2 desktop:py-3">
          <button
            type="button"
            aria-label="Minus Button"
            className="group h-full"
          >
            <i role="img" aria-label="Minus Icon">
              <MinusIcon className="fill-primary-orange group-hover:opacity-70 transition-all duration-300" />
            </i>
          </button>

          <span className="font-kumbhSans font-bold">0</span>

          <button
            type="button"
            aria-label="Plus Button"
            className="group h-full"
          >
            <i role="img" aria-label="Plus Icon">
              <PlusIcon className="fill-primary-orange group-hover:opacity-70 transition-all duration-300" />
            </i>
          </button>
        </div>

        <button
          type="button"
          className="bg-primary-orange font-kumbhSans w-full rounded-lg text-neutral-white hover:opacity-75 hover:shadow-3xl hover:shadow-primary-orange transition-all duration-300 py-2.5 tablet:basis-3/5 tablet:text-sm desktop:py-3 desktop:text-base"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export { ProductDetails };
