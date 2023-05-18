import { Kudos } from "@/schemas/types";
import { ProjectKudosList } from "@/components";

type Props = {
  kudos: Kudos[];
};

export default async function ProjectKudos({ kudos }: Props) {
  // const kudos = await client.fetch<Kudos[]>(queries.kudos);

  return (
    <div className="project-kudos">
      <h3 className="project-kudos__title">Project Kudos</h3>
      <ProjectKudosList kudos={kudos} />
    </div>
  );
}
