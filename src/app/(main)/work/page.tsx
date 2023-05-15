import { PageSectionLayout, Work } from "@/components";

export default async function WorkPage() {
  return (
    <PageSectionLayout
      sectionId="work"
      sectionTitle="Selected Work"
    >
      {/* @ts-expect-error Async Server Component */}
      <Work />
    </PageSectionLayout>
  );
}
