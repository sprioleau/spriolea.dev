import React from "react";
import Marquee from "react-fast-marquee";

const ProjectKudos = ({ kudos = [], delay = 0 }) => {
  if (kudos.length === 0) return null;
  // const getInitials = (name) => {
  //   return name.split(" ").map((n) => n[0]).join(".");
  // };

  return (
    <div className="project-kudos">
      <Marquee
        gradientColor={[22, 3, 44]}
        gradientWith="calc(10% + var(--section-x-padding))"
        pauseOnClick
        speed={20}
        delay={delay}
        className="kudos__marquee"
      >
        {kudos.map((kudo, index) => (
          <div key={index}
            className="project-kudos__kudo"
            style={{
              "--rotation": `${((index % 2) - 0.35).toFixed(2)}deg`,
              flex: "0 1 30rem",
            }}
          >
            <p className="project-kudos__description">{kudo.description}</p>
            <p className="project-kudos__quote">{kudo.quote}</p>
            <span className="project-kudos__credit">{kudo.credit.title}, {kudo.credit.company}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ProjectKudos;
