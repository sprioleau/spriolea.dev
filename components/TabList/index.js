/* eslint-disable react/no-danger */
import React from "react"
import { motion as m } from "framer-motion"
import { handleKeyDown } from "../../utils";

const TabList = ({ tabData }) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [indicatorHeight, setIndicatorHeight] = React.useState(0);
	const labelsRef = React.useRef();
	
	React.useEffect(() => {
		if (labelsRef) {
			setIndicatorHeight(labelsRef.current.clientHeight / tabData.length)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
  
  const handleSelect = (e) => {
    const selectedTabId = parseInt(e.currentTarget.dataset.tabId, 10);
    setCurrentTab(selectedTabId);
	}

	const parseMarkup = (string, openingTag) => {
		const closingTag = openingTag.split("").reverse().join("");
		return { __html: string.replaceAll(openingTag, "<span class=\"highlight\">").replaceAll(closingTag, "</span>") }
	}

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

	// TODO: Memoize
	// TODO: Get IDs with array index and reduce method
	const { employer, title, dates, works } = tabData[currentTab];	

  return (
    <div className="tab-list">
      <nav className="tab-list__tabs">
				<ul ref={labelsRef} className="tab-list__labels">
					{/* eslint-disable-next-line no-shadow */}
          {tabData.map(({ title }, index) => (
            <li
							key={index}
							className={["tab-list__label", currentTab === index ? "active" : ""].join(" ").trimEnd()}
							data-tab-id={index}
							onClick={handleSelect}
							onKeyDown={(e) => handleKeyDown(e, handleSelect)}
							// eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
							role="button"
							tabIndex={0}
						>
							<h4 className="tab-list__label-title">{title}</h4>
							{/* <span className="tab-list__label-dates">{dates}</span> */}
						</li>
       	 	))}
        </ul>
				<div className="tab-list__tabs-indicator" style={{
					transform: `translateY(${indicatorHeight * (currentTab)}px)`,
					height: indicatorHeight
				}} />
      </nav>
				<div className="tab-list__details">
					<header className="tab-list__header">
						<h4>
							<span className="tab-list__role">{title}</span> <span className="tab-list__employer">@ {employer}</span>
						</h4>
						<p className="tab-list__dates">{dates}</p>
					</header>
						<m.ul
							className="tab-list__work-list"
							initial="initial"
							animate="animate"							
						>
							{works.map((work, index) => (
								<m.li
									key={work}
									className="tab-list__work-list-item"
									variants={variants}
									transition={{ delay: index * 0.15, duration: 0.3 }}
								>
									<p dangerouslySetInnerHTML={parseMarkup(work, "_|")} />
								</m.li>
							))}
						</m.ul>
				</div>
    </div>
  )
}

export default TabList
