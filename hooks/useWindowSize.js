import React from "react";

export const breakpoints = {
	sm: 600,
	md: 900,
	lg: 1200,
};

const getBreakPoint = (windowWidth) => {
	if (!windowWidth) return undefined;
	switch (windowWidth) {
		case windowWidth < breakpoints.sm:
			return "sm";
		case windowWidth < breakpoints.md:
			return "md";
		case windowWidth < breakpoints.lg:
			return "lg";
		default:
			return "xlg";
	}
};

const useWindowSize = () => {
	// const initialState = { windowSize: null, breakpoint: "" }
	const [hasMounted, setHasMounted] = React.useState(false);
	const [windowSize, setWindowSize] = React.useState(hasMounted ? window.innerWidth : null);
	const [breakpoint, setBreakpoint] = React.useState("");
	// const [windowSize, setWindowSize] = React.useState(initialState.windowSize);
	// const [breakpoint, setBreakpoint] = React.useState(initialState.breakpoint);
  
	React.useEffect(() => {
    setHasMounted(true);
  }, []);
	// const isWindowClient = typeof window !== "undefined" && typeof window === "object";
	// const [windowSize, setWindowSize] = React.useState(isWindowClient ? window.innerWidth : undefined);

	React.useEffect(() => {
		function setSize() {
			setWindowSize(window.innerWidth);
			setBreakpoint(getBreakPoint(window.innerWidth));
		}

		// if (hasMounted) {
			window.addEventListener("resize", setSize);
			return () => window.removeEventListener("resize", setSize);
		// }

		// return null;
	}, [setWindowSize]);
	// }, [setWindowSize, hasMounted]);

	// if (!hasMounted) return { windowSize: initialState.windowSize, breakpoint: initialState.breakpoint };
	// if (!hasMounted) return { windowSize: initialState.windowSize, breakpoint: initialState.breakpoint };

	return { windowSize, breakpoint };
};

export default useWindowSize;
