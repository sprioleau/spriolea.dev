
import TabList from "../TabList";
import DataTable from "../DataTable";
import { workHistory, engineeringWorkHistory } from "../../constants";
import PageSectionLayout from "../PageSectionLayout";

const Experience = () => {
  return (
		<PageSectionLayout sectionId="experience" sectionTitle="Experience">
			<h3 className="section-subheading">Web Development Experience</h3>
			<TabList tabData={workHistory} />
			<DataTable data={engineeringWorkHistory} />
		</PageSectionLayout>
  )
}

export default Experience
