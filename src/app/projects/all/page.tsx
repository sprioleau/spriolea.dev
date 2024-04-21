import { BackButton, ProjectTable } from "@/components";
import { client, queries } from "@/libs/sanity";
import { Project } from "@/schemas/types";

import styles from "./styles.module.scss";

export default async function ProjectsArchive() {
  const projects = await client.fetch<Project[]>(queries.allProjects);

  return (
    <>
      <div className={styles.page}>
        <BackButton
          to="/"
          title="San'Quan Prioleau"
        />
        <h1>All Projects</h1>
        <ProjectTable projects={projects} />
      </div>
    </>
  );
}
