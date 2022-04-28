import { useRef, useState } from "react";
import Image from "next/image";
import { EffectFade, Keyboard, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Dispatch, LegacyRef, SetStateAction } from "react";

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
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface CarouselProps {
  setIsMainImageClicked?: Dispatch<SetStateAction<boolean>>;
  carouselOptions:
    | "CAROUSEL ONLY"
    | "CAROUSEL WITH THUMBS"
    | "CAROUSEL WITH BUTTONS"
    | "CAROUSEL WITH THUMBS AND BUTTONS";
}

const Carousel = ({
  carouselOptions = "CAROUSEL ONLY",
  setIsMainImageClicked = () => {},
}: CarouselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const previousRef = useRef<HTMLElement>(null);
  const nextRef = useRef<HTMLElement>(null);

  return (
    <>
      {(carouselOptions === "CAROUSEL ONLY" ||
        carouselOptions === "CAROUSEL WITH BUTTONS" ||
        carouselOptions === "CAROUSEL WITH THUMBS" ||
        carouselOptions === "CAROUSEL WITH THUMBS AND BUTTONS") && (
        <Swiper
          modules={[EffectFade, Keyboard, Navigation, Thumbs]}
          keyboard={{ enabled: true, onlyInViewport: false }}
          navigation={{ nextEl: nextRef.current, prevEl: previousRef.current }}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={50}
          slidesPerView={1}
          speed={500}
          preloadImages={false}
          lazy
          effect="fade"
          tag="section"
          wrapperTag="ul"
          className="relative flex justify-between items-center w-screen tablet:w-80 laptop:w-[355px] desktop:w-96"
        >
          {(carouselOptions === "CAROUSEL WITH BUTTONS" ||
            carouselOptions === "CAROUSEL WITH THUMBS AND BUTTONS") && (
            <>
              <button
                type="button"
                aria-label="Previous Image Button"
                className="absolute z-10 bg-neutral-white p-2 rounded-full left-2"
                ref={previousRef as LegacyRef<HTMLButtonElement>}
              >
                <i role="img" aria-label="Previous Icon">
                  <PreviousIcon className="w-3.5 h-3.5" />
                </i>
              </button>

              <button
                type="button"
                aria-label="Next Image Button"
                className="absolute z-10 bg-neutral-white p-2 rounded-full right-2"
                ref={nextRef as LegacyRef<HTMLButtonElement>}
              >
                <i role="img" aria-label="Next Icon">
                  <NextIcon className="w-3.5 h-3.5" />
                </i>
              </button>
            </>
          )}

          <SwiperSlide tag="li">
            <figure className="relative w-screen tablet:w-80 laptop:w-[355px] desktop:w-96">
              <Image
                src={FirstProductImage}
                alt="First Product Image"
                layout="responsive"
                placeholder="blur"
                className="hover:cursor-pointer tablet:rounded-xl"
                onClick={() => setIsMainImageClicked(true)}
              />
            </figure>
          </SwiperSlide>

          <SwiperSlide tag="li">
            <figure className="relative w-screen tablet:w-80 laptop:w-[355px] desktop:w-96">
              <Image
                src={SecondProductImage}
                alt="Second Product Image"
                layout="responsive"
                placeholder="blur"
                className="hover:cursor-pointer tablet:rounded-xl"
                onClick={() => setIsMainImageClicked(true)}
              />
            </figure>
          </SwiperSlide>

          <SwiperSlide tag="li">
            <figure className="relative w-screen tablet:w-80 laptop:w-[355px] desktop:w-96">
              <Image
                src={ThirdProductImage}
                alt="Third Product Image"
                layout="responsive"
                placeholder="blur"
                className="hover:cursor-pointer tablet:rounded-xl"
                onClick={() => setIsMainImageClicked(true)}
              />
            </figure>
          </SwiperSlide>

          <SwiperSlide tag="li">
            <figure className="relative w-screen tablet:w-80 laptop:w-[355px] desktop:w-96">
              <Image
                src={FourthProductImage}
                alt="Fourth Product Image"
                layout="responsive"
                placeholder="blur"
                className="hover:cursor-pointer tablet:rounded-xl"
                onClick={() => setIsMainImageClicked(true)}
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      )}

      {(carouselOptions === "CAROUSEL WITH THUMBS" ||
        carouselOptions === "CAROUSEL WITH THUMBS AND BUTTONS") && (
        <Swiper
          modules={[Keyboard, Navigation, Thumbs]}
          keyboard={{ enabled: true, onlyInViewport: false }}
          spaceBetween={20}
          slidesPerView={4}
          watchSlidesProgress
          tag="section"
          wrapperTag="ul"
          className="first:flex first:justify-between first:items-center first:aspect-square tablet:w-80 tablet:mt-4 laptop:w-[355px] laptop:mt-5 desktop:w-96 desktop:mt-6"
          onSwiper={setThumbsSwiper}
        >
          <SwiperSlide tag="li">
            <figure className="group carousel-thumbs relative w-full hover:cursor-pointer">
              <Image
                src={FirstProductThumbnailImage}
                alt="First Product Thumbnail Image"
                layout="responsive"
                placeholder="blur"
                className="group-hover:opacity-50 transition-all duration-300"
              />
            </figure>
          </SwiperSlide>

          <SwiperSlide tag="li">
            <figure className="group carousel-thumbs relative w-full hover:cursor-pointer">
              <Image
                src={SecondProductThumbnailImage}
                alt="Second Product Thumbnail Image"
                layout="responsive"
                placeholder="blur"
                className="group-hover:opacity-50 transition-all duration-300"
              />
            </figure>
          </SwiperSlide>

          <SwiperSlide tag="li">
            <figure className="group carousel-thumbs relative w-full hover:cursor-pointer">
              <Image
                src={ThirdProductThumbnailImage}
                alt="Third Product Thumbnail Image"
                layout="responsive"
                placeholder="blur"
                className="group-hover:opacity-50 transition-all duration-300"
              />
            </figure>
          </SwiperSlide>

          <SwiperSlide tag="li">
            <figure className="group carousel-thumbs relative w-full hover:cursor-pointer">
              <Image
                src={FourthProductThumbnailImage}
                alt="Fourth Product Thumbnail Image"
                layout="responsive"
                placeholder="blur"
                className="group-hover:opacity-50 transition-all duration-300"
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export { Carousel };
