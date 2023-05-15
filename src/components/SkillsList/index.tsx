"use client";

import { composeClasses, sortAlphaByKey } from "@/utils";
import useWindowSize, { breakpoints as bp } from "@/hooks/useWindowSize";

import { FadeInAndUp } from "../AnimationLibrary";
import React from "react";
import { Skill } from "@/schemas/types";
import icons from "../Icons";

type Props = {
  skills: Skill[];
};

export default function SkillsList({ skills }: Props) {
  const { windowSize } = useWindowSize();

  const skillsListObject = skills
    .map((skill) => ({ ...skill, category: skill.category[0] }))
    .sort((a, b) => (b.category > a.category ? 1 : -1))
    .reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [skill];
      } else {
        acc[skill.category].push(skill);
      }
      return acc;
    }, {} as Record<string, (Omit<Skill, "category"> & { category: string })[]>);

  const skillsListItemClasses = composeClasses({
    "skills__list-item": true,
    "no-hover": windowSize ? windowSize <= bp.sm : false,
  });

  return (
    <div className="skills__main-content">
      {Object.entries(skillsListObject).map(([category, skillsData]) => (
        <React.Fragment key={category}>
          <h3 className="skills__category-name">{category}</h3>
          <ul className="skills__list">
            {skillsData
              .sort((a, b) => sortAlphaByKey(a, b, "techName"))
              .map(({ techName, fullName, iconKey }) => (
                <FadeInAndUp
                  key={techName}
                  tag="li"
                  className={skillsListItemClasses}
                  dataTooltip={fullName}
                  useDefaultStyles={false}
                >
                  {iconKey && (
                    <div className="skills__icon">{icons[iconKey]}</div>
                  )}
                  <p className="skills__label">{techName}</p>
                </FadeInAndUp>
              ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
}
