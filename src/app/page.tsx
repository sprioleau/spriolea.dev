import { About, Contact, Experience, Hero, PageSectionLayout, Skills, Work } from "@/components";

// prettier-ignore
const pageSections = [
  { id: "about"     , title: "My Story"       , component: About      },
  { id: "experience", title: "Experience"     , component: Experience },
  { id: "work"      , title: "Selected Work"  , component: Work       },
  { id: "skills"    , title: "Relevant Skills", component: Skills     },
  { id: "contact"   , title: "Get in Touch"   , component: Contact    },
];

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
