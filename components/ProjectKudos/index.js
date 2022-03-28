import React from "react";
import Marquee from "react-fast-marquee";
import PortableTextBlock from "../PortableTextBlock";

const ProjectKudos = ({ kudos = [], delay = 0 }) => {
  if (kudos.length === 0) return null;

  return (
    <div className="project-kudos">
      <Marquee
        gradientColor={[22, 3, 44]}
        gradientWith="calc(10% + var(--section-x-padding))"
        pauseOnClick
        speed={30}
        delay={delay}
        className="project-kudos__marquee-container"
      >
        {kudos.map(({
          _id, quote, credit, project,
        }) => (
          <article key={_id} className="project-kudos__kudo">
            <p className="project-kudos__quote">
              <PortableTextBlock childrenContent={quote[0].children} markDefs={quote[0].markDefs} />
            </p>
            <div className="project-kudos__credit">
              <p className="project-kudos__credit-title">{credit.jobTitle}</p>
              <p className="project-kudos__credit-company">{credit.company}</p>
            </div>
            <p className="project-kudos__project-name">Project: {project.name}</p>
          </article>
        ))}
      </Marquee>
    </div>
  );
};

export default ProjectKudos;
