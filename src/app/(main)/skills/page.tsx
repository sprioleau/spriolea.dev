import { PageSectionLayout, Skills } from "@/components";

export default async function WorkPage() {
  return (
    <PageSectionLayout
      sectionId="skills"
      sectionTitle="Relevant Skills"
    >
      {/* @ts-expect-error Async Server Component */}
      <Skills />
    </PageSectionLayout>
  );
}
