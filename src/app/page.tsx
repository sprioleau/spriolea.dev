import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  PageSectionLayout,
  Skills,
  Spotlight,
  Work,
} from "@/components";

import { DefaultMetaTags } from "@/meta";
import ToastContainer from "@/components/ToastContainer";

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
      <ToastContainer />
      <Hero />
      {pageSections.map(({ id, title, component: Component }) => (
        <PageSectionLayout
          key={id}
          sectionId={id}
          sectionTitle={title}
        >
          <Component />
        </PageSectionLayout>
      ))}
      <Spotlight />
      <Footer />
    </>
  );
}
