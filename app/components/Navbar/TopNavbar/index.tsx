import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

import { CartComponents } from "@components";
import { useWindowSize } from "@hooks";

import AvatarImage from "@images/image-avatar.png";
import CloseIcon from "@icons/icon-close.svg";
import MenuIcon from "@icons/icon-menu.svg";

const TopNavbar = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);

  const { width } = useWindowSize();

  if (width >= 768) isSidebarOpened && setIsSidebarOpened(false);

  const handleOnMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    const parentElement = event.currentTarget.parentElement;

    parentElement?.classList.remove("border-transparent");
    parentElement?.classList.add("border-primary-orange");
  };

  const handleOnMouseOut = (event: MouseEvent<HTMLAnchorElement>) => {
    const parentElement = event.currentTarget.parentElement;

    parentElement?.classList.remove("border-primary-orange");
    parentElement?.classList.add("border-transparent");
  };

  useEffect(() => {
    if (isCartClicked) isSidebarOpened && setIsSidebarOpened(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCartClicked]);

  return (
    <header className="w-11/12 mx-auto flex justify-between items-center h-16 tablet:w-10/12 tablet:h-24 tablet:border-b-[1px] tablet:border-neutral-grayishBlue">
      <div className="h-full flex justify-between items-center gap-x-4 tablet:gap-x-6 laptop:gap-x-8 desktop:gap-x-10">
        {!isSidebarOpened && (
          <button
            type="button"
            aria-label="Open SideBar Button"
            aria-expanded="false"
            className="mt-1 tablet:hidden"
            onClick={() => setIsSidebarOpened(true)}
          >
            <i role="img" aria-label="Menu Icon">
              <MenuIcon className="fill-neutral-darkGrayishBlue" />
            </i>
          </button>
        )}

        {!isSidebarOpened && (
          <h2 className="text-neutral-veryVarkBlue font-kumbhSans font-bold text-2xl laptop:text-3xl desktop:text-4xl">
            <Link href="#">
              <a>sneakers</a>
            </Link>
          </h2>
        )}

        {width >= 768 && (
          <nav className="h-full hidden tablet:grid place-items-center">
            {console.log("DESKTOP")}
            <ul className="group h-full flex justify-between items-center tablet:gap-x-4 laptop:gap-x-6 desktop:gap-x-8">
              <li className="desktop-link-wrapper">
                <Link href="#">
                  <a
                    className="desktop-link"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseOut={handleOnMouseOut}
                  >
                    Collections
                  </a>
                </Link>
              </li>

              <li className="desktop-link-wrapper">
                <Link href="#">
                  <a
                    className="desktop-link"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseOut={handleOnMouseOut}
                  >
                    Men
                  </a>
                </Link>
              </li>

              <li className="desktop-link-wrapper">
                <Link href="#">
                  <a
                    className="desktop-link"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseOut={handleOnMouseOut}
                  >
                    Woman
                  </a>
                </Link>
              </li>

              <li className="desktop-link-wrapper">
                <Link href="#">
                  <a
                    className="desktop-link"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseOut={handleOnMouseOut}
                  >
                    Contact
                  </a>
                </Link>
              </li>

              <li className="desktop-link-wrapper">
                <Link href="#">
                  <a
                    className="desktop-link"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseOut={handleOnMouseOut}
                  >
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {isSidebarOpened && (
          <nav className="fixed animate-fadein top-0 bottom-0 left-0 z-10 w-[60vw] bg-neutral-white pl-4 sidebar-transparent">
            {console.log("MOBILE")}

            <button
              type="button"
              aria-label="Close SideBar Button"
              aria-expanded="true"
              className="grid place-items-center mt-4"
              onClick={() => setIsSidebarOpened(false)}
            >
              <i role="img" aria-label="Close Icon">
                <CloseIcon className="fill-neutral-darkGrayishBlue h-full w-3" />
              </i>
            </button>

            <ul className="flex flex-col justify-between gap-y-2.5 mt-7">
              <li>
                <Link href="#">
                  <a className="mobile-link">Collections</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a className="mobile-link">Men</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a className="mobile-link">Woman</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a className="mobile-link">Contact</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a className="mobile-link">About</a>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className="flex justify-between items-center gap-x-4 tablet:gap-x-6 laptop:gap-x-8 desktop:gap-x-10">
        <CartComponents
          isCartClicked={isCartClicked}
          isSidebarOpened={isSidebarOpened}
          setIsCartClicked={setIsCartClicked}
        />

        <figure className="grid place-items-center">
          <button
            type="button"
            aria-label="Avatar Profile Button"
            className="rounded-full w-7 tablet:w-[38px] tablet:transition-all tablet:duration-300 tablet:hover:ring-2 tablet:hover:ring-primary-orange laptop:w-[42px] desktop:w-[46px]"
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
    </header>
  );
};

export { TopNavbar };
