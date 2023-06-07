import SelectedWork from "../SelectedWork";
import ProjectTable from "../ProjectTable";
import PageSectionLayout from "../PageSectionLayout";

function Work({ projects }) {
  const allProjects = projects.reduce((result, project) => {
    if (project.isFeatured) {
      result.isFeatured.push(project);
    } else {
      result.notFeatured.push(project);
    }
    return result;
  }, {
    isFeatured: [],
    notFeatured: [],
  });

  return (
    <PageSectionLayout sectionId="work" sectionTitle="Selected Work">
      <SelectedWork projects={allProjects.isFeatured} />
      <ProjectTable projects={allProjects.notFeatured} />
    </PageSectionLayout>
  );
}

export default Work;
