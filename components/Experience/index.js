import React from "react"
import SectionHeader from "../SectionHeader"
import TabList from "../TabList";
import DataTable from "../DataTable";
import {workHistory, engineeringWorkHistory} from "../../constants";

const Experience = () => {
  return (
	<section id="experience" className="experience section">
		<div className="container">
			<SectionHeader sectionTitle="Web Development Experience" />
			<div className="experience__main-content">
				<TabList tabData={workHistory} />
				<DataTable data={engineeringWorkHistory} />
			</div>
		</div>
	</section>
  )
}

export default Experience
