import TabList from "../TabList";
import PageSectionLayout from "../PageSectionLayout";
import { selectData } from "../../store/selectors";
import useStore from "../../store";
import { organizeByKey } from "../../utils";

const Experience = () => {
	const data = useStore(selectData);

	if (!data) return null;

	const experienceByType = organizeByKey(data.experience, "jobType.type")

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
