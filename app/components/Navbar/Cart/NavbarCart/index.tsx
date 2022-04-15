import { Dispatch, SetStateAction, useEffect } from "react";

import { ModalCart } from "../ModalCart";
import { useAccessibilityHandler } from "@hooks";

import CartIcon from "@icons/icon-cart.svg";

interface NavbarCartProps {
  isCartClicked: boolean;
  isSidebarCollapsed: boolean;
  setIsCartClicked: Dispatch<SetStateAction<boolean>>;
}

const NavbarCart = ({
  isCartClicked = false,
  isSidebarCollapsed = false,

  setIsCartClicked = () => {},
}: NavbarCartProps) => {
  const { handleButtonClick, handleButtonPressed } = useAccessibilityHandler();

  useEffect(() => {
    if (isSidebarCollapsed) setIsCartClicked(false);
  }, [isSidebarCollapsed, setIsCartClicked]);

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
