import React from "react"
import { motion as m , AnimatePresence } from "framer-motion"
import { FiArrowDown } from "react-icons/fi"
import { FadeInAndUp } from "../AnimationLibrary";
import { handleKeyDown } from "../../utils";

const DataTable = ({ data: { sectionTitle, employers } }) => {
  const [expanded, setExpanded] = React.useState(false);

	const handleExpand = () => setExpanded(!expanded);
	
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
	
	return (
		<div className={["data-table", expanded ? "expanded" : ""].join(" ").trimEnd()}>
				<header className="data-table__header">
					<div
						className="data-table__section-title"
						role="button"
						tabIndex={0}
						onClick={handleExpand}
						onKeyDown={(e) => handleKeyDown(e, handleExpand)}
					>
					<h3 className="a section-subheading">{sectionTitle}</h3>
						<span className="data-table__expand-collapse icon"><FiArrowDown /></span>
					</div>
			</header>
			<AnimatePresence>
				{expanded && employers.map(({ name, roles, employerLogo }) => (
					<FadeInAndUp  key={name} reverseOnExit>
						<section className="data-table__employer-wrapper">
							<div className="data-table__employer-name">
								<span className="data-table__employer-logo">{employerLogo}</span>
								<h4>{name}</h4>
							</div>
							<m.ul
								className="data-table__list"
								initial="initial"
								animate="animate"
								transition={{
									staggerChildren: 0.15,
								}}
							>
								{roles.map(({ id, works, dates, title, location }) => (
									<m.li
										key={id}
										className="data-table__list-item"
										variants={variants}
									>
										<header className="data-table__list-header">
											<h4 className="data-table__title">{title}, <span className="data-table__location">{location}</span></h4>
											<p className="data-table__dates">{dates}</p>
										</header>
										<ul className="data-table__work-list" >
											{works.map((work) => (
												<li key={work} className="data-table__work">
													<p>{work}</p>
												</li>
											))}
										</ul>
									</m.li>
								))}
							</m.ul>
						</section>
					</FadeInAndUp>
				))}
			</AnimatePresence>
		</div>
  )
}

export default DataTable;
