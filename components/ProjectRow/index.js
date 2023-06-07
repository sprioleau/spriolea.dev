import React from "react";
import { formatIsoDate } from "../../utils";
import sortAlphaByKey from "../../utils/sortAlphaByKey";
import icons from "../Icons";

function ProjectRow({
  project, smallerThanSmall, smallerThanMedium, setCurrentImage,
}) {
  const {
    yearBuilt, title, builtFor, builtWith, links, mainImage,
  } = project;

  const renderLinks = (linksList) => Object.entries(linksList).map(([key, url]) => {
      if (!url) return null;

      let icon = null;

      if (key.includes("gitHub")) icon = icons.gitHub;
      if (key.includes("vsCode")) icon = icons.code;
      if (key.includes("deployed")) icon = icons.externalLink;

      return (
        <li key={key} className="other-work__link">
          <a aria-label="link" href={url} rel="noreferrer" className="other-work__icon-link shadow-link" target="_blank">{icon}</a>
        </li>
      );
    });

  const handleMouseEnter = () => {
    if (smallerThanSmall) return;
    setCurrentImage(mainImage);
  };
  const handleMouseLeave = () => {
    setCurrentImage(null);
  };

  return (
    <tr
      className="other-work__row"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td className="other-work__year">{formatIsoDate(yearBuilt, "YYYY")}</td>
      <td>{title}</td>
      {!smallerThanMedium && <td>{builtFor ? builtFor.name : <span>&mdash;</span>}</td>}
      {!smallerThanSmall && <td>{builtWith.sort((a, b) => sortAlphaByKey(a, b, "name")).map(({ name }) => name).join(", ")}</td>}
      <td>
        <ul className="other-work__links">
          {renderLinks(links)}
        </ul>
      </td>
    </tr>
  );
}

export default ProjectRow;
