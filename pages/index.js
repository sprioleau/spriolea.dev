import React from "react"
import Head from "next/head";
import { InfoRails, Nav, Main, Footer } from "../components";
import { fetchLikes, fetchPageViews } from "../libs/cloudflare";
import { fetchStaticSiteData } from "../libs/sanity";
import { fetchContributions } from "../libs/github";

const Home = ({ data, footerData }) => {
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
			<Footer content={footer} footerData={footerData} />
			<div className="accent-line" />
		</div>
	);
};

export default Home;

export const getStaticProps = async (context) => {
	const { data } = await fetchStaticSiteData();
	const { likes } = await fetchLikes();
	const { pageViews } = await fetchPageViews();
	const { contributionsInLastYear } = await fetchContributions();

  return {
		props: { 
			data,
			footerData: {
				likes,
				pageViews,
				contributionsInLastYear
			}
		},
  }
}

