
import SelectedWork from "../SelectedWork"
import OtherWork from "../OtherWork";
import PageSectionLayout from "../PageSectionLayout";

const Work = ({ projects }) => {
	const allProjects = projects.reduce((result, project) => {
		if (project.isFeatured) {
			result.isFeatured.push(project)
		} else {
			result.notFeatured.push(project)
		}
		return result;
	}, {
		isFeatured: [],
		notFeatured: []
	})
	
  return (
		<PageSectionLayout sectionId="work" sectionTitle="Selected Work">
			<SelectedWork projects={allProjects.isFeatured} />
			<OtherWork projects={allProjects.notFeatured} />
		</PageSectionLayout>
  )
}

export default Work
