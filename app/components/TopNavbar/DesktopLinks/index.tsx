import Link from "next/link";
import type { MouseEvent } from "react";

const DesktopLinks = () => {
  const handleOnMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.parentElement.classList.remove("border-transparent");
    event.currentTarget.parentElement.classList.add("border-primary-orange");
  };

  const handleOnMouseOut = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.parentElement.classList.remove("border-primary-orange");
    event.currentTarget.parentElement.classList.add("border-transparent");
  };

  return (
    <nav className="h-full hidden tablet:grid place-items-center">
      <ul className="group h-full flex justify-between items-center tablet:gap-x-6">
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
              Women
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
      </ul>
    </nav>
  );
};

export { DesktopLinks };
