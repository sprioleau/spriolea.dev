import React from "react"

const SectionHeader = ({sectionTitle, variant = ""}) => {
  return (
	<header className={["section-header", variant].join(" ").trimEnd()}>
		<h2 className="section-header__title">{sectionTitle}</h2>
		<div className="section-header__accent-line" />
	</header>
)
}

export default SectionHeader
