"use client";

import { useEffect, useState } from "react";

type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
};

export const breakpoints: Breakpoints = {
  sm: 600,
  md: 900,
  lg: 1200,
};

function getBreakPoint(
  windowWidth: number | undefined,
  breakpoints: Breakpoints
) {
  if (!windowWidth) return "xlg";
  if (windowWidth < breakpoints.sm) return "sm";
  if (windowWidth < breakpoints.md) return "md";
  if (windowWidth < breakpoints.lg) return "lg";
  return "xlg";
}

const useWindowSize = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [windowSize, setWindowSize] = useState(
    hasMounted ? window?.innerWidth : undefined
  );
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    function setSize() {
      setWindowSize(window.innerWidth);
      setBreakpoint(getBreakPoint(window?.innerWidth, breakpoints));
    }

    if (hasMounted) {
      setSize();
      window.addEventListener("resize", setSize);
    }

    return () => window.removeEventListener("resize", setSize);
  }, [setWindowSize, hasMounted]);

  return { windowSize, breakpoint };
};

export default useWindowSize;
