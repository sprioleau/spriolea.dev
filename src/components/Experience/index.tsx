import { ExperienceSlider, ProjectKudos } from "@/components";

export default async function Experience() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ExperienceSlider />
      {/* @ts-expect-error Async Server Component */}
      <ProjectKudos />
    </>
  );
}
