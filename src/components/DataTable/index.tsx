"use client";

import React, { useState } from "react";
import { Stagger, StaggerElement } from "../AnimationLibrary";
import { composeClasses, handleKeyDown } from "../../utils";

import icons from "../Icons";

type Props = {
  data: {
    sectionTitle: string;
    employers: {
      name: string;
      roles: {
        id: string;
        works: string[];
        dates: string;
        title: string;
        location: string;
      }[];
      employerLogo: string;
    }[];
  };
};

const DataTable = ({ data: { sectionTitle, employers } }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(!expanded);

  const dataTableClasses = composeClasses({
    "data-table": true,
    expanded,
  });

  return (
    <div className={dataTableClasses}>
      <header className="data-table__header">
        <div
          className="data-table__section-title"
          role="button"
          tabIndex={0}
          onClick={handleExpand}
          onKeyDown={(e) => handleKeyDown(e, handleExpand)}
        >
          <h3 className="a section-subheading">{sectionTitle}</h3>
          <span className="data-table__expand-collapse icon">
            {icons.arrowDown}
          </span>
        </div>
      </header>
      {expanded &&
        employers.map(({ name, roles, employerLogo }) => (
          <section
            className="data-table__employer-wrapper"
            key={name}
          >
            <div className="data-table__employer-name">
              <span className="data-table__employer-logo">{employerLogo}</span>
              <h4>{name}</h4>
            </div>
            <Stagger
              parent={
                { tag: "ul", className: "data-table__list" } as StaggerElement
              }
              child={
                {
                  tag: "li",
                  className: "data-table__list-item",
                } as StaggerElement
              }
              staggerBy={0.15}
              staggerDelay={0}
            >
              {roles.map(({ id, works, dates, title, location }) => (
                <React.Fragment key={id}>
                  <header className="data-table__list-header">
                    <h4 className="data-table__title">
                      {title},{" "}
                      <span className="data-table__location">{location}</span>
                    </h4>
                    <p className="data-table__dates">{dates}</p>
                  </header>
                  <ul className="data-table__work-list">
                    {works.map((work) => (
                      <li
                        key={work}
                        className="data-table__work"
                      >
                        <p>{work}</p>
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
            </Stagger>
          </section>
        ))}
    </div>
  );
};

export default DataTable;
