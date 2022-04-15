import Image from "next/image";

import FirstProductImage from "@images/image-product-1.jpg";
import FirstProductThumbnailImage from "@images/image-product-1-thumbnail.jpg";
import SecondProductThumbnailImage from "@images/image-product-2-thumbnail.jpg";
import ThirdProductThumbnailImage from "@images/image-product-3-thumbnail.jpg";
import FourthProductThumbnailImage from "@images/image-product-4-thumbnail.jpg";

const ProductImages = () => {
  return (
    <section className="w-10/12 mx-auto">
      <figure className="w-10/12 mx-auto">
        <Image
          src={FirstProductImage}
          alt="First Product Image"
          layout="responsive"
          placeholder="blur"
          className="rounded-xl"
        />
      </figure>

      <figure className="w-10/12 mx-auto flex justify-between items-center mt-6">
        <button type="button" aria-label="First Product Thumbnail Button">
          <Image
            src={FirstProductThumbnailImage}
            alt="First Product Thumbnail Image"
            width={72}
            height={72}
            placeholder="blur"
            className="rounded-lg"
          />
        </button>

        <button type="button" aria-label="Second Product Thumbnail Button">
          <Image
            src={SecondProductThumbnailImage}
            alt="Second Product Thumbnail Image"
            width={72}
            height={72}
            placeholder="blur"
            className="rounded-lg"
          />
        </button>

        <button type="button" aria-label="Third Product Thumbnail Button">
          <Image
            src={ThirdProductThumbnailImage}
            alt="Third Product Thumbnail Image"
            width={72}
            height={72}
            placeholder="blur"
            className="rounded-lg"
          />
        </button>

        <button type="button" aria-label="Fourth Product Thumbnail Button">
          <Image
            src={FourthProductThumbnailImage}
            alt="Fourth Product Thumbnail Image"
            width={72}
            height={72}
            placeholder="blur"
            className="rounded-lg"
          />
        </button>
      </figure>
    </section>
  );
};

export { ProductImages };
