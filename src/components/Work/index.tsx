import { client, queries } from "@/libs/sanity";

import { Project } from "@/schemas/types";
import ProjectTable from "../ProjectTable";
import SelectedWork from "../SelectedWork";

export default async function Work() {
  const projects = await client.fetch<Project[]>(queries.projects);

  const allProjects = projects.reduce(
    (result, project) => {
      if (project.isFeatured) {
        result.isFeatured.push(project);
      } else {
        result.notFeatured.push(project);
      }
      return result;
    },
    {
      isFeatured: [] as Project[],
      notFeatured: [] as Project[],
    }
  );

  return (
    <>
      <SelectedWork projects={allProjects.isFeatured} />
      <ProjectTable projects={allProjects.notFeatured} />
    </>
  );
}
