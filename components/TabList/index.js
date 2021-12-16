/* eslint-disable react/no-danger */
/* eslint-disable quotes */
import React from "react"

const TabList = ({ tabData }) => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleSelect = (e) => {
    const selectedTabId = parseInt(e.currentTarget.dataset.tabId, 10);
    setCurrentTab(selectedTabId);
  }

	// TODO: Memoize
	// TODO: Get IDs with array index and reduce method
	const tabDetails = tabData[currentTab];
	const { employer, title, dates, works } = tabDetails;
	
	const parseMarkup = (string, openingTag) => {
		const closingTag = openingTag.split("").reverse().join("");
		return {__html: string.replaceAll(openingTag, `<span class="highlight">`).replaceAll(closingTag, `</span>`)}
	}

  return (
	<div className="tab-list">
		<div className="tab-list__tabs">
			<ul className="tab-list__labels">
				{tabData.map(({label}, index) => (
					<li
            key={index}
            className={["tab-list__label", currentTab === index ? "active" : ""].join(" ").trimEnd()}
            data-tab-id={index}
            onClick={handleSelect}
          >
						<h3>
							{label}
						</h3>
					</li>
        ))}
			</ul>
			<div className="tab-list__tabs-indicator" style={{transform: `translateY(${49 * (currentTab)}px)`}} />
		</div>

		<div className="tab-list__details">
			<header className="tab-list__header">
				<h3>
					<span className="tab-list__role">{title}</span> <span className="tab-list__employer">@ {employer}</span>
				</h3>
				<p className="tab-list__dates">{dates}</p>
			</header>
			<ul className="tab-list__work-list">
				{works.map((work) => (
					<li key={work} className="tab-list__work-list-item">
						<p dangerouslySetInnerHTML={parseMarkup(work, "_|")} />
					</li>
          ))}
			</ul>
		</div>
	</div>
  )
}

export default TabList
