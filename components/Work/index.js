
import SelectedWork from "../SelectedWork"
import OtherWork from "../OtherWork";
import PageSectionLayout from "../PageSectionLayout";

const Work = () => {
  return (
		<PageSectionLayout sectionId="work" sectionTitle="Selected Work">
			<SelectedWork />
			<OtherWork />
		</PageSectionLayout>
  )
}

export default Work
