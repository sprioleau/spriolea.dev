import Image from "next/image";
import { useRouter } from "next/router";
import ActionIndicator from "../ActionIndicator";
import { FadeInAndUp, StaggeredReveal } from "../AnimationLibrary";
import { handleKeyDown } from "../../utils";
import PortableTextBlock from "../PortableTextBlock";

const Hero = ({ content }) => {
	const router = useRouter();
	const iconSize = 32;
	const { brief, overline, heading, subHeading, cta, advanceToSectionSlug } = content[0];
	
	const handleAdvanceSection = () => router.push(`#${advanceToSectionSlug}`);

	const sectionDelay = 1.1;
	
  return (
	<section className="hero section">
		<div className="container">
			<header className="hero__header">
				<FadeInAndUp
					className="hero__overline"
					tag="p"
					useDefaultStyles={false}
					delay={sectionDelay}
				>
					<Image src="/images/wave.png" height={iconSize} width={iconSize} alt="waving hand" className="wave" />
					<span className="hero__greeting"> {overline}</span>
				</FadeInAndUp>
					{/* <h1 className="hero__headline"><Name />.</h1> */}
					<StaggeredReveal
						text={heading}
						speed={4}
						wrapperClass="hero__headline"
						delay={sectionDelay + 0.5}
						tag="h1"
					/>
					{/* <h2 className="hero__vocation">I design and build for the web.</h2> */}
					<StaggeredReveal
						text={subHeading}
						speed={4}
						wrapperClass="hero__vocation"
						delay={sectionDelay + 0.5}
						tag="h2"
						subtitle
					/>
					<FadeInAndUp delay={sectionDelay + 1.5} distanct={50}>
						<p className="hero__brief">
							<PortableTextBlock childrenContent={brief[0].children} markDefs={brief[0].markDefs} />
						</p>
				</FadeInAndUp>
				</header>
				<FadeInAndUp delay={sectionDelay + 1.75}>
					<button type="button" className="hero__cta-button button" onClick={() => router.push(`#${cta.linkTarget}`)}>
						{cta.label}
					</button>
				</FadeInAndUp>
			</div>
			<div
				className="hero__view-more"
				tabIndex={0}
				role="button"
				onClick={handleAdvanceSection}
				onKeyDown={(e) => handleKeyDown(e, handleAdvanceSection)}
			>
				<ActionIndicator size="5rem" variant="big" />	
			</div>
	</section>
  )
}

export default Hero
