import { useEffect } from "react";

const useLockBodyScroll = () => {
  useEffect((): (() => void) => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.addEventListener(
      "keydown",
      (event) => event.key === "Tab" && event.preventDefault()
    );
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener(
        "keydown",
        (event) => event.key === "Tab" && event.preventDefault()
      );
    };
  }, []);
};

export { useLockBodyScroll };
