

const SectionHeader = ({ sectionTitle, center }) => {
  return ( 
	<header className={["section-header", center ? "center" : ""].join(" ").trimEnd()}>
		<h2 className="section-header__title">{sectionTitle}</h2>
		<div className="section-header__accent-line" />
	</header>
)
}

export default SectionHeader
