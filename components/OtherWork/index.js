
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { HiOutlineCode } from "react-icons/hi"
import { formatIsoDate, sortByYearAndTitle } from "../../utils";
import sortAlphaByKey from "../../utils/sortAlphaByKey";

const OtherWork = ({ projects }) => {
	const renderLinks = (links) => {
		return Object.entries(links).map(([key, url]) => {
			if (!url) return null;

			let icon = null;

			if (key.includes("gitHub")) icon = <FiGithub />;
			if (key.includes("vsCode")) icon = <HiOutlineCode />;
			if (key.includes("deployed")) icon = <FiExternalLink />;

			return (
				<li key={key} className="other-work__link">
					<a aria-label="link" href={url} rel="noreferrer" className="other-work__icon-link" target="_blank">{icon}</a>
				</li>
				);
		});
	}

  return (
	<div className="other-work">
		<h3 className="other-work__section-title">Other Work</h3>
		<table>
			<thead>
				<tr className="other-work__header-row">
					<th>Year</th>
					<th>Project</th>
					<th>Built for</th>
					<th>Built with</th>
					<th>Links</th>
				</tr>
			</thead>
			<tbody>
				{projects.sort(sortByYearAndTitle).map(({ yearBuilt, title, builtFor, builtWith, links }) => (
					<tr key={title} className="other-work__row">
						<td className="other-work__year">{formatIsoDate(yearBuilt, "YYYY")}</td>
						<td>{title}</td>
						<td>{builtFor ? builtFor.name : <span>&mdash;</span>}</td>
						<td>{builtWith.sort((a, b) => sortAlphaByKey(a, b, "name")).map(({ name }) => name).join(", ")}</td>
						<td>
							<ul className="other-work__links">
								{renderLinks(links)}
							</ul>
						</td>
					</tr>
					))}
			</tbody>
		</table>
	</div>
  )
}

export default OtherWork
