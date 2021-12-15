import React from "react"

const SectionHeader = ({sectionTitle}) => {
  return (
	<header className="section-header">
		<h2 className="section-header__title">{sectionTitle}</h2>
		<div className="section-header__accent-line" />
	</header>
)
}

export default SectionHeader
