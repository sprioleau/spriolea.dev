import Hero from "../Hero";
import About from "../About";
import Experience from "../Experience";
import Work from "../Work";
import Skills from "../Skills";
import Contact from "../Contact";
import ProjectKudos from "../ProjectKudos";
import kudos from "../../constants/kudos";

const Main = ({ data }) => {
  if (!data) return null;

  const {
    hero,
    about,
    experience,
    skills,
    projects,
    contact,
  } = data;

  const middleIndex = Math.floor(kudos.length / 2);
  const kudos1 = kudos.slice(0, middleIndex);
  const kudos2 = kudos.slice(middleIndex);

  return (
    <main className="main">
      <Hero content={hero} />
      <About content={about} />
      <Experience experience={experience} />
      <ProjectKudos kudos={kudos1} />
      <ProjectKudos kudos={kudos2} delay={5} />
      <Work projects={projects} />
      <Skills skills={skills} />
      <Contact content={contact} />
    </main>
  );
};

export default Main;
