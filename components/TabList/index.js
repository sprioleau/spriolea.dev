/* eslint-disable react/no-danger */
import React from "react";
import { composeClasses, formatJobDates } from "../../utils";
import TabLabel from "./components/TabLabel";
import PortableTextBlock from "../PortableTextBlock";
import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize";
import { Stagger } from "../AnimationLibrary";
import icons from "../Icons";
import ProjectKudos from "../ProjectKudos";

const TabList = ({
  id, label, experience, showSublabel, expandByDefault,
}) => {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const [indicatorHeight, setIndicatorHeight] = React.useState(0);
  const [expanded, setExpanded] = React.useState(expandByDefault);

  const { windowSize } = useWindowSize();

  const isSmallScreen = windowSize <= bp.md;

  const handleExpand = () => {
    if (!expandByDefault) setExpanded(!expanded);
  };

  const handleSelect = (index) => setCurrentTabIndex(index);

  const handleUpdateCurrentTab = React.useCallback((index) => handleSelect(index), []);

  const {
    jobTitle, fromDate, toDate, currentlyInRole, employer,
  } = experience[currentTabIndex];

  const formattedDates = formatJobDates(fromDate, toDate, currentlyInRole);

  const renderEmployerName = (employerObject) => {
    let employerName = null;

    if (employer.webAddress) {
      employerName = (
        <span className="tab-list__employer-link-wrapper">
          <a href={employerObject.webAddress} target="_blank" rel="noreferrer" className="tab-list__employer-link shadow-link">
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
    "tab-list": "",
    expandable: expandByDefault,
    expanded,
  });

  return (
    <div className={tabListClasses}>
      <header className="tab-list__title-wrapper" onClick={handleExpand} tabIndex={0} role="button">
        <h3 className="tab-list__title">{label} Experience</h3>
        {!expandByDefault ? <span className="tab-list__expand-collapse">{!expanded ? "Expand" : "Collapse"} <span className="tab-list__icon">{icons.arrowDown}</span></span> : null}
      </header>
      <div id={id} className="tab-list__main-content">
        <nav className="tab-list__tabs">
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
          <div className="tab-list__tabs-indicator"
            style={{
              transform: isSmallScreen ? "none" : `translateY(${indicatorHeight * (currentTabIndex)}px)`,
              height: indicatorHeight,
            }}
          />
        </nav>
        <div className="tab-list__details">
          <header className="tab-list__header">
            <h4 className="tab-list__header-title">
              <span className="tab-list__role">{jobTitle}</span> <span className="tab-list__employer">@ {renderEmployerName(employer)}</span>
            </h4>
            <p className="tab-list__dates">{formattedDates}</p>
          </header>
          <Stagger
            parent={{ tag: "ul", className: "tab-list__work-list" }}
            child={{ tag: "li", className: "tab-list__work-list-item" }}
            staggerBy={0.5}
            staggerDelay={1}
            delayWithIndex
          >
            {experience[currentTabIndex].workHighlights.map(({ _key, children, markDefs }) => (
              <p key={_key} data-key={_key}>
                <PortableTextBlock childrenContent={children} markDefs={markDefs} />
              </p>
            ))}
          </Stagger>
        </div>
      </div>
      <ProjectKudos />
    </div>
  );
};

export default TabList;
