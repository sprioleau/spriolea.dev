import { client, queries } from "@/libs/sanity";

import { Skill } from "@/schemas/types";
import { SkillsList } from "@/components";

export default async function Skills() {
  const skills = await client.fetch<Skill[]>(queries.skills);

  return <SkillsList skills={skills} />;
}
