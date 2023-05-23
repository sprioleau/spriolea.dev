import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  PageSectionLayout,
  Skills,
  Work,
} from "@/components";

import { DefaultMetaTags } from "@/meta";

type PageSection = {
  id: string;
  title: string;
  component: () => Promise<JSX.Element>;
};

const pageSections: PageSection[] = [
  {
    id: "about",
    title: "My Story",
    component: About,
  },
  {
    id: "experience",
    title: "Experience",
    component: Experience,
  },
  {
    id: "work",
    title: "Selected Work",
    component: Work,
  },
  {
    id: "skills",
    title: "Relevant Skills",
    component: Skills,
  },
  {
    id: "contact",
    title: "Get in Touch",
    component: Contact,
  },
];

export default async function Home() {
  return (
    <>
      <DefaultMetaTags />
      {/* @ts-expect-error Async Server Component */}
      <Hero />
      {pageSections.map(({ id, title, component: Component }) => (
        <PageSectionLayout
          key={id}
          sectionId={id}
          sectionTitle={title}
        >
          {/* @ts-expect-error Async Server Component */}
          <Component />
        </PageSectionLayout>
      ))}
      {/* @ts-expect-error Async Server Component */}
      <Footer />
    </>
  );
}
