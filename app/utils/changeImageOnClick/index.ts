import { RefObject } from "react";

import FirstProductImage from "@images/image-product-1.jpg";
import SecondProductImage from "@images/image-product-2.jpg";
import ThirdProductImage from "@images/image-product-3.jpg";
import FourthProductImage from "@images/image-product-4.jpg";

const checkAnimation = (imageRef: RefObject<HTMLElement>) => {
  const hasAnimationClass =
    imageRef.current?.classList.contains("animate-zoom")!;

  if (hasAnimationClass) {
    imageRef.current?.classList.remove("animate-zoom");
    window.requestAnimationFrame(() => {
      imageRef.current?.classList.add("animate-zoom");
    });
    return;
  }

  imageRef.current?.classList.add("animate-zoom");
};

const setNewImage = (imageId: string, imageRef: RefObject<HTMLElement>) => {
  switch (imageId) {
    case "1":
      imageRef.current?.children[0].children[1].setAttribute(
        "srcset",
        FirstProductImage.src
      );

      imageRef.current?.children[0].children[1].setAttribute(
        "src",
        FirstProductImage.src
      );

      checkAnimation(imageRef);
      break;

    case "2":
      imageRef.current?.children[0].children[1].setAttribute(
        "srcset",
        SecondProductImage.src
      );

      imageRef.current?.children[0].children[1].setAttribute(
        "src",
        SecondProductImage.src
      );

      checkAnimation(imageRef);
      break;

    case "3":
      imageRef.current?.children[0].children[1].setAttribute(
        "srcset",
        ThirdProductImage.src
      );

      imageRef.current?.children[0].children[1].setAttribute(
        "src",
        ThirdProductImage.src
      );

      checkAnimation(imageRef);
      break;

    case "4":
      imageRef.current?.children[0].children[1].setAttribute(
        "srcset",
        FourthProductImage.src
      );

      imageRef.current?.children[0].children[1].setAttribute(
        "src",
        FourthProductImage.src
      );

      checkAnimation(imageRef);
      break;

    default:
      imageRef.current?.children[0].children[1].setAttribute(
        "srcset",
        FirstProductImage.src
      );

      imageRef.current?.children[0].children[1].setAttribute(
        "src",
        FirstProductImage.src
      );

      checkAnimation(imageRef);
      break;
  }
};

export { setNewImage };
