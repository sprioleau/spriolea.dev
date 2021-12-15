import React from "react"
import SectionHeader from "../SectionHeader"

const Skills = () => {
	const skillsList = [
		{
			techName: "Adobe Illustrator",
			experienceYears: 10, 
		},
		{
			techName: "Adobe Photoshop",
			experienceYears: 10, 
		},
		{
			techName: "React",
			experienceYears: 3, 
		},
		{
			techName: "Next.js",
			experienceYears: 2, 
		},
	]

  return (
	<section id="skills" className="skills section">
		<div className="container">
			<SectionHeader sectionTitle="Skills" />
			<div className="skills__main-content">
				<ul className="skills__list">
					{skillsList.map(({techName, experienceYears}) => (
						<li key={techName} className="skills__list-item">
							<p className="skills__label">{ techName}</p>
							<p className="skills__label">{experienceYears}yrs</p>
						</li>
						))}
				</ul>
			</div>
		</div>
	</section>
  )
}

export default Skills
