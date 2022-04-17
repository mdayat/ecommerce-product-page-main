import Image from "next/image";

import { useBreakpoint } from "@hooks";

import FirstProductImage from "@images/image-product-1.jpg";
import FirstProductThumbnailImage from "@images/image-product-1-thumbnail.jpg";
import SecondProductThumbnailImage from "@images/image-product-2-thumbnail.jpg";
import ThirdProductThumbnailImage from "@images/image-product-3-thumbnail.jpg";
import FourthProductThumbnailImage from "@images/image-product-4-thumbnail.jpg";

const ProductImages = () => {
  const { breakpoint } = useBreakpoint();

  return (
    <section className="tablet:w-11/12 laptop:w-10/12">
      <figure className="w-screen mx-auto tablet:w-full laptop:w-11/12 desktop:w-10/12">
        <Image
          src={FirstProductImage}
          alt="First Product Image"
          layout="responsive"
          placeholder="blur"
          className="tablet:rounded-xl"
        />
      </figure>

      {breakpoint.size !== "MOBILE" && (
        <figure className="w-full mx-auto flex justify-between items-center tablet:mt-4 tablet:gap-x-2 laptop:w-11/12 laptop:mt-6 desktop:w-10/12 desktop:mt-6">
          <button
            type="button"
            aria-label="First Product Thumbnail Button"
            className="group duration-300 rounded-lg overflow-hidden tablet:w-[60px] tablet:h-[60px] laptop:w-[72px] laptop:h-[72px] hover:ring-2 hover:ring-primary-orange"
          >
            <Image
              src={FirstProductThumbnailImage}
              alt="First Product Thumbnail Image"
              layout="responsive"
              placeholder="blur"
              className="group-hover:opacity-50 transition-all duration-300"
            />
          </button>

          <button
            type="button"
            aria-label="Second Product Thumbnail Button"
            className="group duration-300 rounded-lg overflow-hidden tablet:w-[60px] tablet:h-[60px] laptop:w-[72px] laptop:h-[72px] hover:ring-2 hover:ring-primary-orange"
          >
            <Image
              src={SecondProductThumbnailImage}
              alt="Second Product Thumbnail Image"
              layout="responsive"
              placeholder="blur"
              className="group-hover:opacity-50 transition-all duration-300"
            />
          </button>

          <button
            type="button"
            aria-label="Third Product Thumbnail Button"
            className="group duration-300 rounded-lg overflow-hidden tablet:w-[60px] tablet:h-[60px] laptop:w-[72px] laptop:h-[72px] hover:ring-2 hover:ring-primary-orange"
          >
            <Image
              src={ThirdProductThumbnailImage}
              alt="Third Product Thumbnail Image"
              layout="responsive"
              placeholder="blur"
              className="group-hover:opacity-50 transition-all duration-300"
            />
          </button>

          <button
            type="button"
            aria-label="Fourth Product Thumbnail Button"
            className="group duration-300 rounded-lg overflow-hidden tablet:w-[60px] tablet:h-[60px] laptop:w-[72px] laptop:h-[72px] hover:ring-2 hover:ring-primary-orange"
          >
            <Image
              src={FourthProductThumbnailImage}
              alt="Fourth Product Thumbnail Image"
              layout="responsive"
              placeholder="blur"
              className="group-hover:opacity-50 transition-all duration-300"
            />
          </button>
        </figure>
      )}
    </section>
  );
};

export { ProductImages };
