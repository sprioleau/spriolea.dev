/* eslint-disable react/no-danger */
import React from "react"
import { FiArrowDown } from "react-icons/fi";
import { formatJobDates } from "../../utils";
import TabLabel from "./components/TabLabel";
import PortableTextBlock from "../PortableTextBlock";
import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize";
import { Stagger } from "../AnimationLibrary";

const TabList = ({ id, label, experience, showSublabel, expandByDefault }) => {
	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
	const [indicatorHeight, setIndicatorHeight] = React.useState(0);
	const [expanded, setExpanded] = React.useState(expandByDefault);

	const { windowSize } = useWindowSize();

	const isSmallScreen = windowSize <= bp.md;
	
	const handleExpand = () => {
		if (!expandByDefault) setExpanded(!expanded);
	};
	
	React.useEffect(() => {
		const activeTab = document.querySelector(`#${id} .tab-list__label.active`);
		
		if (activeTab) {
			const currentTabHeight = activeTab.clientHeight;
			setIndicatorHeight(currentTabHeight);
		}
	}, [id]);
	
  const handleSelect = (index) => setCurrentTabIndex(index);
	
	const handleUpdateCurrentTab = React.useCallback((index) => handleSelect(index), []);
	  
	const { jobTitle, fromDate, toDate, currentlyInRole, employer } = experience[currentTabIndex];

	const formattedDates = formatJobDates(fromDate, toDate, currentlyInRole);

	return (
		<div className={["tab-list", expanded ? "expanded" : "", expandByDefault ? "" : "expandable"].join(" ").trimEnd()}>
			<header className="tab-list__title-wrapper" onClick={handleExpand} tabIndex={0} role="button">
				<h3 className="tab-list__title">{label} Experience</h3>
				{!expandByDefault ? <span className="tab-list__expand-collapse icon"><FiArrowDown /></span> : null}
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
							/>
						))}
					</ul>
					<div className="tab-list__tabs-indicator" style={{
						transform: isSmallScreen ? "none" : `translateY(${indicatorHeight * (currentTabIndex)}px)`,
						height: indicatorHeight,
					}} />
				</nav>
					<div className="tab-list__details">
						<header className="tab-list__header">
							<h4>
								<span className="tab-list__role">{jobTitle}</span> <span className="tab-list__employer">@ {employer.name}</span>
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
							{experience[currentTabIndex].workHighlights.map(({ _key, children, markDefs }, index) => (
									<p key={_key} data-key={_key}> 
										<PortableTextBlock childrenContent={children} markDefs={markDefs} />
									</p>
							))}
						</Stagger>
					</div>
			</div>
		</div>
  )
}

export default TabList
