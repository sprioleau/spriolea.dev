import { Experience, PageSectionLayout } from "@/components";

export default async function ExperiencePage() {
  return (
    <PageSectionLayout
      sectionId="experience"
      sectionTitle="Experience"
    >
      {/* @ts-expect-error Async Server Component */}
      <Experience />
    </PageSectionLayout>
  );
}
