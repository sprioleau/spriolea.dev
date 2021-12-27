import Image from "next/image";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import ActionIndicator from "../ActionIndicator";
import { FadeInAndUp, StaggeredReveal } from "../AnimationLibrary";
import { handleKeyDown } from "../../utils";

const Hero = () => {
  const router = useRouter();
	const iconSize = 32;
	
	const handleAdvanceSection = () => router.push("#about");
	
  return (
	<section className="hero section">
		<div className="container">
			<header className="hero__header">
				<m.p
					className="hero__overline"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<Image src="/images/wave.png" height={iconSize} width={iconSize} alt="waving hand" className="wave" />
					<span className="hero__greeting"> Hello, my name is</span>
				</m.p>
				{/* <h1 className="hero__headline"><Name />.</h1> */}
				<StaggeredReveal
					text="San'Quan Prioleau."
					speed={4}
					wrapperClass="hero__headline"
					delay={0.5}
					tag="h1"
				/>
				{/* <h2 className="hero__vocation">I design and build for the web.</h2> */}
				<StaggeredReveal
					text="I design and build for the web."
					speed={4}
					wrapperClass="hero__vocation"
					delay={0.5}
					tag="h2"
					subtitle
				/>
				<FadeInAndUp delay={1.5} distanct={50}>
					<p className="hero__brief">
						I&apos;m a <em>frontend web developer</em> with an eye for good design. I&apos;ve done <em>engineering</em>, <em>user experience (UX)</em> and <em>graphic gesign</em> and now <em>web development</em>. I love combining ideas to create new things.
					</p>
				</FadeInAndUp>
				</header>
				<FadeInAndUp delay={1.75}>
					<button type="button" className="hero__cta-button button" onClick={() => router.push("#work")}>
						<span className="icon">🚧</span>See some of my work
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
