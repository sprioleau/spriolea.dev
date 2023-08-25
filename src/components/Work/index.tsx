import { client, queries } from "@/libs/sanity";

import { Project } from "@/schemas/types";
import SelectedWork from "../SelectedWork";

export default async function Work() {
  const featuredProjects = await client.fetch<Project[]>(
    queries.featuredProjects
  );

  return <SelectedWork projects={featuredProjects} />;
}
