import { client, queries } from "@/libs/sanity";

import { Kudos } from "@/schemas/types";
import { ProjectKudosList } from "@/components";

export default async function ProjectKudos() {
  const kudos = await client.fetch<Kudos[]>(queries.kudos);

  return (
    <div className="project-kudos">
      <h3 className="project-kudos__title">Project Kudos</h3>
      <ProjectKudosList kudos={kudos} />
    </div>
  );
}
