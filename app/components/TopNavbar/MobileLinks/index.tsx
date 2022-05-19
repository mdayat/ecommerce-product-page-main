import Link from "next/link";

import type { MobileLinksType } from "../TopNavbarComponents";

import CloseIcon from "@icons/icon-close.svg";

const MobileLinks = ({
  setIsSidebarOpened,
  setCurrentPopUpState,
}: MobileLinksType) => {
  return (
    <nav className="bg-neutral-white sidebar-transparent animate-fadein absolute top-0 left-0 right-[40vw] bottom-0 z-10 pl-4 pt-4">
      <button
        type="button"
        aria-label="Close Sidebar Button"
        onClick={() => {
          setIsSidebarOpened(false);
          setCurrentPopUpState("SIDEBAR");
        }}
      >
        <i role="img" aria-label="Close Icon">
          <CloseIcon className="fill-neutral-darkGrayishBlue w-3" />
        </i>
      </button>

      <ul className="flex flex-col gap-y-2.5 mt-4">
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
            <a className="mobile-link">About</a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a className="mobile-link">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { MobileLinks };
