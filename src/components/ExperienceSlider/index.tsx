import { client, queries } from "@/libs/sanity";

import { type Experience } from "@/schemas/types";
import TabList from "../TabList";

export default async function ExperienceSlider() {
  const experience = await client.fetch<Experience[]>(queries.experience);

  const type = "Web Development";

  return (
    <TabList
      key={type}
      experience={experience}
      showSublabel={false}
      expandByDefault={true}
      shouldHide={false}
    />
  );
}
