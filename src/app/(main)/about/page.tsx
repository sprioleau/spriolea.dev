import { About, Contact, PageSectionLayout } from "@/components";

export default async function AboutPage() {
  return (
    <>
      <PageSectionLayout
        sectionId="about"
        sectionTitle="My Story"
      >
        {/* @ts-expect-error Async Server Component */}
        <About />
      </PageSectionLayout>
      <PageSectionLayout
        sectionId="contact"
        sectionTitle="Get In Touch"
      >
        {/* @ts-expect-error Async Server Component */}
        <Contact />
      </PageSectionLayout>
    </>
  );
}
