import { useEffect, useState } from "react";

interface ViewportSize {
  width: number;
  height: number;
}

interface BreakpointsSize {
  size: "MOBILE" | "DESKTOP";
}

const useBreakpoint = () => {
  const [viewportSize, setviewportSize] = useState<ViewportSize>({
    width: 0,
    height: 0,
  });

  const [breakpoint, setBreakpoint] = useState<BreakpointsSize>({
    size: "MOBILE",
  });

  const handleScreenResize = () =>
    setviewportSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", handleScreenResize);
    handleScreenResize();
    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  useEffect(() => {
    if (viewportSize.width >= 0 && viewportSize.width < 768) {
      setBreakpoint({ size: "MOBILE" });
    } else {
      setBreakpoint({ size: "DESKTOP" });
    }
  }, [viewportSize.width]);

  return { breakpoint, width: viewportSize.width, height: viewportSize.height };
};

export { useBreakpoint };
