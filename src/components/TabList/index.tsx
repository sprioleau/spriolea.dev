"use client";

import { composeClasses, formatJobDates } from "../../utils";
import { useCallback, useState } from "react";
import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize";

import { Experience } from "@/schemas/types";
import PortableTextBlock from "../PortableTextBlock";
import TabLabel from "./components/TabLabel";
import icons from "../Icons";

type Props = {
  experience: Experience[];
  showSublabel: boolean;
  expandByDefault: boolean;
  shouldHide: boolean;
};

const TabList = ({ experience, showSublabel, expandByDefault, shouldHide }: Props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);
  const [expanded, setExpanded] = useState(expandByDefault);

  const { windowSize } = useWindowSize();

  const isSmallScreen = windowSize && windowSize <= bp.md;

  const handleExpand = () => {
    if (!expandByDefault) setExpanded(!expanded);
  };

  const handleSelect = (index: number) => setCurrentTabIndex(index);

  const handleUpdateCurrentTab = useCallback((index: number) => handleSelect(index), []);

  if (!experience) return null;

  const { jobTitle, fromDate, toDate, currentlyInRole, employer } = experience[currentTabIndex];

  const formattedDates = formatJobDates(fromDate, toDate, currentlyInRole);

  const renderEmployerName = (employerObject: Experience["employer"]) => {
    let employerName = null;

    if (employer.webAddress) {
      employerName = (
        <span className="tab-list__employer-link-wrapper">
          <a
            href={employerObject.webAddress}
            target="_blank"
            rel="noreferrer"
            className="tab-list__employer-link shadow-link"
          >
            <span>{employer.name}</span>
            <span className="icon p0">{icons.externalLink}</span>
          </a>
        </span>
      );
    } else {
      employerName = employerObject.name;
    }

    return employerName;
  };

  const tabListClasses = composeClasses({
    "tab-list": true,
    expandable: expandByDefault,
    expanded,
  });

  if (shouldHide) return null;

  return (
    <div className={tabListClasses}>
      <header
        className="tab-list__title-wrapper"
        onClick={handleExpand}
        tabIndex={0}
        role="button"
      >
        {!expandByDefault ? (
          <span className="tab-list__expand-collapse">
            {!expanded ? "Expand" : "Collapse"} <span className="tab-list__icon">{icons.arrowDown}</span>
          </span>
        ) : null}
      </header>
      <div className="tab-list__main-content">
        <nav
          className="tab-list__tabs"
          aria-label="experiences"
        >
          <ul className="tab-list__labels">
            {experience.map((labelData, index) => (
              <TabLabel
                key={labelData._id}
                labelData={labelData}
                index={index}
                currentTabIndex={currentTabIndex}
                handleUpdateCurrentTab={handleUpdateCurrentTab}
                showSublabel={showSublabel}
                setIndicatorHeight={setIndicatorHeight}
              />
            ))}
          </ul>
          <div
            className="tab-list__tabs-indicator"
            style={{
              transform: isSmallScreen ? "none" : `translateY(${indicatorHeight * currentTabIndex}px)`,
              height: indicatorHeight,
            }}
          />
        </nav>
        <div className="tab-list__details">
          <header className="tab-list__header">
            <h4 className="tab-list__header-title">
              <span className="tab-list__role">{jobTitle}</span>{" "}
              <span className="tab-list__employer">@ {renderEmployerName(employer)}</span>
            </h4>
            <p className="tab-list__dates">{formattedDates}</p>
          </header>
          <ul className="tab-list__work-list">
            {experience[currentTabIndex].workHighlights.map(({ _key, children, markDefs }) => (
              <li
                key={_key}
                className="tab-list__work-list-item"
              >
                <p key={_key}>
                  <PortableTextBlock
                    childrenContent={children}
                    markDefs={markDefs}
                  />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabList;
