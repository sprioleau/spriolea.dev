import React from "react"
import SectionHeader from "../SectionHeader"
import SelectedWork from "../SelectedWork"
import OtherWork from "../OtherWork";

const Work = () => {
  return (
	<section id="work" className="work section">
		<div className="container">
			<SectionHeader sectionTitle="Selected Work" />
			<div className="work__main-content">
				<SelectedWork />
				<OtherWork />
			</div>
		</div>
	</section>
  )
}

export default Work
