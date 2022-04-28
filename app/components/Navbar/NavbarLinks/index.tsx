import type { Dispatch, MouseEvent, SetStateAction } from "react";
import Link from "next/link";

import CloseIcon from "@icons/icon-close.svg";

interface NavbarLinksProps {
  device: "MOBILE" | "DESKTOP";
  setIsSidebarCollapsed?: Dispatch<SetStateAction<boolean>>;
}

const NavbarLinks = ({
  device = "DESKTOP",
  setIsSidebarCollapsed = () => {},
}: NavbarLinksProps) => {
  const handleLinkBorderOnMouseEnter = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    const parentElement = event.currentTarget.parentElement;

    parentElement?.classList.remove("border-transparent");
    parentElement?.classList.add("border-primary-orange");
  };

  const handleLinkBorderOnMouseOut = (event: MouseEvent<HTMLAnchorElement>) => {
    const parentElement = event.currentTarget.parentElement;

    parentElement?.classList.remove("border-primary-orange");
    parentElement?.classList.add("border-transparent");
  };

  return (
    <>
      {device === "DESKTOP" ? (
        <nav className="h-full hidden tablet:grid place-items-center">
          <ul className="group h-full flex justify-between items-center tablet:gap-x-4 laptop:gap-x-6 desktop:gap-x-8">
            <li className="link-wrapper">
              <Link href="#">
                <a
                  className="desktop-link"
                  onMouseEnter={handleLinkBorderOnMouseEnter}
                  onMouseOut={handleLinkBorderOnMouseOut}
                >
                  Collections
                </a>
              </Link>
            </li>

            <li className="link-wrapper">
              <Link href="#">
                <a
                  className="desktop-link"
                  onMouseEnter={handleLinkBorderOnMouseEnter}
                  onMouseOut={handleLinkBorderOnMouseOut}
                >
                  Men
                </a>
              </Link>
            </li>

            <li className="link-wrapper">
              <Link href="#">
                <a
                  className="desktop-link"
                  onMouseEnter={handleLinkBorderOnMouseEnter}
                  onMouseOut={handleLinkBorderOnMouseOut}
                >
                  Woman
                </a>
              </Link>
            </li>

            <li className="link-wrapper">
              <Link href="#">
                <a
                  className="desktop-link"
                  onMouseEnter={handleLinkBorderOnMouseEnter}
                  onMouseOut={handleLinkBorderOnMouseOut}
                >
                  Contact
                </a>
              </Link>
            </li>

            <li className="link-wrapper">
              <Link href="#">
                <a
                  className="desktop-link"
                  onMouseEnter={handleLinkBorderOnMouseEnter}
                  onMouseOut={handleLinkBorderOnMouseOut}
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="fixed animate-fadein top-0 bottom-0 left-0 z-10 w-[60vw] bg-neutral-white after:absolute after:top-0 after:bottom-0 after:w-[40vw] after:ml-[60vw] after:bg-neutral-black after:bg-opacity-70">
          <button
            type="button"
            aria-label="Close SideBar Button"
            aria-expanded="true"
            className="grid place-items-center h-16 pl-4 mobile:pl-5"
            onClick={() => setIsSidebarCollapsed(false)}
          >
            <i aria-label="Close Icon">
              <CloseIcon className="w-3 fill-neutral-darkGrayishBlue" />
            </i>
          </button>

          <ul className="flex flex-col justify-between gap-y-2.5 pl-4 mobile:pl-5">
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
    </>
  );
};

export { NavbarLinks };
