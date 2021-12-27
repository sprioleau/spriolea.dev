/* eslint-disable react/no-danger */
import React from "react"
import { motion as m } from "framer-motion"
import { formatJobDates } from "../../utils";
import useStore from "../../store";
import { selectData } from "../../store/selectors";
import TabLabel from "./components/TabLabel";

const TabList = ({ tabData }) => {
	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
	const [indicatorHeight, setIndicatorHeight] = React.useState(0);
	const data = useStore(selectData);
	
	React.useEffect(() => {
		const activeTab = document.querySelector(".tab-list__label.active");
		
		if (activeTab) {
			const currentTabHeight = document.querySelector(".tab-list__label.active").clientHeight;
			setIndicatorHeight(currentTabHeight);
		} else {
			setIndicatorHeight(69);
		}
	}, [currentTabIndex])
	// }, [currentTab])
	
  const handleSelect = (index) => setCurrentTabIndex(index);
	
	const handleUpdateCurrentTab = React.useCallback((index) => handleSelect(index), []);
	
	if (!data) return null;
  
	const variants = {
		initial: {
			opacity: 0,
			translateY: 20,
		},
		animate: {
			opacity: 1,
			translateY: 0,
		},
	}
	
	const { jobTitle, fromDate, toDate, currentlyInRole, employer } = data.experience[currentTabIndex];

	const formattedDates = formatJobDates(fromDate, toDate, currentlyInRole);

  return (
    <div className="tab-list">
      <nav className="tab-list__tabs">
				<ul className="tab-list__labels">
					{data.experience.map((labelData, index) => (
						<TabLabel 
							key={labelData._id}
							labelData={labelData}
							index={index}
							currentTabIndex={currentTabIndex}
							handleUpdateCurrentTab={handleUpdateCurrentTab}
						/>
       	 	))}
        </ul>
				<div className="tab-list__tabs-indicator" style={{
					transform: `translateY(${indicatorHeight * (currentTabIndex)}px)`,
					height: indicatorHeight
				}} />
      </nav>
				<div className="tab-list__details">
					<header className="tab-list__header">
						<h4>
							<span className="tab-list__role">{jobTitle}</span> <span className="tab-list__employer">@ {employer.name}</span>
						</h4>
						<p className="tab-list__dates">{formattedDates}</p>
					</header>
						<m.ul
							className="tab-list__work-list"
							initial="initial"
							animate="animate"							
						>
							{data.experience[currentTabIndex].workHighlights.map(({ _key, children }, index) => (
								<m.li
									key={_key}
									className="tab-list__work-list-item"
									variants={variants}
									transition={{ delay: index * 0.15, duration: 0.3 }}
								>
									<p>
										{children.map(({ _key: childKey, text, marks }) => (
											<React.Fragment key={childKey}>
												{marks.includes("em") ? (
													<em>{text}</em>
												) : (
													<span>{text}</span>
												)}
											</React.Fragment>
										))}
									</p>
								</m.li>
							))}
						</m.ul>
				</div>
    </div>
  )
}

export default TabList
