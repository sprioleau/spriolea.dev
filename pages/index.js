import React from "react"
import Head from "next/head";
import axios from "axios";
import { InfoRails, Nav, Main, Footer } from "../components";
import getData from "../libs/sanity";
import CONFIG from "../config";

const Home = ({ data }) => {
	const { navLinks, footer, siteDetails } = data;
	const [navExpanded, setNavExpanded] = React.useState(false);

	return (
		<div className={["app", navExpanded ? "nav-expanded" : ""].join(" ").trim()}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>San&apos;Quan Prioleau</title>
			</Head>
			<Nav navLinks={navLinks} navExpanded={navExpanded} setNavExpanded={setNavExpanded} />
			<InfoRails siteDetails={siteDetails} />
			<Main data={data} />
			<Footer content={footer} />
			<div className="accent-line" />
		</div>
	);
};

export default Home;

export const getStaticProps = async (context) => {
	const isDevelopment = process.env.NODE_ENV === "development";
	
	const fetchData = () => {
		if (isDevelopment && !CONFIG.USE_API) {
			return axios.get("http://localhost:3000/data/apiSampleData.json");
		} else {
			return getData()
		}
	}

	const { data } = await fetchData();

  return {
		props: { 
			data,
		},
  }
}

