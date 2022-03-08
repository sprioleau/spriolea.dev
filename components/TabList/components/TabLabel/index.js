/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from "react"
import { composeClasses, formatJobDates, handleKeyDown } from "../../../../utils"

const TabLabel = ({
  labelData: {
    _id,
    label,
    fromDate,
    toDate,
    currentlyInRole
  },
  index,
  currentTabIndex,
  showSublabel = true,
  subLabelAsDates = true,
  handleUpdateCurrentTab,
  setIndicatorHeight
}) => {
  const tabLabelRef = React.useRef(null);

  const getLabelContents = () => {
    if (!showSublabel) return null; 
    const formattedDates = formatJobDates(fromDate, toDate, currentlyInRole);
    const currentText = currentlyInRole ? "Current" : null;
    const labelContents = subLabelAsDates ? formattedDates : currentText;
    return labelContents;
  }

  React.useEffect(() => {
    const hasWindowObject = typeof window !== "undefined";
    
    const handleUpdate = () => {
      if (tabLabelRef && currentTabIndex === index) {
        setIndicatorHeight(tabLabelRef.current.clientHeight);
      }
    }

    handleUpdate();

    if (hasWindowObject) window.addEventListener("resize", handleUpdate);

    return () => {
      if (hasWindowObject) window.addEventListener("resize", handleUpdate);
    }
  }, [index, setIndicatorHeight, currentTabIndex]);

  const tabListLabelClasses = composeClasses({
    "tab-list__label": "",
    active: currentTabIndex === index,
  });

  return (
    <li
      key={_id}
      className={tabListLabelClasses}
      onClick={() => handleUpdateCurrentTab(index)}
      onKeyDown={(e) => handleKeyDown(e, () => handleUpdateCurrentTab(index))}
      role="button"
      tabIndex={0}
      ref={tabLabelRef}
    >
      <h4 className="tab-list__label-title">{label}</h4>
      <span className="tab-list__sublabel">
        {getLabelContents()}
      </span>
    </li>
  )
}

export default TabLabel
