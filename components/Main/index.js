import React from "react";
import Hero from "../Hero";
import About from "../About";
import Experience from "../Experience";
import Work from "../Work";
import Contact from "../Contact";
import Footer from "../Footer";
import { Skills2 } from "../Skills";
// import Skills, { Skills2 } from "../Skills";
import { FadeInWhenVisible } from "../AnimationLibrary";

const Main = () => {
	const pageSections = [
		{ label: "hero", component: <Hero />},
		{ label: "about", component: <About />},
		{ label: "experience", component: <Experience />},
		{ label: "work", component: <Work />},
		// { label: "skills", component: <Skills />},
		{ label: "skills-2", component: <Skills2 />},
		{ label: "contact", component: <Contact />},
	]

	return (
		<main className="main">
			{pageSections.map(({label, component}) => (
				<FadeInWhenVisible key={label}>
					{component}
				</FadeInWhenVisible>
			))}
			<Footer />
		</main>
	);
};

export default Main;
