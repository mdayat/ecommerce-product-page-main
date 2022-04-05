import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavbarLinks } from "../NavbarLinks";
import { useBreakpoint } from "app/hooks";

import AvatarImage from "@images/image-avatar.png";
import CartIcon from "@icons/icon-cart.svg";
import MenuIcon from "@icons/icon-menu.svg";

interface TopNavbarProps {
  children?: ReactNode;
}

const TopNavbar = ({ children }: TopNavbarProps) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const { breakpoint } = useBreakpoint();

  if (breakpoint.size === "DESKTOP") isMenuClicked && setIsMenuClicked(false);

  return (
    <section className="w-11/12 mx-auto flex justify-between items-center h-16 tablet:h-24 tablet:border-b-[1px] tablet:border-neutral-darkGrayishBlue">
      <div className="h-full flex justify-between items-center gap-x-4 tablet:gap-x-6 laptop:gap-x-8 desktop:gap-x-10">
        {!isMenuClicked && (
          <button
            type="button"
            aria-label="Open SideBar Button"
            className="mt-1 tablet:hidden"
            onClick={() => setIsMenuClicked(true)}
          >
            <i aria-label="Menu Icon">
              <MenuIcon />
            </i>
          </button>
        )}

        {!isMenuClicked && (
          <h2 className="font-kumbhSans font-bold text-neutral-veryVarkBlue text-2xl laptop:text-3xl desktop:text-4xl">
            <Link href="#">
              <a>sneakers</a>
            </Link>
          </h2>
        )}

        {children}

        {isMenuClicked && breakpoint.size === "MOBILE" && (
          <NavbarLinks device="MOBILE" setIsMenuClicked={setIsMenuClicked} />
        )}
      </div>

      <div className="flex justify-between items-center gap-x-4 tablet:gap-x-6 laptop:gap-x-8 desktop:gap-x-10">
        <button type="button" aria-label="Cart Toggle Button">
          <i aria-label="Cart Icon">
            <CartIcon />
          </i>
        </button>

        <figure
          className={`${isMenuClicked && "-z-10"} grid place-items-center`}
        >
          <button
            type="button"
            aria-label="Avatar Profile Button"
            className="rounded-full w-[28px] tablet:w-[38px] tablet:duration-300 tablet:ease-in-out tablet:hover:ring-2 tablet:hover:ring-primary-orange laptop:w-[42px] desktop:w-[46px]"
          >
            <Image
              src={AvatarImage}
              alt="Avatar Image"
              layout="responsive"
              placeholder="blur"
            />
          </button>
        </figure>
      </div>
    </section>
  );
};

export { TopNavbar };
