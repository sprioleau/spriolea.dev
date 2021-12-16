/* eslint-disable @next/next/no-img-element */
import React from "react"
import {FiArrowDown} from "react-icons/fi"

const DataTable = ({ data: { sectionTitle, employers } }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  }

  return (
	<div className={["data-table", expanded ? "expanded" : ""].join(" ").trimEnd()}>
		<header className="data-table__header">
			<div className="data-table__section-title" role="button" tabIndex={0} onClick={handleExpand}>
				<h3 className="a">{sectionTitle}</h3>
				<span className="data-table__expand-collapse icon"><FiArrowDown /></span>
			</div>
		</header>
		{expanded && employers.map(({name, roles, employerLogo}) => (
			<section key={name} className="data-table__employer-wrapper">
				<div className="data-table__employer-name">
					<span className="data-table__employer-logo">{employerLogo}</span>
					<h4>{name}</h4>
				</div>
				<ul className="data-table__list">
					{roles.map(({id, works, dates, title, location}) => (
						<li key={id} className="data-table__list-item">
							<header className="data-table__list-header">
								<h4 className="data-table__title">{title}, <span className="data-table__location">{location}</span></h4>
								<p className="data-table__dates">{dates}</p>
							</header>
							<ul className="data-table__work-list">
								{works.map((work) => (
									<li key={work} className="data-table__work">
										<p>{work}</p>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>
    ))}
	</div>
  )
}

export default DataTable;
