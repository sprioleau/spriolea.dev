/* eslint-disable import/no-unresolved */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import PortableTextBlock from "../PortableTextBlock";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import composeClasses from "../../utils/composeClasses";

function ProjectKudos({ kudos = [], delay = 0 }) {
  const [isGrabbed, setIsGrabbed] = React.useState(false);
  if (kudos.length === 0) return null;

  const handleGrab = () => {
    setIsGrabbed(true);
  };

  const handleRelease = () => {
    setIsGrabbed(false);
  };

  const kudoClasses = composeClasses({
    "project-kudos__kudo": "",
    grabbed: isGrabbed,
  });

  return (
    <div className="project-kudos">
      <h3 className="project-kudos__title">Project Kudos</h3>
      <Swiper
        spaceBetween={48}
        slidesPerView={1}
        loop
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
            <article className={kudoClasses} onMouseEnter={handleGrab} onMouseLeave={handleRelease}>
              <p className="project-kudos__quote">
                <PortableTextBlock childrenContent={quote[0].children} markDefs={quote[0].markDefs} />
              </p>
              <div className="project-kudos__credit">
                <p className="project-kudos__credit-title">{credit.jobTitle},</p>
                <p className="project-kudos__credit-company">{credit.company}</p>
              </div>
              <p className="project-kudos__project-name"><span className="icon project-kudos__project-icon"><HiOutlinePresentationChartLine /></span>Project: {project.name}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectKudos;
