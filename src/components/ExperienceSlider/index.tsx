import { client, queries } from "@/libs/sanity";

import { type Experience } from "@/schemas/types";
import TabList from "../TabList";
import { organizeByKey } from "@/utils";

export default async function ExperienceSlider() {
  const experience = await client.fetch<Experience[]>(queries.experience);

  const experienceByJobType = organizeByKey(experience, "jobType.type");

  const type = "Web Development";

  return (
    <TabList
      key={type}
      id={type}
      label={type}
      experience={experienceByJobType[type]}
      showSublabel={false}
      expandByDefault={true}
      shouldHide={false}
    />
  );
}
