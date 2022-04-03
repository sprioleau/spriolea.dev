import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PortableTextBlock from "../PortableTextBlock";

const ProjectKudos = ({ kudos = [], delay = 0 }) => {
  if (kudos.length === 0) return null;

  return (
    <div className="project-kudos">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        loop
        loopFillGroupWithBlank
        pagination={{
          clickable: true,
        }}
        navigation
        autoplay
        modules={[Pagination, Navigation]}
        className="project-kudos__swiper"
      >
        {kudos.map(({
          _id, quote, credit, project,
        }) => (
          <SwiperSlide key={_id}>
            <article className="project-kudos__kudo">
              <p className="project-kudos__quote">
                <PortableTextBlock childrenContent={quote[0].children} markDefs={quote[0].markDefs} />
              </p>
              <div className="project-kudos__credit">
                <p className="project-kudos__credit-title">{credit.jobTitle}</p>
                <p className="project-kudos__credit-company">{credit.company}</p>
              </div>
              <p className="project-kudos__project-name">Project: {project.name}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectKudos;
