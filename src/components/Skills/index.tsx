import { Skill } from "@/schemas/types";
import { SkillsList } from "@/components";

type Props = {
  skills: Skill[];
};

export default async function Skills({ skills }: Props) {
  // const skills = await client.fetch<Skill[]>(queries.skills);

  return <SkillsList skills={skills} />;
}
