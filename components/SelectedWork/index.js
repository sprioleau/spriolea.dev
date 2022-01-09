/* eslint-disable @next/next/no-img-element */

import { FiGithub, FiExternalLink } from "react-icons/fi"
import { HiOutlineCode } from "react-icons/hi"
import { urlFor } from "../../libs/sanity";
import { FadeInWhenVisible } from "../AnimationLibrary";
import PortableTextBlock from "../PortableTextBlock";

const SelectedWork = ({ projects }) => {
  return (
	<div className="selected-work">
		<ul className="selected-work__works">
			{projects.map(({ _id, mainImage, title, tags, description, links: { gitHubUrl, vsCodeUrl, deployedUrl }, emoji }) => (
					<FadeInWhenVisible tag="li" key={_id} className="selected-work__work" useDefaultStyles={false}>
						<div className="selected-work__image">
							<a href={deployedUrl} className="button selected-work__link" target="_blank" rel="noreferrer">
								<img src={urlFor(mainImage).width(800).url()} alt={title} />
							</a>
						</div>
						<div className="selected-work__details">
							<h3 className="selected-work__title">{title}{emoji && <span className="emoji" role="img"> {emoji}</span>}</h3>
							<p className="selected-work__description">{description.map(({ _key, children, markDefs }) => (
								<PortableTextBlock key={_key} childrenContent={children} markDefs={markDefs}  />
							))}</p>
							<div className="selected-work__meta">
								{tags && <ul className="selected-work__tags">
									{tags.map(({ _id: tagKey, name }) => (
										<li key={tagKey} className="selected-work__tag"><p>{name}</p></li>
									))}
								</ul>}
								{(gitHubUrl || vsCodeUrl || deployedUrl) && (
									<ul className="selected-work__icon-links">
										{gitHubUrl && <li><a aria-label="link" href={gitHubUrl} rel="noreferrer" className="selected-work__icon-link" target="_blank"><FiGithub /></a></li>}
										{vsCodeUrl && <li><a aria-label="link" href={vsCodeUrl} rel="noreferrer" className="selected-work__icon-link" target="_blank"><HiOutlineCode /></a></li>}
										{deployedUrl && <li><a aria-label="link" href={deployedUrl} rel="noreferrer" className="selected-work__icon-link" target="_blank"><FiExternalLink /></a></li>}
									</ul>
								)}
							</div>
						</div>
					</FadeInWhenVisible>
			))}
		</ul>
	</div>
  )
}

export default SelectedWork
