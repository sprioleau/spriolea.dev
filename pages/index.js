import React from "react"
import Head from "next/head";
import { InfoRails, Nav, Main, Footer } from "../components";
import getData from "../libs/sanity";
import CONFIG from "../config";
import apiStaticData from "../data/apiStaticData";

const Home = ({ data, visits }) => {
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
			<Footer content={footer} visits={visits} />
			<div className="accent-line" />
		</div>
	);
};

export default Home;

export const getStaticProps = async (context) => {
	const isDevelopment = process.env.NODE_ENV === "development";
	
	const fetchData = () => {
		if (isDevelopment && !CONFIG.USE_API) {
			return { data: apiStaticData };
		} else {
			return getData()
		}
	}
	
	const fetchVisits = async () => {
		const response = await fetch(process.env.INCREMENT_VISITS_WORKER_URL);
		const visits = await response.json();
		return visits;
	}

	const { data } = await fetchData();
	const { visits } = await fetchVisits();

  return {
		props: { 
			data,
			visits
		},
  }
}

