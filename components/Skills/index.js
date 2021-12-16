import React from "react"
import { skillsList } from "../../constants"
import SectionHeader from "../SectionHeader"

const Skills = () => {
  return (
	<section id="skills" className="skills section">
		<div className="container">
			<SectionHeader sectionTitle="Relevant Skills" />
			<h3 className="skills__subtitle">Years of Experience</h3>
			<div className="skills__main-content">
				<ul className="skills__list">
					{skillsList.map(({techName, experienceYears, icon}) => (
						<li key={techName} className="skills__list-item">
							{icon && <div className="skills__icon">
								{icon}
							</div>}
							<div className="skills__detail">
								<p className="skills__label">{techName}</p>
								<p className="skills__experience">{experienceYears} <span className="skills__symbol">{Array(experienceYears).fill("✶")}</span></p>
							</div>
						</li>
						))}
				</ul>
			</div>
		</div>
	</section>
  )
}

export default Skills