/* eslint-disable indent */
import Image from "next/image";
import { MouseEvent, useRef } from "react";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useBreakpoint } from "@hooks";
import { setNewImage } from "@utils";

import FirstProductImage from "@images/image-product-1.jpg";
import SecondProductImage from "@images/image-product-2.jpg";
import ThirdProductImage from "@images/image-product-3.jpg";
import FourthProductImage from "@images/image-product-4.jpg";
import FirstProductThumbnailImage from "@images/image-product-1-thumbnail.jpg";
import SecondProductThumbnailImage from "@images/image-product-2-thumbnail.jpg";
import ThirdProductThumbnailImage from "@images/image-product-3-thumbnail.jpg";
import FourthProductThumbnailImage from "@images/image-product-4-thumbnail.jpg";
import NextIcon from "@icons/icon-next.svg";
import PreviousIcon from "@icons/icon-previous.svg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const ProductImages = () => {
  const imageRef = useRef<HTMLElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const { breakpoint } = useBreakpoint();

  const handleChangeImage = (event: MouseEvent<HTMLElement>) => {
    const currentClickedImage = event.currentTarget.getAttribute("id")!;
    setNewImage(currentClickedImage, imageRef);
  };

  return (
    <section className="tablet:w-11/12 laptop:w-10/12">
      {breakpoint.size === "MOBILE" && (
        <>
          <Swiper
            modules={[Navigation, EffectFade]}
            effect={"fade"}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            className="flex justify-between items-center"
          >
            <button
              type="button"
              aria-label="Previous Button"
              className="absolute left-2 z-10 bg-neutral-lightGrayishBlue p-2 rounded-full"
              ref={prevRef}
            >
              <i role="img" aria-label="Previous icon">
                <PreviousIcon className="w-4 h-4" />
              </i>
            </button>

            <button
              type="button"
              aria-label="Next Button"
              className="absolute right-2 z-10 bg-neutral-lightGrayishBlue p-2 rounded-full"
              ref={nextRef}
            >
              <i role="img" aria-label="Next Icon">
                <NextIcon className="w-4 h-4" />
              </i>
            </button>

            <SwiperSlide>
              <figure className="w-screen mx-auto">
                <Image
                  src={FirstProductImage}
                  alt="First Product Image"
                  layout="responsive"
                  placeholder="blur"
                  className="tablet:rounded-xl"
                />
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="w-screen mx-auto">
                <Image
                  src={SecondProductImage}
                  alt="First Product Image"
                  layout="responsive"
                  placeholder="blur"
                  className="tablet:rounded-xl"
                />
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="w-screen mx-auto">
                <Image
                  src={ThirdProductImage}
                  alt="First Product Image"
                  layout="responsive"
                  placeholder="blur"
                  className="tablet:rounded-xl"
                />
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="w-screen mx-auto">
                <Image
                  src={FourthProductImage}
                  alt="First Product Image"
                  layout="responsive"
                  placeholder="blur"
                  className="tablet:rounded-xl"
                />
              </figure>
            </SwiperSlide>
          </Swiper>
        </>
      )}

      {breakpoint.size === "DESKTOP" && (
        <>
          <figure
            className="w-screen mx-auto animate-zoom tablet:w-full laptop:w-11/12 desktop:w-10/12"
            ref={imageRef}
          >
            <Image
              src={FirstProductImage}
              alt="First Product Image"
              layout="responsive"
              placeholder="blur"
              className="tablet:rounded-xl"
            />
          </figure>

          <figure className="w-full mx-auto flex justify-between items-center tablet:mt-4 tablet:gap-x-2 laptop:w-11/12 laptop:mt-6 desktop:w-10/12 desktop:mt-6">
            <button
              id="1"
              type="button"
              aria-label="First Product Thumbnail Button"
              className="group img-thumbnail"
              onClick={handleChangeImage}
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
              id="2"
              type="button"
              aria-label="Second Product Thumbnail Button"
              className="group img-thumbnail"
              onClick={handleChangeImage}
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
              id="3"
              type="button"
              aria-label="Third Product Thumbnail Button"
              className="group img-thumbnail"
              onClick={handleChangeImage}
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
              id="4"
              type="button"
              aria-label="Fourth Product Thumbnail Button"
              className="group img-thumbnail"
              onClick={handleChangeImage}
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
        </>
      )}
    </section>
  );
};

export { ProductImages };
