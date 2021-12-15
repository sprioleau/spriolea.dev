import React from "react";
import Hero from "../Hero";
import About from "../About";
import Experience from "../Experience";
import Work from "../Work";
import Contact from "../Contact";
import Footer from "../Footer";
import Skills from "../Skills";

const Main = () => {
	return (
		<main className="main">
			<Hero />
			<About />
			<Experience />
			<Work />
			<Skills />
			<Contact />
			<Footer />
		</main>
	);
};

export default Main;
