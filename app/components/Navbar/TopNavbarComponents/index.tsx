import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavbarCart } from "../Cart";
import { NavbarLinks } from "../NavbarLinks";
import { useBreakpoint } from "@hooks";

import AvatarImage from "@images/image-avatar.png";
import MenuIcon from "@icons/icon-menu.svg";

const TopNavbarComponents = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);

  const { breakpoint } = useBreakpoint();

  if (breakpoint.size === "DESKTOP")
    isSidebarCollapsed && setIsSidebarCollapsed(false);

  useEffect(() => {
    if (isCartClicked) setIsSidebarCollapsed(false);
  }, [isCartClicked, setIsSidebarCollapsed]);

  return (
    <section className="w-10/12 mx-auto flex justify-between items-center h-16 tablet:h-24 tablet:border-b-[1px] tablet:border-neutral-grayishBlue">
      <div className="h-full flex justify-between items-center gap-x-4 tablet:gap-x-6 laptop:gap-x-8 desktop:gap-x-10">
        {!isSidebarCollapsed && (
          <button
            type="button"
            aria-label="Open SideBar Button"
            aria-expanded="false"
            className="mt-1 tablet:hidden"
            onClick={() => setIsSidebarCollapsed(true)}
          >
            <i role="img" aria-label="Menu Icon">
              <MenuIcon className="fill-neutral-darkGrayishBlue" />
            </i>
          </button>
        )}

        {!isSidebarCollapsed && (
          <h2 className="font-kumbhSans font-bold text-neutral-veryVarkBlue text-2xl laptop:text-3xl desktop:text-4xl">
            <Link href="#">
              <a>sneakers</a>
            </Link>
          </h2>
        )}

        {breakpoint.size === "DESKTOP" && <NavbarLinks device="DESKTOP" />}

        {isSidebarCollapsed && breakpoint.size === "MOBILE" && (
          <NavbarLinks
            device="MOBILE"
            setIsSidebarCollapsed={setIsSidebarCollapsed}
          />
        )}
      </div>

      <div className="flex justify-between items-center gap-x-4 tablet:gap-x-6 laptop:gap-x-8 desktop:gap-x-10">
        <NavbarCart
          isCartClicked={isCartClicked}
          isSidebarCollapsed={isSidebarCollapsed}
          setIsCartClicked={setIsCartClicked}
        />

        <figure className="grid place-items-center">
          <button
            type="button"
            aria-label="Avatar Profile Button"
            className="rounded-full w-6 tablet:w-[38px] tablet:duration-300 tablet:ease-in-out tablet:hover:ring-2 tablet:hover:ring-primary-orange laptop:w-[42px] desktop:w-[46px]"
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

export { TopNavbarComponents };
