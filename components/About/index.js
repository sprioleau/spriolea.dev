import Image from "next/image"
import Name from "../Name";
import technologiesList from "../../constants/technologiesList";
import PageSectionLayout from "../PageSectionLayout";

const About = () => {
  return (
		<PageSectionLayout sectionId="about" sectionTitle="About Me">
			<div className="about__main-content">
				<div className="about__bio">
					<div className="about__bio-text">
						<p>I&apos;m <Name /> and I enjoy creating things. Now I get to build on the web!</p>
						<p>I studied <span className="highlight">engineering</span> and started work in that industry following college. While working as an engineer, I was learning <span className="highlight">graphic design</span> and ran a small design business.</p>
						<p>I then had an opportunity to build on my design background and gain <span className="highlight">UX design</span> experience as part of the <span className="highlight">Web Services</span> group for an academic institution. Thankfully, this gave me an opportunity to build on my interest for making things on the web.</p>
						{/* <p>My interest in web development has continued to grow for over a decade. I started making things with free website builders back in the <span className="highlight">90&apos;s</span> then began using content-management systems like WordPress and Joomla.</p> */}
						<p>Fast-forward to today and I am a <span className="highlight">frontend web developer</span> designing and building web applications with JavaScript technologies.</p>
					</div>
					<div className="about__tech">
						<h3 className="about__tech-intro">Technologies I enjoy</h3>
						<ul className="about__tech-list">
							{technologiesList.map((technology) => (
								<li key={ technology} className="about__tech-list-item"><p>{technology}</p></li>
								))}
						</ul>
					</div>
				</div>
				<div className="about__image">
					<Image src="/images/s_prioleau_headshot.png" width="400px" height="400px" alt="San'Quan Prioleau headshot"/>
				</div>
			</div>
		</PageSectionLayout>
  )
}

export default About
