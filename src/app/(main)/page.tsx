import {
  About,
  Contact,
  Experiences,
  Hero,
  PageSectionLayout,
  Skills,
  Work,
} from "@/components";
import type {
  AboutData,
  ContactData,
  Experience,
  HeroData,
  Kudos,
  Project,
  Skill,
} from "@/schemas/types";
import { client, queries } from "@/libs/sanity";

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
  const [
    heroContent,
    aboutContent,
    experiences,
    kudos,
    projects,
    skills,
    contactContent,
  ] = await Promise.all([
    client.fetch<HeroData[]>(queries.hero),
    client.fetch<AboutData[]>(queries.about),
    client.fetch<Experience[]>(queries.experience),
    client.fetch<Kudos[]>(queries.kudos),
    client.fetch<Project[]>(queries.projects),
    client.fetch<Skill[]>(queries.skills),
    client.fetch<ContactData[]>(queries.contact),
  ]);

  return (
    <>
      <DefaultMetaTags />
      {/* @ts-expect-error Async Server Component */}
      <Hero heroContent={heroContent} />
      <PageSectionLayout
        sectionId="about"
        sectionTitle="My Story"
      >
        {/* @ts-expect-error Async Server Component */}
        <About aboutContent={aboutContent} />
      </PageSectionLayout>
      <PageSectionLayout
        sectionId="experience"
        sectionTitle="Experience"
      >
        {/* @ts-expect-error Async Server Component */}
        <Experiences
          experiences={experiences}
          kudos={kudos}
        />
      </PageSectionLayout>
      <PageSectionLayout
        sectionId="work"
        sectionTitle="Selected Work"
      >
        {/* @ts-expect-error Async Server Component */}
        <Work projects={projects} />
      </PageSectionLayout>
      <PageSectionLayout
        sectionId="skills"
        sectionTitle="Relevant Skills"
      >
        {/* @ts-expect-error Async Server Component */}
        <Skills skills={skills} />
      </PageSectionLayout>
      <PageSectionLayout
        sectionId="contact"
        sectionTitle="Get In Touch"
      >
        {/* @ts-expect-error Async Server Component */}
        <Contact contactContent={contactContent} />
      </PageSectionLayout>
    </>
  );
}
