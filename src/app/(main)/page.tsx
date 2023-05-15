import {
  About,
  Contact,
  Experience,
  Hero,
  PageSectionLayout,
  Skills,
  Work,
} from "@/components";

import { DefaultMetaTags } from "@/meta";
import type { Metadata } from "next";

const title = "San'Quan Prioleau - Frontend Engineer";
const description = "Personal website of San'Quan Prioleau";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    description,
    title,
  },
};

export default async function Home() {
  return (
    <>
      <DefaultMetaTags />
      {/* @ts-expect-error Async Server Component */}
      <Hero />
      <PageSectionLayout
        sectionId="about"
        sectionTitle="My Story"
      >
        {/* @ts-expect-error Async Server Component */}
        <About />
      </PageSectionLayout>
      <PageSectionLayout
        sectionId="experience"
        sectionTitle="Experience"
      >
        {/* @ts-expect-error Async Server Component */}
        <Experience />
      </PageSectionLayout>
      <PageSectionLayout
        sectionId="work"
        sectionTitle="Selected Work"
      >
        {/* @ts-expect-error Async Server Component */}
        <Work />
      </PageSectionLayout>
      <PageSectionLayout
        sectionId="skills"
        sectionTitle="Relevant Skills"
      >
        {/* @ts-expect-error Async Server Component */}
        <Skills />
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
