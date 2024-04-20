import { About, Contact, Experience, Footer, Hero, PageSectionLayout, Skills, Spotlight, Work } from "@/components";
import ToastContainer from "@/components/ToastContainer";

import styles from "./page.module.scss";

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
      <div className={styles["page-background"]} />
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
