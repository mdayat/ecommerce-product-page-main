import { useState } from "react";

import { ModalCart } from "../ModalCart";

import CartIcon from "@icons/icon-cart.svg";

const NavbarCart = () => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Cart Toggle Button"
        onClick={() => {
          isCartClicked ? setIsCartClicked(false) : setIsCartClicked(true);
        }}
      >
        <span className="absolute top-[18px] right-[50px] font-bold bg-primary-orange text-neutral-white rounded-full select-none text-[8px] px-1.5">
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
