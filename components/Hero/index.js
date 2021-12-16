import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import Name from "../Name";
import ActionIndicator from "../ActionIndicator";

const Hero = () => {
  const router = useRouter();
  const iconSize = 32;

  return (
	<section className="hero section">
		<div className="container">
			<header className="hero__header">
				<p className="hero__overline"><Image src="/wave.png" height={iconSize} width={iconSize} alt="waving hand" className="wave" /><span className="hero__greeting"> Hello, my name is</span></p>
				<h1 className="hero__headline"><Name /></h1>
				<h2 className="hero__vocation">I build <span className="emoji" role="img">🛠</span> for the web.</h2>
				<p className="hero__brief">
					I&apos;m a <span className="highlight">frontend web developer</span> with an eye for good design. I&apos;ve done <span className="highlight">graphic design</span>, <span className="highlight">UX design</span> and now <span className="highlight">web development</span>. I love combining ideas to create new things.
				</p>
			</header>
			<button type="button" className="hero__cta-button button" onClick={() => router.push("#work")}>
				<span className="icon">🚧</span>See some of my work
			</button>
		</div>
		<div className="hero__view-more">
			<ActionIndicator />	
		</div>
	</section>
  )
}

export default Hero
