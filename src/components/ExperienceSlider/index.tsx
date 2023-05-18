import { type Experience } from "@/schemas/types";
import TabList from "../TabList";
import { organizeByKey } from "@/utils";

type Props = {
  experiences: Experience[];
};

export default async function ExperienceSlider({ experiences }: Props) {
  // const experience = await client.fetch<Experience[]>(queries.experience);

  const experiencesByJobType = organizeByKey(experiences, "jobType.type");

  const type = "Web Development";

  return (
    <TabList
      key={type}
      id={type}
      label={type}
      experience={experiencesByJobType[type]}
      showSublabel={false}
      expandByDefault={true}
      shouldHide={false}
    />
  );
}
