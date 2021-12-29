/* eslint-disable no-param-reassign */

import { motion as m } from "framer-motion"
import { sortAlphaByKey } from "../../utils"
import PageSectionLayout from "../PageSectionLayout"
import icons from "../Icons";

const Skills = ({ skills, delay = 0.25 }) => {
	const skillsListObject = skills.map((skill) => ({ ...skill, category: skill.category[0] })).sort((a, b) => (b.category > a.category) ? 1 : -1).reduce((skillsObject, skill) => {
		if (!skillsObject[skill.category]) {
			skillsObject[skill.category] = [skill];
		} else {
			skillsObject[skill.category].push(skill);
		}
		return skillsObject;
	}, {});
			
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
		<PageSectionLayout sectionId="skills" sectionTitle="Relevant Skills">
			<div className="skills__main-content">
				<m.ul
					className="skills__categories"
					initial="initial"
					animate="animate"
				>
					{Object.entries(skillsListObject).map(([category, skillsData], index) => (
						<m.li
							key={category}
							className="skills__category"
							variants={variants}
							transition={{ duration: 0.5, delay: delay + index * 0.15 }}
						>
							<h3 className="skills__category-name">{category}</h3>
							<m.ul
								className="skills__list"
								initial="initial"
								animate="animate"
							>
								{skillsData.sort((a, b) => sortAlphaByKey(a, b, "techName")).map(({ techName, iconKey }) => (
									<m.li
										key={techName}
										className="skills__list-item"
										variants={variants}
										transition={{ duration: 0.5, delay: delay + index * 0.15 }}
									>
										{iconKey && <div className="skills__icon">{icons[iconKey]}</div>}
										<p className="skills__label">{techName}</p>
									</m.li>
								))}
							</m.ul>
						</m.li>
					))}
				</m.ul>
			</div>
		</PageSectionLayout>
  )
}

export default Skills;