import { client, queries } from "@/libs/sanity";

import { type Experience } from "@/schemas/types";
import TabList from "../TabList";

export default async function ExperienceSlider() {
  const experience = await client.fetch<Experience[]>(queries.experience);

  return (
    <TabList
      experience={experience}
      showSublabel
      expandByDefault={true}
      shouldHide={false}
    />
  );
}
