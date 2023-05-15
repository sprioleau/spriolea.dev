/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import React, { useEffect, useRef } from "react";
import {
  composeClasses,
  formatJobDates,
  handleKeyDown,
} from "../../../../utils";

import { Experience } from "@/schemas/types";

type Props = {
  labelData: Experience;
  index: number;
  currentTabIndex: number;
  showSublabel: boolean;
  subLabelAsDates?: boolean;

  // TODO: Change to React Dispatch with Generic
  handleUpdateCurrentTab: (tabIndex: number) => void;
  setIndicatorHeight: React.Dispatch<React.SetStateAction<number>>;
};

export default function TabLabel({
  labelData: { _id, label, fromDate, toDate, currentlyInRole },
  index,
  currentTabIndex,
  showSublabel = true,
  subLabelAsDates = true,
  handleUpdateCurrentTab,
  setIndicatorHeight,
}: Props) {
  const tabLabelRef = useRef<HTMLLIElement | null>(null);

  const getLabelContents = () => {
    if (!showSublabel) return null;
    const formattedDates = formatJobDates(fromDate, toDate, currentlyInRole);
    const currentText = currentlyInRole ? "Current" : null;
    const labelContents = subLabelAsDates ? formattedDates : currentText;
    return labelContents;
  };

  useEffect(() => {
    const hasWindowObject = typeof window !== "undefined";

    const handleUpdate = () => {
      if (tabLabelRef && currentTabIndex === index) {
        if (!tabLabelRef.current) return;
        setIndicatorHeight(tabLabelRef.current.clientHeight);
      }
    };

    handleUpdate();

    if (hasWindowObject) window.addEventListener("resize", handleUpdate);

    return () => {
      if (hasWindowObject) window.addEventListener("resize", handleUpdate);
    };
  }, [index, setIndicatorHeight, currentTabIndex]);

  const tabListLabelClasses = composeClasses({
    "tab-list__label": true,
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
      <span className="tab-list__sublabel">{getLabelContents()}</span>
    </li>
  );
}
