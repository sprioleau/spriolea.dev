/* eslint-disable @next/next/no-img-element */

import { FiGithub, FiExternalLink } from "react-icons/fi"
import { HiOutlineCode } from "react-icons/hi"
import { urlFor } from "../../libs/sanity";
import PortableTextBlock from "../PortableTextBlock";

const SelectedWork = ({ projects }) => {
  return (
	<div className="selected-work">
		<ul className="selected-work__works">
			{projects.map(({ _id, mainImage, title, tags, description, links: { gitHubUrl, vsCodeUrl, deployedUrl }, emoji }) => (
				<li key={_id} className="selected-work__work">
					<div className="selected-work__image">
						<a href={deployedUrl} className="button" target="_blank" rel="noreferrer">Image goes here
							<img src={urlFor(mainImage).width(400).url()} alt={title} />
						</a>
					</div>
					<div className="selected-work__details">
						<h3 className="selected-work__title">{title}{emoji && <span className="emoji" role="img"> {emoji}</span>}</h3>
						<p className="selected-work__description">{description.map(({ _key, children, markDefs }) => (
							<PortableTextBlock key={_key} childrenContent={children} markDefs={markDefs}  />
						))}</p>
						{tags && <ul className="selected-work__tags">
							{tags.map(({ _id: tagKey, name }) => (
								<li key={tagKey} className="selected-work__tag"><p>{name}</p></li>
							))}
						</ul>}
						<div className="selected-work__icon-links">
							{gitHubUrl && <a aria-label="link" href={gitHubUrl} rel="noreferrer" className="selected-work__icon-link" target="_blank"><FiGithub /></a>}
							{vsCodeUrl && <a aria-label="link" href={vsCodeUrl} rel="noreferrer" className="selected-work__icon-link" target="_blank"><HiOutlineCode /></a>}
							{deployedUrl && <a aria-label="link" href={deployedUrl} rel="noreferrer" className="selected-work__icon-link" target="_blank"><FiExternalLink /></a>}
						</div>
					</div>
				</li>
			))}
		</ul>
	</div>
  )
}

export default SelectedWork
