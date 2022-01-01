import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize"


const SectionHeader = ({ sectionTitle, center }) => {
	const { windowSize } = useWindowSize();
	const isSmallScreen = windowSize <= bp.md;

  return ( 
		<header className={["section-header", center || isSmallScreen ? "center" : ""].join(" ").trimEnd()}>
			<h2 className="section-header__title">{sectionTitle}</h2>
			<div className="section-header__accent-line" />
		</header>
	)
}

export default SectionHeader
