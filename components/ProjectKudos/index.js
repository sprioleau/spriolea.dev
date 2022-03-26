import React from "react";
// import Marquee from "react-fast-marquee";

const ProjectKudos = () => {
  // const kudos = [
  //   {
  //     name: "Susan M. Kelley",
  //     title: "Senior Software Engineer",
  //     company: "Dartmouth College",
  //     projectName: "My Account",
  //     description: "Account setup and password recovery flow",
  //     quote: "San'Quan took the lead on developing opportunities for reducing user friction in the account claiming and password reset process. This is really the heart of the project. San'Quan's work on the project has been exceptional.",
  //   },
  // ];

  return (
    <div className="project-kudos">
      <ul className="project-kudos__kudos">
        <h2>Kudos</h2>
        {/* <Marquee>
          {kudos.map((kudo, index) => (
            <li key={index} className="project-kudos__kudo">
              <div className="project-kudos__kudo-name">{kudo.name}</div>
              <div className="project-kudos__kudo-title">{kudo.title}</div>
              <div className="project-kudos__kudo-company">{kudo.company}</div>
              <div className="project-kudos__kudo-project-name">{kudo.projectName}</div>
              <div className="project-kudos__kudo-description">{kudo.description}</div>
              <div className="project-kudos__kudo-quote">{kudo.quote}</div>
            </li>
          ))}
        </Marquee> */}
      </ul>
    </div>
  );
};

export default ProjectKudos;
