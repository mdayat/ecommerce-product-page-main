import { useState } from "react";

import { ModalCart } from "../ModalCart";
import { useAccessibilityHandler } from "app/hooks";

import CartIcon from "@icons/icon-cart.svg";

const NavbarCart = () => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  const { handleButtonClick, handleButtonPressed } = useAccessibilityHandler();

  return (
    <>
      <button
        type="button"
        aria-label="Cart Toggle Button"
        aria-expanded="false"
        className="relative"
        onClick={(event) =>
          handleButtonClick(event, {
            isButtonCollapsed: isCartClicked,
            setIsButtonCollapsed: setIsCartClicked,
          })
        }
        onKeyDown={(event) =>
          handleButtonPressed(event, {
            isButtonCollapsed: isCartClicked,
            setIsButtonCollapsed: setIsCartClicked,
          })
        }
      >
        <span className="absolute -top-1 -right-1 font-bold bg-primary-orange text-neutral-white rounded-full select-none text-[8px] px-1.5">
          3
        </span>

        <i aria-label="Cart Icon">
          <CartIcon className="fill-neutral-veryVarkBlue" />
        </i>
      </button>

      {isCartClicked && <ModalCart />}
    </>
  );
};

export { NavbarCart };