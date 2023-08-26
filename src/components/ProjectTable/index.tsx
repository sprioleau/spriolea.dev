"use client";

import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize";

import Image from "next/image";
import { Project } from "@/schemas/types";
import ProjectRow from "../ProjectRow";
import React from "react";
import { urlFor } from "../../libs/sanity/index";
import useMouse from "@react-hook/mouse-position";

const ProjectTable = ({ projects }: { projects: Project[] }) => {
  const [currentImage, setCurrentImage] = React.useState<Project["mainImage"] | undefined>();
  const { windowSize } = useWindowSize();
  const smallerThanSmall = windowSize ? windowSize <= bp.sm : false;
  const smallerThanMedium = windowSize ? windowSize <= bp.md : false;

  const imageWidth = 325;

  const imageDimensions = {
    width: imageWidth,
    height: Math.floor(imageWidth * 0.5625),
  };

  const projectTableRef = React.useRef(null);

  const { clientX, clientY } = useMouse(projectTableRef, {
    enterDelay: 50,
    leaveDelay: 200,
  });

  return (
    <div className="other-work">
      <h3 className="other-work__section-title">Other Work</h3>
      <table>
        <thead>
          <tr className="other-work__header-row">
            {!smallerThanSmall && <th>Year</th>}
            <th>Project</th>
            {!smallerThanMedium && <th>Built for</th>}
            {!smallerThanSmall && <th>Built with</th>}
            <th>Links</th>
          </tr>
        </thead>
        <tbody ref={projectTableRef}>
          {projects.map((project) => (
            <ProjectRow
              key={project._id}
              project={project}
              smallerThanSmall={smallerThanSmall}
              smallerThanMedium={smallerThanMedium}
              setCurrentImage={setCurrentImage}
            />
          ))}
        </tbody>
      </table>
      {currentImage && !smallerThanSmall ? (
        <div
          className="other-work__image"
          style={{
            top: clientY ? clientY + 20 : "unset",
            left: clientX ? clientX + 10 : "unset",
          }}
        >
          <Image
            src={urlFor(currentImage)
              .format("png")
              .quality(100)
              .width(imageDimensions.width)
              .height(imageDimensions.height)
              .url()}
            alt="project image"
            width={imageDimensions.width}
            height={imageDimensions.height}
            quality={100}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProjectTable;
