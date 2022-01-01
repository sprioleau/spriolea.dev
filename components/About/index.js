/* eslint-disable @next/next/no-img-element */
import { urlFor } from "../../libs/sanity";
import PageSectionLayout from "../PageSectionLayout";
import PortableTextBlock from "../PortableTextBlock";

const About = ({ content }) => {
	const { body, mainImage } = content[0];

  return (
		<PageSectionLayout sectionId="about" sectionTitle="About Me">
			<div className="about__bio">
				<div className="about__bio-text">
					{body.map(({ _key, children, markDefs }) => (
						<p key={_key}><PortableTextBlock childrenContent={children} markDefs={markDefs}/></p>
					))}
				</div>
				{/* <div className="about__tech">
					<h3 className="about__tech-intro">Technologies I enjoy</h3>
					<ul className="about__tech-list">
						{technologiesList.map((technology) => (
							<li key={ technology} className="about__tech-list-item"><p>{technology}</p></li>
							))}
					</ul>
				</div> */}
			</div>
			<div className="about__image">
				<img src={urlFor(mainImage).width(400).url()} alt="San'Quan Prioleau headshot"/>
			</div>
		</PageSectionLayout>
  )
}

export default About
