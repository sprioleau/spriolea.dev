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
	const [hasMounted, setHasMounted] = React.useState(false);
	const [windowSize, setWindowSize] = React.useState(hasMounted ? window.innerWidth : null);
	const [breakpoint, setBreakpoint] = React.useState("");
  
	React.useEffect(() => {
		setHasMounted(true);
  }, []);

	React.useEffect(() => {
		function setSize() {
			setWindowSize(window.innerWidth);
			setBreakpoint(getBreakPoint(window.innerWidth));
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
