import { useContext, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

import { CartQuantityContext } from "@pages/index";
import { CartModal } from "@components";
import { useAccessibilityHandler } from "@hooks";

import CartIcon from "@icons/icon-cart.svg";

type CartComponentsTypes = {
  isSidebarOpened?: boolean;
  isCartClicked?: boolean;
  setIsCartClicked?: Dispatch<SetStateAction<boolean>>;
};

const CartComponents = ({
  isSidebarOpened = false,
  isCartClicked = false,
  setIsCartClicked = () => {},
}: CartComponentsTypes) => {
  const result = useContext(CartQuantityContext);

  const { handleButtonClick, handleButtonPressed } = useAccessibilityHandler();

  const productQuantity = result && result.map(({ quantity }) => quantity);

  useEffect(() => {
    if (isSidebarOpened) isCartClicked && setIsCartClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCartClicked]);

  return (
    <>
      <button
        type="button"
        aria-label="Cart Toggle Button"
        aria-expanded="false"
        className="relative"
        onClick={(event) =>
          handleButtonClick(event, {
            isButtonClicked: isCartClicked,
            setIsButtonClicked: setIsCartClicked,
          })
        }
        onKeyDown={(event) =>
          handleButtonPressed(event, {
            isButtonClicked: isCartClicked,
            setIsButtonClicked: setIsCartClicked,
          })
        }
      >
        <span className="absolute -top-1 -right-1 font-kumbhSans font-bold bg-primary-orange text-neutral-white rounded-full select-none text-[8px] px-1.5">
          {productQuantity}
        </span>

        <i role="img" aria-label="Cart Icon">
          <CartIcon className="fill-neutral-veryVarkBlue" />
        </i>
      </button>

      {isCartClicked && <CartModal />}
    </>
  );
};

export { CartComponents };
