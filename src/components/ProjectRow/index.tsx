import { urlFor } from "@/libs/sanity";
import type { LinksObject, Project } from "@/schemas/types";
import Image from "next/image";
import React from "react";
import { formatIsoDate } from "../../utils";
import sortAlphaByKey from "../../utils/sortAlphaByKey";
import icons from "../Icons";

type Props = {
  project: Project;
  smallerThanSmall: boolean;
  smallerThanMedium: boolean;
  setCurrentImage: React.Dispatch<React.SetStateAction<Project["mainImage"] | undefined>>;
};

const iconsMap: Record<keyof LinksObject, React.ReactNode> = {
  gitHubUrl: icons.gitHub,
  vsCodeUrl: icons.code,
  figmaUrl: icons.figma,
  deployedUrl: icons.externalLink,
};

export default function ProjectRow({ project, smallerThanSmall, smallerThanMedium, setCurrentImage }: Props) {
  const { yearBuilt, title, builtFor, builtWith, links, mainImage } = project;

  const imageWidth = 325;

  const imageDimensions = {
    width: imageWidth,
    height: Math.floor(imageWidth * 0.5625),
  };

  const handleMouseEnter = () => {
    if (smallerThanSmall) return;
    setCurrentImage(mainImage);
  };

  const handleMouseLeave = () => {
    setCurrentImage(undefined);
  };

  return (
    <tr
      className="other-work__row"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!smallerThanSmall && <td className="other-work__year">{formatIsoDate(yearBuilt, "YYYY")}</td>}
      <td>{title}</td>
      {!smallerThanMedium && <td>{builtFor ? builtFor.name : <span>&mdash;</span>}</td>}
      {!smallerThanSmall && (
        <td>
          {builtWith
            .sort((a, b) => sortAlphaByKey(a, b, "name"))
            .map(({ name }) => name)
            .join(", ")}
        </td>
      )}
      <td
        style={{
          display: "none",
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <Image
          src={urlFor(mainImage)
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
      </td>
      <td>
        <ul className="other-work__links">
          {Object.keys(iconsMap).map((key) => {
            const url = links?.[key as keyof LinksObject];

            return (
              <li
                key={key}
                className="other-work__link"
                data-key={key}
              >
                {url && (
                  <a
                    aria-label="link"
                    href={url}
                    rel="noreferrer"
                    className="other-work__icon-link shadow-link"
                    target="_blank"
                  >
                    {iconsMap[key as keyof LinksObject]}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </td>
    </tr>
  );
}
