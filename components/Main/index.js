import Hero from "../Hero";
import About from "../About";
import Experience from "../Experience";
import Work from "../Work";
import Skills from "../Skills";
import Contact from "../Contact";

function Main({ data }) {
  if (!data) return null;

  const {
    hero,
    about,
    experience,
    jobTypes,
    kudos,
    skills,
    projects,
    contact,
  } = data;

  return (
    <main className="main">
      <Hero content={hero} />
      <About content={about} />
      <Experience experience={experience} kudos={kudos} jobTypes={jobTypes} />
      <Work projects={projects} />
      <Skills skills={skills} />
      <Contact content={contact} />
    </main>
  );
}

export default Main;
