import TabList from "../TabList";
import PageSectionLayout from "../PageSectionLayout";
import { organizeByKey } from "../../utils";

const Experience = ({ experience }) => {
	if (!experience) return null;

	const experienceByType = organizeByKey(experience, "jobType.type")

	const tabListData = [
		{
			label: "Web Development",
			showSublabel: true,
			expandByDefault: true,
		},
		{
			label: "Engineering",
			showSublabel: false,
			expandByDefault: false,
		},
	]

  return (
		<PageSectionLayout sectionId="experience" sectionTitle="Experience">
			{tabListData.map(({ label, showSublabel, expandByDefault }) => (
				<TabList
					key={label}
					id={label.toLowerCase().replaceAll(" ", "-")}
					label={label}
					experience={experienceByType[label]}
					showSublabel={showSublabel}
					expandByDefault={expandByDefault}
				/>
			))}
		</PageSectionLayout>
  )
}

export default Experience
