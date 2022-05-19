import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import type {
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
} from "react";

import { CartProductsContext } from "@pages/index";
import { useAccessibilityHandler } from "@hooks/useAccessibilityHandler";
import { useWindowSize } from "@hooks/useWindowSize";
import type { CartTypes } from "@types";

import AvatarImage from "@images/image-avatar.png";
import CartIcon from "@icons/icon-cart.svg";
import MenuIcon from "@icons/icon-menu.svg";

export type CartModalType = {
  cartProducts: CartTypes[];
};

export type MobileLinksType = {
  setIsSidebarOpened: Dispatch<SetStateAction<boolean>>;
  setCurrentPopUpState: Dispatch<SetStateAction<"SIDEBAR" | "CART">>;
};

const CartModal = dynamic<CartModalType>(() =>
  import("../CartModal").then(({ CartModal }) => CartModal)
);

const DesktopLinks = dynamic(() =>
  import("../DesktopLinks").then(({ DesktopLinks }) => DesktopLinks)
);

const MobileLinks = dynamic<MobileLinksType>(() =>
  import("../MobileLinks").then(({ MobileLinks }) => MobileLinks)
);

const TopNavbarComponents = () => {
  const [currentPopUpState, setCurrentPopUpState] = useState<
    "SIDEBAR" | "CART"
  >();
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const cartProducts = useContext(CartProductsContext);

  const { handleButtonClick, handleButtonPressed } = useAccessibilityHandler();
  const { width } = useWindowSize();

  const productQuantity =
    cartProducts.length !== 0 && cartProducts.map(({ quantity }) => quantity);

  const handleClickCart = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.clientX === 0 && event.clientY === 0) return;

    handleButtonClick(event, {
      isButtonClicked: isCartClicked,
      setIsButtonClicked: setIsCartClicked,
    });
    setCurrentPopUpState("CART");
  };

  const handlePressCart = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter") return;

    handleButtonPressed(event, {
      isButtonClicked: isCartClicked,
      setIsButtonClicked: setIsCartClicked,
    });
    setCurrentPopUpState("CART");
  };

  useEffect(() => {
    if (currentPopUpState === "CART")
      isSidebarOpened && setIsSidebarOpened(false);

    if (currentPopUpState === "SIDEBAR")
      isCartClicked && setIsCartClicked(false);
  }, [currentPopUpState, isSidebarOpened, isCartClicked]);

  return (
    <header className="w-11/12 mx-auto flex justify-between items-center h-16 tablet:w-10/12 tablet:h-24 tablet:border-b-[1px] tablet:border-neutral-grayishBlue desktop:w-10/12">
      <div className="h-full flex justify-between items-center gap-x-12">
        {width < 768 && (
          <button
            type="button"
            aria-label="Open Sidebar Button"
            className="mt-1 tablet:hidden"
            onClick={() => {
              setIsSidebarOpened(true);
              setCurrentPopUpState("SIDEBAR");
            }}
          >
            <i role="img" aria-label="Menu Icon">
              <MenuIcon className="fill-neutral-darkGrayishBlue" />
            </i>
          </button>
        )}

        <h1 className="font-kumbhSans font-bold lowercase text-2xl -ml-8 tablet:text-3xl tablet:ml-0 desktop:text-4xl">
          Sneakers
        </h1>

        {width >= 768 && <DesktopLinks />}
      </div>

      {isSidebarOpened && width < 768 && (
        <MobileLinks
          setIsSidebarOpened={setIsSidebarOpened}
          setCurrentPopUpState={setCurrentPopUpState}
        />
      )}

      <div className="flex justify-between items-center gap-x-6">
        <button
          type="button"
          aria-label="Cart Modal Button"
          aria-expanded="false"
          className="relative"
          onClick={handleClickCart}
          onKeyDown={handlePressCart}
        >
          <span className="bg-primary-orange text-neutral-white font-kumbhSans font-bold absolute -top-1 -right-1 rounded-full select-none text-[8px] px-1.5">
            {productQuantity}
          </span>

          <i role="img" aria-label="Cart Icon">
            <CartIcon className="" />
          </i>
        </button>

        {isCartClicked && <CartModal cartProducts={cartProducts} />}

        <figure className="grid place-items-center">
          <button
            type="button"
            aria-label="User Profile Button"
            className="w-8 rounded-full tablet:w-[38px] tablet:hover:ring-2 tablet:hover:ring-primary-orange tablet:transition-all tablet:duration-300 desktop:w-10"
          >
            <Image
              src={AvatarImage}
              alt="User Profile Image"
              layout="responsive"
              placeholder="blur"
            />
          </button>
        </figure>
      </div>
    </header>
  );
};

export { TopNavbarComponents };
