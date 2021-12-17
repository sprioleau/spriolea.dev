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
								{icon && <div className="skills__icon">{icon}</div>}
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

export default Skills;

export const Skills2 = () => {
	const skillsListObject = skillsList.sort((a, b) => (b.category > a.category) ? 1 : -1).reduce((skillsObject, skill) => {
		if (!skillsObject[skill.category]) {
			// eslint-disable-next-line no-param-reassign
			skillsObject[skill.category] = [skill];
		} else {
			skillsObject[skill.category].push(skill);
		}
		return skillsObject;
	}, {});

	console.log({skillsListObject})


	return (
		<section id="skills" className="skills section skills-2">
			<div className="container">
				<SectionHeader sectionTitle="Relevant Skills" />
				<div className="skills__main-content">
					<ul className="skills__categories">
						{Object.entries(skillsListObject).map(([category, skills]) => (
							<li key={category} className="skills__category">
								<h4>{category}</h4>
								<ul className="skills__list">
									{skills.sort((a, b) => (a.techName > b.techName) ? 1 : -1).map(({techName, icon}) => (
										<li key={techName} className="skills__list-item">
											{icon && <div className="skills__icon">{icon}</div>}
											<p className="skills__label">{techName}</p>
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
  )
}