import { BackButton, Footer, ProjectTable } from "@/components";
import { client, queries } from "@/libs/sanity";

import { DefaultMetaTags } from "@/meta";
import { Project } from "@/schemas/types";

import styles from "./styles.module.scss";

export default async function ProjectsArchive() {
  const projects = await client.fetch<Project[]>(queries.allProjects);

  return (
    <>
      <DefaultMetaTags />
      <div className={styles.page}>
        <BackButton
          to="/"
          title="San'Quan Prioleau"
        />
        <h1>All Projects</h1>
        <ProjectTable projects={projects} />
      </div>
      <Footer />
    </>
  );
}
