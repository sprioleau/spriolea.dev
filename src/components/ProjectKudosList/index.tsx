"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Kudos } from "@/schemas/types";
import PortableTextBlock from "../PortableTextBlock";
import { composeClasses } from "@/utils";
import { useState } from "react";

type Props = {
  kudos: Kudos[];
};

const ProjectKudosList = ({ kudos }: Props) => {
  const [isGrabbed, setIsGrabbed] = useState(false);

  if (kudos.length === 0) return null;

  const handleGrab = () => {
    setIsGrabbed(true);
  };

  const handleRelease = () => {
    setIsGrabbed(false);
  };

  const kudoClasses = composeClasses({
    "project-kudos__kudo": true,
    grabbed: isGrabbed,
  });

  return (
    <>
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
        {kudos.map(({ _id, quote, credit, project }) => (
          <SwiperSlide key={_id}>
            <article
              className={kudoClasses}
              onMouseEnter={handleGrab}
              onMouseLeave={handleRelease}
            >
              <p className="project-kudos__quote">
                <PortableTextBlock
                  childrenContent={quote[0].children}
                  markDefs={quote[0].markDefs}
                />
              </p>
              <div className="project-kudos__credit">
                <p className="project-kudos__credit-title">
                  {credit.jobTitle},
                </p>
                <p className="project-kudos__credit-company">
                  {credit.company}
                </p>
              </div>
              <p className="project-kudos__project-name">
                <span className="icon project-kudos__project-icon">
                  project-icon 2{/* <HiOutlinePresentationChartLine /> */}
                </span>
                Project: {project.name}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectKudosList;
