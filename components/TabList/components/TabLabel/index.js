/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from "react"
import { formatJobDates, handleKeyDown } from "../../../../utils"

const TabLabel = ({ labelData :{ _id, label, fromDate, toDate, currentlyInRole }, index, currentTabIndex, handleUpdateCurrentTab }) => {
  return (
    <li
      key={_id}
      className={["tab-list__label", currentTabIndex === index ? "active" : ""].join(" ").trimEnd()}
      onClick={() => handleUpdateCurrentTab(index)}
      onKeyDown={() => handleKeyDown(handleUpdateCurrentTab(index))}
      role="button"
      tabIndex={0}
    >
      <h4 className="tab-list__label-title">{label}</h4>
      <span className="tab-list__label-dates">{formatJobDates(fromDate, toDate, currentlyInRole)}</span>
    </li>
  )
}

export default TabLabel
