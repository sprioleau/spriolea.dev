import { Experience, Kudos } from "@/schemas/types";
import { ExperienceSlider, ProjectKudos } from "@/components";

type Props = {
  experiences: Experience[];
  kudos: Kudos[];
};

export default async function Experiences({ experiences, kudos }: Props) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ExperienceSlider experiences={experiences} />
      {/* @ts-expect-error Async Server Component */}
      <ProjectKudos kudos={kudos} />
    </>
  );
}
